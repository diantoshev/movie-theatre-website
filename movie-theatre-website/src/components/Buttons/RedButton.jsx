import Button from 'react-bootstrap/Button';

function RedButton(props) {
    const classes = props.className;
    return (
        <Button className={`btn rounded-3 text-lg-center ${classes}`} size='lg' variant="outline-redPrimary">
            {props.children}
        </Button>
    );
}

export default RedButton;