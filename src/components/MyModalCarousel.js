import Carousel from "react-bootstrap/Carousel";

function MyModalCarousel({closeModal}) {
    return (
        <div className="modal--background">
            <div className="modal--container">
                <Carousel className="modal--carousel">
                    <Carousel.Item className="modal--slide">
                        <img
                            className="d-block modal--img-portrait"
                            src="../images/sedona.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="modal--slide">
                        <img
                            className="d-block modal--img-landscape"
                            src="../images/white-sands.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="modal--slide">
                        <img
                            className="d-block modal--img-landscape"
                            src="../images/pine-valley.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <button className="modal--close-btn" onClick={() => closeModal(false)}>X</button>
            </div>
        </div>
    )
}

export default MyModalCarousel;