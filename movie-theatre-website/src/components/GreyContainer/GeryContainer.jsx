import './GreyContainer.scss';

function GreyContainer(props) {
    const classes = props.className ? 'bg-greyDark greyContainer ' + props.className : 'bg-greyDark greyContainer';
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default GreyContainer;