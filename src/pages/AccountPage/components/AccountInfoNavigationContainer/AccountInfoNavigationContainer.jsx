import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
// import GoldContainer from "../../../../components/GoldContainer/GoldContainer";
import "./AccountInfoNavigationContainer.scss";
import GoldButton from "../../../../components/Buttons/GoldButton";
// import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";
// import DarkButton from "../../../../components/Buttons/DarkButton";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AccountInfo from "../AccountInfo/AccountInfo";
import AccountOrderHistory from "../AccountOrderHistory/AccountOrderHistory";

export default function AccountInfoContainer() {
  return (
    <GreyContainer className="account-info-name">
      {/* <Nav fill variant="tabs">
        <Nav.Item>
          <Nav.Link href="">Profile Info </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">Favorites</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">Order History</Nav.Link>
        </Nav.Item>
      </Nav> */}

      <Tabs defaultActiveKey="profile" className="mb-3" justify>
        <Tab eventKey="profile" title="Profile">
          <AccountInfo />
          <GoldButton className="logout-btn">Logout</GoldButton>
        </Tab>
        <Tab eventKey="order-history" title="Order History">
          <AccountOrderHistory />
        </Tab>
      </Tabs>
      {/* <GoldContainer className="change-profile-data-design">
        <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            <ListGroup.Item>Fullname: {currentUser.fullName}</ListGroup.Item>
            <ListGroup.Item>User: {currentUser.userName}</ListGroup.Item>
          </ListGroup>
        </Card> */}
      {/* <Form>
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
        </Form> */}
      {/* </GoldContainer> */}
    </GreyContainer>
  );
}
