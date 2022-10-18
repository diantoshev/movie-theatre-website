import './PageContainer.scss';
import backdrop from '../../../assets/backdrop.jpg';

export default function PageContainer(props) {

    const classes = 'pageContainer ' + props.className;
    return <div className={classes}>
        <img src={backdrop} alt="backdrop" />
        {props.children}
    </div>

};
