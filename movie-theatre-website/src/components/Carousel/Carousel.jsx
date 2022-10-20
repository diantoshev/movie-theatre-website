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
                        <h3>DC Leage of Super Pets</h3>
                        <p>When the Justice League are captured by Lex Luthor, Superman's dog, Krypto, forms a team of shelter-pets who were given super-powers...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Black Panther: Wakanda Forever"
                    />

                    <Carousel.Caption>
                        <h3>Black Panther: Wakanda Forever</h3>
                        <p>
                            The nation of Wakanda is pitted against intervening world powers as they mourn the loss of their king T'Challa...
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Three Thousand Years of Longing"
                    />

                    <Carousel.Caption>
                        <h3>Three Thousand Years of Longing</h3>
                        <p>
                            A lonely scholar, on a trip to Istanbul, discovers a Djinn who offers her three wishes in exchange for his freedom...
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-100"
                        src={carousel4}
                        alt="Avatar: The Way of Water"
                    />

                    <Carousel.Caption>
                        <h3>Avatar: The Way of Water</h3>
                        <p>
                            Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their planet.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-100"
                        src={carousel5}
                        alt="Halloween Ends"
                    />

                    <Carousel.Caption>
                        <h3>Halloween Ends</h3>
                        <p>
                            The saga of Michael Myers and Laurie Strode comes to a spine-chilling climax in this final installment of this trilogy.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

export default HomeCarousel;