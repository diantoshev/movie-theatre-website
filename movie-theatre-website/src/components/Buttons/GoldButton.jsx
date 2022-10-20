import Button from 'react-bootstrap/Button';

function GoldButton(props) {
    const classes = props.className;
    return (
        <Button className={`btn rounded-3 text-lg-center ${classes}`} size='lg' variant="outline-goldMid">
            {props.children}
        </Button>
    );
}

export default GoldButton;