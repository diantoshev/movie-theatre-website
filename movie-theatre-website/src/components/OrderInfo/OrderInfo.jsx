import GreyContainer from '../GreyContainer/GeryContainer';
import './OrderInfo.scss';


function OrderInfo() {

    return (
        <GreyContainer className=" orderInfo__container container-fluid p-4 d-flex flex-wrap rounded-2">
            <div className="row orderInfo_sectionContainer">
                <div className='col-sm'>
                    <div className="d-flex gap-1 flex-column justify-content-center align-items-center titlePoster__container col">
                        <h3 className="movieTitle">Wierd Al Yankovic</h3>
                        <img src='https://m.media-amazon.com/images/M/MV5BODZmNThjMDItODE2Yy00NDNmLThiODEtZGNmZGE3MTdmMjMwXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg' alt='Movie Title'></img>
                    </div>
                </div>
                <div className='col-lg orderInfo__container'>
                    <p><strong>Cinema:</strong> Mladost 4</p>
                    <p><strong>Date:</strong> Wednesday, 20th of Novemebr</p>
                    <p><strong>Time of screening:</strong> 21:00h</p>
                    <p><strong>Seats:</strong> 4, 5, 6</p>
                    <p><strong>Current Total:</strong> 43 BGN</p>
                </div>
            </div>
        </GreyContainer>
    );
}

export default OrderInfo;