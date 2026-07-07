import Image from 'next/image';
import { MapPin, Building2, Laptop } from 'lucide-react';

const locations = [
  {
    icon: MapPin,
    title: 'Credaro (BG)',
    subtitle: 'Area Sarnico e Lago d\'Iseo',
    description:
      'Via Piave 7 \u2014 comodo per Sarnico, Villongo, Paratico, Capriolo e Grumello del Monte.',
    link: '/psicologa-sarnico',
    linkLabel: 'Come raggiungermi',
    linkTitle: 'Come raggiungere lo studio di Credaro da Sarnico',
    primary: true,
    image: '/assets/studio-psicologia-credaro.webp',
  },
  {
    icon: Building2,
    title: 'Castenedolo (BS)',
    subtitle: 'Sede secondaria area Brescia',
    description:
      'Piazza Martiri della Libert\u00e0 7 \u2014 riferimento per Brescia, Rezzato, Mazzano e dintorni.',
    link: '/contatti',
    linkLabel: 'Informazioni sede',
    linkTitle: 'Informazioni sulla sede di Castenedolo',
    image: '/assets/studio-psicologa-sarnico.webp',
  },
  {
    icon: Laptop,
    title: 'Online',
    subtitle: 'Ovunque tu sia',
    description:
      'Colloqui da remoto sicuri e riservati, per chi ha difficolt\u00e0 logistiche o vive fuori zona.',
    link: '#contatti',
    linkLabel: 'Prenota online',
    linkTitle: 'Prenota un colloquio online',
    image: '/assets/consulenza-psicologica-online-bergamo.webp',
  },
];

export default function LocationCards() {
  return (
    <section id="dove-ricevo" className="section-padding section-lazy section-wash pb-28 lg:pb-28">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow">Dove ricevo</p>
          <h2 className="heading-lg mb-4">
            Ricevo a Credaro e, in alcuni casi, anche a Castenedolo
          </h2>
          <p className="body-lg">
            La sede di Credaro &egrave; il riferimento principale per chi vive tra
            Sarnico e il basso Lago d&apos;Iseo; Castenedolo resta disponibile
            come alternativa per l&apos;area di Brescia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {locations.map((loc) => {
            const Icon = loc.icon;
            return (
              <a
                key={loc.title}
                href={loc.link}
                title={loc.linkTitle}
                className={`group card-base card-hover card-glow flex flex-col overflow-hidden min-h-[17rem] ${
                  loc.primary ? 'ring-2 ring-accent/20 relative' : ''
                }`}
              >
                {loc.image && (
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={loc.image}
                      alt={`Studio ${loc.title}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                    {loc.primary && (
                      <span className="absolute top-3 right-3 text-[0.65rem] font-bold uppercase tracking-widest text-accent-deep bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        Sede principale
                      </span>
                    )}
                    {!loc.primary && loc.title === 'Castenedolo (BS)' && (
                      <span className="absolute top-3 right-3 text-[0.65rem] font-bold uppercase tracking-widest text-primary-light bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        Sede secondaria
                      </span>
                    )}
                  </div>
                )}

                <div className="p-7 lg:p-8 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Icon size={22} strokeWidth={1.6} className="text-accent" />
                  </div>

                  <h3 className="heading-md mb-1 transition-transform duration-300 group-hover:translate-x-0.5">{loc.title}</h3>
                  <p className="text-sm text-accent-deep font-medium mb-3">
                    {loc.subtitle}
                  </p>
                  <p className="body-md flex-1">{loc.description}</p>

                  <span className="mt-5 text-sm font-medium text-primary group-hover:text-accent-deep transition-[color,transform] duration-300 flex items-center gap-1.5">
                    {loc.linkLabel}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
