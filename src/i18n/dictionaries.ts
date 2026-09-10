import type { Locale } from "./config";

const lorem =
  "Lorem ipsum dolor sit amet consectetur. Consectetur sit magna eget ac turpis. Nunc vulputate lectus ac posuere iaculis aliquam.";

const enAnswer =
  "TÓKI helps businesses develop, source and optimise physical products, packaging and the entire value chain around them, from the initial idea through to production implementation.";

const isAnswer =
  "TÓKI hjálpar fyrirtækjum að þróa, útvega og hámarka áþreifanlegar vörur, umbúðir og alla virðiskeðjuna í kringum þær – frá fyrstu hugmynd til framleiðslu.";

const en = {
  meta: {
    title: "TÓKI — A partner from idea to impact",
    description:
      "TÓKI helps businesses develop, source and optimise physical products, packaging and the entire value chain around them.",
  },
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    book: "Book",
    main: "Main",
    mobile: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    changeLanguage: "Change language",
    homeLink: "TÓKI home",
  },
  footer: {
    contact: "Contact us",
    follow: "Follow Tóki",
    homeLink: "TÓKI home",
  },
  hero: {
    headline: "From product to end customer, we connect every link in your value chain",
    bookMeeting: "Book a meeting",
    ourServices: "Our services",
    imageAlt: "TÓKI product and packaging work",
  },
  marquee: {
    label: "What we do",
    items: ["Concepting", "Production", "Sourcing", "Packaging", "Strategy", "Product"],
  },
  faq: {
    title: "FAQ",
    subtitle: "Got questions?",
    emphasis: "We got you.",
    talkTitle: "Still have a question?",
    talkCaption: "Let's talk",
    items: [
      { question: "What exactly does TÓKI do?", answer: enAnswer },
      { question: "Is TÓKI a packaging agency?", answer: enAnswer },
      {
        question: "Do I need to know exactly what I need before working with TÓKI?",
        answer: enAnswer,
      },
      { question: "At what stage can I bring TÓKI in?", answer: enAnswer },
      { question: "Does TÓKI only work with large companies?", answer: enAnswer },
    ],
  },
  partners: {
    label: "Partners we work with",
  },
  manifesto: {
    heading: "A partner from idea to impact.",
    statement:
      "We combine strategy, sourcing, production and packaging to create solutions that work — for people, businesses and the planet.",
    scriptLine1: "Creative solutions",
    scriptLine2: "real impact.",
    learnMore: "Learn more about TÓKI",
  },
  about: {
    metaTitle: "About",
    metaDescription:
      "TÓKI believes that products, packaging, suppliers and logistics are never isolated subjects.",
    eyebrow: "About",
    brand: "Tóki",
    heroAlt: "The TÓKI team working around a table of sketches",
    intro: [
      "At TÓKI, we believe that products, packaging, suppliers and logistics are never isolated subjects. A decision made at one end of the chain will always have an impact on the rest.",
      "That is why we do not offer a standardised methodology. Every project starts with a conversation about your challenge or opportunity. From there, we identify where TÓKI can create real value and what the right next step should be.",
      "Our role is not to look at design, sourcing or production in isolation. It is to understand how each decision affects the entire value chain, and to bring together the right expertise and partners to move a project forward, from idea to implementation.",
    ],
    founderHeading: "Meet the founder",
    founderAlt: "Portrait of the TÓKI founder",
    belief: "We believe that great ideas can create real impact.",
    lorem,
    bookMeeting: "Book a meeting",
  },
  services: {
    metaTitle: "Services",
    metaDescription:
      "Strategy, product, sourcing, packaging and production — TÓKI connects every link in your value chain.",
    heading: "How we work with Tóki",
    categories: "Service categories",
    show: "Show {name}",
    panelAlt: "{name} at TÓKI",
    logosAlt: "Sustainable options. Creative structures. From concept to production.",
    items: [
      { number: "01", name: "Strategy" },
      { number: "02", name: "Product" },
      { number: "03", name: "Packaging" },
      { number: "04", name: "Sourcing" },
      { number: "05", name: "Production" },
    ],
    blurb: lorem,
    notSure: "Not sure what you need?",
    letsTalk: "Let's talk.",
    thatsOkay: "That’s okay. Start with the idea. We’ll help with the rest.",
    bookMeeting: "Book a meeting",
  },
  book: {
    metaTitle: "Start a project",
    metaDescription:
      "Book a consultation with TÓKI and tell us about your challenge. Every project starts with a conversation.",
    heading: "Start a project",
    consultation: "Book a consultation",
    contact: "Contact",
    connect: "Let’s connect",
    form: {
      name: "Name",
      email: "Email",
      number: "Number",
      message: "Message",
      submit: "Find appointment",
      thanksTitle: "Thanks — we’ll be in touch.",
      thanksBody:
        "This prototype does not send anything yet. Connect a form handler to start receiving enquiries.",
      sendAnother: "Send another",
    },
  },
};

export type Dictionary = typeof en;

const is: Dictionary = {
  meta: {
    title: "TÓKI — Samstarfsaðili frá hugmynd til áhrifa",
    description:
      "TÓKI hjálpar fyrirtækjum að þróa, útvega og hámarka áþreifanlegar vörur, umbúðir og alla virðiskeðjuna í kringum þær.",
  },
  nav: {
    home: "Heim",
    about: "Um okkur",
    services: "Þjónusta",
    book: "Bóka",
    main: "Aðalvalmynd",
    mobile: "Farsímavalmynd",
    openMenu: "Opna valmynd",
    closeMenu: "Loka valmynd",
    changeLanguage: "Skipta um tungumál",
    homeLink: "Forsíða TÓKI",
  },
  footer: {
    contact: "Hafðu samband",
    follow: "Fylgdu Tóka",
    homeLink: "Forsíða TÓKI",
  },
  hero: {
    headline:
      "Frá vöru til endanlegs viðskiptavinar – við tengjum hvern hlekk í virðiskeðjunni þinni",
    bookMeeting: "Bóka fund",
    ourServices: "Þjónustan okkar",
    imageAlt: "Vöru- og umbúðavinna TÓKI",
  },
  marquee: {
    label: "Það sem við gerum",
    items: ["Hugmyndavinna", "Framleiðsla", "Innkaup", "Umbúðir", "Stefnumótun", "Vara"],
  },
  faq: {
    title: "Spurt og svarað",
    subtitle: "Ertu með spurningar?",
    emphasis: "Við svörum.",
    talkTitle: "Ertu enn með spurningu?",
    talkCaption: "Tölum saman",
    items: [
      { question: "Hvað gerir TÓKI nákvæmlega?", answer: isAnswer },
      { question: "Er TÓKI umbúðastofa?", answer: isAnswer },
      {
        question: "Þarf ég að vita nákvæmlega hvað ég þarf áður en ég vinn með TÓKI?",
        answer: isAnswer,
      },
      { question: "Á hvaða stigi get ég fengið TÓKI inn í verkefnið?", answer: isAnswer },
      { question: "Vinnur TÓKI eingöngu með stórum fyrirtækjum?", answer: isAnswer },
    ],
  },
  partners: {
    label: "Samstarfsaðilar okkar",
  },
  manifesto: {
    heading: "Samstarfsaðili frá hugmynd til áhrifa.",
    statement:
      "Við sameinum stefnumótun, innkaup, framleiðslu og umbúðir til að skapa lausnir sem virka – fyrir fólk, fyrirtæki og jörðina.",
    scriptLine1: "Skapandi lausnir",
    scriptLine2: "raunveruleg áhrif.",
    learnMore: "Kynntu þér TÓKI",
  },
  about: {
    metaTitle: "Um okkur",
    metaDescription:
      "TÓKI trúir því að vörur, umbúðir, birgjar og flutningar séu aldrei einangruð viðfangsefni.",
    eyebrow: "Um",
    brand: "Tóka",
    heroAlt: "Teymi TÓKI við vinnu yfir skissum",
    intro: [
      "Hjá TÓKI trúum við því að vörur, umbúðir, birgjar og flutningar séu aldrei einangruð viðfangsefni. Ákvörðun sem tekin er á einum enda keðjunnar hefur alltaf áhrif á allt hitt.",
      "Þess vegna bjóðum við ekki upp á staðlaða aðferðafræði. Hvert verkefni hefst á samtali um áskorunina eða tækifærið sem þú stendur frammi fyrir. Út frá því finnum við hvar TÓKI getur skapað raunverulegt virði og hvert rétta næsta skrefið er.",
      "Hlutverk okkar er ekki að horfa á hönnun, innkaup eða framleiðslu í einangrun, heldur að skilja hvernig hver ákvörðun hefur áhrif á alla virðiskeðjuna og leiða saman rétta sérþekkingu og samstarfsaðila til að koma verkefninu áfram – frá hugmynd til framkvæmdar.",
    ],
    founderHeading: "Kynnstu stofnandanum",
    founderAlt: "Portrettmynd af stofnanda TÓKI",
    belief: "Við trúum því að góðar hugmyndir geti haft raunveruleg áhrif.",
    lorem,
    bookMeeting: "Bóka fund",
  },
  services: {
    metaTitle: "Þjónusta",
    metaDescription:
      "Stefnumótun, vara, innkaup, umbúðir og framleiðsla – TÓKI tengir hvern hlekk í virðiskeðjunni þinni.",
    heading: "Svona vinnum við með Tóka",
    categories: "Þjónustuflokkar",
    show: "Sýna {name}",
    panelAlt: "{name} hjá TÓKI",
    logosAlt: "Sjálfbærir valkostir. Skapandi lausnir. Frá hugmynd til framleiðslu.",
    items: [
      { number: "01", name: "Stefnumótun" },
      { number: "02", name: "Vara" },
      { number: "03", name: "Umbúðir" },
      { number: "04", name: "Innkaup" },
      { number: "05", name: "Framleiðsla" },
    ],
    blurb: lorem,
    notSure: "Óviss um hvað þú þarft?",
    letsTalk: "Tölum saman.",
    thatsOkay: "Það er allt í lagi. Byrjaðu á hugmyndinni. Við hjálpum með restina.",
    bookMeeting: "Bóka fund",
  },
  book: {
    metaTitle: "Hefjum verkefni",
    metaDescription:
      "Bókaðu ráðgjöf hjá TÓKI og segðu okkur frá áskoruninni. Hvert verkefni hefst á samtali.",
    heading: "Hefjum verkefni",
    consultation: "Bóka ráðgjöf",
    contact: "Hafðu samband",
    connect: "Tengjumst",
    form: {
      name: "Nafn",
      email: "Netfang",
      number: "Símanúmer",
      message: "Skilaboð",
      submit: "Finna tíma",
      thanksTitle: "Takk – við höfum samband.",
      thanksBody:
        "Þessi frumgerð sendir ekkert ennþá. Tengdu formið við póstþjónustu til að taka á móti fyrirspurnum.",
      sendAnother: "Senda aðra",
    },
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, is };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
