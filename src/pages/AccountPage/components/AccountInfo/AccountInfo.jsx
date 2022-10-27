import GoldContainer from "../../../../components/GoldContainer/GoldContainer";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import UserManager from "../../../../models/UserManager";
import "./AccountInfo.scss";
export default function AccountInfo() {
  const newUserManager = new UserManager();
  const activeUserState = useSelector((state) => state.activeUser);
  const currentUser = newUserManager.allMovieSpotUsers.find(
    (user) => user.userName === activeUserState.username
  );

  return (
    <GoldContainer className="account-info-design">
      <Card style={{ width: "18rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item>Fullname: {currentUser.fullName}</ListGroup.Item>
          <ListGroup.Item>User: {currentUser.userName}</ListGroup.Item>
        </ListGroup>
      </Card>
    </GoldContainer>
  );
}
