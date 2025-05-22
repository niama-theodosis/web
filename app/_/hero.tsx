import src from "@/assets/images/theodosis_murielle_benard.jpeg";
import { HEADING } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { HTMLAttributes } from "react";

// ROOT ************************************************************************************************************************************
export const Hero = async ({ className, ...props }: HeroProps) => {
  return (
    <section className={cn("flex flex-col gap-8 py-8 md:flex-row md:py-0", className)} {...props}>
      <article className="prose sm:prose-lg xl:prose-xl sm:flex-2/3 sm:py-8">
        <h1 className={HEADING({ className: "text-secondary flex flex-col gap-2" })}>
          <span className="text-primary">Inscris-toi gratuitement</span>
          <span>à La Voix de Theodôsis</span>
        </h1>
        <p>Je suis Murielle et je suis praticienne énergétique.</p>
        <p>
          À travers ma newsletter que j’ai intitulée <b>La Voix de Theodôsis</b>, je t’invite à un rendez-vous, deux fois par mois, pour
          nourrir ton chemin intérieur.
        </p>
        <p>
          Cette newsletter se veut être un espace vivant. Un lieu où les mots servent de passerelle, où on prend le temps de revenir à
          l’essentiel, où on avance côte à côte, chacun à son rythme.
        </p>
      </article>
      <div className="relative flex aspect-square flex-1/3 justify-center md:-mr-8 lg:mr-4">
        <Image
          src={src}
          alt="Murielle Benard"
          placeholder="blur"
          priority
          sizes={`(max-width: 768px) 100vw, (max-width: 1280px) 448px, (max-width: 1536px) 496px, 576px`}
          className="absolute h-full w-full bg-neutral-200 object-cover xl:max-w-xl"
        />
      </div>
    </section>
  );
};

// TYPES ***********************************************************************************************************************************
export type HeroProps = HTMLAttributes<HTMLElement>;
