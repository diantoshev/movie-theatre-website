import './PageContainer.scss';
import backdrop from '../../assets/backdrop-1.jpg';

export default function PageContainer(props) {

    const classes = 'pageContainer';
    return <div className={classes}>
        <div className='offsetNav bg-darkMid'></div>
        <div className='pageContent w-100'>{props.children}</div>
        <img src={backdrop} alt="backdrop" className='backdrop-img' />
    </div>

};
