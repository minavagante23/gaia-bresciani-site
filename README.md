# Gaia Bresciani -- Psicologa e Psicoterapeuta

Sito web della Dott.ssa Gaia Bresciani, psicologa e psicoterapeuta a Credaro (BG) e Castenedolo (BS).

## Stack tecnico

- **Next.js 14** con App Router e static export (`output: 'export'`)
- **React 18** + **TypeScript 5**
- **Tailwind CSS 3.4** con design system custom
- **Framer Motion 11** per animazioni
- **Lucide React** per icone

## Sviluppo locale

```bash
npm install
npm run dev
```

Il sito sara disponibile su `http://localhost:3000`.

## Build di produzione

```bash
npm run build
```

L'output statico viene generato nella cartella `out/`.

## Deploy su GitHub Pages

Il deploy avviene automaticamente tramite GitHub Actions ad ogni push su `main`.

### Prima configurazione (una sola volta)

1. Vai su **Settings > Pages** del repository GitHub
2. In **Source** seleziona **GitHub Actions**
3. Committa e pusha su `main` -- il workflow `.github/workflows/deploy.yml` fara il resto

### Dominio personalizzato

Per collegare `www.gaiabrescianipsicologa.it`:

1. In **Settings > Pages > Custom domain** inserisci `www.gaiabrescianipsicologa.it`
2. Spunta **Enforce HTTPS**
3. Nel pannello DNS del provider (TopHost) configura:

| Tipo  | Nome | Valore                          |
|-------|------|---------------------------------|
| CNAME | www  | `<username>.github.io`          |
| A     | @    | `185.199.108.153`               |
| A     | @    | `185.199.109.153`               |
| A     | @    | `185.199.110.153`               |
| A     | @    | `185.199.111.153`               |

4. Crea il file `public/CNAME` con il contenuto:

```
www.gaiabrescianipsicologa.it
```

5. Attendi 10-30 minuti per la propagazione DNS

### Sicurezza (GitHub Pages)

GitHub Pages **non permette** header HTTP personalizzati (HSTS, COOP, X-Frame-Options, ecc.) dal codice del sito. La protezione lato app resta su:

- **CSP** iniettata nel HTML dopo la build (`scripts/csp-policy.mjs`)
- **Antispam form:** honeypot Formspree (`_gotcha`) + ritardo minimo di invio
- Enforce HTTPS in Settings → Pages

Verifica CSP live: `npm run check:headers`

### Verifica deploy

Dopo il push, controlla lo stato in **Actions** nel repository. Il sito sara raggiungibile all'URL configurato.

## Struttura progetto

```
src/
  app/              # Pagine (App Router)
    layout.tsx       # Layout globale con SEO e Schema.org
    page.tsx         # Homepage
    chi-sono/        # Chi sono
    terapia/         # Servizi
    emdr/            # EMDR
    faq/             # FAQ
    contatti/        # Contatti
    approfondimenti/ # Articoli
    zona-sarnico/    # Area locale
    esperienza/      # Esperienza
    privacy-policy/  # Privacy Policy
    cookie-policy/   # Cookie Policy
    sitemap.ts       # Sitemap XML generato
    robots.ts        # Robots.txt generato
  components/        # Componenti React
  lib/               # Utility (motion barrel)
public/
  assets/            # Unica cartella immagini WebP (servite come /assets/...)
  manifest.json      # Web App Manifest
```
