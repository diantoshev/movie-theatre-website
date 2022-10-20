import './GoldContainer.scss';

function GoldContainer(props) {
    const classes = props.className ? 'bg-goldDark goldContainer ' + props.className : 'bg-goldDark goldContainer'
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default GoldContainer;