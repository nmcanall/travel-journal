import globe from "../images/globe.png";

function Header() {
    return (
        <header>
            <img src={globe} alt="globe" className="header--globe"/>
            <h1 className="header--title">my travel journal</h1>
        </header>
    )
}

export default Header;