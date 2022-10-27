import './GoldContainer.scss';

function GoldContainer(props) {
    const classes = props.className ? 'goldContainer rounded-3 ' + props.className : 'goldContainer'
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default GoldContainer;