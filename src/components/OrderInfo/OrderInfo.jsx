import GreyContainer from '../GreyContainer/GeryContainer';
import './OrderInfo.scss';
import Tilt from 'react-tilt'
import { useSelector } from 'react-redux';


function OrderInfo() {

    const selectedProgram = useSelector(state => state.programEntries);
    console.log(selectedProgram);

    return (
        <GreyContainer className=" orderInfo__container container-fluid p-4 d-flex flex-wrap rounded-2">
            <div className="row orderInfo_sectionContainer">
                <div className='col-sm'>
                    <div className="d-flex gap-1 flex-column justify-content-center align-items-center titlePoster__container col">
                        <h3 className="movieTitle mb-3">{'t'}</h3>
                        <Tilt className="Tilt" options={{ max: 25, scale: 1.1 }}>
                            <img src={'t'} alt={'t'}></img>
                        </Tilt>
                    </div>
                </div>
                <div className='col-lg orderInfo__container'>
                    <p><strong>Cinema: </strong>{'t'}</p>
                    <p><strong>Date: </strong>{'t'}</p>
                    <p><strong>Time of screening: </strong>{'t'}</p>
                    <p><strong>Seats: </strong> {'t'}</p>
                    <p><strong>Current Total: </strong> {'t'}</p>
                </div>
            </div>
        </GreyContainer>
    );
}

export default OrderInfo;