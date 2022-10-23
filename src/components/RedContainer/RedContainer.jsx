import './RedContainer.scss';

function RedContainer(props) {
    const classes = props.className ? 'redContainer ' + props.className : 'redContainer';
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default RedContainer;