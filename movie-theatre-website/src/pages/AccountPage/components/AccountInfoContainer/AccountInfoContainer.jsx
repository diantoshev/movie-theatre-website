import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import GoldContainer from "../../../../components/GoldContainer/GoldContainer";
import "./AccountInfoContainer.scss";
import GoldButton from "../../../../components/Buttons/GoldButton";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import DarkButton from "../../../../components/Buttons/DarkButton";

export default function AccountInfoContainer() {
  return (
    <GreyContainer className="account-info-name">
      <Nav fill variant="tabs">
        <Nav.Item>
          <GoldButton>Profile Info</GoldButton>
        </Nav.Item>
        <Nav.Item>
          <GoldButton>Favorites</GoldButton>
        </Nav.Item>
        <Nav.Item>
          <GoldButton>Order History</GoldButton>
        </Nav.Item>
      </Nav>
      <GoldContainer className="change-profile-data-design">
        <Form>
          <div>
            <Form.Group className="mb-3" controlId="formChangeUser">
              <Form.Label>Change your user:</Form.Label>
              <Form.Control type="text" placeholder="Alex1234" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formChangeUserNames">
              <Form.Label>Change your names:</Form.Label>
              <Form.Control type="text" placeholder="Alexander Tsvetkov" />
            </Form.Group>
          </div>
          <DarkButton type="submit">Save</DarkButton>
        </Form>
      </GoldContainer>
    </GreyContainer>
  );
}
