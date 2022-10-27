import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import "./AccountInfoNavigationContainer.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AccountInfo from "../AccountInfo/AccountInfo";
import AccountOrderHistory from "../AccountOrderHistory/AccountOrderHistory";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../../store/ActiveUserSlice";

export default function AccountInfoContainer() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.activeUser);
  const sessionId = user.sessionId;

  const handleLogout = () => {
    dispatch(logoutUser({ sessionId }));
  };
  return (
    <GreyContainer className="account-info-name">
      <Tabs defaultActiveKey="profile" className="mb-3" justify>
        <Tab eventKey="profile" title="Profile">
          <AccountInfo />
          {user.userLoading && <p>Loading...</p>}
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </Tab>
        <Tab eventKey="order-history" title="Order History">
          <AccountOrderHistory />
        </Tab>
      </Tabs>
    </GreyContainer>
  );
}
