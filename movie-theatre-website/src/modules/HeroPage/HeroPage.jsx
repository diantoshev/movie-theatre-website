import videoBg from "../../assets/hero-bg.mp4";
import './HeroPage.scss';

export default function HeroPage(props) {
    return (<div className="video__container">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted></video>
        <div className="content">
            <h1>Some Text</h1>
        </div>
    </div>)
}