import TheaterCard from "../../../../components/TheaterCard/TheaterCard";
import "./TheatresContainer.scss";

export default function TheatresContainer() {
  return (
    <div className="mt-4 theatres-container-design container-sm d-flex flex-wrap justify-content-evenly gap-5">
      <TheaterCard
        theatreTitle='MovieSpot - Sofia Mladost 1'
        theatreAddress='Mladost 1 somewhere'
        theatrePhone='0888 888 888'
        theatreHours='10:00 - 23:00' />
      <TheaterCard
        theatreTitle='MovieSpot - Sofia - Center'
        theatreAddress='Mladost 1 somewhere'
        theatrePhone='0888 888 888'
        theatreHours='10:00 - 23:00' />
      <TheaterCard
        theatreTitle='MovieSpot - Sofia - The Mall'
        theatreAddress='Mladost 1 somewhere'
        theatrePhone='0888 888 888'
        theatreHours='10:00 - 23:00' />
      <TheaterCard
        theatreTitle='MovieSpot - Varna'
        theatreAddress='Mladost 1 somewhere'
        theatrePhone='0888 888 888'
        theatreHours='10:00 - 23:00' />
      <TheaterCard
        theatreTitle='MovieSpot - Plovdiv'
        theatreAddress='Mladost 1 somewhere'
        theatrePhone='0888 888 888'
        theatreHours='10:00 - 23:00' />
      <TheaterCard
        theatreTitle='MovieSpot - Burgas'
        theatreAddress='Mladost 1 somewhere'
        theatrePhone='0888 888 888'
        theatreHours='10:00 - 23:00' />
    </div>
  );
}
