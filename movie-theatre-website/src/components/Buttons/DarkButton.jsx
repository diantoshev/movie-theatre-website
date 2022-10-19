import Button from 'react-bootstrap/Button';

function DarkButton(props) {
    const classes = props.className;
    return (
        <Button className={`btn rounded-3 text-lg-center text-goldLight ${classes}`} size='lg' variant="greyDark">
            {props.children}
        </Button>
    );
}

export default DarkButton;