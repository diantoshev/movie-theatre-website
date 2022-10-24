import Accordion from 'react-bootstrap/Accordion';
import './Accordion.scss';

function AdminAccordion(props) {
    let classes = props.className ? 'container-sm ' + props.className : 'container-sm'
    return (
        <div className={classes}>
            <Accordion className='adminAccordion rounded-3 mb-3'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{props.panelTitle}</Accordion.Header>
                    <Accordion.Body>
                        {props.children}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default AdminAccordion;