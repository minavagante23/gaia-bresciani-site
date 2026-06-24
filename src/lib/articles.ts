export type ContentBlock =
  | string
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] };

export interface Article {
  slug: string;
  date: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  title: string;
  excerpt: string;
  tags: string[];
  content: ContentBlock[];
}

const articles: Article[] = [
  {
    slug: 'ansia-sociale-timidezza',
    date: '21 giugno 2026',
    publishedAt: '2026-06-21T00:00:00.000Z',
    readTime: '6 min',
    title: 'Ansia sociale: quando la timidezza limita la vita quotidiana',
    excerpt:
      'Rossore, paura di essere giudicati, evitamento di situazioni sociali: come riconoscere l\'ansia sociale, distinguerla dalla semplice timidezza e quando può essere utile un percorso psicologico.',
    tags: ['Ansia', 'Relazioni'],
    content: [
      'Essere timidi non è un problema. Molte persone si sentono un po\' a disagio in contesti nuovi, davanti a un gruppo o quando devono parlare di sé. L\'ansia sociale è diversa: non è solo imbarazzo passeggero, ma una paura persistente di essere osservati, giudicati o umiliati, che può condizionare lavoro, studio, relazioni e momenti quotidiani che per altri sembrano semplici.',
      { type: 'h2', text: 'Timidezza o ansia sociale: come capire la differenza' },
      'La timidezza diventa un disagio da osservare quando la paura delle situazioni sociali dura nel tempo, è sproporzionata rispetto al contesto e porta a evitare ciò che conta. Non si tratta solo di "non essere portati per la gente": spesso chi convive con ansia sociale desidera relazionarsi, ma il corpo e la mente reagiscono come se ci fosse un pericolo reale.',
      { type: 'h2', text: 'I segnali più comuni' },
      'Alcuni segnali che si ripetono con frequenza:',
      {
        type: 'list',
        items: [
          'paura intensa di parlare in pubblico, fare domande o esporre un\'opinione',
          'disagio marcato quando si è al centro dell\'attenzione, anche per poco tempo',
          'evitare feste, cene, riunioni o chiamate per timore di imbarazzo',
          'preoccupazione anticipatoria: si pensa alla situazione sociale giorni prima',
          'sintomi fisici come rossore, tremore, sudorazione, nodo alla gola o tachicardia',
          'dopo un incontro sociale, rivivere mentalmente ogni frase per paura di aver "detto qualcosa di sbagliato"',
        ],
      },
      { type: 'h2', text: 'Il circolo che mantiene il problema' },
      'L\'ansia sociale si alimenta spesso con l\'evitamento. Se una situazione fa paura, evitarla porta sollievo immediato. Nel breve periodo funziona; nel lungo periodo, però, la mente impara che quella situazione è davvero pericolosa e la paura si rafforza. Così si restringe sempre di più lo spazio di vita: meno opportunità, meno relazioni, meno fiducia in sé.',
      'Un altro meccanismo frequente è l\'attenzione ipervigile al giudizio altrui. Chi è in ansia sociale tende a leggere nei volti degli altri segnali di critica o rifiuto, anche quando non ci sono. Questo aumenta l\'imbarazzo e conferma la convinzione di non essere "all\'altezza".',
      { type: 'h2', text: 'Cosa può aiutare, in concreto' },
      'Alcuni passi utili possono essere preparare gradualmente situazioni temute invece di evitarle del tutto, osservare come il corpo reagisce senza fuggire subito, e imparare a distinguere tra il giudizio immaginato e quello reale. Non si tratta di "diventare estroversi": si tratta di recuperare libertà nelle relazioni e nelle situazioni che contano davvero.',
      'Quando l\'ansia è molto intensa, tecniche di respirazione o grounding possono aiutare nel momento, ma da sole raramente bastano se il problema è radicato e si ripete da tempo.',
      { type: 'h2', text: 'Quando può servire un percorso psicologico' },
      'Un percorso psicologico può essere utile quando l\'ansia sociale limita scuola, lavoro, amicizie o la vita di coppia, quando l\'evitamento diventa la strategia principale o quando il disagio è accompagnato da bassa autostima, insonnia o attacchi d\'ansia. L\'obiettivo non è cancellare la sensibilità, ma costruire un rapporto più stabile con gli altri e con sé stessi: imparare a stare in situazioni sociali senza sentirsi in costante allerta.',
      'Se ti riconosci in questi segnali e sei in zona Credaro, Sarnico o basso Lago d\'Iseo, un primo colloquio può aiutarti a capire quanto il disagio incide sulla tua vita e da dove partire per affrontarlo con gradualità.',
    ],
  },
  {
    slug: 'perfezionismo-ansia-da-prestazione',
    date: '2 giugno 2026',
    publishedAt: '2026-06-02T00:00:00.000Z',
    readTime: '7 min',
    title: 'Perfezionismo e ansia da prestazione: segnali e come uscire dal circolo',
    excerpt:
      'Quando "devo fare tutto bene" diventa una fonte di stress: come riconoscere perfezionismo e ansia da prestazione, quali errori mantengono il problema e quando può aiutare un percorso psicologico.',
    tags: ['Autostima', 'Perfezionismo'],
    content: [
      'Il perfezionismo, all\'inizio, può sembrare una qualità: attenzione ai dettagli, responsabilità, desiderio di fare bene. Il problema nasce quando il "fare bene" si trasforma in un "non posso sbagliare". In quel punto la prestazione smette di essere un obiettivo e diventa una prova continua del proprio valore.',
      { type: 'h2', text: 'Come riconoscere l\'ansia da prestazione' },
      'Un segnale tipico è l\'ansia anticipatoria: prima di una consegna, un esame, un colloquio o anche una conversazione importante, la mente inizia a correre. Si ripassano scenari, si controlla più volte, si rimanda finché non ci si sente "pronti". Spesso, però, la prontezza non arriva mai: l\'asticella si sposta sempre un po\' più in alto.',
      { type: 'h2', text: 'Come si manifesta il perfezionismo' },
      'Il perfezionismo non è solo "volere il massimo": è un modo di proteggersi dal giudizio, dall\'errore e dalla paura di deludere. Può manifestarsi in diversi modi:',
      {
        type: 'list',
        items: [
          'autocritica costante e difficoltà a delegare',
          'fatica a godersi i risultati ("potevo fare di più")',
          'paura di iniziare, per timore di non essere all\'altezza',
          'procrastinazione: rimandare diventa l\'unico modo per non misurarsi con un risultato che potrebbe sembrare insufficiente',
        ],
      },
      { type: 'h2', text: 'Il meccanismo che mantiene il circolo' },
      'Un altro meccanismo che mantiene il circolo è la selezione delle prove: si notano solo gli errori e si svaluta ciò che funziona. Anche quando il feedback esterno è positivo, la persona può pensare che sia "gentilezza" o "fortuna". Così la sicurezza non si stabilizza e l\'ansia si ripresenta alla prova successiva.',
      { type: 'h2', text: 'Cosa può aiutare, in concreto' },
      'Cosa può aiutare, in modo concreto? Ridurre i controlli ripetitivi, definire standard realistici (non perfetti), separare la prestazione dal valore personale e allenare la tolleranza dell\'errore. Non è un invito a "accontentarsi": è un modo per recuperare energia mentale e libertà, senza perdere efficacia.',
      { type: 'h2', text: 'Quando può servire un percorso psicologico' },
      'Un percorso psicologico può essere utile quando l\'ansia da prestazione condiziona lavoro, studio o relazioni, quando l\'autocritica è costante o quando la paura di sbagliare porta a evitare situazioni importanti. L\'obiettivo non è spegnere l\'ambizione, ma renderla sostenibile: costruire un rapporto più stabile con sé stessi, in cui il risultato non sia l\'unico criterio per sentirsi "abbastanza".',
      'Se ti riconosci in questi meccanismi e sei in zona Credaro, Sarnico o basso Lago d\'Iseo, un confronto può aiutarti a capire da dove partire e quali obiettivi rendere più sostenibili.',
    ],
  },
  {
    slug: 'insonnia-ansia-sonno',
    date: '15 maggio 2026',
    publishedAt: '2026-05-15T00:00:00.000Z',
    readTime: '6 min',
    title: 'Insonnia e ansia: perch\u00e9 la mente non si spegne la sera',
    excerpt:
      'Difficolt\u00e0 ad addormentarsi, risvegli notturni e mente in allerta: come riconoscere il legame tra insonnia e ansia e quando pu\u00f2 essere utile un supporto psicologico.',
    tags: ['Ansia', 'Sonno'],
    content: [
      'Capita spesso che la giornata finisca, il corpo sia stanco, ma la mente continui a correre. Ci si sdraia e iniziano pensieri, preoccupazioni, dialoghi interiori, controlli sull\'orario e sulla paura di non dormire abbastanza. Quando succede con frequenza, insonnia e ansia tendono ad alimentarsi a vicenda.',
      { type: 'h2', text: 'Il legame tra insonnia e ansia' },
      'L\'ansia non compare solo nei momenti di agitazione evidente. Pu\u00f2 restare attiva anche in modo pi\u00f9 silenzioso, sotto forma di tensione fisica, ipervigilanza, battito accelerato, respiro corto o pensieri ripetitivi. La sera, quando gli stimoli esterni diminuiscono, tutto questo pu\u00f2 diventare pi\u00f9 percepibile e trasformare il momento del sonno in un momento di allerta.',
      { type: 'h2', text: 'I segnali pi\u00f9 comuni' },
      'Quando insonnia e ansia si intrecciano, alcuni segnali tendono a ripetersi:',
      {
        type: 'list',
        items: [
          'difficolt\u00e0 ad addormentarsi',
          'risvegli notturni con la mente subito attiva',
          'sonno leggero e non ristoratore',
          'paura di andare a letto perch\u00e9 "tanto non dormir\u00f2"',
          'stanchezza al mattino e maggiore irritabilit\u00e0 durante il giorno',
        ],
      },
      'A volte si crea un circolo preciso: pi\u00f9 si teme di non dormire, pi\u00f9 aumenta la tensione, e pi\u00f9 il sonno si allontana.',
      { type: 'h2', text: 'Da dove pu\u00f2 nascere' },
      'Non sempre il problema nasce da una sola causa. Periodi di stress, cambiamenti importanti, preoccupazioni lavorative, crisi relazionali o una fase di ansia pi\u00f9 generale possono riflettersi sul sonno. In altri casi l\'insonnia diventa essa stessa il problema principale, perch\u00e9 la persona comincia a organizzare la giornata in funzione della notte successiva.',
      { type: 'h2', text: 'Primi passi utili' },
      'Alcuni passi utili possono essere ridurre la stimolazione mentale nelle ore serali, evitare di usare il letto come luogo di lavoro o di allarme, osservare se ci sono abitudini che mantengono l\'attivazione e non cercare di "forzarsi" a dormire. Ma quando il sonno \u00e8 compromesso da settimane e l\'ansia prende sempre pi\u00f9 spazio, non conviene aspettare che passi da solo.',
      { type: 'h2', text: 'Quando chiedere aiuto' },
      'Un percorso psicologico pu\u00f2 aiutare a capire cosa mantiene l\'insonnia, distinguere tra stress temporaneo e ansia pi\u00f9 strutturata, e costruire strategie concrete per regolare l\'attivazione emotiva. Dormire meglio non significa solo riposare: significa recuperare lucidit\u00e0, energia e una sensazione pi\u00f9 stabile di sicurezza interna.',
    ],
  },
  {
    slug: 'burnout-lavoro-italia',
    date: '24 aprile 2026',
    publishedAt: '2026-04-24T00:00:00.000Z',
    readTime: '6 min',
    title: 'Burnout sul lavoro: cos\'\u00e8, segnali e quando intervenire',
    excerpt:
      'Dalla fatica cronica al distacco: come riconoscere il burnout lavorativo in Italia oggi e cosa pu\u00f2 fare la psicologia prima che la situazione si consolidi.',
    tags: ['Stress', 'Lavoro'],
    content: [
      'Negli ultimi anni, in Italia come altrove, si parla sempre pi\u00f9 spesso di burnout lavorativo. Non \u00e8 una moda da ufficio: \u00e8 un esaurimento prolungato in cui energia, motivazione e senso di competenza calano insieme, spesso dopo periodi di carico elevato, incertezza organizzativa o difficolt\u00e0 a recuperare davvero durante il tempo libero.',
      { type: 'h2', text: 'Come si sviluppa il burnout' },
      'Il burnout non coincide con un periodo stressante che si risolve in un weekend. Tende a installarsi nel tempo: all\'inizio si d\u00e0 tutto, ci si sente indispensabili, si accettano ritmi sostenibili solo a breve. Poi compaiono irritabilit\u00e0, insonnia o sonno non riparatore, difficolt\u00e0 di concentrazione, cinismo verso il lavoro o verso colleghi e clienti, e la sensazione di non ottenere mai risultati "abbastanza" buoni.',
      { type: 'h2', text: 'I segnali da osservare' },
      'Alcuni segnali utili da osservare nel tempo:',
      {
        type: 'list',
        items: [
          'iniziare la giornata gi\u00e0 stanchi',
          'evitare compiti che prima erano gestibili',
          'aumento degli errori o della lentezza nonostante lo sforzo',
          'mal di testa o tensioni muscolari ricorrenti',
          'isolamento relazionale e pensieri sul lavoro anche fuori orario',
        ],
      },
      'Se questi elementi durano settimane e condizionano la vita privata, vale la pena prenderli sul serio.',
      { type: 'h2', text: 'Perch\u00e9 succede' },
      'In contesti italiani spesso convivono smart working, trasferte, turni e aspettative di disponibilit\u00e0 costante: tutto ci\u00f2 pu\u00f2 amplificare la difficolt\u00e0 a mettere confini chiari tra attivit\u00e0 professionale e recupero psicofisico. Il burnout non dipende dalla "debolezza" della persona: nasce da un equilibrio sfasato tra richieste, risorse e riconoscimento.',
      { type: 'h2', text: 'I primi passi' },
      'I primi passi non sono solo "staccare di pi\u00f9", che spesso non basta se il carico resta strutturale. Pu\u00f2 aiutare ridefinire priorit\u00e0 realistiche, recuperare momenti di disconnessione veri (non solo pausa con lo smartphone), parlarne con il medico di base se compaiono sintomi fisici importanti e valutare con la propria azienda eventuali aggiustamenti, dove possibile.',
      { type: 'h2', text: 'Il ruolo del percorso psicologico' },
      'Un percorso psicologico affianca queste scelte: serve a mettere ordine tra emozioni, senso di colpa e paure legate alla performance, e a costruire strategie pi\u00f9 stabili di regolazione dello stress. Intervenire prima che il burnout diventi cronico di solito rende il recupero pi\u00f9 rapido e la ripresa di energia pi\u00f9 credibile.',
    ],
  },
  {
    slug: 'dipendenza-affettiva',
    date: '7 aprile 2026',
    publishedAt: '2026-04-07T00:00:00.000Z',
    readTime: '7 min',
    title: 'Dipendenza affettiva: quando l\'amore diventa un bisogno',
    excerpt:
      'Riconoscere i segnali della dipendenza affettiva, capire da dove nasce e quali sono i primi passi per ritrovare un equilibrio nelle relazioni.',
    tags: ['Relazioni', 'Dipendenza affettiva'],
    content: [
      'Capita a tutti, prima o poi, di provare un forte attaccamento verso qualcuno. Ma quando il legame con l\'altra persona diventa l\'unica fonte di sicurezza, e la sua assenza genera un vuoto insostenibile, si pu\u00f2 parlare di dipendenza affettiva.',
      { type: 'h2', text: 'Non \u00e8 amare troppo' },
      'Non si tratta di amare troppo. Si tratta di sentire che senza l\'altro non si \u00e8 abbastanza, di cercare conferme continue, di adattare i propri bisogni per paura di perdere la relazione. Chi vive questa condizione spesso lo fa in silenzio, confondendo la sofferenza con l\'intensit\u00e0 dell\'amore.',
      { type: 'h2', text: 'I segnali pi\u00f9 frequenti' },
      'Tra i segnali che si ripetono pi\u00f9 spesso:',
      {
        type: 'list',
        items: [
          'difficolt\u00e0 a prendere decisioni senza il parere del partner',
          'paura costante di essere lasciati',
          'rinuncia ai propri interessi e alle amicizie per assecondare l\'altro',
          'senso di vuoto o ansia quando si \u00e8 da soli',
        ],
      },
      { type: 'h2', text: 'Da dove nasce' },
      'La dipendenza affettiva ha spesso radici nella storia personale: esperienze di trascuratezza emotiva nell\'infanzia, modelli familiari instabili, o relazioni passate in cui il valore personale era condizionato dal comportamento dell\'altro. Non \u00e8 una colpa: \u00e8 un modo che la mente ha trovato per proteggersi dal dolore della solitudine.',
      { type: 'h2', text: 'I primi passi' },
      'Il primo passo \u00e8 riconoscere il meccanismo. Non per giudicarsi, ma per capire che la relazione con s\u00e9 stessi \u00e8 la base da cui partire. Un percorso psicologico pu\u00f2 aiutare a esplorare queste dinamiche in modo sicuro: comprendere da dove nasce il bisogno, distinguere tra amore e dipendenza, e costruire gradualmente un\'autonomia emotiva che non escluda la vicinanza, ma la renda pi\u00f9 libera.',
      'Se ti riconosci in queste parole, sappi che chiedere aiuto non significa essere deboli. Significa voler stare meglio nelle relazioni a partire da quella con te stessa/o.',
    ],
  },
  {
    slug: 'ruminazione-mentale-overthinking',
    date: '24 marzo 2026',
    publishedAt: '2026-03-24T00:00:00.000Z',
    readTime: '6 min',
    title: 'Ruminazione mentale e overthinking: segnali e come fermarsi',
    excerpt:
      'Il rimuginio mentale pu\u00f2 consumare energie e lucidit\u00e0. Una guida pratica per riconoscerlo e interrompere il circolo.',
    tags: ['Benessere emotivo', 'Overthinking'],
    content: [
      'Ripensare a una conversazione per ore, immaginare scenari futuri catastrofici, analizzare ogni dettaglio di una situazione cercando la risposta perfetta: se ti succede spesso, probabilmente conosci bene il rimuginio mentale.',
      { type: 'h2', text: 'Cos\'\u00e8 l\'overthinking' },
      'L\'overthinking non \u00e8 semplice preoccupazione. \u00c8 un circolo in cui la mente torna sugli stessi pensieri senza raggiungere una conclusione. Invece di risolvere il problema, lo ingigantisce. Il risultato \u00e8 spesso stanchezza, difficolt\u00e0 a dormire e una sensazione di paralisi nelle decisioni.',
      { type: 'h2', text: 'Le due forme del rimuginio' },
      'Esistono due forme principali. Il rimuginio retrospettivo guarda al passato: "Avrei dovuto dire un\'altra cosa", "Ho sbagliato tutto". La preoccupazione anticipatoria guarda al futuro: "E se va male?", "E se non ce la faccio?". Entrambe condividono la stessa trappola: danno l\'illusione di avere il controllo, ma in realt\u00e0 lo tolgono.',
      { type: 'h2', text: 'I segnali da osservare' },
      'Alcuni segnali da osservare:',
      {
        type: 'list',
        items: [
          'passare molto tempo a pensare senza arrivare a una decisione',
          'sentirsi mentalmente esausti anche senza fatica fisica',
          'difficolt\u00e0 ad addormentarsi perch\u00e9 la mente non si ferma',
          'cercare rassicurazioni continue dagli altri',
        ],
      },
      { type: 'h2', text: 'Come fermarsi' },
      'Fermare il rimuginio non significa smettere di pensare. Significa imparare a riconoscere quando il pensiero \u00e8 diventato una trappola e non uno strumento. Alcune strategie utili: scrivere i pensieri per "svuotare" la mente, darsi un tempo limitato per riflettere su una questione, e soprattutto tornare al presente attraverso l\'attenzione alle sensazioni fisiche.',
      { type: 'h2', text: 'Quando chiedere aiuto' },
      'Quando il rimuginio diventa una costante e influenza la qualit\u00e0 della vita, un percorso psicologico pu\u00f2 aiutare a comprenderne le radici e a sviluppare strumenti concreti per interrompere il circolo.',
    ],
  },
  {
    slug: 'stanchezza-emotiva',
    date: '2 marzo 2026',
    publishedAt: '2026-03-02T00:00:00.000Z',
    readTime: '6 min',
    title: 'Stanchezza emotiva: segnali, cause e primi passi utili',
    excerpt:
      'Quando la fatica emotiva dura da tempo, pu\u00f2 influenzare sonno, relazioni e lucidit\u00e0.',
    tags: ['Benessere emotivo', 'Stress'],
    content: [
      'Ci sono periodi in cui tutto sembra richiedere uno sforzo sproporzionato. Non si tratta di stanchezza fisica: le ore di sonno possono essere sufficienti, eppure ci si sveglia gi\u00e0 senza energia. La motivazione cala, le relazioni pesano, e anche piccole decisioni quotidiane diventano faticose.',
      { type: 'h2', text: 'Cos\'\u00e8 la stanchezza emotiva' },
      'La stanchezza emotiva \u00e8 il risultato di un sovraccarico prolungato. Pu\u00f2 nascere da situazioni lavorative stressanti, difficolt\u00e0 relazionali, un lutto non elaborato, o semplicemente dall\'accumulo di tante piccole tensioni che non trovano sfogo.',
      { type: 'h2', text: 'I segnali pi\u00f9 comuni' },
      'I segnali pi\u00f9 comuni includono:',
      {
        type: 'list',
        items: [
          'irritabilit\u00e0 insolita',
          'distacco emotivo dalle persone care',
          'difficolt\u00e0 di concentrazione',
          'sensazione di vuoto o apatia',
          'disturbi del sonno e calo di interesse per ci\u00f2 che prima dava piacere',
        ],
      },
      { type: 'h2', text: 'Il senso di colpa' },
      'Uno degli aspetti pi\u00f9 insidiosi \u00e8 che chi vive questa condizione spesso si sente in colpa. "Non ho motivo di stare cos\u00ec", "Altri stanno peggio". Ma la stanchezza emotiva non ha bisogno di giustificazioni: \u00e8 un segnale che il corpo e la mente stanno chiedendo attenzione.',
      { type: 'h2', text: 'Primi passi utili' },
      'I primi passi utili includono: ridurre dove possibile gli impegni non essenziali, parlare con qualcuno di fiducia di come ci si sente, e soprattutto non aspettare che la situazione si risolva da sola. Se la stanchezza emotiva dura da settimane e influenza il funzionamento quotidiano, pu\u00f2 essere il momento di affidarsi a un percorso psicologico per comprendere cosa la mantiene e come recuperare energia e chiarezza.',
    ],
  },
  {
    slug: 'autostima-bassa',
    date: '16 febbraio 2026',
    publishedAt: '2026-02-16T00:00:00.000Z',
    readTime: '7 min',
    title: 'Autostima bassa: segnali, errori comuni e percorso psicologico',
    excerpt:
      'Come riconoscere autosvalutazione e paura del giudizio, con primi passi concreti.',
    tags: ['Autostima', 'Benessere emotivo'],
    content: [
      'L\'autostima \u00e8 il modo in cui ci percepiamo: il valore che ci attribuiamo, la fiducia nelle nostre capacit\u00e0, la convinzione di meritare rispetto e affetto. Quando \u00e8 bassa, ogni aspetto della vita quotidiana ne risente.',
      { type: 'h2', text: 'Come si riconosce la bassa autostima' },
      'Chi convive con una bassa autostima spesso non se ne rende conto in modo chiaro. Alcuni segnali ricorrenti:',
      {
        type: 'list',
        items: [
          'difficolt\u00e0 ad accettare complimenti',
          'tendenza a paragonarsi costantemente agli altri',
          'paura intensa del giudizio',
          'rinuncia a opportunit\u00e0 per paura di fallire',
          'difficolt\u00e0 a porre dei limiti nelle relazioni',
        ],
      },
      { type: 'h2', text: 'L\'errore pi\u00f9 comune' },
      'Un errore comune \u00e8 pensare che l\'autostima dipenda dai risultati. "Quando raggiunger\u00f2 quel traguardo, star\u00f2 meglio". In realt\u00e0, il meccanismo funziona al contrario: \u00e8 la percezione di s\u00e9 che condiziona il modo in cui si affrontano le sfide, non viceversa.',
      { type: 'h2', text: 'Autostima e sicurezza non sono la stessa cosa' },
      'Un altro malinteso frequente riguarda la differenza tra autostima e sicurezza di s\u00e9. Si pu\u00f2 apparire sicuri e competenti all\'esterno, ma sentirsi profondamente inadeguati dentro. Questa discrepanza genera una fatica invisibile che nel tempo pu\u00f2 portare a burnout, ansia o ritiro sociale.',
      { type: 'h2', text: 'Da dove nasce' },
      'La bassa autostima ha quasi sempre radici nella storia personale: messaggi ricevuti durante l\'infanzia, esperienze di svalutazione, confronti sistematici con fratelli o compagni, oppure un ambiente familiare in cui l\'errore veniva vissuto come fallimento.',
      { type: 'h2', text: 'Il percorso psicologico' },
      'Un percorso psicologico non punta a "gonfiare" l\'autostima con frasi motivazionali. Il lavoro \u00e8 pi\u00f9 profondo: esplorare come si \u00e8 costruita questa immagine di s\u00e9, riconoscere le convinzioni che la mantengono, e sperimentare gradualmente un modo diverso di guardarsi, pi\u00f9 realistico e pi\u00f9 compassionevole.',
    ],
  },
  {
    slug: 'social-network-adolescenza',
    date: '9 febbraio 2026',
    publishedAt: '2026-02-09T00:00:00.000Z',
    readTime: '6 min',
    title: 'Social network e adolescenza: rischi, segnali e strategie',
    excerpt:
      'Come i social influenzano autostima, relazioni e sonno nei pi\u00f9 giovani.',
    tags: ['Adolescenza', 'Social network'],
    content: [
      'I social network fanno parte della vita quotidiana degli adolescenti. Non si tratta di demonizzarli, ma di comprendere il loro impatto su una fase della vita in cui l\'identit\u00e0 \u00e8 ancora in costruzione e il bisogno di appartenenza \u00e8 fortissimo.',
      { type: 'h2', text: 'L\'impatto dei social in adolescenza' },
      'La ricerca scientifica evidenzia che un uso eccessivo dei social pu\u00f2 influenzare negativamente l\'autostima, la qualit\u00e0 del sonno, la capacit\u00e0 di concentrazione e la percezione del proprio corpo. Il confronto costante con immagini filtrate e vite apparentemente perfette alimenta un senso di inadeguatezza che molti adolescenti faticano a gestire.',
      { type: 'h2', text: 'I segnali a cui prestare attenzione' },
      'Alcuni segnali a cui prestare attenzione:',
      {
        type: 'list',
        items: [
          'cambiamenti improvvisi nell\'umore dopo l\'uso dei social',
          'isolamento dalle relazioni di persona',
          'preoccupazione eccessiva per "like" e commenti',
          'difficolt\u00e0 ad addormentarsi per lo smartphone a letto',
          'calo nel rendimento scolastico',
        ],
      },
      { type: 'h2', text: 'Come comportarsi come genitori' },
      'Come genitori, la reazione pi\u00f9 naturale \u00e8 vietare o controllare. Ma l\'approccio pi\u00f9 efficace \u00e8 diverso: mantenere aperto il dialogo, mostrare interesse genuino per il mondo digitale dei figli, e aiutarli a sviluppare un pensiero critico rispetto a ci\u00f2 che vedono online.',
      { type: 'h2', text: 'Strategie concrete' },
      'Alcune strategie concrete: stabilire insieme delle regole sull\'uso (non imposte dall\'alto), creare momenti quotidiani senza dispositivi, e soprattutto essere un modello coerente, difficile chiedere a un adolescente di staccarsi dal telefono se noi stessi siamo sempre connessi.',
      { type: 'h2', text: 'Quando rivolgersi a un professionista' },
      'Se un adolescente mostra segni di disagio legati ai social, ritiro sociale, ansia, disturbi alimentari, autolesionismo, \u00e8 importante non minimizzare e valutare un confronto con un professionista.',
    ],
  },
  {
    slug: 'ansia-attacchi-panico',
    date: '6 febbraio 2026',
    publishedAt: '2026-02-06T00:00:00.000Z',
    readTime: '6 min',
    title: 'Ansia e attacchi di panico: quando chiedere aiuto',
    excerpt:
      'Segnali, falsi miti e primi passi concreti per capire quando \u00e8 utile un supporto psicologico.',
    tags: ['Ansia', 'Attacchi di panico'],
    content: [
      'L\'ansia \u00e8 una risposta naturale del corpo. Diventa un problema quando \u00e8 sproporzionata rispetto alla situazione, si presenta senza un motivo apparente, oppure diventa cos\u00ec intensa da limitare la vita quotidiana.',
      { type: 'h2', text: 'Cos\'\u00e8 un attacco di panico' },
      'Un attacco di panico \u00e8 un\'esperienza spaventante: tachicardia, sensazione di soffocamento, tremori, vertigini, paura di morire o di perdere il controllo. Chi lo vive per la prima volta spesso pensa di avere un infarto. La paura che possa ripetersi genera un circolo vizioso: l\'ansia dell\'ansia.',
      { type: 'h2', text: 'I falsi miti sull\'ansia' },
      'Ci sono diversi falsi miti sull\'ansia che \u00e8 importante sfatare. "L\'ansia \u00e8 solo una questione di volont\u00e0": no, \u00e8 una condizione che coinvolge corpo e mente. "Se non ho un motivo valido non posso stare in ansia": l\'ansia pu\u00f2 manifestarsi anche in assenza di cause evidenti. "Basta distrarsi e passa": le strategie di evitamento funzionano nel breve periodo, ma mantengono il problema.',
      { type: 'h2', text: 'Quando chiedere aiuto' },
      'Alcuni segnali che suggeriscono di chiedere supporto:',
      {
        type: 'list',
        items: [
          'evitare situazioni per paura che scatenino ansia',
          'difficolt\u00e0 a svolgere le attivit\u00e0 quotidiane',
          'disturbi del sonno persistenti',
          'tensione muscolare cronica',
          'la sensazione che l\'ansia occupi sempre pi\u00f9 spazio nella vita',
        ],
      },
      { type: 'h2', text: 'Come funziona un percorso per l\'ansia' },
      'Un percorso psicologico per l\'ansia non si limita a insegnare tecniche di rilassamento. Lavora sulle radici: comprendere cosa alimenta l\'ansia, quali pensieri e situazioni la attivano, e come il corpo e la mente possono imparare a regolarla in modo pi\u00f9 efficace.',
      'L\'ansia si pu\u00f2 affrontare. Non serve aspettare che diventi insostenibile per chiedere aiuto: prima si interviene, pi\u00f9 veloce \u00e8 il percorso.',
    ],
  },
  {
    slug: 'terapia-di-coppia',
    date: '6 febbraio 2026',
    publishedAt: '2026-02-06T00:00:00.000Z',
    readTime: '5 min',
    title: 'Terapia di coppia: segnali precoci e cosa aspettarsi dal primo colloquio',
    excerpt:
      'Quando \u00e8 utile chiedere un supporto di coppia e come si svolge il primo incontro.',
    tags: ['Coppia', 'Relazioni'],
    content: [
      'La terapia di coppia non \u00e8 l\'ultimo tentativo prima della separazione. Al contrario, funziona meglio quando si interviene presto, prima che le incomprensioni si cristallizzino in rancori profondi.',
      { type: 'h2', text: 'Quando pu\u00f2 servire un supporto di coppia' },
      'Alcuni segnali che indicano che potrebbe essere utile un supporto:',
      {
        type: 'list',
        items: [
          'litigare sempre sugli stessi temi senza arrivare a una soluzione',
          'sentirsi distanti emotivamente pur vivendo sotto lo stesso tetto',
          'difficolt\u00e0 a comunicare bisogni e aspettative',
          'la sensazione che la relazione sia pi\u00f9 fonte di stress che di supporto',
        ],
      },
      { type: 'h2', text: 'Non \u00e8 un tribunale' },
      'Spesso le coppie arrivano in studio con l\'idea di capire "chi ha ragione". In realt\u00e0, la terapia di coppia non funziona come un tribunale. L\'obiettivo \u00e8 comprendere il funzionamento della relazione: quali dinamiche si ripetono, come ciascuno contribuisce al problema, e cosa si pu\u00f2 cambiare.',
      { type: 'h2', text: 'Come si svolge il primo colloquio' },
      'Il primo colloquio \u00e8 un momento di conoscenza reciproca. La terapeuta ascolta entrambi i partner, esplora la storia della coppia, e insieme si definiscono gli obiettivi del percorso. Non ci sono giudizi, non si prende le parti di nessuno.',
      '\u00c8 normale sentirsi a disagio all\'idea di parlare dei propri problemi di coppia davanti a un estraneo. Ma nella maggior parte dei casi, dopo il primo incontro, entrambi i partner riferiscono di sentirsi pi\u00f9 leggeri per aver finalmente trovato uno spazio dove poter parlare apertamente.',
      { type: 'h2', text: 'Quanto dura il percorso' },
      'La durata del percorso varia: alcune coppie beneficiano di pochi incontri focalizzati, altre richiedono un lavoro pi\u00f9 lungo. L\'importante \u00e8 la disponibilit\u00e0 di entrambi a mettersi in gioco.',
    ],
  },
];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export interface ArticleHero {
  src: string;
  alt: string;
}

const articleHeroes: Record<string, ArticleHero> = {
  'ansia-sociale-timidezza': {
    src: '/assets/approfondimenti/approfondimenti-ansia-sociale.webp',
    alt: 'Ansia sociale: disagio in contesti con altre persone e paura del giudizio',
  },
  'perfezionismo-ansia-da-prestazione': {
    src: '/assets/approfondimenti/approfondimenti-perfezionismo.webp',
    alt: 'Perfezionismo e ansia da prestazione: pressione di dover fare tutto bene',
  },
  'insonnia-ansia-sonno': {
    src: '/assets/approfondimenti/approfondimenti-insonnia.webp',
    alt: 'Insonnia e ansia la sera: mente attiva quando il corpo è stanco',
  },
  'burnout-lavoro-italia': {
    src: '/assets/approfondimenti/approfondimenti-burnout.webp',
    alt: 'Segni di burnout sul lavoro: fatica e bisogno di pausa',
  },
  'dipendenza-affettiva': {
    src: '/assets/approfondimenti/approfondimenti-dipendenza-affettiva.webp',
    alt: 'Dipendenza affettiva: legami stretti e paura di perdere l\'altro',
  },
  'ruminazione-mentale-overthinking': {
    src: '/assets/approfondimenti/approfondimenti-ruminazione.webp',
    alt: 'Ruminazione mentale: pensieri che girano senza trovare una uscita',
  },
  'stanchezza-emotiva': {
    src: '/assets/approfondimenti/approfondimenti-stanchezza-emotiva.webp',
    alt: 'Stanchezza emotiva: esaurimento che non passa con il solo riposo',
  },
  'autostima-bassa': {
    src: '/assets/approfondimenti/approfondimenti-autostima.webp',
    alt: 'Autostima bassa: fatica a riconoscere il proprio valore',
  },
  'social-network-adolescenza': {
    src: '/assets/approfondimenti/approfondimenti-adolescenza-social.webp',
    alt: 'Adolescenti e social: equilibrio tra mondo digitale e benessere',
  },
  'ansia-attacchi-panico': {
    src: '/assets/approfondimenti/approfondimenti-ansia-panico.webp',
    alt: 'Ansia e attacchi di panico: corpo in allerta e bisogno di calma',
  },
  'terapia-di-coppia': {
    src: '/assets/approfondimenti/approfondimenti-terapia-coppia.webp',
    alt: 'Terapia di coppia: spazio per parlarsi e ritrovare dialogo',
  },
};

const defaultHero: ArticleHero = {
  src: '/assets/approfondimenti/approfondimenti-perfezionismo.webp',
  alt: 'Approfondimento di psicologia e benessere emotivo',
};

export function getArticleHero(slug: string): ArticleHero {
  return articleHeroes[slug] ?? defaultHero;
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];

  const scored = articles
    .filter((a) => a.slug !== slug)
    .map((a) => ({
      article: a,
      score: a.tags.filter((tag) => current.tags.includes(tag)).length,
    }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return (
        new Date(b.article.publishedAt).getTime() -
        new Date(a.article.publishedAt).getTime()
      );
    });

  const withSharedTags = scored.filter(({ score }) => score > 0).slice(0, limit);
  if (withSharedTags.length >= limit) {
    return withSharedTags.map(({ article }) => article);
  }

  const usedSlugs = new Set([slug, ...withSharedTags.map(({ article }) => article.slug)]);
  const fallback = scored
    .filter(({ article }) => !usedSlugs.has(article.slug))
    .slice(0, limit - withSharedTags.length);

  return [...withSharedTags, ...fallback].map(({ article }) => article);
}
