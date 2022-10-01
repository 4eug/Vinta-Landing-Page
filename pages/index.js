import Hero from "../components/Hero";
import HeroImage from "../components/HeroImage";
import Meta from "../components/Meta";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <section className="min-h-screen">
      <Meta title="Home" />
      <Nav />
      <Hero/>
      <HeroImage/>
    </section>
  );
}
