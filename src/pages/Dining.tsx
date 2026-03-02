import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dining = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header variant="static" />
      <main className="container mx-auto px-6 pt-16 pb-20 space-y-12">
        <section className="space-y-4">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground">
            Dining
          </p>
          <h1 className="font-serif text-4xl text-primary">Text-Only Menu</h1>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Every dish below appears as written descriptions with prices so you
            can browse the culinary program without images, video, or
            motion—just uncomplicated, readable text.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-3xl text-primary">Small Plates</h2>
          <p className="text-sm text-muted-foreground">
            Refined Filipino starters designed to awaken the palate.
          </p>
          <ul className="list-disc space-y-4 pl-6 text-sm leading-relaxed text-muted-foreground">
            <li>
              <p className="font-serif text-lg text-primary">
                Pearl Oyster Kinilaw – ₱680
              </p>
              <p>
                Fresh oysters with calamansi granita, coconut cream, and ginger
                oil.
              </p>
            </li>
            <li>
              <p className="font-serif text-lg text-primary">
                Charred Puso ng Saging – ₱520
              </p>
              <p>
                Banana blossom ribbons, coconut vinegar, smoked salt, and
                toasted pili nuts.
              </p>
            </li>
            <li>
              <p className="font-serif text-lg text-primary">
                Tamarind Glazed Wings – ₱540
              </p>
              <p>
                Crispy chicken wings coated in tamarind caramel and burnt honey.
              </p>
            </li>
            <li>
              <p className="font-serif text-lg text-primary">
                Maharlika Golden Sisig – ₱620
              </p>
              <p>
                Premium pork jowl sisig, calamansi foam, crispy chicharrón, and
                quail egg.
              </p>
            </li>
            <li>
              <p className="font-serif text-lg text-primary">
                Royal Tuna Kilawin – ₱650
              </p>
              <p>
                Fresh yellowfin tuna, cane vinegar pearls, chili threads, and
                coconut essence.
              </p>
            </li>
            <li>
              <p className="font-serif text-lg text-primary">
                Lechon Croquettes de Intramuros – ₱580
              </p>
              <p>
                Crispy lechon croquettes with garlic aioli and sukang Iloko
                reduction.
              </p>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-3xl text-primary">
            Soups & Heritage Broths
          </h2>
          <p className="text-sm text-muted-foreground">
            Traditional Filipino comfort soups elevated with premium
            ingredients.
          </p>
          <ul className="list-disc space-y-3 pl-6 text-sm text-muted-foreground">
            <li>Sinigang Royale sa Baka – ₱880</li>
            <li>Imperial Seafood Sinigang – ₱950</li>
            <li>Nilagang Maharlika Wagyu – ₱1,150</li>
            <li>Sinigang sa Miso na Maya-Maya – ₱920</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-3xl text-primary">Main Courses</h2>
          <ul className="list-disc space-y-3 pl-6 text-sm text-muted-foreground">
            <li>Perlas Reef Grouper – ₱1,180</li>
            <li>Tahanan Familia Roast Short Rib – ₱1,350</li>
            <li>Maharlika Garden Palabok – ₱780</li>
            <li>Adobo ng Hari (King’s Adobo) – ₱950</li>
            <li>Kare-Kare Imperial – ₱1,250</li>
            <li>Afritada de Intramuros – ₱880</li>
            <li>Menudo de Casa Maharlika – ₱820</li>
            <li>Paksiw na Pompano Royale – ₱980</li>
            <li>Bangus Belly Confit sa Bawang – ₱920</li>
            <li>Lechon Maharlika Signature – ₱1,480</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-3xl text-primary">
            Grilled & Fire Selections
          </h2>
          <ul className="list-disc space-y-3 pl-6 text-sm text-muted-foreground">
            <li>Sugba Seafood Platter – ₱1,850</li>
            <li>Chicken Inasal Suprema – ₱780</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-3xl text-primary">Rice & Sides</h2>
          <ul className="list-disc space-y-3 pl-6 text-sm text-muted-foreground">
            <li>Garlic Rice Heritage – ₱180</li>
            <li>Coconut Rice Maharlika – ₱220</li>
            <li>Adobo Fried Rice – ₱280</li>
            <li>Ensaladang Talong Royale – ₱240</li>
            <li>Atchara and Pickled Vegetables – ₱180</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-3xl text-primary">
            Desserts & Nightcaps
          </h2>
          <ul className="list-disc space-y-3 pl-6 text-sm text-muted-foreground">
            <li>Sampaguita Halo Royale – ₱520</li>
            <li>Leche Flan de Oro – ₱420</li>
            <li>Bibingka Soufflé Supreme – ₱460</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-3xl text-primary">
            Family & Group Dining Collections
          </h2>
          <p className="text-sm text-muted-foreground">
            Perfect for sharing. Serves 4–6 persons.
          </p>
          <ul className="list-disc space-y-3 pl-6 text-sm text-muted-foreground">
            <li>The Tahanan Familia Feast – ₱4,500</li>
            <li>Maharlika Royal Banquet – ₱6,800</li>
            <li>Heritage Seafood Celebration – ₱7,500</li>
            <li>Imperial Barkada Experience – ₱9,800</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dining;
