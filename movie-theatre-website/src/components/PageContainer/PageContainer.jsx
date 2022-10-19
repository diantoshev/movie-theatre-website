import './PageContainer.scss';
import backdrop from '../../assets/backdrop-1.jpg';

export default function PageContainer(props) {

    const classes = 'pageContainer';
    return <div className={classes}>
        <div className='offsetNav'>{props.children}</div>
        <img src={backdrop} alt="backdrop" />
    </div>

};
