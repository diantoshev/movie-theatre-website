import PageContainer from "../../components/PageContainer/PageContainer";
import AccountInfoContainer from "./components/AccountInfoNavigationContainer/AccountInfoNavigationContainer";
import AnimatePage from "../../components/AnimatePages/AnimatePage";
import "./AccountPage.scss";

export default function AccountPage(props) {
  return (
    <PageContainer>
      <AnimatePage>
        <AccountInfoContainer />
      </AnimatePage>
    </PageContainer>
  );
}
