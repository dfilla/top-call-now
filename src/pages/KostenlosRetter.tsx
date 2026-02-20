import { motion } from "framer-motion";
import { Shield, ChevronRight, Heart, Flame, AlertTriangle, Stethoscope, ShieldCheck, Truck, BadgeCheck, Users, HandHeart } from "lucide-react";
import EditOverlay from "@/components/EditOverlay";

const CTA_URL = "https://res-qr.de/shop/rettungskarten.nsf/gutscheinanforderung2?open&pk_campaign=Kommune";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const organisations = [
  {
    name: "Feuerwehr",
    icon: Flame,
    image: "https://www.res-qr.de/wp-content/uploads/2021/10/feuerwehr1.jpg",
    link: "https://res-qr.de/shop/rettungskarten.nsf/gutscheinanforderung?open&organisation=feuerwehr",
  },
  {
    name: "Katastrophenschutz",
    icon: AlertTriangle,
    image: "https://www.res-qr.de/wp-content/uploads/2021/10/res-qr-partner_hauptseite-thw.jpg",
    link: "https://res-qr.de/shop/rettungskarten.nsf/gutscheinanforderung?open&organisation=katastrophenschutz",
  },
  {
    name: "Rettungsdienst",
    icon: Stethoscope,
    image: "https://www.res-qr.de/wp-content/uploads/2021/10/rettungsdienst.jpg",
    link: "https://res-qr.de/shop/rettungskarten.nsf/gutscheinanforderung?open&organisation=rettungsdienst",
  },
  {
    name: "Betriebsarzt",
    icon: Heart,
    image: "https://www.res-qr.de/wp-content/uploads/2023/01/betriebsarzt.png",
    link: "https://res-qr.de/shop/rettungskarten.nsf/gutscheinanforderung?open&organisation=betriebs%C3%A4rzte",
  },
  {
    name: "Sicherheitsbeauftragter",
    icon: ShieldCheck,
    image: "https://www.res-qr.de/wp-content/uploads/2025/10/res-qr-partner_hauptseite-sicherheit.png",
    link: "https://res-qr.de/shop/rettungskarten.nsf/gutscheinanforderung?open&organisation=Sicherheitsbeauftragter",
  },
  {
    name: "DGUV",
    icon: BadgeCheck,
    image: "https://www.res-qr.de/wp-content/uploads/2024/11/dguv-logo-auf-resqr_website.jpg",
    link: "https://res-qr.de/shop/rettungskarten.nsf/gutscheinanforderung?open&organisation=dguv",
  },
  {
    name: "Abschleppunternehmen / Pannenhilfe",
    icon: Truck,
    image: "https://www.res-qr.de/wp-content/uploads/2023/06/res-qr-partner_pannendienst-1.png",
    link: "https://res-qr.de/shop/rettungskarten.nsf/gutscheinanforderung?open&organisation=Abschleppunternehmen/Pannenhilfeorganisation",
  },
  {
    name: "Polizei",
    icon: Shield,
    image: "https://www.res-qr.de/wp-content/uploads/2023/01/res-qr-partner_hauptseite-polizei.png",
    link: "https://res-qr.de/shop/rettungskarten.nsf/gutscheinanforderung?open&organisation=polizei",
  },
  {
    name: "Gemeinnützigkeit / Ehrenamt",
    icon: HandHeart,
    image: "https://www.res-qr.de/wp-content/uploads/2021/10/res-qr-partner_hauptseite-gn.jpg",
    link: "https://res-qr.de/shop/rettungskarten.nsf/gutscheinanforderung?open&organisation=verein",
  },
];

const partners = [
  { name: "Freiwillige Feuerwehr Much", img: "https://www.res-qr.de/wp-content/uploads/2024/11/ffw-slider-much-3-100x100.png" },
  { name: "Bundeswehr Feuerwehr Landsberg", img: "https://www.res-qr.de/wp-content/uploads/2024/11/ffw-slider-landsberg-1-100x100.png" },
  { name: "Stadt-Feuerwehr Eckernförde", img: "https://www.res-qr.de/wp-content/uploads/2024/11/ffw-slider-eckern-100x100.png" },
  { name: "FFW Wartjenstedt", img: "https://www.res-qr.de/wp-content/uploads/2024/11/ffw-slider-wartjenstedt-100x100.png" },
  { name: "FFW Kailbach", img: "https://www.res-qr.de/wp-content/uploads/2024/11/ffw-slider-kailbach-100x100.png" },
];

const KostenlosRetter = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <a href="/" className="font-display text-xl font-bold text-primary">
            RES-QR.DE
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <a href="https://res-qr.de/shop/rettungskarten.nsf/gutscheinkauf_neu" className="hover:text-foreground transition-colors">Shop</a>
            <a href="/erfahrungen" className="hover:text-foreground transition-colors">Erfahrungen</a>
            <a href="https://www.res-qr.de/index.php/presse/" className="hover:text-foreground transition-colors">Presse</a>
            <a href="/kostenlos-fuer-retter" className="text-foreground transition-colors">Kostenlos für Retter</a>
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
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
        <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/20 mb-8">
              <Heart className="h-10 w-10 text-primary" />
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: "hsl(0 0% 100%)" }}
            >
              Kostenlos für <span className="text-primary">Retter</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl max-w-xl mx-auto mb-8 leading-relaxed"
              style={{ color: "hsl(0 0% 80%)" }}
            >
              Alle Dienst- und Privat-PKWs von Einsatzkräften können kostenlos mit RES-QR-Etiketten ausgestattet werden.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-6">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-primary-foreground">
            Gutscheine anfordern für mich und meine Organisation
          </h2>
        </div>
      </section>

      {/* Organisation Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {organisations.map((org, i) => (
              <motion.a
                key={i}
                href={org.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                className="group flex flex-col items-center text-center rounded-2xl border border-border bg-card p-6 hover:shadow-xl hover:border-primary/30 transition-all"
              >
                <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4 border-2 border-border group-hover:border-primary transition-colors">
                  <img
                    src={org.image}
                    alt={org.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <org.icon className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="font-display text-sm sm:text-base font-semibold group-hover:text-primary transition-colors leading-tight">
                  {org.name}
                </h3>
                <span className="mt-2 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Gutschein anfordern <ChevronRight className="h-3 w-3" />
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner-Feuerwehren */}
      <section className="py-16" style={{ background: "hsl(var(--section-alt))" }}>
        <div className="container mx-auto px-4">
          <motion.h2
            className="font-display text-2xl sm:text-3xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Einige unserer <span className="text-primary">RES-QR-Partner</span>
          </motion.h2>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {partners.map((p, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center gap-2">
                <img src={p.img} alt={p.name} className="h-16 w-16 rounded-full object-cover border-2 border-border" />
                <span className="text-xs font-medium text-muted-foreground text-center max-w-[120px]">{p.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Empfehlungen */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <h3 className="font-display text-xl font-semibold text-center mb-8 text-muted-foreground">
            Empfohlen von
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <div className="flex items-center gap-3">
              <img src="https://www.res-qr.de/wp-content/uploads/2023/09/dfv-plakette-300x171.png" alt="Deutscher Feuerwehrverband" className="h-16 object-contain" />
              <span className="text-sm font-medium text-muted-foreground">Deutscher Feuerwehrverband</span>
            </div>
            <div className="flex items-center gap-3">
              <img src="https://www.res-qr.de/wp-content/uploads/2023/09/plakette-fwv-bw-300x171.png" alt="Feuerwehrverband Baden-Württemberg" className="h-16 object-contain" />
              <span className="text-sm font-medium text-muted-foreground">Feuerwehrverband Baden-Württemberg</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
        <motion.div
          className="relative z-10 container mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "hsl(0 0% 100%)" }}>
            Schützen Sie Ihre Einsatzkräfte – <span className="text-primary">kostenlos</span>
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "hsl(0 0% 70%)" }}>
            Fordern Sie jetzt kostenlose RES-QR-Etiketten für Ihre Organisation an.
          </p>
          <a
            href="https://res-qr.de/shop/rettungskarten.nsf/gutscheinanforderung?open"
            className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:scale-105"
            style={{ background: "var(--cta-gradient)" }}
          >
            Jetzt Gutschein anfordern
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <a href="/" className="font-display font-bold text-foreground">RES-QR.DE</a>
          <span>© {new Date().getFullYear()} RES-QR – Technik zum Überleben</span>
        </div>
      </footer>

      <EditOverlay />
    </div>
  );
};

export default KostenlosRetter;
