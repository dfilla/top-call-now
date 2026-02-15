import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Clock, Smartphone, ChevronRight, Star, Users, Zap, CheckCircle, ChevronLeft, Play } from "lucide-react";
import heroImage from "@/assets/hero-rescue.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CTA_URL = "https://res-qr.de/shop/rettungskarten.nsf/gutscheinanforderung2?open&pk_campaign=Kommune";
const SHOP_URL = "https://res-qr.de/shop/rettungskarten.nsf/gutscheinkauf_neu";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const testimonials = [
  {
    quote: "\u201EEin Klick auf das RES-QR-Etikett und ich sehe auf meinem Smartphone, wo sich Tank, Gaspatronen der Airbags und elektrische Leitungen befinden. Das macht den Einsatz sicherer und effizienter.\u201C",
    name: "Ein Feuerwehrmann",
    role: "Freiwillige Feuerwehr im Rhein-Main-Gebiet",
  },
  {
    quote: "\u201EWir haben 120 Flottenfahrzeuge in unter einer Stunde bestellt. Am nächsten Tag waren die Etiketten da. So einfach kann Sicherheit sein.\u201C",
    name: "Ein Fuhrparkleiter",
    role: "Logistikunternehmen aus Frankfurt",
  },
  {
    quote: "\u201ERES-QR ist fester Bestandteil jeder Fahrzeugübergabe bei uns. Der Aufwand? Unter zwei Minuten. Die Wirkung? Unbezahlbar.\u201C",
    name: "Eine Serviceleiterin",
    role: "Autohaus in Stuttgart",
  },
  {
    quote: "\u201EDie farbcodierten Etiketten helfen uns, den Antriebstyp auf den ersten Blick zu erkennen. Bei E-Fahrzeugen kann das Leben retten.\u201C",
    name: "Eine Brandinspektorin",
    role: "Berufsfeuerwehr in Hessen",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 lg:py-28" style={{ background: "hsl(var(--section-alt))" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-8">
            <Star className="h-8 w-8" />
          </div>

          <div className="relative min-h-[200px] sm:min-h-[180px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 leading-snug">
                  {testimonials[current].quote}
                </blockquote>
                <p className="font-semibold">{testimonials[current].name}</p>
                <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center hover:border-primary/40 transition-colors"
              aria-label="Vorheriges Testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all ${i === current ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground/30"}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center hover:border-primary/40 transition-colors"
              aria-label="N\u00E4chstes Testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <a href="https://www.res-qr.de" className="font-display text-xl font-bold text-primary">
            RES-QR.DE
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="https://www.res-qr.de" className="hover:text-foreground transition-colors">Home</a>
            <a href="https://res-qr.de/shop/rettungskarten.nsf/gutscheinkauf_neu" className="hover:text-foreground transition-colors">Shop</a>
            <a href="/erfahrungen" className="hover:text-foreground transition-colors">Erfahrungen</a>
            <a href="https://www.res-qr.de/index.php/presse/" className="hover:text-foreground transition-colors">Presse</a>
            <a href="https://www.res-qr.de/index.php/kostenlos-fuer-retter/" className="hover:text-foreground transition-colors">Kostenlos für Retter</a>
          </div>
          <a
            href={CTA_URL}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Jetzt testen
          </a>
        </div>
      </nav>

      {/* Hero + CTA */}
      <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/80">Seit 10 Jahren – Technik zum Überleben</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ color: "hsl(0 0% 100%)" }}
            >
              RES-QR Etiketten
              <br />
              <span className="text-primary">retten Leben.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl max-w-xl mb-8 leading-relaxed"
              style={{ color: "hsl(0 0% 80%)" }}
            >
              Digitale Rettungskarten per QR-Code – direkt am Fahrzeug.
              Verkürzt die Rettungszeit. Von Feuerwehren empfohlen.
            </motion.p>

            {/* CTA Block – sofort sichtbar */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={CTA_URL}
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-bold text-primary-foreground animate-pulse-glow transition-all hover:scale-105"
                style={{ background: "var(--cta-gradient)" }}
              >
                Jetzt kostenlos testen
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={SHOP_URL}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/40 px-8 py-4 text-lg font-semibold transition-all hover:bg-primary/10"
                style={{ color: "hsl(0 0% 90%)" }}
              >
                Zum Shop
              </a>
            </motion.div>

            <motion.p variants={fadeUp} className="text-sm" style={{ color: "hsl(0 0% 60%)" }}>
              🎁 Digitale Parkscheibe gratis bei Flottenbestellung ab 10 Fahrzeugen
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-secondary py-8 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Von Feuerwehren empfohlen</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Bei Mercedes serienmäßig</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">10 Jahre Erfahrung</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Verkürzt Rettungszeit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Das digitale Sicherheitsplus <span className="text-primary">für Ihre Flotte</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Smarte Sicherheit für Ihre Mitarbeiter – einfach anzubringen, sofort einsatzbereit.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                icon: Smartphone,
                title: "Ein Scan genügt",
                desc: "QR-Code scannen – sofort erscheint die fahrzeugbezogene Rettungskarte auf dem Smartphone des Retters.",
              },
              {
                icon: Clock,
                title: "Wertvolle Zeit sparen",
                desc: "Keine Suche mehr nach der richtigen Rettungskarte. Die Feuerwehr erkennt sofort die optimalen Angriffspunkte.",
              },
              {
                icon: Shield,
                title: "Maximale Sicherheit",
                desc: "Farbcodierte Etiketten machen alternative Antriebe (E-Auto, Hybrid) auf den ersten Blick erkennbar.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group rounded-2xl border border-border bg-card p-8 hover:shadow-xl hover:border-primary/20 transition-all"
              >
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <TestimonialSlider />

      {/* Video Feature – Brandoberinspektorin */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="rounded-2xl border border-border bg-card overflow-hidden md:grid md:grid-cols-2">
              <div className="relative aspect-video md:aspect-auto md:min-h-[320px]">
                <iframe
                  src="https://www.youtube.com/embed/gm5V1wNw3lU?start=173"
                  title="Brandoberinspektorin über RES-QR"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-4 w-fit">
                  <Play className="h-3 w-3" />
                  Video-Beitrag
                </div>
                <blockquote className="font-display text-xl sm:text-2xl font-semibold leading-snug mb-4">
                  „Also das erste was wir machen ist, wir schauen tatsächlich nach den QR-Codes."
                </blockquote>
                <p className="font-semibold">Brandoberinspektorin Stefanie Wiehl</p>
                <p className="text-muted-foreground text-sm">Berufsfeuerwehr Wiesbaden</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.h2
            className="font-display text-3xl sm:text-4xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            So einfach geht's
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                step: "01",
                title: "Windschutzscheibe",
                desc: "QR-Etikett auf die Hinweis-Plakette kleben und innen an der Windschutzscheibe anbringen.",
              },
              {
                step: "02",
                title: "Tankdeckel / Ladeklappe",
                desc: "Ein QR-Etikett auf der Innenseite der Tank- bzw. Ladeklappe anbringen.",
              },
              {
                step: "03",
                title: "B-Säule",
                desc: "Drittes QR-Etikett direkt an der B-Säule (gegenüber der Tankklappe) befestigen.",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground font-display text-xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28" style={{ background: "hsl(var(--section-alt))" }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Flotten-Lösungen</h2>
            <p className="text-muted-foreground text-lg">Attraktive Staffelpreise für Unternehmen</p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { vehicles: "Ab 50", price: "7,00 €" },
              { vehicles: "Ab 100", price: "6,50 €", popular: true },
              { vehicles: "Ab 500", price: "5,50 €" },
            ].map((tier, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`rounded-2xl border p-8 text-center transition-all ${
                  tier.popular
                    ? "border-primary bg-card shadow-xl scale-105"
                    : "border-border bg-card hover:border-primary/20"
                }`}
              >
                {tier.popular && (
                  <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground mb-4">
                    Beliebt
                  </span>
                )}
                <p className="text-muted-foreground text-sm font-medium mb-2">{tier.vehicles} Fahrzeuge/Jahr</p>
                <p className="font-display text-4xl font-bold mb-1">{tier.price}</p>
                <p className="text-muted-foreground text-xs">pro Fahrzeug, zzgl. MwSt.</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <a
              href={CTA_URL}
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:scale-105"
              style={{ background: "var(--cta-gradient)" }}
            >
              Jetzt kostenlos testen
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-sm text-muted-foreground mt-3">
              🎁 Digitale Parkscheibe gratis bei Flottenbestellung ab 10 Fahrzeugen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Customers */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <h3 className="font-display text-xl font-semibold text-center mb-8 text-muted-foreground">
            RES-QR fährt bereits bei
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
            {[
              "https://www.res-qr.de/wp-content/uploads/2022/03/ias_gruppe_logo_rgb_500px-300x300.png",
              "https://www.res-qr.de/wp-content/uploads/2021/10/pirelli1-300x78.jpg",
              "https://www.res-qr.de/wp-content/uploads/2021/10/auto-kraus-300x77.png",
              "https://www.res-qr.de/wp-content/uploads/2022/03/logo-300x117.png",
              "https://www.res-qr.de/wp-content/uploads/2023/09/dfv-plakette-300x171.png",
              "https://www.res-qr.de/wp-content/uploads/2023/09/plakette-fwv-bw-300x171.png",
            ].map((logo, i) => (
              <img key={i} src={logo} alt="Kundenlogo" className="h-12 sm:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            className="font-display text-3xl sm:text-4xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Häufige Fragen
          </motion.h2>

          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: "Was ist eine Rettungskarte?",
                a: "Ein Hilfsmittel zur schnelleren Bergung von Menschen aus ihrem Fahrzeug nach einem Verkehrsunfall. Sie zeigt relevante Bauteile wie Airbags, Gurtstraffer, Batterie und Verstärkungen der Karosserie.",
              },
              {
                q: "Wo werden die Etiketten angebracht?",
                a: "An drei Stellen: Innenseite Windschutzscheibe (auf Plakette), Innenseite Tankklappe/Ladeklappe, und an der B-Säule gegenüber der Tankklappe.",
              },
              {
                q: "Was kosten RES-QR-Etiketten?",
                a: "Einzelpreis 9,50 € für 3 QR-Etiketten + Hinweisplakette. Ab 2 Fahrzeugen 7,50 €, ab 100 Fahrzeugen nur 6,50 € pro Satz.",
              },
              {
                q: "Warum sind QR-Codes für moderne Fahrzeuge wichtig?",
                a: "Moderne Autos mit Airbags, Elektro- oder Hybridantrieb stellen besondere Anforderungen an Retter. Die Rettungskarte zeigt, wo sicher geschnitten und geöffnet werden kann.",
              },
              {
                q: "Sind die Etiketten kostenlos für Einsatzkräfte?",
                a: "Ja! Alle Dienst- und Privat-PKWs von Einsatzkräften können kostenlos mit RES-QR-Etiketten ausgestattet werden.",
              },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-6">
                <AccordionTrigger className="font-display text-left font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
            Schützen Sie Ihre Flotte – <span className="text-primary">jetzt testen</span>
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "hsl(0 0% 70%)" }}>
            Kostenlos und unverbindlich. Digitale Parkscheibe als Geschenk bei Flottenbestellung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CTA_URL}
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:scale-105"
              style={{ background: "var(--cta-gradient)" }}
            >
              Jetzt kostenlos testen
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://forms.gle/F2jspG9CRd5Zub6YA"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/40 px-8 py-4 text-lg font-semibold transition-all hover:bg-primary/10"
              style={{ color: "hsl(0 0% 90%)" }}
            >
              Unverbindlich anfragen
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-display font-bold text-foreground">RES-QR.DE</span>
          <span>© {new Date().getFullYear()} RES-QR – Technik zum Überleben</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
