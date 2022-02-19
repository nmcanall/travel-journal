import MyModalCarousel from "./MyModalCarousel";
import {useState} from "react";

function TravelCard(props) {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <div className="travel-card">
                <div className="card--img-container">
                    <button className="card--modal-btn" onClick={() => setOpenModal(true)} >
                        <img src={`${process.env.PUBLIC_URL}/images/${props.img.tripPic}`} alt="highlight of trip" className="card--trip-pic"/>
                    </button>
                </div>
                {openModal && <MyModalCarousel 
                    closeModal={setOpenModal} 
                    otherPics={props.img.otherPics} 
                    specificLocation={props.location.specificLocation}
                />}
                <div className="card--details-container">
                    <div className="card--location-items">
                        <i className="fas fa-map-marker-alt card--marker"></i>
                        <h4 className="card--broad-location">{props.location.broadLocation}</h4>
                        <a href={props.location.googleMapLink} className="card--google-maps" target="_blank" rel="noreferrer noopener">View on Google Maps</a>
                    </div>
                    <div className="card--trip-items">
                        <h3 className="card--specific-location">{props.location.specificLocation}</h3>
                        <p className="card--dates">{props.dates.startDate} 
                            {props.dates.endDate !== "" && ` - ${props.dates.endDate}`}
                        </p>
                        <p className="card--description">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelCard;