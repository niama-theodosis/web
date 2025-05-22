import { Feature } from "./_/feature";
import { Hero } from "./_/hero";
import { Newsletter } from "./_/newsletter";

// DATA ************************************************************************************************************************************
const data = {
  main: {
    title: "Je partagerai avec toi",
    items: [
      "des éclairages sur les énergies en mouvement,",
      "des pratiques simples pour t’ancrer, te recentrer, avancer,",
      "des réflexions concrètes sur ce que nous vivons tous à certains moments,",
      "et des ressources pour nourrir ta force intérieure.",
    ],
  },
  features: [
    {
      title: "Ce que tu y trouveras",
      items: [
        "Un regard et une lecture sur les énergies du moment, pour mieux comprendre ce qui t’influence au quotidien.",
        "Des pratiques accessibles pour cultiver ton ancrage, ton équilibre, ta vitalité.",
        "Des réflexions sur les traversées que la vie nous invite à rencontrer, sans détour ni artifice.",
        "Des ressources précieuses, choisies pour renforcer ce qui, en toi, cherche à grandir.",
      ],
    },
    {
      title: "Pourquoi t'abonner ?",
      items: [
        "Pour avancer en conscience.",
        "Pour trouver un appui régulier et humain dans ton cheminement.",
        "Pour nourrir ta stabilité intérieure dans les périodes de transition.",
        "Pour recevoir, deux fois par mois, un espace de reconnexion et d’élan.",
      ],
    },
    {
      title: "À qui cela s’adresse ?",
      items: [
        "À toi qui cherches à rester aligné.e à ce que tu sens juste,",
        "À toi qui sais que chaque passage intérieur mérite d’être honoré,",
        "À toi qui ressens que cheminer en conscience est une force profonde.",
      ],
    },
  ],
};

// ROOT ************************************************************************************************************************************
export default function IndexPage() {
  return (
    <>
      <Hero className="px-4 sm:px-8 lg:container lg:mx-auto" />
      <section className="bg-gray-200 pt-8 lg:pb-8">
        <div className="mx-auto flex flex-col justify-between gap-8 lg:container lg:flex-row lg:px-8 xl:items-center">
          <Feature level={2} {...data.main} className="px-4 sm:px-8 lg:px-0" />
          <Newsletter className="z-10 h-full lg:-mt-12" />
        </div>
      </section>
      <div className="bg-gray-100 py-8 lg:pt-12">
        <div className="mx-auto grid grid-cols-1 gap-8 px-4 sm:px-8 lg:container lg:grid-cols-3">
          {data.features.map((feature, i) => (
            <Feature key={i} {...feature} />
          ))}
        </div>
      </div>
    </>
  );
}
