import Carousel from "react-bootstrap/Carousel";

function MyModalCarousel({closeModal, otherPics, specificLocation}) {

    return (
        <div className="modal--background">
            <div className="modal--container">
                <Carousel className="modal--carousel">
                    {otherPics.map(pic => {
                        return <Carousel.Item className="modal--slide" key={pic.id}>
                            <img
                                className="d-block modal--img"
                                src={`./images/${pic.otherPic}`}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{specificLocation}</h3>
                                <p>{pic.details}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    })}
                </Carousel>
                <button className="modal--close-btn" onClick={() => closeModal(false)}>X</button>
            </div>
        </div>
    )
}

export default MyModalCarousel;