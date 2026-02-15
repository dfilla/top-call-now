import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA_URL = "https://res-qr.de/shop/rettungskarten.nsf/gutscheinanforderung2?open&pk_campaign=Kommune";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const articles = [
  {
    category: "Feuerwehr",
    date: "12. Januar 2026",
    author: "Ein Zugführer",
    role: "Freiwillige Feuerwehr im Rhein-Main-Gebiet",
    title: "\u201EDer QR-Code hat uns bei einem Hybrid-Unfall entscheidende Minuten gespart\u201C",
    excerpt:
      "Bei einem schweren Auffahrunfall auf der B26 war das verunfallte Fahrzeug ein Plug-in-Hybrid. Normalerweise h\u00E4tten wir erst die Rettungskarte manuell zuordnen m\u00FCssen \u2013 Fahrzeugtyp bestimmen, Modellreihe abgleichen, Karte aus dem Ordner suchen. Dank des RES-QR-Etiketts auf der B-S\u00E4ule hatte unser Angriffstrupp die Rettungskarte in Sekunden auf dem Tablet.",
    content: [
      "Die Karte zeigte sofort die Hochvoltleitungen in Orange \u2013 so konnten wir sicher schneiden und den Fahrer befreien, ohne Gefahr f\u00FCr die Einsatzkr\u00E4fte. Bei Hybrid- und E-Fahrzeugen ist die korrekte Zuordnung \u00FCberlebenswichtig. Ein falscher Schnitt in eine Hochvoltleitung kann t\u00F6dlich enden.",
      "Seit wir die RES-QR-Etiketten bei unserer Wehr aktiv empfehlen, haben wir bei mehreren Eins\u00E4tzen messbar Zeit gespart. Ich kann jedem Fahrzeughalter nur raten: Investiert diese 10 Euro \u2013 es kann euer Leben retten.",
    ],
  },
  {
    category: "Autohaus",
    date: "3. Februar 2026",
    author: "Eine Serviceleiterin",
    role: "Autohaus in Stuttgart",
    title: "\u201EWir bieten RES-QR bei jeder Fahrzeug\u00FCbergabe an \u2013 der Aufwand ist minimal\u201C",
    excerpt:
      "Als Autohaus mit \u00FCber 800 Auslieferungen pro Jahr haben wir nach einer einfachen M\u00F6glichkeit gesucht, unseren Kunden einen echten Sicherheitsmehrwert zu bieten. RES-QR war die perfekte L\u00F6sung: Wir bestellen die Etiketten online, meist sind sie am n\u00E4chsten Tag schon da.",
    content: [
      "Die Abwicklung k\u00F6nnte einfacher nicht sein: Im Shop die Fahrzeuge nach FIN oder Modell anlegen, bestellen, fertig. Die Etiketten kommen einzeln verpackt mit einer kurzen Anleitung. Unser Werkstatt-Team bringt sie bei der Fahrzeug\u00FCbergabe in weniger als zwei Minuten an \u2013 Windschutzscheibe, Tankdeckel, B-S\u00E4ule.",
      "Unsere Kunden sind begeistert. Viele kennen das Thema Rettungskarte gar nicht und sind \u00FCberrascht, wie einfach die L\u00F6sung ist. F\u00FCr uns ist es ein echtes Differenzierungsmerkmal gegen\u00FCber dem Wettbewerb \u2013 und das bei minimalen Kosten.",
      "Besonders praktisch: Wenn ein Kunde sein Fahrzeug wechselt, bestellen wir einfach neue Etiketten nach. Am n\u00E4chsten Tag sind sie da. Einfacher geht es wirklich nicht.",
    ],
  },
  {
    category: "Flottenmanagement",
    date: "18. Dezember 2025",
    author: "Ein Fuhrparkleiter",
    role: "Logistikunternehmen aus Frankfurt, 320 Fahrzeuge",
    title: "\u201E320 Fahrzeuge ausgestattet \u2013 die Bestellung hat keine Stunde gedauert\u201C",
    excerpt:
      "Als Fuhrparkleiter verantworte ich die Sicherheit von \u00FCber 320 Dienstfahrzeugen. Die Idee, alle Fahrzeuge mit digitalen Rettungskarten auszustatten, klang zun\u00E4chst nach enormem Aufwand. RES-QR hat mich eines Besseren belehrt.",
    content: [
      "Ich habe die Fahrzeugliste als Excel hochgeladen, die Bestellung war in unter einer Stunde erledigt. Zwei Tage sp\u00E4ter hatte ich alle Etiketten \u2013 sauber sortiert nach Fahrzeugen, mit Klebeanleitung. Unsere Fahrer haben die Etiketten selbst angebracht, wir haben ihnen einfach die bebilderte Anleitung weitergeleitet.",
      "Was mich besonders \u00FCberzeugt hat: Der Staffelpreis. Bei 320 Fahrzeugen zahlen wir deutlich unter 7 Euro pro Fahrzeug. Wenn man bedenkt, dass ein einziger vermeidbarer Unfall-Folgeschaden leicht in die Zehntausende gehen kann, ist das eine Investition, die sich sofort rechnet.",
      "Die digitale Parkscheibe als Gratiszugabe war ein nettes Extra \u2013 unsere Fahrer nutzen sie tats\u00E4chlich im Alltag. Insgesamt kann ich jedem Flottenmanager nur empfehlen: Der Aufwand ist minimal, der Sicherheitsgewinn enorm. Bestellung aufgeben, am n\u00E4chsten Tag sind die Etiketten da.",
    ],
  },
  {
    category: "Feuerwehr",
    date: "7. November 2025",
    author: "Brandoberinspektorin Stefanie Wiehl",
    role: "Berufsfeuerwehr Wiesbaden",
    title: "\u201EJede Minute z\u00E4hlt \u2013 RES-QR macht den Unterschied bei E-Fahrzeugen\u201C",
    excerpt:
      "Die Zahl der Elektro- und Hybridfahrzeuge im Stra\u00DFenverkehr steigt rasant. F\u00FCr uns als Feuerwehr bedeutet das: Die Komplexit\u00E4t bei der technischen Rettung nimmt zu. Die farbcodierten RES-QR-Etiketten helfen uns, den Antriebstyp auf den ersten Blick zu erkennen.",
    content: [
      "Gr\u00FCn f\u00FCr konventionelle Antriebe, Orange f\u00FCr Hybrid, Rot f\u00FCr vollelektrisch \u2013 das ist sofort klar, noch bevor wir den QR-Code scannen. Diese Sekunden k\u00F6nnen entscheidend sein. Wenn ein Fahrzeug brennt oder eingeklemmt ist, m\u00FCssen wir sofort wissen, ob Hochvoltkomponenten verbaut sind.",
      "Wir haben RES-QR in unsere Ausbildung integriert und empfehlen das System aktiv bei Tagen der offenen T\u00FCr und Sicherheitstagen. Die Resonanz ist durchweg positiv \u2013 sowohl bei Privatpersonen als auch bei Unternehmen.",
    ],
  },
  {
    category: "Autohaus",
    date: "22. Oktober 2025",
    author: "Ein Geschäftsführer",
    role: "Autohaus in Heidelberg",
    title: "\u201EEin echtes Kundenbindungs-Tool \u2013 und die Logistik ist genial einfach\u201C",
    excerpt:
      "Wir haben lange nach einem sinnvollen Give-away gesucht, das \u00FCber den \u00FCblichen Schl\u00FCsselanh\u00E4nger hinausgeht. Mit RES-QR haben wir etwas gefunden, das einen echten Mehrwert bietet und das unsere Kunden ernst nehmen.",
    content: [
      "Die Bestellung l\u00E4uft komplett digital: Im RES-QR-Shop die Fahrzeugdaten eingeben, bezahlen, fertig. Die Etiketten sind in der Regel am n\u00E4chsten Werktag bei uns. Wir legen sie bei jeder Auslieferung mit in die Fahrzeugmappe \u2013 der Aufwand pro Fahrzeug liegt bei unter einer Minute.",
      "Was mir besonders gef\u00E4llt: Kunden kommen zur\u00FCck und fragen nach Etiketten f\u00FCr ihr Zweitfahrzeug oder die Autos der Familie. Das ist echte Kundenbindung. Und bei Staffelpreisen ab 6,50 Euro ist es wirtschaftlich absolut darstellbar.",
      "Mein Tipp an andere Autoh\u00E4user: Einfach mal 20 St\u00FCck bestellen und bei den n\u00E4chsten Auslieferungen testen. Die Reaktionen der Kunden sprechen f\u00FCr sich.",
    ],
  },
  {
    category: "Flottenmanagement",
    date: "5. September 2025",
    author: "Eine Fleet Managerin",
    role: "Ambulanzdienst aus München, 85 Fahrzeuge",
    title: "\u201EF\u00FCr unsere Rettungswagen und Dienstfahrzeuge unverzichtbar\u201C",
    excerpt:
      "Als Betreiberin einer Ambulanzflotte sind wir besonders sensibilisiert f\u00FCr das Thema Rettungssicherheit. Unsere eigenen Fahrzeuge sollten nat\u00FCrlich mit gutem Beispiel vorangehen \u2013 deshalb haben wir alle 85 Fahrzeuge mit RES-QR ausgestattet.",
    content: [
      "Die Bestellung war denkbar einfach: Fahrzeugliste zusammenstellen, im Shop hochladen, bestellen. Zwei Tage sp\u00E4ter hatten wir alles. Unser Werkstattteam hat die Etiketten an einem Vormittag an allen Fahrzeugen angebracht.",
      "F\u00FCr uns ist es auch ein Signal an unsere Mitarbeiter: Wir nehmen eure Sicherheit ernst. Und wenn unsere Fahrer bei einem Unfall selbst betroffen sein sollten, haben die Rettungskr\u00E4fte sofort Zugriff auf die richtige Rettungskarte.",
      "Die Kosten? Absolut \u00FCberschaubar. Bei 85 Fahrzeugen liegen wir bei unter 7 Euro pro Fahrzeug. Klare Empfehlung an alle Flottenmanager \u2013 bestellen, anbringen, fertig. Meist ist alles am n\u00E4chsten Tag da.",
    ],
  },
];

const categoryColors: Record<string, string> = {
  Feuerwehr: "bg-primary/10 text-primary",
  Autohaus: "bg-blue-500/10 text-blue-600",
  Flottenmanagement: "bg-emerald-500/10 text-emerald-600",
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="font-display text-xl font-bold text-primary">
            RES-QR.DE
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <a href="https://res-qr.de/shop/rettungskarten.nsf/gutscheinkauf_neu" className="hover:text-foreground transition-colors">Shop</a>
            <Link to="/erfahrungen" className="text-foreground font-semibold">Erfahrungen</Link>
            <a href="https://www.res-qr.de/index.php/presse/" className="hover:text-foreground transition-colors">Presse</a>
          </div>
          <a
            href={CTA_URL}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Jetzt testen
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:opacity-80 transition-opacity" style={{ color: "hsl(0 0% 70%)" }}>
                <ArrowLeft className="h-4 w-4" />
                {`Zur\u00FCck zur Startseite`}
              </Link>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
              style={{ color: "hsl(0 0% 100%)" }}
            >
              Erfahrungsberichte <span className="text-primary">aus der Praxis</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg max-w-xl leading-relaxed" style={{ color: "hsl(0 0% 75%)" }}>
              {`Feuerwehrleute, Autoh\u00E4user und Flottenmanager berichten, wie RES-QR ihren Alltag sicherer und einfacher macht.`}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid gap-10 max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {articles.map((article, i) => (
              <motion.article
                key={i}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-8 sm:p-10 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${categoryColors[article.category]}`}>
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </span>
                </div>

                <h2 className="font-display text-xl sm:text-2xl font-bold mb-4 leading-snug">
                  {article.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {article.content.map((paragraph, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed mb-3">
                    {paragraph}
                  </p>
                ))}

                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{article.author}</p>
                    <p className="text-xs text-muted-foreground">{article.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
        <motion.div
          className="relative z-10 container mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6" style={{ color: "hsl(0 0% 100%)" }}>
            {"\u00DCberzeugt?"} <span className="text-primary">Jetzt selbst testen</span>
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "hsl(0 0% 70%)" }}>
            {`Kostenlos und unverbindlich. Meist sind die Etiketten schon am n\u00E4chsten Tag bei Ihnen.`}
          </p>
          <a
            href={CTA_URL}
            className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:scale-105"
            style={{ background: "var(--cta-gradient)" }}
          >
            Jetzt kostenlos testen
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-display font-bold text-foreground">RES-QR.DE</span>
          <span>{`\u00A9 ${new Date().getFullYear()} RES-QR \u2013 Technik zum \u00DCberleben`}</span>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
