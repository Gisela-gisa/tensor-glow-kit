import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [
      { rel: "preconnect", href: "https://cdn.shopify.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "preload",
        as: "image",
        href: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/8ED4C7D8-167B-45D1-A587-68A68FA61779_2.png?v=1778497777",
        fetchpriority: "high",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@300;400;500;600&family=Lato:wght@300;400;700&display=swap",
      },
    ],
  }),
});

const IMG = {
  pricePre: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/EF6B35ED-E038-4BFA-A14A-9DE3B1D733B1_1.png?v=1778497776",
  heroBg: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/8ED4C7D8-167B-45D1-A587-68A68FA61779_2.png?v=1778497777",
  techHero: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5443.jpg?v=1778587423",
  benefitsImg: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/Gemini_Generated_Image_3rzicp3rzicp3rzi.png?v=1778578838",
  smartChoice: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/C467FBDD-0016-4870-8602-6269410E7D6B_1.png?v=1778237191",
  results: [
    "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/A55A68B2-71B8-4E35-8CA6-109ECA92458F.png?v=1778497778",
    "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5392_1.jpg?v=1778497770",
    "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5396.jpg?v=1778497770",
    "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5400.jpg?v=1778497770",
    "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5399.jpg?v=1778497770",
    "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5397.jpg?v=1778497771",
  ],
  ester: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5044_1.jpg?v=1778497770",
  isabel: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5016_2.png?v=1778602507",
  tuMomento: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5486_1.png?v=1778601525",
  ctaBg: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/EF6B35ED-E038-4BFA-A14A-9DE3B1D733B1.png?v=1778497777",
  pay: [
    "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/images_3.png?v=1778241117",
    "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/images_4.png?v=1778241117",
    "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5036.png?v=1778237238",
    "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5037.webp?v=1778237237",
    "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/visa.png?v=1778585309",
  ],
  guarantee: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/download_10.jpg?v=1778241117",
};

/* Slider 8 — "Ellas ya recibieron su Kit" */
const ELLAS_RECIBIERON = [
  "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5502_22cc9e81-1495-4855-94a3-642a1ded2ad9.jpg?v=1778663339",
  "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5501_4aa5ddb7-19db-4d3b-86ec-5e33697bcb1e.jpg?v=1778663338",
  "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5503.jpg?v=1778663338",
  "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/31D0CC10-4A4B-450F-A586-B49F3AE4E866.jpg?v=1778704448",
  "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/CBE61483-7A54-45C1-8D48-0AE846962B84.png?v=1778704464",
  "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/C89A6CEE-F8F8-460A-8833-D6F22E2432F6.png?v=1778704463",
  "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5552.jpg?v=1778704463",
];

/* Slider 9 — "Ellas nos muestran" */
const ELLAS_MUESTRAN = [
  "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5477.jpg?v=1778601197",
  "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5438.jpg?v=1778601211",
  "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5475.jpg?v=1778601197",
  "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5484.jpg?v=1778601196",
  "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5480.jpg?v=1778601197",
];

const ANN_ITEMS = [
  "BIENVENIDA A TU NUEVO RITUAL DE AMOR PROPIO Y CUIDADO",
  "MÁS DE 5.000 CHILENAS YA TRANSFORMARON SU PIEL  |  ENVÍO GRATIS",
  "30% OFF HASTA AGOTAR STOCK PROMOCIONAL",
  "TECNOLOGÍA DE ESTÁNDAR CLÍNICO  |  PATCH REUTILIZABLE HASTA 30 VECES",
  "ENTREGA EN 10 A 14 DÍAS",
  "ENVÍO GRATIS A TODO CHILE",
  "MÁS DE 5.000 CHILENAS YA PROBARON ESTHERÉ",
  "TECNOLOGÍA DE INGENIERÍA FACIAL · ORO 24K",
  "RITUAL DE 2 MINUTOS AL DÍA",
  "OFERTA ESPECIAL POR TIEMPO LIMITADO",
];

/* ============================================================
   👇 SHOPIFY LINKS — TROCAR AQUI PARA INTEGRAR COM A LOJA 👇
   Substitua os valores abaixo pelos URLs OFICIAIS DA SHOPIFY
   (ex.: https://sualoja.myshopify.com/cart/PRODUCT_VARIANT_ID:1
   ou link de checkout / página de produto Shopify).
   Não é necessário alterar layout — apenas trocar a string.
   ============================================================ */
const SHOPIFY_LINKS = {
  // ✅ COLAR AQUI O LINK DO CHECKOUT / CART / PRODUTO SHOPIFY
  CHECKOUT: "https://estherechile.store/products/kit-efecto-tensor-361",
  // ✅ COLAR AQUI O LINK DA PÁGINA DO PRODUTO SHOPIFY
  PRODUCT: "https://estherechile.store/products/kit-efecto-tensor-361",
};

/* ============================================================
   HOVER SLIDER — pares de imagens (inicial → hover)
   ============================================================ */
const HERO_PAIRS: { a: string; b: string }[] = [
  { a: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5374.jpg?v=1778497770", b: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5367.jpg?v=1778497769" },
  { a: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5356.jpg?v=1778497770", b: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5384.jpg?v=1778497769" },
  { a: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5373.jpg?v=1778497769", b: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5368.jpg?v=1778497769" },
  { a: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5353.jpg?v=1778497768", b: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5352.jpg?v=1778497768" },
  { a: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5362.jpg?v=1778497769", b: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5379.jpg?v=1778497769" },
  { a: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5354.jpg?v=1778497768", b: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5389.jpg?v=1778497769" },
  { a: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5361.jpg?v=1778497768", b: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5380.jpg?v=1778497769" },
  { a: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5360.jpg?v=1778497769", b: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5381.jpg?v=1778497769" },
  { a: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5376.jpg?v=1778497769", b: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5365.jpg?v=1778497769" },
  { a: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5377.jpg?v=1778497769", b: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5364.jpg?v=1778497768" },
  { a: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5363.jpg?v=1778497769", b: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5378.jpg?v=1778497769" },
  { a: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5540.jpg?v=1778704462", b: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5547.jpg?v=1778704462" },
  { a: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5548.jpg?v=1778704462", b: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5538.jpg?v=1778704463" },
  { a: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5541.jpg?v=1778704461", b: "https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5545.jpg?v=1778704462" },
];

const TESTIMONIALS = [
  { emoji: "👩🏽", name: "María José R.", text: "Lo compré sin muchas esperanzas y a los 10 días mis amigas me preguntaron qué me había hecho. La piel se ve increíblemente más tersa y luminosa." },
  { emoji: "👩🏻‍🦳", name: "Claudia S., 52 años", text: "Jamás pensé que algo tan sencillo funcionara así. Los parches de silicona son magia pura. Mis arrugas del entrecejo desaparecieron casi por completo." },
  { emoji: "👩🏽‍🦱", name: "Valentina T.", text: "En la segunda semana ya noté que mi piel se veía más firme y luminosa. El ritual es increíble. Vale cada peso." },
  { emoji: "👩🏽‍🦰", name: "Daniela P.", text: "Me encantó el ritual. El sérum + el sellado es lo mejor que he probado. Me levanto con la piel planchada y suave. Es adictivo." },
  { emoji: "👩🏻", name: "Francisca L.", text: "El kit llegó perfecto y los resultados a los 14 días son impresionantes. Muchas gracias Estheré, me devolviste la confianza en mi misma." },
  { emoji: "👩🏽‍🦳", name: "Isabel M.", text: "El sérum es suavísimo y el sellado dérmico en la frente… wow. Piel de bebé. No paro de recomendarlo a todas mis amigas." },
  { emoji: "👩🏻‍🦳", name: "Pamela G., 47 años", text: "Después de 3 semanas con el kit, la gente me pregunta si me hice algo. La respuesta es: solo el Kit Efecto Tensor 360. ¡Gracias!" },
];

const FAQS = [
  {
    q: "¿Cómo es el ritual diario y cuánto tiempo me tomará?",
    a: "Por la mañana: aplicas solo el sérum. Por la noche: aplicas el sérum, esperas unos minutos a que los activos se asienten y luego colocas el Sellado Dérmico.\n\nTodo el ritual toma solo 2 minutos de aplicación en total. Es un sistema simple, rápido y diseñado para integrarse fácilmente en tu rutina diaria.",
  },
  {
    q: "¿Por qué mis cremas actuales no parecen tener efecto?",
    a: "La mayoría de las cremas y sérums del mercado contienen algunos activos interesantes, pero no están formulados como sistemas completos, por lo que muchas veces los resultados terminan siendo limitados.\n\nEl Kit Efecto Tensor 360 fue desarrollado para actuar de forma más inteligente y completa, combinando Niacinamida, Péptidos, Colágeno, Ácido Hialurónico y Oro 24k en un único ritual facial.\n\nAdemás, incorporamos el Sellado Dérmico, que no solo ayuda a mejorar visiblemente la textura de la piel, dejándola más lisa y uniforme, sino que también ayuda a mantener y potenciar la absorción de los activos sobre la piel por más tiempo.\n\nAsí, el Oro 24k junto al Sellado Dérmico trabajan en sinergia para maximizar la eficacia del ritual y potenciar resultados visibles de firmeza y luminosidad.",
  },
  {
    q: "¿Cuánto tarda el envío?",
    a: "Ofrecemos Envío Totalmente Gratis a todo Chile.\nTu pedido llega en un plazo de 10 a 15 días.",
  },
];

/* ============================================================
   GOLD — destaque premium para termos-chave (luxury skincare)
   ============================================================ */
function Gold({ children, solid = false }: { children: ReactNode; solid?: boolean }) {
  return <span className={solid ? "lp-gold lp-gold-solid" : "lp-gold"}>{children}</span>;
}

const WHY_CARDS = [
  { n: "01", t: "Tecnología de 3 Etapas", d: "Oro 24k + Colágeno + Sellado. Piel firme, iluminada e hidratada al despertar." },
  { n: "02", t: "Oclusión Mecánica Activa", d: "El parche evita pliegues del sueño y potencia los activos. Reutilizable hasta 30 veces." },
  { n: "03", t: "Sistema Facial 360", d: "Día (Volumen), Noche (Reparación) y Sellado (Firmeza). Ingeniería facial en recuperación constante." },
  { n: "04", t: "Resultados Premium, Precio Justo", d: "Calidad de clínica en casa por una fracción del costo. Solo 2 minutos al día para un cambio real." },
];

/* ============================================================
   AUTO SCROLLER — slider horizontal automático + drag manual
   ============================================================ */
function AutoScroller({
  images,
  size = "md",
}: {
  images: string[];
  size?: "sm" | "md";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const tick = () => {
      if (!pausedRef.current && el) {
        el.scrollLeft += 0.5;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const pause = () => {
      pausedRef.current = true;
    };
    const resume = () => {
      setTimeout(() => {
        pausedRef.current = false;
      }, 1800);
    };
    el.addEventListener("pointerdown", pause);
    el.addEventListener("pointerup", resume);
    el.addEventListener("pointerleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("pointerup", resume);
      el.removeEventListener("pointerleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, []);
  return (
    <div ref={ref} className={`lp-autoscroll lp-autoscroll-${size}`}>
      {[...images, ...images].map((src, i) => (
        <div key={i} className="lp-autoscroll-item">
          <img decoding="async" loading="lazy" src={src} alt="" loading="lazy" draggable={false} />
        </div>
      ))}
    </div>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
          <div
            className="lp-hero-video-wrap"
            style={{
              backgroundImage: `url(${IMG.heroBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Badge premium superior direita */}
          <div className="lp-hero-badge">
            <span className="lp-hero-badge-dot" />
            +5.000 chilenas felices
          </div>
          <div className="lp-hero-content">
            <div className="lp-hero-eyebrow">Estheré · Ingeniería Facial</div>
            <h1>Kit Efecto Tensor 360: El secreto para una apariencia que desafía el paso del tiempo. Piel visiblemente más lisa y firme con solo 2 minutos de uso diario.</h1>
            {/* ✅ COLAR AQUI O LINK DO CHECKOUT / CART / PRODUTO SHOPIFY (CTA HERO) */}
            <a href={SHOPIFY_LINKS.CHECKOUT} className="btn btn-gold btn-pulse">QUIERO MI EFECTO TENSOR</a>
            <p className="lp-hero-guarantee">Garantía de satisfacción o te devolvemos tu dinero.</p>
          </div>
        </section>

        {/* STEPS — texto ACIMA das imagens hover */}
        <div className="lp-steps">
          <p><strong>2 pasos</strong>, 2 minutos y una piel visiblemente más firme.</p>
        </div>

        {/* HINT — toca las fotos */}
        <p className="lp-pairs-touch-hint">
          <span className="lp-touch-arrow" aria-hidden="true">←</span>
          Toca las fotos para ver
          <span className="lp-touch-arrow" aria-hidden="true">→</span>
        </p>

        {/* HOVER SLIDER PREMIUM — pares de imagens (toque/hover) */}
        <section className="lp-pairs-sec">
          <div className="lp-pairs-track">
            {HERO_PAIRS.map((p, i) => (
              <div key={i} className="lp-pair-card" tabIndex={0}>
                <img decoding="async" loading="lazy" className="lp-pair-a" src={p.a} alt={`look ${i + 1} antes`} loading="lazy" />
                <img decoding="async" loading="lazy" className="lp-pair-b" src={p.b} alt={`look ${i + 1} después`} loading="lazy" />
                <span className="lp-pair-tap" aria-hidden="true">👆</span>
              </div>
            ))}
          </div>
        </section>

        {/* Caption discreta abaixo das imagens hover */}
        <p className="lp-soft-caption">Cambios visibles en 30-60 días de uso. La evolución varía según cada piel.</p>

        {/* BENEFITS SUBTITLE + CHECKS */}
        <section className="lp-benefits-sub">
          <h2>Ingeniería Facial: Oro 24K, Ácido Hialurónico, Niacinamida y Colágeno unidos al Sellado Dérmico. Resultados profesionales y piel visiblemente más lisa en 2 minutos, por una fracción del costo.</h2>
        </section>
        <section className="lp-checks">
          <div className="lp-checks-grid">
            {[
              "Efecto de Firmeza",
              "Alisado Visible de Textura",
              "Relleno Hidratante Profundo",
              "Acabado Profesional en Casa",
            ].map((t) => (
              <div key={t} className="lp-check-item">
                <span className="lp-check-icon">✓</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PRICE CTA */}
        <section id="precio" className="lp-price-cta">
          <div className="lp-price-img">
            <img decoding="async" loading="lazy" src={IMG.pricePre} alt="Kit Efecto Tensor 360" />
          </div>
          <div className="lp-price-old">Antes: $ 44.990</div>
          <div className="lp-price-save">Ahorra $15.000 • 30% OFF</div>
          <div className="lp-price-new">$ 29.990</div>
          <div>
            {/* ✅ COLAR AQUI O LINK DO CHECKOUT / CART SHOPIFY (CTA PRINCIPAL) */}
            <a href={SHOPIFY_LINKS.CHECKOUT} className="btn btn-gold btn-pulse">Quiero mi Efecto Tensor</a>
          </div>
          <div className="lp-pay-icons">
            {IMG.pay.map((p, i) => (
              <img decoding="async" loading="lazy" key={i} src={p} alt="medio de pago" className="lp-pay-icon-img" />
            ))}
          </div>
          <div className="lp-pay-icons" style={{ marginTop: 10 }}>
            <img decoding="async" loading="lazy" src={IMG.guarantee} alt="Garantía 30 días" className="lp-guarantee-badge" />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="lp-testi-sec">
          <div className="text-center" style={{ marginBottom: 28 }}>
            <div className="subtitle">Lo que dicen ellas</div>
            <div className="gold-divider" />
            <h2>Experiencias reales con el Kit Efecto Tensor 360</h2>
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
            {/* ✅ COLAR AQUI O LINK DO CHECKOUT / CART SHOPIFY (CTA TESTIMONIOS) */}
            <a href={SHOPIFY_LINKS.CHECKOUT} className="btn btn-dark">QUIERO MI EFECTO TENSOR</a>
          </div>
        </section>

        {/* TRIPLE ACCION → INGENIERÍA FACIAL */}
        <section className="sec inner">
          <div className="text-center">
            <div className="subtitle">Sistema inteligente</div>
            <div className="gold-divider" />
            <h2>Kit Efecto Tensor 360 con Ingeniería Facial de Triple Acción: un sistema inteligente que potencia la absorción de activos para resultados visibles.</h2>
            <div className="lp-inline-img">
              <img decoding="async" loading="lazy" src={IMG.techHero} alt="Ingeniería Facial" />
            </div>
          </div>
          <div className="lp-triple-grid">
            <article className="lp-triple-card">
              <div className="lp-triple-eyebrow">Día</div>
              <h4>Volumen y Brillo</h4>
              <p>Oro 24k + Colágeno: hidratación profunda y luminosidad inmediata.</p>
            </article>
            <article className="lp-triple-card">
              <div className="lp-triple-eyebrow">Noche</div>
              <h4>Reparación</h4>
              <p>Péptidos + Niacinamida: firmeza y tono uniforme mientras descansas.</p>
            </article>
            <article className="lp-triple-card">
              <div className="lp-triple-eyebrow">Sellado</div>
              <h4>Efecto Tensor</h4>
              <p>Parche de silicona: sellado mecánico que maximiza la absorción y alisa la textura.</p>
            </article>
          </div>
          <div className="text-center">
            {/* ✅ COLAR AQUI O LINK DO CHECKOUT / CART SHOPIFY (CTA INGENIERÍA) */}
            <a href={SHOPIFY_LINKS.CHECKOUT} className="btn btn-gold">Iniciar mi ritual</a>
          </div>
        </section>

        {/* CICLO */}
        <section className="sec inner text-center" style={{ background: "var(--c1)" }}>
          <div className="subtitle">El ciclo de <Gold solid>Ingeniería Facial</Gold> 360</div>
          <div className="gold-divider" />
          <p className="lp-ciclo-extra">Y la magia ocurre por la noche: una vez que el sérum se asienta sobre la piel, el <Gold solid>Sellado Dérmico</Gold> ayuda a potenciar aún más la absorción de los activos, maximizando la apariencia de firmeza, suavidad y luminosidad mientras descansas.</p>
          <div className="lp-inline-img" style={{ marginTop: 30 }}>
            <img decoding="async" loading="lazy" src={IMG.benefitsImg} alt="Beneficios" />
          </div>
          <div className="lp-lux-grid" style={{ marginTop: 44 }}>
            <article className="lp-lux-card">
              <div className="lp-lux-num">01</div>
              <h4>Volumen y Luminosidad</h4>
              <p>El Oro 24k y el Ácido Hialurónico proporcionan un relleno visual inmediato y una hidratación profunda que ilumina el rostro.</p>
            </article>
            <article className="lp-lux-card">
              <div className="lp-lux-num">02</div>
              <h4>Firmeza y Reparación</h4>
              <p>Los Péptidos y el Colágeno actúan en la estructura de la piel para mejorar la firmeza y promover una textura renovada.</p>
            </article>
            <article className="lp-lux-card">
              <div className="lp-lux-num">03</div>
              <h4>Oclusión Inteligente</h4>
              <p>El Sellado Dérmico con parche de silicona maximiza la absorción de activos y mantiene la piel descansada, siendo reutilizable hasta 30 veces.</p>
            </article>
          </div>
        </section>

        {/* ELLAS NOS MUESTRAN (substitui o bloco antigo) */}
        <section className="sec inner text-center">
          <div className="subtitle">Ellas nos muestran</div>
          <div className="gold-divider" />
          <h2>Miles de mujeres en Chile prefieren la sinergia del Oro 24k y la tecnología de sellado para una piel visiblemente más firme y radiante.</h2>
          <AutoScroller images={ELLAS_MUESTRAN} size="sm" />
          <div style={{ marginTop: 28 }}>
            {/* ✅ COLAR AQUI O LINK DO CHECKOUT / CART SHOPIFY (CTA ELLAS) */}
            <a href={SHOPIFY_LINKS.CHECKOUT} className="btn btn-dark">RECUPERAR MI FIRMEZA AHORA</a>
          </div>
        </section>

        {/* WHY SMART CHOICE */}
        <section className="sec inner text-center" style={{ background: "var(--c1)" }}>
          <div className="subtitle">La elección inteligente</div>
          <div className="gold-divider" />
          <div className="lp-inline-img">
            <img decoding="async" loading="lazy" src={IMG.smartChoice} alt="La elección inteligente" />
          </div>
          <div className="lp-why-grid">
            {WHY_CARDS.map((c) => (
              <div key={c.n} className="lp-why-card">
                <div className="lp-why-num">{c.n}</div>
                <h4>{c.t}</h4>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            {/* ✅ COLAR AQUI O LINK DO CHECKOUT / CART SHOPIFY (CTA WHY) */}
            <a href={SHOPIFY_LINKS.CHECKOUT} className="btn btn-gold">Quiero el mío</a>
          </div>
        </section>

        {/* RESULTADOS REALES */}
        <section className="sec inner text-center">
          <div className="subtitle">Resultados reales</div>
          <div className="gold-divider" />
          <h2>Ellas ya recibieron su Kit de Ingeniería Facial y están listas para transformar su piel en solo 2 minutos al día.</h2>
          <AutoScroller images={[...IMG.results, ...ELLAS_RECIBIERON]} size="md" />
          <div style={{ marginTop: 24 }}>
            {/* ✅ COLAR AQUI O LINK DO CHECKOUT / CART SHOPIFY (CTA RESULTADOS) */}
            <a href={SHOPIFY_LINKS.CHECKOUT} className="btn btn-dark">Quiero el mío ahora</a>
          </div>
        </section>

        {/* CICLO QUOTE */}
        <section className="sec inner text-center" style={{ background: "var(--c2)" }}>
          <div className="subtitle">El Ciclo de Ingeniería Facial</div>
          <div className="gold-divider" />
          <div className="lp-ciclo-mini-img">
            <img decoding="async" src="https://cdn.shopify.com/s/files/1/0728/5673/1799/files/IMG_5306_1.png?v=1778601380" alt="Ciclo de Ingeniería Facial" />
          </div>
          <h2 style={{ fontStyle: "italic", maxWidth: 720, margin: "0 auto" }}>
            "Volumen de día, renovación de noche y oclusión inteligente mientras descansas: el sistema completo para una piel firme y radiante."
          </h2>
        </section>

        {/* TU MOMENTO (substitui ciencia) */}
        <section className="lp-ciencia">
          <div className="subtitle">Tu Momento, Tu Transformación</div>
          <div className="gold-divider" />
          <div className="lp-inline-img">
            <img decoding="async" loading="lazy" src={IMG.tuMomento} alt="Tu momento" />
          </div>
          <p>Imagina despertar cada mañana con la confianza de un rostro que refleja tu luz natural. El <Gold solid>Kit Efecto Tensor 360</Gold> con <Gold solid>Ingeniería Facial</Gold> de Estheré convierte 2 minutos de tu día en un ritual de renovación profunda.</p>
          <p>Con el poder del <Gold solid>Oro 24k</Gold> y el <Gold solid>sellado dérmico</Gold> reutilizable hasta 30 veces, obtienes resultados de alto nivel por una fracción del costo.</p>
          <p>Regálate la piel que mereces, hoy mismo.</p>
        </section>

        {/* HISTORIA DE ESTER */}
        <section className="lp-founder">
          <div className="lp-two-col inner">
            <div className="lp-img-block">
              <img decoding="async" loading="lazy" src={IMG.ester} alt="Ester, fundadora" />
            </div>
            <div>
              <div className="subtitle">Historia de Ester</div>
              <div className="gold-divider" style={{ margin: "16px 0" }} />
              <p style={{ marginTop: 18 }}>"Soy Ester. Como dermatóloga, noté que los productos de elección no lograban el efecto esperado en la piel. Por eso, tras investigar y testear diversas soluciones, encontré la combinación ideal: un sérum extremadamente potente que une Oro 24k, Péptidos, Niacinamida, Colágeno y Ácido Hialurónico.</p>
              <p style={{ marginTop: 12 }}>Sin embargo, para maximizar estos activos, faltaba una pieza clave: el Sellado Dérmico. Así nació la Ingeniería Facial, la unión perfecta de estos dos productos en el Kit Efecto Tensor 360.</p>
              <p style={{ marginTop: 12 }}>Un sistema de nivel clínico, a una fracción del costo, que hoy más de 5.000 chilenas ya utilizan para transformar su piel en solo 2 minutos."</p>
            </div>
          </div>

          <div className="lp-guarantee" style={{ marginTop: 40, maxWidth: 880, marginLeft: "auto", marginRight: "auto" }}>
            <div className="lp-guar-icon"><img decoding="async" loading="lazy" src={IMG.guarantee} alt="garantía" /></div>
            <div>
              <h4>Compromiso Estheré: Satisfacción garantizada en 30 días</h4>
              <p>Estamos tan seguras de nuestra Ingeniería Facial que, si no estás satisfecha con los resultados tras usar correctamente el kit, solo debes devolver los frascos (incluso vacíos) para recibir el reembolso completo.</p>
              <div style={{ marginTop: 16 }}>
                {/* ============================================================
                    ✅ COLAR AQUI O LINK DO CHECKOUT / CART SHOPIFY (CTA GARANTÍA)
                    ============================================================ */}
                <a href={SHOPIFY_LINKS.CHECKOUT} className="btn btn-gold">Quiero con garantía</a>
              </div>
            </div>
          </div>
        </section>

        {/* TESTEMUNHO ISABEL */}
        <section className="sec inner text-center">
          <div className="subtitle">Tu próximo paso</div>
          <div className="gold-divider" />
          <h2 style={{ marginBottom: 24 }}>"El testimonio de Isabel se repite en más de 5.000 chilenas… el tuyo puede ser el próximo."</h2>
          <div className="lp-isabel-img">
            <img decoding="async" loading="lazy" src={IMG.isabel} alt="Isabel" />
          </div>
          <div className="lp-isabel-text">
            <p>"Después de años probando de todo sin éxito, la Ingeniería Facial cambió mi perspectiva. La unión del Oro 24k con el Sellado Dérmico es el equilibrio que mi piel necesitaba para recuperar su firmeza y luminosidad.</p>
            <p style={{ marginTop: 12 }}>Siento la calidad de una clínica en un ritual de 2 minutos que realmente puedo mantener."</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec inner text-center">
          <div className="subtitle">Resolvemos tus dudas</div>
          <div className="gold-divider" />
          <h2>Preguntas Frecuentes: Ingeniería Facial Estheré</h2>
          <div className="lp-faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className={`lp-faq-item ${openFaq === i ? "open" : ""}`}>
                <button className="lp-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}
                  <span className="lp-faq-icon">+</span>
                </button>
                <div className="lp-faq-ans" style={{ whiteSpace: "pre-line" }}>{f.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="lp-final-reel">
          <div className="lp-final-reel-bg">
            <img decoding="async" loading="lazy" src={IMG.ctaBg} alt="" />
          </div>
          <div className="lp-final-reel-content">
            <div className="subtitle" style={{ color: "var(--gold)" }}>El inicio de tu transformación</div>
            <div className="gold-divider" />
            <h2>Kit Ingeniería Facial: Resultados de clínica en casa con la sinergia del Oro 24k y el sellado dérmico profundo.</h2>
            <div style={{ marginTop: 24 }}>
              {/* ✅ COLAR AQUI O LINK DO CHECKOUT / CART SHOPIFY (CTA FINAL) */}
              <a href={SHOPIFY_LINKS.CHECKOUT} className="btn btn-gold btn-pulse">Quiero mi Efecto Tensor</a>
            </div>
          </div>
        </section>

        {/* PAY BAR */}
        <div className="lp-pay-bar">
          <p>Compra 100% segura · Envío gratis a todo Chile</p>
          <div className="lp-pay-methods">
            {IMG.pay.map((p, i) => (
              <img decoding="async" loading="lazy" key={i} src={p} alt="medio de pago" className="lp-pay-icon-img" />
            ))}
          </div>
          <div className="lp-final-guarantee">
            <img decoding="async" loading="lazy" src={IMG.guarantee} alt="Garantía 30 días" className="lp-guarantee-badge-final" />
          </div>
        </div>

        {/* FOOTER */}
        <footer className="lp-footer">
          <div className="lp-footer-brand">ESTHERÉ</div>
          <div className="lp-footer-links">
            <a href="https://estherechile.store/pages/contacto">Contacto</a>
            <a href="https://estherechile.store/pages/terminos-de-servicio">Términos de Servicio</a>
            <a href="https://estherechile.store/pages/politica-de-reembolso-y-devoluciones">Política de Reembolso y Devoluciones</a>
            <a href="https://estherechile.store/pages/politicas-de-envio">Política de Envío</a>
          </div>
          <div className="lp-footer-disc">
            <p>© {new Date().getFullYear()} Estheré. Todos los derechos reservados. · Chile</p>
            <p>Este producto no está destinado a diagnosticar, tratar, curar ni prevenir ninguna enfermedad. Los resultados individuales pueden variar. Este sitio no forma parte del sitio web de Facebook™ o Meta™ ni está afiliado de ninguna manera a Meta Platforms, Inc. Además, este sitio NO está respaldado, administrado ni patrocinado por Facebook™ o Instagram™.</p>
          </div>
        </footer>
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
.lp-wrap .lp-gold { font-weight:800; color:#a87a3a; -webkit-text-fill-color:#a87a3a; letter-spacing:.01em; background:none; }
.lp-wrap .lp-gold-solid { font-weight:800; color:#a87a3a; -webkit-text-fill-color:#a87a3a; background:none; }

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
.lp-steps-swipe { margin-top:14px; font-family:'Montserrat',sans-serif; font-size:15px; font-weight:500; color:var(--text-dark); display:flex; align-items:center; justify-content:center; gap:10px; font-style:normal; }
.lp-arrow-blink { color:var(--brown); font-size:18px; font-weight:700; animation:lpArrowBlink 1s ease-in-out infinite; }
@keyframes lpArrowBlink { 0%,100%{opacity:.2} 50%{opacity:1} }
.lp-scroll-caption { background:var(--c2); padding:0 5% 24px; text-align:center; font-size:13px; color:var(--text-mid); font-style:italic; }
.lp-soft-caption { background:transparent; padding:14px 6% 22px; text-align:center; font-size:12.5px; color:var(--text-mid); font-style:italic; font-family:'Cormorant Garamond',serif; letter-spacing:.01em; max-width:560px; margin:0 auto; }

/* Mini image inside CICLO QUOTE block */
.lp-ciclo-mini-img { max-width:180px; margin:18px auto 22px; border-radius:14px; overflow:hidden; box-shadow:0 6px 22px rgba(138,70,3,.14); border:1px solid rgba(204,181,151,.3); }
.lp-ciclo-mini-img img { width:100%; height:auto; display:block; }
@media(max-width:600px){ .lp-ciclo-mini-img { max-width:140px; } }

/* Extra paragraph in CICLO section */
.lp-ciclo-extra { max-width:680px; margin:14px auto 0; font-size:15px; line-height:1.7; color:var(--text-mid); font-style:italic; }

/* Lux numbers — gold gradient premium */
.lp-lux-num { background:linear-gradient(135deg,#e7d4b3 0%,#ccb597 45%,#8a4603 100%); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent; }

/* Final guarantee badge — centered, premium spacing */
.lp-final-guarantee { display:flex; justify-content:center; margin-top:22px; }
.lp-guarantee-badge-final { height:84px; width:auto; object-fit:contain; filter:drop-shadow(0 4px 12px rgba(138,70,3,.18)); }
@media(max-width:600px){ .lp-guarantee-badge-final { height:72px; } }

/* Footer — disclaimer integrated as one institutional block */
.lp-footer-disc p { margin:6px 0; }
.lp-footer-disc p + p { margin-top:8px; }

.lp-checks { background:#fff; padding:24px 5% 56px; }
.lp-checks-grid { max-width:720px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:14px 28px; }
.lp-check-item { display:flex; align-items:center; gap:10px; font-family:'Montserrat',sans-serif; font-size:13px; color:var(--text-dark); }
.lp-check-icon { width:22px; height:22px; border-radius:50%; background:#ccb597; color:#fff; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; flex-shrink:0; }

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

.lp-inline-img { max-width:680px; margin:24px auto; border-radius:18px; overflow:hidden; box-shadow:var(--shadow); }
.lp-inline-img img { width:100%; height:auto; display:block; }

.lp-price-cta { background:#fff; padding:52px 5%; text-align:center; position:relative; }
.lp-price-img { max-width:340px; margin:0 auto 24px; }
.lp-price-img img { width:100%; height:auto; display:block; border-radius:14px; }
.lp-price-old { font-size:15px; color:var(--text-light); text-decoration:line-through; }
.lp-price-new { font-family:'Cormorant Garamond',serif; font-size:clamp(38px,6vw,54px); font-weight:600; color:var(--text-dark); line-height:1.1; margin:4px 0 22px; }
.lp-pay-icons { margin-top:16px; display:flex; justify-content:center; align-items:center; gap:14px; flex-wrap:wrap; }
.lp-pay-icon-img { height:28px; width:auto; object-fit:contain; }
.lp-guarantee-badge { height:64px; width:auto; object-fit:contain; }

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

.lp-two-col { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; max-width:1080px; margin:0 auto; }
@media(max-width:768px){ .lp-two-col { grid-template-columns:1fr; } }
.lp-img-block { width:100%; border-radius:18px; overflow:hidden; box-shadow:var(--shadow); }
.lp-img-block img { width:100%; height:100%; object-fit:cover; display:block; }
.lp-founder { background:var(--c2); padding:72px 5%; }

.lp-ciencia { background:#fff; padding:52px 5%; text-align:center; }
.lp-ciencia h2 { margin:8px 0 16px; }
.lp-ciencia p { max-width:680px; margin:0 auto 14px; font-size:16px; line-height:1.75; color:var(--text-mid); }

.lp-isabel-img { max-width:420px; margin:24px auto; border-radius:18px; overflow:hidden; box-shadow:var(--shadow); }
.lp-isabel-img img { width:100%; height:auto; display:block; }
.lp-isabel-text { max-width:680px; margin:24px auto 0; font-size:16px; color:var(--text-mid); line-height:1.75; font-style:italic; }

.lp-reel-carousel { display:flex; gap:14px; overflow-x:auto; padding:16px 0; scrollbar-width:none; scroll-snap-type:x mandatory; }
.lp-reel-carousel::-webkit-scrollbar { display:none; }
.lp-reel-item { position:relative; min-width:160px; height:284px; border-radius:16px; overflow:hidden; scroll-snap-align:start; flex-shrink:0; box-shadow:0 6px 22px rgba(0,0,0,.1); border:1px solid rgba(204,181,151,.2); }
.lp-reel-item img { width:100%; height:100%; object-fit:cover; display:block; }
.lp-reel-tag { position:absolute; bottom:10px; left:10px; right:10px; color:#fff; font-family:'Montserrat',sans-serif; font-size:11px; letter-spacing:.08em; background:rgba(0,0,0,.45); padding:6px 10px; border-radius:8px; backdrop-filter:blur(4px); }

.lp-why-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:20px; margin-top:32px; text-align:left; }
.lp-why-card { background:#fff; border-radius:18px; padding:26px 22px; box-shadow:0 4px 18px rgba(0,0,0,.06); border:1px solid rgba(204,181,151,.15); transition:transform .3s ease; }
.lp-why-card:hover { transform:translateY(-4px); }
.lp-why-num { font-family:'Cormorant Garamond',serif; font-size:42px; font-weight:600; color:rgba(204,181,151,.5); line-height:1; margin-bottom:8px; }
.lp-why-card h4 { font-size:16px; font-weight:600; color:var(--text-dark); margin-bottom:6px; font-family:'Montserrat',sans-serif; }
.lp-why-card p { font-size:13px; color:var(--text-mid); line-height:1.6; }

.lp-final-reel { position:relative; min-height:480px; display:flex; align-items:flex-end; justify-content:center; overflow:hidden; }
.lp-final-reel-bg { position:absolute; inset:0; z-index:0; }
.lp-final-reel-bg img { width:100%; height:100%; object-fit:cover; display:block; filter:brightness(.45); }
.lp-final-reel-content { position:relative; z-index:2; text-align:center; padding:48px 5% 56px; max-width:680px; }
.lp-final-reel-content h2 { color:#F7EFE2; margin:8px 0; line-height:1.35; }

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
.lp-guar-icon img { width:90px; height:auto; border-radius:12px; }
.lp-guarantee h4 { font-family:'Montserrat',sans-serif; font-size:15px; font-weight:600; color:var(--text-dark); margin-bottom:8px; }
.lp-guarantee p { font-size:14px; color:var(--text-mid); line-height:1.65; }

.lp-faq-list { max-width:760px; margin:32px auto 0; text-align:left; }
.lp-faq-item { border-bottom:1px solid rgba(204,181,151,.2); }
.lp-faq-q { width:100%; background:none; border:none; text-align:left; padding:20px 0; font-family:'Montserrat',sans-serif; font-size:15px; font-weight:500; color:var(--text-dark); cursor:pointer; display:flex; justify-content:space-between; align-items:center; gap:12px; }
.lp-faq-q:hover { color:var(--brown); }
.lp-faq-icon { width:26px; height:26px; border-radius:50%; background:var(--c3); display:flex; align-items:center; justify-content:center; font-size:16px; color:var(--brown); flex-shrink:0; transition:transform .3s ease; border:1px solid rgba(204,181,151,.35); }
.lp-faq-item.open .lp-faq-icon { transform:rotate(45deg); }
.lp-faq-ans { max-height:0; overflow:hidden; transition:max-height .4s ease, padding .3s ease; font-size:15px; color:var(--text-mid); line-height:1.7; }
.lp-faq-item.open .lp-faq-ans { max-height:400px; padding-bottom:18px; }

.lp-pay-bar { background:#fff; padding:24px 5%; text-align:center; border-top:1px solid rgba(204,181,151,.2); }
.lp-pay-bar p { font-family:'Montserrat',sans-serif; font-size:11px; color:var(--text-light); letter-spacing:.06em; text-transform:uppercase; margin-bottom:12px; }
.lp-pay-methods { display:flex; justify-content:center; align-items:center; gap:14px; flex-wrap:wrap; }

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

/* ===== HERO BADGE ===== */
.lp-hero-badge { position:absolute; top:18px; right:18px; z-index:5; display:inline-flex; align-items:center; gap:8px; background:rgba(255,252,248,.92); backdrop-filter:blur(10px); border:1px solid rgba(204,181,151,.5); color:#3a2f25; font-family:'Montserrat',sans-serif; font-size:11px; font-weight:600; letter-spacing:.04em; padding:8px 14px; border-radius:999px; box-shadow:0 6px 20px rgba(0,0,0,.18); }
.lp-hero-badge-dot { width:7px; height:7px; border-radius:50%; background:#ccb597; box-shadow:0 0 0 4px rgba(204,181,151,.3); animation:lpDot 1.6s ease-in-out infinite; }
@keyframes lpDot { 0%,100%{ box-shadow:0 0 0 4px rgba(204,181,151,.3);} 50%{ box-shadow:0 0 0 8px rgba(204,181,151,0);} }
.lp-hero-video-wrap::before { content:''; position:absolute; inset:0; background:rgba(10,8,5,.28); z-index:1; }

/* ===== HOVER PAIRS SLIDER ===== */
.lp-pairs-sec { background:#fff; padding:24px 0 18px; }
.lp-pairs-track { display:flex; gap:14px; overflow-x:auto; padding:8px 5% 14px; scroll-snap-type:x mandatory; scrollbar-width:none; -webkit-overflow-scrolling:touch; }
.lp-pairs-track::-webkit-scrollbar { display:none; }
.lp-pair-card { position:relative; flex:0 0 auto; width:170px; aspect-ratio:3/4; border-radius:18px; overflow:hidden; scroll-snap-align:start; box-shadow:0 8px 24px rgba(138,70,3,.14); border:1px solid rgba(204,181,151,.25); cursor:pointer; }
.lp-pair-card img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:opacity .55s ease, transform .8s ease; }
.lp-pair-card .lp-pair-b { opacity:0; transform:scale(1.04); }
.lp-pair-card:hover .lp-pair-b, .lp-pair-card:focus .lp-pair-b, .lp-pair-card:active .lp-pair-b { opacity:1; transform:scale(1); }
.lp-pair-card:hover .lp-pair-a, .lp-pair-card:focus .lp-pair-a, .lp-pair-card:active .lp-pair-a { opacity:0; }
.lp-pairs-hint { text-align:center; font-family:'Montserrat',sans-serif; font-size:12px; color:var(--text-mid); display:flex; align-items:center; justify-content:center; gap:10px; padding:6px 5% 16px; }
@media(min-width:768px){ .lp-pair-card { width:200px; } }
.lp-pairs-touch-hint { text-align:center; font-family:'Montserrat',sans-serif; font-size:12px; font-weight:600; letter-spacing:.08em; text-transform:uppercase; color:var(--brown); display:flex; align-items:center; justify-content:center; gap:12px; padding:8px 5% 4px; }
.lp-touch-arrow { display:inline-block; font-size:16px; color:var(--gold); animation:lpArrow 1.4s ease-in-out infinite; }
.lp-touch-arrow:last-child { animation-delay:.7s; }
@keyframes lpArrow { 0%,100%{ transform:translateX(0); opacity:.6;} 50%{ transform:translateX(4px); opacity:1;} }
.lp-pair-tap { position:absolute; bottom:10px; right:10px; z-index:2; background:rgba(255,252,248,.92); border:1px solid rgba(204,181,151,.5); border-radius:999px; padding:4px 8px; font-size:14px; box-shadow:0 4px 12px rgba(0,0,0,.18); animation:lpTap 1.6s ease-in-out infinite; pointer-events:none; }
@keyframes lpTap { 0%,100%{ transform:translateY(0);} 50%{ transform:translateY(-3px);} }
.lp-pair-card:hover .lp-pair-tap, .lp-pair-card:focus .lp-pair-tap, .lp-pair-card:active .lp-pair-tap { opacity:0; }

/* ===== PRICE SAVE (entre antes/agora) ===== */
.lp-price-save { font-family:'Montserrat',sans-serif; font-size:12px; font-weight:600; letter-spacing:.06em; color:var(--brown); margin-top:2px; }

/* ===== STICKY refinada ===== */
.lp-sticky-info { display:flex; flex-direction:column; line-height:1.1; }
.lp-sticky-old { font-size:12px; color:#999; text-decoration:line-through; font-family:'Lato',sans-serif; }
.lp-sticky-save { font-family:'Montserrat',sans-serif; font-size:10px; font-weight:600; letter-spacing:.04em; color:var(--brown); margin:2px 0; }
.lp-sticky-now { font-family:'Cormorant Garamond',serif; font-size:22px; font-weight:600; color:#2C2C2C; }
.lp-sticky-btn { padding:13px 22px !important; font-size:13px !important; }

@media(max-width:600px){
  .lp-wrap .sec { padding:48px 4%; }
  .lp-guarantee { flex-direction:column; }
  .lp-ben-row { flex-direction:column; align-items:center; }
  .lp-testi-card { min-width:275px; }
  .lp-hero-content { padding:0 4% 48px; }
}

/* ===== TRIPLE GRID (DÍA / NOCHE / SELLADO) — premium clean ===== */
.lp-triple-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; max-width:880px; margin:24px auto 28px; }
.lp-triple-card { background:#fff; border:1px solid rgba(204,181,151,.28); border-radius:16px; padding:22px 18px; text-align:left; box-shadow:0 4px 18px rgba(138,70,3,.07); position:relative; transition:transform .3s ease, box-shadow .3s ease; }
.lp-triple-card:hover { transform:translateY(-3px); box-shadow:0 10px 28px rgba(138,70,3,.12); }
.lp-triple-card::before { content:''; position:absolute; top:0; left:18px; right:18px; height:2px; background:linear-gradient(90deg,transparent,#ccb597,transparent); }
.lp-triple-eyebrow { font-family:'Montserrat',sans-serif; font-size:10px; font-weight:600; letter-spacing:.18em; text-transform:uppercase; color:#8a4603; margin-bottom:6px; }
.lp-triple-card h4 { font-family:'Cormorant Garamond',serif; font-size:20px; font-weight:600; color:var(--text-dark); margin-bottom:8px; line-height:1.2; }
.lp-triple-card p { font-size:13.5px; color:var(--text-mid); line-height:1.55; }
@media(max-width:680px){ .lp-triple-grid { grid-template-columns:1fr; gap:10px; max-width:420px; } .lp-triple-card { padding:18px 16px; } }

/* ===== LUX BENEFIT CARDS ===== */
.lp-lux-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; max-width:980px; margin:0 auto; text-align:left; }
.lp-lux-card { background:#fff; border:1px solid rgba(204,181,151,.28); border-radius:20px; padding:28px 24px; box-shadow:0 6px 22px rgba(138,70,3,.08); position:relative; overflow:hidden; transition:transform .35s ease, box-shadow .35s ease; }
.lp-lux-card:hover { transform:translateY(-4px); box-shadow:0 14px 34px rgba(138,70,3,.14); }
.lp-lux-card::after { content:''; position:absolute; inset:auto 0 0 0; height:3px; background:linear-gradient(90deg,#ccb597,#8a4603,#ccb597); opacity:.85; }
.lp-lux-num { font-family:'Cormorant Garamond',serif; font-size:34px; font-weight:600; color:#ccb597; line-height:1; margin-bottom:10px; letter-spacing:.04em; }
.lp-lux-card h4 { font-family:'Cormorant Garamond',serif; font-size:22px; font-weight:600; color:var(--text-dark); margin-bottom:10px; line-height:1.2; }
.lp-lux-card p { font-size:14px; color:var(--text-mid); line-height:1.65; }
@media(max-width:780px){ .lp-lux-grid { grid-template-columns:1fr; gap:14px; max-width:480px; } }

/* ===== AUTO SCROLLER ===== */
.lp-autoscroll { display:flex; gap:14px; overflow-x:auto; padding:22px 5%; scrollbar-width:none; -webkit-overflow-scrolling:touch; cursor:grab; scroll-behavior:auto; }
.lp-autoscroll::-webkit-scrollbar { display:none; }
.lp-autoscroll:active { cursor:grabbing; }
.lp-autoscroll-item { flex:0 0 auto; border-radius:16px; overflow:hidden; box-shadow:0 6px 22px rgba(138,70,3,.12); border:1px solid rgba(204,181,151,.25); background:#f7efe2; }
.lp-autoscroll-item img { width:100%; height:100%; object-fit:cover; display:block; pointer-events:none; user-select:none; }
.lp-autoscroll-md .lp-autoscroll-item { width:220px; height:280px; }
.lp-autoscroll-sm .lp-autoscroll-item { width:160px; height:210px; }
@media(max-width:600px){
  .lp-autoscroll-md .lp-autoscroll-item { width:170px; height:220px; }
  .lp-autoscroll-sm .lp-autoscroll-item { width:130px; height:170px; }
}
`;
