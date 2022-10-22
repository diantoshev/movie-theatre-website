import PageContainer from "../../components/PageContainer/PageContainer";
import AddCinemaContainer from "./components/AddCinemaContainer/AddCinemaContainer";
import AllTheatresContainer from "./components/AllTheatresContainer/AllTheatresContainer";
import "./AdminTheatresPage.scss";

export default function EditTheatrePage(props) {
  return (
    <PageContainer className="edit-theatres-page-design">
      <div className="edit-theatres-page-design">
        <AddCinemaContainer />
        <AllTheatresContainer />
      </div>
    </PageContainer>
  );
}
