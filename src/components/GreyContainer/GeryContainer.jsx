import './GreyContainer.scss';

function GreyContainer(props) {
    const classes = props.className ? 'greyContainer rounded-3 ' + props.className : 'greyContainer';
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default GreyContainer;