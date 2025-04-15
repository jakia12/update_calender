import EventSchedule from "./(root)/components/eventSchedule/EventSchedule";
import FindUs from "./(root)/components/findUs/FindUs";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const slicedProd = products.slice(0, 8);

  return (
    <>
      <EventSchedule />
      <FindUs />
    </>
  );
}
