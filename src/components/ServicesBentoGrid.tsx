import Link from 'next/link';
import {
  Brain,
  Heart,
  Shield,
  Sparkles,
  Users,
  Monitor,
} from 'lucide-react';
import { linkTitle } from '@/lib/link-titles';

const services = [
  {
    icon: Brain,
    title: 'Ansia e Attacchi di Panico',
    description:
      'Quando senti di essere sempre in allerta, fatichi a respirare o perdi lucidità nei momenti di stress.',
    href: '/approfondimenti/ansia-attacchi-panico',
    span: 'md:col-span-2',
    accent: true,
  },
  {
    icon: Heart,
    title: 'Relazioni che fanno soffrire',
    description:
      'Per capire cosa si ripete nei rapporti affettivi, familiari o personali e ritrovare più equilibrio.',
    href: '/approfondimenti/dipendenza-affettiva',
    span: '',
  },
  {
    icon: Shield,
    title: 'Autostima e senso di sé',
    description:
      'Quando prevalgono giudizio, insicurezza, fatica a scegliere o bisogno costante di conferme.',
    href: '/approfondimenti/autostima-bassa',
    span: '',
  },
  {
    icon: Sparkles,
    title: 'Terapia EMDR',
    description:
      'Per elaborare traumi, esperienze che tornano addosso e blocchi emotivi che il solo ragionamento non scioglie.',
    href: '/emdr',
    span: 'md:col-span-2',
    accent: true,
  },
  {
    icon: Users,
    title: 'Terapia di Coppia',
    description:
      'Quando il dialogo si rompe, i conflitti si ripetono o la relazione sembra ferma sempre negli stessi punti.',
    href: '/terapia',
    span: '',
  },
  {
    icon: Monitor,
    title: 'Sedute Online',
    description:
      'Una possibilità utile quando serve continuità, hai poco tempo o non riesci a raggiungere lo studio con regolarità.',
    href: '/contatti',
    span: '',
  },
];

export default function ServicesBentoGrid() {
  return (
    <section id="servizi" className="section-padding bg-white/50 section-lazy section-wash">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow">Aree di intervento</p>
          <h2 className="heading-lg mb-4">Come posso aiutarti</h2>
          <p className="body-lg">
            Non parto da etichette generiche, ma da quello che nella tua vita in
            questo momento pesa, si ripete o ti sta bloccando.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                title={linkTitle(service.href, service.title)}
                className={`group relative card-base card-hover card-glow p-7 lg:p-8 block no-underline transition-[box-shadow,transform] duration-300 ${service.span} ${
                  service.accent
                    ? 'bg-gradient-to-br from-primary to-primary-light text-white'
                    : ''
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                    service.accent
                      ? 'bg-white/15'
                      : 'bg-accent/10'
                  }`}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className={service.accent ? 'text-white' : 'text-accent'}
                  />
                </div>
                <h3
                  className={`heading-md mb-3 transition-transform duration-300 group-hover:translate-x-0.5 ${
                    service.accent ? 'text-white' : ''
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    service.accent ? 'text-white/85' : 'text-muted'
                  }`}
                >
                  {service.description}
                </p>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-500 ${
                    service.accent
                      ? 'bg-accent/40 group-hover:bg-accent/70'
                      : 'bg-accent/5 group-hover:bg-accent/45'
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
