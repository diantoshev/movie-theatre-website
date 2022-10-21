import PageContainer from "../../components/PageContainer/PageContainer";
import AccountInfoContainer from "./components/AccountInfoContainer/AccountInfoContainer";
import AccountFavorites from "./components/AccountFavorites/AccountFavorites";
import "./AccountPage.scss";
export default function AccountPage(props) {
  return (
    <PageContainer>
      <div className="account-page-container-design">
        <AccountInfoContainer />
        <AccountFavorites />
      </div>
    </PageContainer>
  );
}
