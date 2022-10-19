import PageContainer from "../../components/PageContainer/PageContainer";
import TheatresContainer from "./components/TheatresContainer/TheatresContainer";
import "./Theatres.scss";
import AnimatePage from "../../components/AnmatePages/AnimatePage";

export default function AllTheatresPage(props) {
  return (
    <PageContainer>
      <AnimatePage>
        <TheatresContainer className="container-style" />
      </AnimatePage>
    </PageContainer>
  );
}
