import Header from "@/components/Header";
import Footer from "@/components/Footer";

const diningMenu = [
  {
    section: "Small Plates",
    items: [
      {
        name: "Pearl Oyster Kinilaw",
        description:
          "Fresh oysters dressed with calamansi granita, coconut cream, and ginger oil for a bright opening bite.",
      },
      {
        name: "Charred Puso ng Saging",
        description:
          "Banana blossom ribbons tossed with coconut vinegar, smoked salt, and toasted pili nuts.",
      },
      {
        name: "Tamarind Glazed Wings",
        description:
          "Crisp chicken wings coated in tamarind caramel and finished with burnt honey.",
      },
    ],
  },
  {
    section: "Mains",
    items: [
      {
        name: "Perlas Reef Grouper",
        description:
          "Steamed fillet over coconut rice with lemongrass oil, pickled sea grapes, and charred citrus.",
      },
      {
        name: "Tahanan Familia Roast",
        description:
          "Slow-roasted beef short rib glazed in cacao jus, served with kamote puree and hearth vegetables.",
      },
      {
        name: "Maharlika Garden Palabok",
        description:
          "Hand-pulled noodles layered with prawn broth, smoked egg floss, and crisp chicharrón.",
      },
    ],
  },
  {
    section: "Desserts & Nightcaps",
    items: [
      {
        name: "Cacao Tablea Soufflé",
        description:
          "Warm tablea custard with toasted cashew praline and salabat cream.",
      },
      {
        name: "Sampaguita Halo",
        description:
          "Shaved ice scented with sampaguita syrup, candied fruits, and pandan jelly.",
      },
      {
        name: "Bar Maharlika Old Fashioned",
        description:
          "Aged rum stirred with muscovado sugar and pomelo bitters over clear ice.",
      },
    ],
  },
];

const Dining = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header variant="static" />
      <main className="container mx-auto px-6 pt-16 pb-20 space-y-12">
        <section>
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground">
            Dining
          </p>
          <h1 className="mt-4 font-serif text-4xl text-primary">
            Text-Only Menu
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
            Explore the entire culinary program through written descriptions.
            Each bullet lists a dish followed by its supporting details so you
            can plan meals without imagery.
          </p>
        </section>

        {diningMenu.map((section) => (
          <section key={section.section}>
            <h2 className="font-serif text-3xl text-primary">
              {section.section}
            </h2>
            <ul className="mt-6 list-disc space-y-4 pl-6 text-sm leading-relaxed text-muted-foreground">
              {section.items.map((item) => (
                <li key={item.name}>
                  <span className="font-serif text-lg text-primary">
                    {item.name}.
                  </span>{" "}
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Dining;
