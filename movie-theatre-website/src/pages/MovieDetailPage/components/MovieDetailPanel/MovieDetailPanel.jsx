import GoldContainer from "../../../../components/GoldContainer/GoldContainer";
import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import SelectScreeningForm from "../SelectScreeningForm/SelectScreeningForm";
import './MovieDetailPanel.scss';

function MovieDetailPanel() {
    return (
        <GoldContainer className='container-xxl py-3 px-5 rounded-2'>
            <GreyContainer className='detailMovie__container my-3'>
                <div className="container row d-flex flex-wrap moviedetail__container p-4">
                    <div className="d-flex gap-1 flex-column justify-content-center align-items-center titlePoster__container col">
                        <h3 className="movieTitle">Wierd Al Yankovic</h3>
                        <img src='https://m.media-amazon.com/images/M/MV5BODZmNThjMDItODE2Yy00NDNmLThiODEtZGNmZGE3MTdmMjMwXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg' alt='Movie Title'></img>
                    </div>
                    <div className="movieContent col-md-6 pt-5 text-goldPrimary">
                        <p><strong>Year:</strong> 2022</p>
                        <p><strong>Cast:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque!</p>
                        <p className="hideOnMobile"><strong>Synposis:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem?</p>
                    </div>
                    <SelectScreeningForm />
                </div>
            </GreyContainer>
        </GoldContainer>
    );
}

export default MovieDetailPanel;