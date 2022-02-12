function TravelCard() {
    return (
        <div className="card">
            <img src={`./images/sedona.jpg`} alt="highlight of trip" className="card--trip-pic"/>
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
    )
}

export default TravelCard;