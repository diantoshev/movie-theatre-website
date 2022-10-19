import videoBg from "../../assets/hero-bg.mp4";
import './HeroPage.scss';
import brandLogo from '../../assets/logo2_red_medium-2.png';
import { BsChevronCompactDown } from 'react-icons/bs';
import { Link } from "react-router-dom";

export default function HeroPage(props) {
    return (
        <>
            <div className="overlay">
                <div>
                    <img src={brandLogo} alt="Logo" />
                    <h1 className="text-goldMid slogan">Bringing Hollywood to town...</h1>
                    <Link to='/home' className="text-goldMid w-100"><BsChevronCompactDown /></Link>
                </div>

            </div>
            <div className="video__container">
                <video src={videoBg} autoPlay loop muted></video>
                <div className="content">
                </div>
            </div>
        </>
    )
}