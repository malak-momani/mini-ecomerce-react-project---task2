import header from "../../assets/images/header.svg";
import { Button } from "react-bootstrap";
import "./Header.css";

const Header = () => {
    return (
        <div className="hero-wrapper">
            <img src={header} alt="header" className="hero-image" />

            <div className="hero-content">
                <h1>Everything You Need, All in One Place</h1>
                <p>Discover a wide range of quality products for your home, beauty, wellness, and everyday lifestyle.</p>

                <Button
                    variant="warning"
                    size="lg"
                    onClick={() => {
                        const section = document.getElementById("products-section");
                        section?.scrollIntoView({ behavior: "smooth" });
                    }}>
                    Shop Now
                </Button>
            </div>
        </div>
    );
};

export default Header;
