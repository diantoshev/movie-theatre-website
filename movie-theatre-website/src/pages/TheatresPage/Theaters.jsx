import PageContainer from "../../components/PageContainer/PageContainer";
import TheatresContainer from "./components/TheatresContainer/TheatresContainer";
import "./Theatres.scss";
import AnimatePage from "../../components/AnmatePages/AnimatePage";
import SimpleMap from "./components/TheatresMap/TheatresMap";

export default function AllTheatresPage(props) {
  return (
    <PageContainer>
      <AnimatePage>
        <TheatresContainer className="container-style" />
        <SimpleMap />
      </AnimatePage>
    </PageContainer>
  );
}
