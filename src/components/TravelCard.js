import MyModalCarousel from "./MyModalCarousel";
import {useState} from "react";

function TravelCard() {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <div className="travel-card">
                <button className="card--modal-btn" onClick={() => setOpenModal(true)} >
                    <img src={`./images/sedona.jpg`} alt="highlight of trip" className="card--trip-pic"/>
                </button>
                {openModal && <MyModalCarousel closeModal={setOpenModal}/>}
                <div>
                    <div className="card--location-items">
                        <i className="fas fa-map-marker-alt card--marker"></i>
                        <h4 className="card--broad-location">Arizona</h4>
                        <a href="https://maps.google.com" className="card--google-maps">View on Google Maps</a>
                    </div>
                    <div className="card--trip-items">
                        <h3 className="card--specific-location">Sedona</h3>
                        <p className="card--dates">1 Jan, 2021 - 4 Jan, 2021</p>
                        <p className="card--description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo necessitatibus culpa eveniet repellendus, ut sint itaque quae! Recusandae incidunt natus quaerat odit quae beatae sint optio blanditiis maiores dolores. Quo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelCard;