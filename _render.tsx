import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import fs from "fs";
import { Index } from "./src/routes/index.tsx";

const body = renderToStaticMarkup(React.createElement(Index));

const head = `<!doctype html>
<html lang="es-CL">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Kit Efecto Tensor 360 — Estheré</title>
<meta name="description" content="Kit Efecto Tensor 360 con Ingeniería Facial: Oro 24K, Péptidos, Colágeno y Sellado Dérmico. Resultados visibles en 2 minutos al día.">
<link rel="preconnect" href="https://cdn.shopify.com" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="image" href="https://cdn.shopify.com/s/files/1/0728/5673/1799/files/8ED4C7D8-167B-45D1-A587-68A68FA61779_2.png?v=1778497777" fetchpriority="high">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@300;400;500;600&family=Lato:wght@300;400;700&display=swap">
</head>
<body>
`;

const script = `
<script>
(function(){
  // FAQ accordion
  document.querySelectorAll('.lp-faq-item').forEach(function(item){
    var btn = item.querySelector('.lp-faq-q');
    if(!btn) return;
    btn.addEventListener('click', function(){ item.classList.toggle('open'); });
  });
  // Tap-to-reveal pairs (mobile)
  document.querySelectorAll('.lp-pair-card').forEach(function(card){
    card.addEventListener('click', function(){ card.classList.toggle('is-active'); });
  });
  // Auto-scrollers with pause-on-touch
  document.querySelectorAll('.lp-autoscroll').forEach(function(el){
    var paused = false;
    function tick(){
      if(!paused){
        el.scrollLeft += 0.5;
        if(el.scrollLeft >= el.scrollWidth/2) el.scrollLeft = 0;
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    var resume = function(){ setTimeout(function(){ paused = false; }, 1800); };
    var pause = function(){ paused = true; };
    el.addEventListener('pointerdown', pause);
    el.addEventListener('pointerup', resume);
    el.addEventListener('pointerleave', resume);
    el.addEventListener('touchstart', pause, {passive:true});
    el.addEventListener('touchend', resume);
  });
})();
</script>
<style>
.lp-pair-card.is-active .lp-pair-b { opacity:1 !important; transform:scale(1) !important; }
.lp-pair-card.is-active .lp-pair-a { opacity:0 !important; }
.lp-pair-card.is-active .lp-pair-tap { opacity:0 !important; }
</style>
</body>
</html>`;

fs.writeFileSync("/mnt/documents/index.html", head + body + script);
console.log("OK", (head+body+script).length, "bytes");
