import './RedContainer.scss';

function RedContainer(props) {
    return (
        <div className='bg-redAccent redContainer'>
            {props.children}
        </div>
    );
}

export default RedContainer;