import './GreyContainer.scss';

function GreyContainer(props) {
    return (
        <div className='bg-greyDark greyContainer'>
            {props.children}
        </div>
    );
}

export default GreyContainer;