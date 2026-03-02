import Header from "@/components/Header";
import Footer from "@/components/Footer";

const casinoGames = [
  {
    name: "Maharlika Blackjack",
    description:
      "Classic six-deck blackjack paced for conversation, with hand signals reviewed by the dealer before play begins.",
  },
  {
    name: "Prestige Baccarat",
    description:
      "Midi-baccarat tables with hand-cut cards and narrated play so every banker and player draw remains clear.",
  },
  {
    name: "Roulette Royale",
    description:
      "Single-zero wheel with velvet markers, perfect for guests who prefer deliberate spins and measured wagers.",
  },
  {
    name: "Dragon Fortune Link",
    description:
      "Progressive slot bank featuring synchronized lighting cues that celebrate jackpot tiers across all seats.",
  },
  {
    name: "Hybrid Baccarat Arena",
    description:
      "Electronic terminals mirror a live shoe, letting friends track the same results while managing their own bets.",
  },
  {
    name: "Maharlika Salon Poker",
    description:
      "Invitation-only cash games with capped seats, handwritten ledgers, and dedicated beverage hosts.",
  },
];

const Casino = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header variant="static" />
      <main className="container mx-auto px-6 pt-16 pb-20 space-y-12">
        <section>
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground">
            Casino
          </p>
          <h1 className="mt-4 font-serif text-4xl text-primary">
            Games & Descriptions
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
            Every featured game is listed below on a single page. Each bullet
            begins with the game title followed by a concise description so you
            can plan your evening before visiting the floor.
          </p>
        </section>

        <section>
          <ul className="list-disc space-y-4 pl-6 text-sm leading-relaxed text-muted-foreground">
            {casinoGames.map((game) => (
              <li key={game.name}>
                <span className="font-serif text-lg text-primary">
                  {game.name}.
                </span>{" "}
                <span>{game.description}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Casino;
