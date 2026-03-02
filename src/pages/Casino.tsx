import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Casino = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header variant="static" />
      <main className="container mx-auto px-6 pt-16 pb-20 space-y-12">
        <section className="space-y-4">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground">
            Casino
          </p>
          <h1 className="font-serif text-4xl text-primary">
            Text-Only Casino Guide
          </h1>
          <p className="max-w-3xl text-sm text-muted-foreground">
            All featured games appear on this single page with bullet points
            that call out the genre, mode, and a short description. No
            animation, no live data—just clear text for easy reference.
          </p>
        </section>

        <section>
          <ul className="list-disc space-y-6 pl-6 text-sm text-muted-foreground">
            <li>
              <p className="font-serif text-lg text-primary">
                Tumbang Preso Strike
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-foreground">
                Genre: Arcade | Mode: PvE
              </p>
              <p>
                A skill-based throwing game where players aim at moving targets
                to score points and win prizes. Accuracy and timing determine
                the payout.
              </p>
            </li>
            <li>
              <p className="font-serif text-lg text-primary">Patintero Dash</p>
              <p className="text-xs uppercase tracking-[0.3em] text-foreground">
                Genre: Strategy + Action | Mode: PvP
              </p>
              <p>
                Players guide a runner across guarded lanes using timing and
                quick decisions. The farther they cross, the higher the reward
                multiplier.
              </p>
            </li>
            <li>
              <p className="font-serif text-lg text-primary">Sungka Battle</p>
              <p className="text-xs uppercase tracking-[0.3em] text-foreground">
                Genre: Table Game | Mode: PvP
              </p>
              <p>
                A competitive version of the traditional board game where
                players capture more shells than their opponent through strategy
                and planning.
              </p>
            </li>
            <li>
              <p className="font-serif text-lg text-primary">Holen</p>
              <p className="text-xs uppercase tracking-[0.3em] text-foreground">
                Genre: Table Game | Mode: PvP
              </p>
              <p>
                A marble-flicking game similar to shuffleboard or pool, where
                players score by knocking marbles into target holes.
              </p>
            </li>
            <li>
              <p className="font-serif text-lg text-primary">Luksong Tinik</p>
              <p className="text-xs uppercase tracking-[0.3em] text-foreground">
                Genre: Arcade | Mode: PvE
              </p>
              <p>
                An arcade reflex game where players jump over rising laser bars
                or digital obstacles. Timing, reaction speed, and risk
                management determine success.
              </p>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Casino;
