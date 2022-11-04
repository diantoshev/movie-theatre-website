import './Carousel.scss';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../assets/carousel-1.jpg';
import carousel2 from '../../assets/carousel-2.jpg';
import carousel3 from '../../assets/carousel-3.jpg';
import carousel4 from '../../assets/carousel-4.jpg';
import carousel5 from '../../assets/carousel-5.jpg';

function HomeCarousel() {
    return (
        <div className='carousel__container w-100'>
            <Carousel className='carousel-home pb-5 w-100'>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="DC Leage of Super Pets"
                    />
                    <Carousel.Caption>
                        <h3 className='text-goldMid show-on-mobile'>DC Leage of Super Pets</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Black Panther: Wakanda Forever"
                    />

                    <Carousel.Caption>
                        <h3 className='text-goldMid show-on-mobile'>Black Panther: Wakanda Forever</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Three Thousand Years of Longing"
                    />

                    <Carousel.Caption>
                        <h3 className='text-goldMid show-on-mobile'>Three Thousand Years of Longing</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-100"
                        src={carousel4}
                        alt="Avatar: The Way of Water"
                    />

                    <Carousel.Caption>
                        <h3 className='text-goldMid show-on-mobile'>Avatar: The Way of Water</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-100 h-100"
                        src={carousel5}
                        alt="Halloween Ends"
                    />

                    <Carousel.Caption>
                        <h3 className='text-goldMid show-on-mobile'>Halloween Ends</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

export default HomeCarousel;