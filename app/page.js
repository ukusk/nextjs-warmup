import Counter from "./components/Counter";
import ServerMessage from "./components/ServerMessage";

export default function Home() {
  return (
    <>
      <h1>Tere tulemast Next.js Warm-up rakendusse!</h1>
      <p>See on väike harjutus Next.js App Routeri, komponentide ja API endpointide kohta.</p>

      <section className="card">
        <h2>Loendur</h2>
        <Counter />
      </section>

      <section className="card">
        <h2>Sõnum serverist</h2>
        <ServerMessage />
      </section>
    </>
  );
}
