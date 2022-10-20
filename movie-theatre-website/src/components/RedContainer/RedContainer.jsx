import './RedContainer.scss';

function RedContainer(props) {
    const classes = props.className ? 'bg-redAccent redContainer ' + props.className : 'bg-redAccent redContainer';
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default RedContainer;