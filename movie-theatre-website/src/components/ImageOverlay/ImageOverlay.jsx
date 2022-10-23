import GoldButton from '../Buttons/GoldButton';
import { Link } from 'react-router-dom';
import './ImageOverlay.scss';

function ImageOverlay(props) {
    return (
        <div className='poster_container'>
            {props.children}
            <div className='poster_overlay'>
                {props.overlayBtnNavText ?
                    <div className={props.overlayBtnActionText ? 'overlay_btn1' : 'overlay_btn'}>
                        <Link to={props.overlayBtnNavLink}>
                            <GoldButton> {props.overlayBtnNavIcon} {props.overlayBtnNavText}</GoldButton></Link>
                    </div> : ''}
                {props.overlayBtnActionText ?
                    <div className={props.overlayBtnNavText ? 'overlay_btn2' : 'overlay_btn'}>
                        <GoldButton>{props.overlayBtnActionIcon}{props.overlayBtnActionText}</GoldButton>
                    </div> : ''
                }
            </div>
        </div>
    );
}

export default ImageOverlay;