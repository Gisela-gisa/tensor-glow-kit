import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const ANN_ITEMS = [
  "BIENVENIDA A TU NUEVO RITUAL DE AMOR PROPIO Y CUIDADO",
  "MÁS DE 5.000 CHILENAS YA TRANSFORMARON SU PIEL  |  ENVÍO GRATIS 🇨🇱",
  "30% OFF HASTA AGOTAR STOCK PROMOCIONAL",
  "TECNOLOGÍA DE ESTÁNDAR CLÍNICO  |  PATCH REUTILIZABLE HASTA 30 VECES",
  "ENTREGA EN 10 A 14 DÍAS 🇨🇱",
];

const TESTIMONIALS = [
  { emoji: "👩🏽", name: "María José R.", text: "Lo compré sin muchas esperanzas y a los 10 días mis amigas me preguntaron qué me había hecho. La piel se ve increíblemente más tersa y luminosa." },
  { emoji: "👩🏻‍🦳", name: "Claudia S., 52 años", text: "Jamás pensé que algo tan sencillo funcionara así. Los parches de silicona son magia pura. Mis arrugas del entrecejo desaparecieron casi por completo." },
  { emoji: "👩🏽‍🦱", name: "Valentina T.", text: "En la segunda semana ya noté que mi piel se veía más firme y luminosa. El ritual de 3 días es increíble. Vale cada peso." },
  { emoji: "👩🏽‍🦰", name: "Daniela P.", text: "Me encantó el ritual de los 3 días. El retinol de noche + el parche es lo mejor que he probado. Me levanto con la piel planchada y suave. Es adictivo." },
  { emoji: "👩🏻", name: "Francisca L.", text: "El kit llegó perfecto y los resultados a los 14 días son impresionantes. Muchas gracias Estheré, me devolviste la confianza en mi misma." },
  { emoji: "👩🏽‍🦳", name: "Isabel M.", text: "El ácido hialurónico es suavísimo y el parche de silicona en la frente… wow. Piel de bebé. No paro de recomendarlo a todas mis amigas." },
  { emoji: "👩🏻‍🦳", name: "Pamela G., 47 años", text: "Después de 3 semanas con el kit, la gente me pregunta si adelgacé o si me hice algo. La respuesta es: solo el Kit Lifting Botox. ¡Gracias!" },
];

const FAQS = [
  { q: "¿Cuánto tiempo tarda en llegar?", a: "Entre 10 y 14 días hábiles a todo Chile, con envío gratis." },
  { q: "¿Es seguro para piel sensible?", a: "Sí. Los activos están dosificados para uso diario y los parches son hipoalergénicos." },
  { q: "¿Cuántas veces puedo reutilizar el parche?", a: "Hasta 30 veces siguiendo las instrucciones de limpieza incluidas." },
  { q: "¿Cuándo veo resultados?", a: "La mayoría de nuestras clientas notan firmeza y luminosidad en los primeros 14 días." },
  { q: "¿Tienen garantía?", a: "Sí, 30 días de garantía de satisfacción o te devolvemos tu dinero." },
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@300;400;500;600&family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <style>{LP_CSS}</style>

      {/* Announcement bar */}
      <div className="ann-bar">
        <div className="ann-track">
          {[...ANN_ITEMS, ...ANN_ITEMS].map((t, i) => (
            <span key={i} className="ann-item">{t}</span>
          ))}
        </div>
      </div>

      <div className="lp-wrap">
        {/* HERO */}
        <section className="lp-hero">
          <div className="lp-hero-video-wrap">
            <div className="lp-hero-placeholder">
              <span>🎬</span>
              AQUÍ VA TU VIDEO HERO<br />(.mp4 · loop · autoplay muted)
            </div>
          </div>
          <div className="lp-hero-content">
            <div className="lp-hero-eyebrow">Estheré · Tecnología de Triple Acción</div>
            <h1>Kit Lifting Botox: Recupera tu juventud.<br />Logra una piel más lisa, firme y radiante en solo 14 días.</h1>
            <a href="#precio" className="btn btn-gold btn-pulse">QUIERO MI KIT AHORA</a>
            <p className="lp-hero-guarantee">Garantía de satisfacción o te devolvemos tu dinero.</p>
          </div>
        </section>

        {/* STEPS */}
        <div className="lp-steps">
          <p><strong>3 pasos</strong>, 2 minutos y resultados extraordinarios</p>
        </div>

        {/* SCROLL INFINITO */}
        <div className="lp-scroll-wrap">
          <div className="lp-scroll-track">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="lp-scroll-item">
                <img src={`https://images.unsplash.com/photo-15${60 + (i % 9)}000000000-${i}?w=300&h=300&fit=crop&auto=format&q=70`} alt="" onError={(e) => ((e.target as HTMLImageElement).src = `https://picsum.photos/seed/esthere${i}/300/300`)} />
              </div>
            ))}
          </div>
        </div>

        {/* BENEFITS SUBTITLE + CIRCLES */}
        <section className="lp-benefits-sub">
          <h2>Une el relleno del ácido hialurónico, el efecto lifting del retinol y el alisado de los parches de silicona en un ritual de 2 minutos, con resultados de nivel clínico por una fracción del precio.</h2>
        </section>
        <section className="lp-circles">
          <div className="lp-circles-row">
            {[
              { label: "Relleno", seed: "relleno" },
              { label: "Alisado", seed: "alisado" },
              { label: "Firmeza", seed: "firmeza" },
            ].map((c) => (
              <div key={c.label} className="lp-circle-item">
                <div className="lp-circle-photo">
                  <img src={`https://picsum.photos/seed/${c.seed}/320/320`} alt={c.label} />
                </div>
                <div className="lp-circle-label">{c.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICE CTA */}
        <section id="precio" className="lp-price-cta">
          <div className="lp-price-old">Antes: $ 49.990</div>
          <div className="lp-price-new">$ 34.990</div>
          <div className="lp-price-badge">🎉 Ahorras $ 15.000 — 30% OFF</div>
          <div>
            <a href="#" className="btn btn-gold btn-pulse">Quiero mi Lifting Botox</a>
          </div>
          <div className="lp-pay-icons">
            <span>🚚 Envío gratis</span>
            <span>💳 VISA · MC</span>
            <span>🇨🇱 WebPay · Servipag</span>
            <span>🛡️ Garantía 30 días</span>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="lp-testi-sec">
          <div className="text-center" style={{ marginBottom: 28 }}>
            <div className="subtitle">Lo que dicen ellas</div>
            <div className="gold-divider" />
            <h2>Experiencias reales con el Kit Lifting Botox</h2>
          </div>
          <div className="lp-testi-scroll">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="lp-testi-card">
                <div className="lp-card-top">
                  <div className="lp-avatar-emoji">{t.emoji}</div>
                  <div>
                    <div className="lp-card-name">{t.name}</div>
                    <div className="lp-card-stars">★★★★★</div>
                  </div>
                </div>
                <div className="lp-card-text">"{t.text}"</div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 32 }}>
            <a href="#precio" className="btn btn-dark">REJUVENECER MI PIEL AHORA</a>
          </div>
        </section>

        {/* TRIPLE ACCION */}
        <section className="sec inner">
          <div className="text-center">
            <div className="subtitle">Sistema inteligente</div>
            <div className="gold-divider" />
            <h2>Kit Lifting Botox con Tecnología de Triple Acción: un sistema inteligente que potencia la absorción de los activos para mejores resultados</h2>
          </div>
          <ul className="lp-action-list">
            <li><span className="em">☀️</span><div><strong>DÍA — Volumen.</strong> El ácido hialurónico devuelve el relleno natural y prepara la piel para recibir los activos nocturnos.</div></li>
            <li><span className="em">🌙</span><div><strong>NOCHE 1 — Lifting.</strong> El retinol puro renueva la firmeza e inicia la reparación profunda de la piel.</div></li>
            <li><span className="em">🌙</span><div><strong>NOCHE 2 — Sellado.</strong> El parche de silicona actúa como un "botox tópico", sellando los activos y alisando cada arruga de forma mecánica.</div></li>
          </ul>
          <div className="text-center">
            <a href="#precio" className="btn btn-gold">Iniciar mi ciclo de 72 horas</a>
          </div>
        </section>

        {/* CICLO */}
        <section className="sec inner text-center" style={{ background: "var(--c1)" }}>
          <div className="subtitle">El ciclo completo</div>
          <div className="gold-divider" />
          <h2>Rejuvenece tu piel durante el día y alísala mientras duermes</h2>
          <div className="lp-ciclo-grid">
            <img src="https://picsum.photos/seed/ciclo1/600/700" alt="Día" />
            <img src="https://picsum.photos/seed/ciclo2/600/700" alt="Noche" />
          </div>
          <div className="lp-ben-row" style={{ marginTop: 40 }}>
            <div className="lp-ben-item"><div className="lp-ben-icon">💧</div><div className="lp-ben-text"><strong>Hidratación profunda</strong><span>El ácido hialurónico rellena y devuelve volumen visible desde el primer uso.</span></div></div>
            <div className="lp-ben-item"><div className="lp-ben-icon">✨</div><div className="lp-ben-text"><strong>Firmeza renovada</strong><span>El retinol estimula el colágeno y mejora la textura durante la noche.</span></div></div>
            <div className="lp-ben-item"><div className="lp-ben-icon">🛡️</div><div className="lp-ben-text"><strong>Alisado mecánico</strong><span>El parche de silicona sella, alisa y evita pliegues mientras duermes.</span></div></div>
          </div>
        </section>

        {/* GALLERY ELLAS LO MUESTRAN */}
        <section className="sec inner text-center">
          <div className="subtitle">Ellas lo muestran</div>
          <div className="gold-divider" />
          <h2>El secreto de 2 minutos: cómo miles de mujeres logran una piel lisa sin ir a una clínica</h2>
          <div className="lp-gallery15">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="lp-g-item">
                <img src={`https://picsum.photos/seed/g${i}/400/520`} alt="" />
              </div>
            ))}
          </div>
        </section>

        {/* GUARANTEE */}
        <section className="sec inner">
          <div className="lp-guarantee">
            <div className="lp-guar-icon"><img src="https://picsum.photos/seed/seal/140/140" alt="garantía" /></div>
            <div>
              <h4>GARANTÍA DE 30 DÍAS</h4>
              <p>Si no notas resultados visibles en tu piel, te devolvemos tu dinero. Sin preguntas, sin trámites complicados.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec inner text-center">
          <div className="subtitle">Preguntas frecuentes</div>
          <div className="gold-divider" />
          <h2>Todo lo que necesitas saber</h2>
          <div className="lp-faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className={`lp-faq-item ${openFaq === i ? "open" : ""}`}>
                <button className="lp-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}
                  <span className="lp-faq-icon">+</span>
                </button>
                <div className="lp-faq-ans">{f.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PAY BAR */}
        <div className="lp-pay-bar">
          <p>Pagos seguros</p>
          <div className="lp-pay-methods">
            <span className="lp-pay-badge">VISA</span>
            <span className="lp-pay-badge">MASTERCARD</span>
            <span className="lp-pay-badge">WEBPAY</span>
            <span className="lp-pay-badge">SERVIPAG</span>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="lp-footer">
          <div className="lp-footer-brand">ESTHERÉ</div>
          <div className="lp-footer-links">
            <a href="#">Términos</a>
            <a href="#">Privacidad</a>
            <a href="#">Envíos</a>
            <a href="#">Contacto</a>
          </div>
          <div className="lp-footer-disc">
            © {new Date().getFullYear()} Estheré. Todos los derechos reservados. Resultados pueden variar según el tipo de piel.
          </div>
        </footer>
      </div>

      {/* STICKY */}
      <div className={`lp-sticky ${showSticky ? "visible" : ""}`}>
        <div className="lp-sticky-price">
          <span>$ 49.990</span>$ 34.990
        </div>
        <a href="#precio" className="btn btn-gold" style={{ padding: "12px 22px", fontSize: 13 }}>Quiero mi Kit</a>
      </div>
    </>
  );
}

const LP_CSS = `
.ann-bar { background:#8a4603; color:#fff; overflow:hidden; height:38px; display:flex; align-items:center; width:100%; }
.ann-track { display:flex; white-space:nowrap; animation:annScroll 32s linear infinite; }
.ann-item { padding:0 60px; font-size:12px; font-family:'Montserrat',sans-serif; font-weight:500; letter-spacing:.07em; white-space:nowrap; }
@keyframes annScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

.lp-wrap *, .lp-wrap *::before, .lp-wrap *::after { box-sizing:border-box; margin:0; padding:0; }
.lp-wrap { --c1:#f2ede5; --c2:#e6dacb; --c3:#d9c8b1; --c4:#ccb597; --white:#fff; --brown:#8a4603; --gold:#ccb597; --gold-dark:#8a4603; --text-dark:#2C2C2C; --text-mid:#4A4A4A; --text-body:#3a2f25; --text-light:#777; --shadow:0 8px 40px rgba(138,70,3,0.12); font-family:'Lato',sans-serif; color:var(--text-body); font-size:17px; line-height:1.6; background:var(--c1); overflow-x:hidden; }
.lp-wrap h1,.lp-wrap h2,.lp-wrap h3,.lp-wrap h4 { font-family:'Cormorant Garamond',serif; color:var(--text-dark); }
.lp-wrap h1 { font-size:clamp(26px,4vw,38px); font-weight:600; line-height:1.2; }
.lp-wrap h2 { font-size:clamp(20px,3vw,28px); font-weight:500; line-height:1.3; }
.lp-wrap .subtitle { font-family:'Montserrat',sans-serif; font-size:12px; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:var(--brown); }
.lp-wrap .gold-divider { width:60px; height:2px; background:linear-gradient(90deg,transparent,var(--gold),transparent); margin:16px auto; }
.lp-wrap .sec { padding:64px 5%; position:relative; }
.lp-wrap .inner { max-width:1080px; margin:0 auto; }
.lp-wrap .text-center { text-align:center; }
.lp-wrap .btn { display:inline-block; font-family:'Montserrat',sans-serif; font-weight:600; letter-spacing:.06em; border:none; cursor:pointer; text-decoration:none; transition:all .3s ease; text-align:center; }
.lp-wrap .btn-gold { background:linear-gradient(135deg,#ccb597 0%,#b89870 50%,#8a4603 100%); color:#fff; padding:18px 40px; border-radius:50px; font-size:15px; box-shadow:0 6px 24px rgba(138,70,3,.3); }
.lp-wrap .btn-gold:hover { transform:translateY(-2px); box-shadow:0 10px 32px rgba(138,70,3,.45); }
.lp-wrap .btn-dark { background:linear-gradient(135deg,#6b3502,#8a4603,#ccb597); color:#fff; padding:16px 36px; border-radius:50px; font-size:14px; box-shadow:0 6px 20px rgba(100,50,0,.3); }
@keyframes pulse-glow { 0%,100%{ box-shadow:0 6px 24px rgba(138,70,3,.3),0 0 0 0 rgba(204,181,151,.4); } 50%{ box-shadow:0 6px 24px rgba(138,70,3,.3),0 0 0 10px rgba(204,181,151,0); } }
.lp-wrap .btn-pulse { animation:pulse-glow 2.5s ease infinite; }

.lp-hero { position:relative; min-height:100vh; display:flex; flex-direction:column; justify-content:flex-end; overflow:hidden; background:#1a1510; }
.lp-hero-video-wrap { position:absolute; inset:0; background:linear-gradient(135deg,#2a1f14,#0f0c09); display:flex; align-items:center; justify-content:center; }
.lp-hero-video-wrap::after { content:''; position:absolute; inset:0; background:linear-gradient(to bottom,rgba(10,8,5,.1) 0%,rgba(10,8,5,.05) 35%,rgba(10,8,5,.55) 75%,rgba(10,8,5,.85) 100%); }
.lp-hero-placeholder { color:rgba(255,255,255,.18); font-family:'Montserrat',sans-serif; font-size:12px; letter-spacing:.1em; text-align:center; position:relative; z-index:1; }
.lp-hero-placeholder span { display:block; font-size:40px; margin-bottom:8px; opacity:.25; }
.lp-hero-content { position:relative; z-index:2; padding:0 5% 64px; max-width:780px; }
.lp-hero-eyebrow { font-family:'Montserrat',sans-serif; font-size:11px; letter-spacing:.18em; text-transform:uppercase; color:var(--gold); margin-bottom:14px; }
.lp-hero-content h1 { color:#F7EFE2; text-shadow:0 2px 20px rgba(0,0,0,.5); margin-bottom:18px; }
.lp-hero-guarantee { font-size:14px; color:rgba(247,239,226,.7); margin-top:14px; }

.lp-steps { background:#fff; padding:22px 24px; text-align:center; border-bottom:1px solid rgba(204,181,151,.2); }
.lp-steps p { font-family:'Cormorant Garamond',serif; font-size:20px; font-weight:500; color:var(--text-mid); font-style:italic; }
.lp-steps p strong { color:var(--brown); font-style:normal; font-weight:600; }

.lp-scroll-wrap { background:var(--c2); padding:28px 0; overflow:hidden; position:relative; }
.lp-scroll-wrap::before,.lp-scroll-wrap::after { content:''; position:absolute; top:0; bottom:0; width:80px; z-index:2; }
.lp-scroll-wrap::before { left:0; background:linear-gradient(to right,var(--c2),transparent); }
.lp-scroll-wrap::after { right:0; background:linear-gradient(to left,var(--c2),transparent); }
.lp-scroll-track { display:flex; gap:12px; width:max-content; animation:scrollLeft 40s linear infinite; }
@keyframes scrollLeft { from{transform:translateX(0)} to{transform:translateX(-50%)} }
.lp-scroll-item { width:140px; height:140px; border-radius:14px; overflow:hidden; flex-shrink:0; border:1px solid rgba(204,181,151,.25); box-shadow:0 4px 14px rgba(0,0,0,.07); }
.lp-scroll-item img { width:100%; height:100%; object-fit:cover; display:block; }

.lp-benefits-sub { padding:56px 5% 20px; background:#fff; text-align:center; }
.lp-benefits-sub h2 { max-width:720px; margin:0 auto; font-size:clamp(18px,2.8vw,24px); }
.lp-circles { background:#fff; padding:32px 5% 56px; }
.lp-circles-row { display:flex; justify-content:center; gap:40px; flex-wrap:wrap; }
.lp-circle-item { display:flex; flex-direction:column; align-items:center; gap:14px; }
.lp-circle-photo { width:160px; height:160px; border-radius:50%; overflow:hidden; border:3px solid rgba(204,181,151,.4); box-shadow:0 8px 28px rgba(138,70,3,.15); transition:transform .3s ease; }
.lp-circle-photo:hover { transform:scale(1.05); }
.lp-circle-photo img { width:100%; height:100%; object-fit:cover; display:block; }
.lp-circle-label { font-family:'Cormorant Garamond',serif; font-size:20px; font-weight:600; color:var(--text-dark); }

.lp-price-cta { background:#fff; padding:52px 5%; text-align:center; position:relative; }
.lp-price-old { font-size:15px; color:var(--text-light); text-decoration:line-through; }
.lp-price-new { font-family:'Cormorant Garamond',serif; font-size:clamp(38px,6vw,54px); font-weight:600; color:var(--text-dark); line-height:1.1; margin:4px 0 6px; }
.lp-price-badge { display:inline-block; background:linear-gradient(135deg,#ccb597,#8a4603); color:#fff; font-family:'Montserrat',sans-serif; font-size:12px; font-weight:600; letter-spacing:.06em; padding:5px 16px; border-radius:30px; margin-bottom:24px; }
.lp-pay-icons { margin-top:16px; display:flex; justify-content:center; align-items:center; gap:16px; flex-wrap:wrap; }
.lp-pay-icons span { font-family:'Montserrat',sans-serif; font-size:11px; color:var(--text-light); }

.lp-testi-sec { background:var(--c2); padding:72px 5%; }
.lp-testi-scroll { display:flex; gap:20px; overflow-x:auto; scroll-snap-type:x mandatory; padding-bottom:16px; scrollbar-width:none; }
.lp-testi-scroll::-webkit-scrollbar { display:none; }
.lp-testi-card { min-width:300px; max-width:320px; background:#fff; border-radius:20px; padding:28px 24px 20px; scroll-snap-align:start; box-shadow:0 6px 28px rgba(138,70,3,.1); flex-shrink:0; transition:transform .3s ease; }
.lp-testi-card:hover { transform:translateY(-4px); }
.lp-card-top { display:flex; align-items:center; gap:12px; margin-bottom:14px; }
.lp-avatar-emoji { width:52px; height:52px; border-radius:50%; background:var(--c3); border:2px solid rgba(204,181,151,.35); display:flex; align-items:center; justify-content:center; font-size:22px; }
.lp-card-name { font-family:'Montserrat',sans-serif; font-weight:600; font-size:14px; color:var(--text-dark); }
.lp-card-stars { color:#ccb597; font-size:13px; }
.lp-card-text { font-size:14px; color:var(--text-mid); line-height:1.65; font-style:italic; }

.lp-action-list { list-style:none; margin:24px auto; display:flex; flex-direction:column; gap:18px; max-width:760px; }
.lp-action-list li { display:flex; gap:14px; align-items:flex-start; font-size:16px; line-height:1.6; }
.lp-action-list .em { font-size:22px; flex-shrink:0; margin-top:2px; }

.lp-ben-row { display:flex; justify-content:center; gap:32px; flex-wrap:wrap; margin:28px 0; }
.lp-ben-item { display:flex; align-items:flex-start; gap:12px; max-width:280px; text-align:left; }
.lp-ben-icon { width:42px; height:42px; border-radius:50%; background:linear-gradient(135deg,rgba(204,181,151,.2),rgba(204,181,151,.4)); border:1.5px solid rgba(204,181,151,.4); display:flex; align-items:center; justify-content:center; font-size:18px; flex-shrink:0; }
.lp-ben-text strong { font-family:'Montserrat',sans-serif; font-size:14px; font-weight:600; color:var(--text-dark); display:block; margin-bottom:3px; }
.lp-ben-text span { font-size:13px; color:var(--text-mid); line-height:1.5; }

.lp-ciclo-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin:28px auto 0; max-width:800px; }
@media(max-width:600px){ .lp-ciclo-grid { grid-template-columns:1fr; } }
.lp-ciclo-grid img { width:100%; border-radius:18px; box-shadow:var(--shadow); display:block; }

.lp-gallery15 { display:flex; gap:12px; overflow-x:auto; padding:20px 0; scrollbar-width:none; scroll-snap-type:x mandatory; }
.lp-gallery15::-webkit-scrollbar { display:none; }
.lp-gallery15 .lp-g-item { min-width:200px; height:260px; border-radius:16px; overflow:hidden; flex-shrink:0; scroll-snap-align:start; border:1px solid rgba(204,181,151,.2); box-shadow:0 4px 14px rgba(0,0,0,.08); }
.lp-gallery15 .lp-g-item img { width:100%; height:100%; object-fit:cover; display:block; }

.lp-guarantee { background:#fff; border-radius:24px; padding:32px; display:flex; gap:22px; align-items:flex-start; margin:0 auto; max-width:760px; border:1px solid rgba(204,181,151,.2); box-shadow:var(--shadow); }
.lp-guar-icon img { width:70px; border-radius:12px; }
.lp-guarantee h4 { font-family:'Montserrat',sans-serif; font-size:15px; font-weight:600; color:var(--text-dark); margin-bottom:8px; }
.lp-guarantee p { font-size:14px; color:var(--text-mid); line-height:1.65; }

.lp-faq-list { max-width:760px; margin:32px auto 0; text-align:left; }
.lp-faq-item { border-bottom:1px solid rgba(204,181,151,.2); }
.lp-faq-q { width:100%; background:none; border:none; text-align:left; padding:20px 0; font-family:'Montserrat',sans-serif; font-size:15px; font-weight:500; color:var(--text-dark); cursor:pointer; display:flex; justify-content:space-between; align-items:center; gap:12px; }
.lp-faq-q:hover { color:var(--brown); }
.lp-faq-icon { width:26px; height:26px; border-radius:50%; background:var(--c3); display:flex; align-items:center; justify-content:center; font-size:16px; color:var(--brown); flex-shrink:0; transition:transform .3s ease; border:1px solid rgba(204,181,151,.35); }
.lp-faq-item.open .lp-faq-icon { transform:rotate(45deg); }
.lp-faq-ans { max-height:0; overflow:hidden; transition:max-height .4s ease, padding .3s ease; font-size:15px; color:var(--text-mid); line-height:1.7; }
.lp-faq-item.open .lp-faq-ans { max-height:300px; padding-bottom:18px; }

.lp-pay-bar { background:#fff; padding:24px 5%; text-align:center; border-top:1px solid rgba(204,181,151,.2); }
.lp-pay-bar p { font-family:'Montserrat',sans-serif; font-size:11px; color:var(--text-light); letter-spacing:.06em; text-transform:uppercase; margin-bottom:12px; }
.lp-pay-methods { display:flex; justify-content:center; align-items:center; gap:12px; flex-wrap:wrap; }
.lp-pay-badge { padding:5px 14px; border:1.5px solid rgba(0,0,0,.12); border-radius:8px; font-family:'Montserrat',sans-serif; font-size:11px; font-weight:700; color:var(--text-mid); background:#fff; }

.lp-footer { background:#1C1816; color:rgba(255,255,255,.55); padding:48px 5% 32px; }
.lp-footer-brand { font-family:'Cormorant Garamond',serif; font-size:22px; font-weight:600; color:var(--gold); margin-bottom:20px; letter-spacing:.06em; }
.lp-footer-links { display:flex; gap:22px; flex-wrap:wrap; margin-bottom:20px; }
.lp-footer-links a { color:rgba(255,255,255,.5); text-decoration:none; font-family:'Montserrat',sans-serif; font-size:12px; letter-spacing:.04em; }
.lp-footer-links a:hover { color:var(--gold); }
.lp-footer-disc { font-size:11px; color:rgba(255,255,255,.3); line-height:1.7; margin-top:20px; border-top:1px solid rgba(255,255,255,.08); padding-top:20px; }

.lp-sticky { position:fixed; bottom:0; left:0; right:0; background:rgba(255,252,248,.97); backdrop-filter:blur(12px); border-top:1px solid rgba(204,181,151,.2); padding:12px 5%; display:flex; align-items:center; justify-content:space-between; gap:12px; z-index:100; box-shadow:0 -6px 24px rgba(0,0,0,.08); transform:translateY(100%); transition:transform .4s ease; font-family:'Lato',sans-serif; }
.lp-sticky.visible { transform:translateY(0); }
.lp-sticky-price { font-family:'Cormorant Garamond',serif; font-size:22px; font-weight:600; color:#2C2C2C; }
.lp-sticky-price span { font-size:13px; color:#777; text-decoration:line-through; font-family:'Lato',sans-serif; font-weight:400; margin-right:6px; }

@media(max-width:600px){
  .lp-wrap .sec { padding:48px 4%; }
  .lp-circle-photo { width:130px; height:130px; }
  .lp-guarantee { flex-direction:column; }
  .lp-ben-row { flex-direction:column; align-items:center; }
  .lp-testi-card { min-width:275px; }
  .lp-hero-content { padding:0 4% 48px; }
}
`;
