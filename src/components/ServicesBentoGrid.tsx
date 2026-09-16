import Link from 'next/link';
import { linkTitle } from '@/lib/link-titles';

const services = [
  {
    title: 'Ansia e attacchi di panico',
    description:
      'Quando senti di essere sempre in allerta, fatichi a respirare o perdi lucidità nei momenti di stress.',
    href: '/approfondimenti/ansia-attacchi-panico',
  },
  {
    title: 'Relazioni che fanno soffrire',
    description:
      'Per capire cosa si ripete nei rapporti affettivi, familiari o personali e ritrovare più equilibrio.',
    href: '/approfondimenti/dipendenza-affettiva',
  },
  {
    title: 'Autostima e senso di sé',
    description:
      'Quando prevalgono giudizio, insicurezza, fatica a scegliere o bisogno costante di conferme.',
    href: '/approfondimenti/autostima-bassa',
  },
  {
    title: 'Terapia EMDR',
    description:
      'Per elaborare traumi, esperienze che tornano addosso e blocchi emotivi che il solo ragionamento non scioglie.',
    href: '/emdr',
  },
  {
    title: 'Terapia di coppia',
    description:
      'Quando il dialogo si rompe, i conflitti si ripetono o la relazione sembra ferma sempre negli stessi punti.',
    href: '/terapia',
  },
  {
    title: 'Sedute online',
    description:
      'Una possibilità utile quando serve continuità, hai poco tempo o non riesci a raggiungere lo studio con regolarità.',
    href: '/contatti',
  },
];

export default function ServicesBentoGrid() {
  return (
    <section id="servizi" className="section-padding bg-white/50 section-lazy">
      <div className="section-container">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow">Aree di intervento</p>
          <h2 className="heading-lg mb-4">Come posso aiutarti</h2>
          <p className="body-lg">
            Non parto da etichette generiche, ma da quello che nella tua vita in
            questo momento pesa, si ripete o ti sta bloccando.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              title={linkTitle(service.href, service.title)}
              className="group block no-underline"
            >
              <h3 className="heading-md mb-2 group-hover:text-accent-deep transition-colors">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
