import "./EditTheater.scss";
import GoldContainer from "../../../../components/GoldContainer/GoldContainer";
import Form from "react-bootstrap/Form";
import DarkButton from "../../../../components/Buttons/DarkButton";

export default function EditTheater() {
  return (
    <GoldContainer className="change-theater-data-design">
      <Form>
        <div>
          <Form.Group className="mb-3" controlId="formChangeAddress">
            <Form.Label>Change theater's address:</Form.Label>
            <Form.Control as="textarea" placeholder="New address..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formChangePhone">
            <Form.Label>Change theater's phone:</Form.Label>
            <Form.Control type="text" placeholder="New phone..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formChangeWorkingHours">
            <Form.Label>Change working hours:</Form.Label>
            <Form.Control type="text" placeholder="New working hours..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formChangeHallsCount">
            <Form.Label>Change the halls count:</Form.Label>
            <Form.Control type="number" placeholder="Active halls..." />
          </Form.Group>
        </div>
        <DarkButton type="submit">Save</DarkButton>
      </Form>
    </GoldContainer>
  );
}
