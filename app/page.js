import EventSchedule from "./(root)/components/eventSchedule/EventSchedule";
import FindUs from "./(root)/components/findUs/FindUs";

export default async function Home() {
  return (
    <>
      <EventSchedule />
      <FindUs />
    </>
  );
}
