import './GoldContainer.scss';

function GoldContainer(props) {
    return (
        <div className='bg-goldDark goldContainer'>
            {props.children}
        </div>
    );
}

export default GoldContainer;