import Hero from "../components/Hero";
import Meta from "../components/Meta";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="bg-bg-color min-h-screen">
      <Meta title="Home" />
      <Nav />
      <Hero/>
    </div>
  );
}
