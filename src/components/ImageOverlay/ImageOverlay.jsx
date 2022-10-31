import GoldButton from '../Buttons/GoldButton';
import { Link } from 'react-router-dom';
import './ImageOverlay.scss';
import { useDispatch } from 'react-redux';
import { updateTheatre } from '../../store/ScreeningSlice';

function ImageOverlay(props) {
    const dispatch = useDispatch();

    // Updates theatre id and name in the screeningSlice, if navigated to program from theatres page:
    const handleClick = () => {
        const theatreName = props.theatreName;
        const theatreId = props.id;
        dispatch(updateTheatre({
            theatreName: theatreName,
            theatreId: theatreId
        }))
    }

    return (
        <div className='poster_container'>
            {props.children}
            <div className='poster_overlay'>
                {props.overlayBtnNavText ?
                    <div className={props.overlayBtnActionText ? 'overlay_btn1' : 'overlay_btn'}>
                        <Link
                            onClick={handleClick}
                            to={props.overlayBtnNavLink}>
                            <GoldButton
                            > {props.overlayBtnNavIcon} {props.overlayBtnNavText}</GoldButton></Link>
                    </div> : ''}
                {props.overlayBtnActionText ?
                    <div className={props.overlayBtnNavText ? 'overlay_btn2' : 'overlay_btn'}>
                        <GoldButton >{props.overlayBtnActionIcon}{props.overlayBtnActionText}</GoldButton>
                    </div> : ''
                }
            </div>
        </div>
    );
}

export default ImageOverlay;