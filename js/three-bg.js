/* =========================================================
   Three.js animated background (lightweight)
   - small particle field
   - one wireframe icosahedron
   - soft mouse parallax
   Pauses when the hero is off-screen or the tab is hidden.
   Requires global THREE (r128 UMD build)
   ========================================================= */
(function () {
  "use strict";

  const canvas = document.getElementById("bg-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  // Skip heavy background on small / low-power devices
  const isSmall = window.innerWidth < 768;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
  } catch (e) {
    return; // WebGL not available — CSS aurora stays
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 42;

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight, false);

  /* ---------- Particle field (kept small for performance) ---------- */
  const COUNT = isSmall ? 220 : 420;
  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const violet = new THREE.Color("#8b5cf6");
  const cyan = new THREE.Color("#22d3ee");
  const pink = new THREE.Color("#f472b6");

  for (let i = 0; i < COUNT; i++) {
    const r = 30 + Math.random() * 55;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
    positions[i * 3 + 2] = r * Math.cos(phi);

    const pick = Math.random();
    const c = pick < 0.5 ? violet : pick < 0.82 ? cyan : pink;
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  pGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const pMat = new THREE.PointsMaterial({
    size: isSmall ? 0.6 : 0.5,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(pGeo, pMat);
  scene.add(points);

  /* ---------- One wireframe shape ---------- */
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x8b5cf6,
    wireframe: true,
    transparent: true,
    opacity: 0.12,
  });
  const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(15, 1), wireMat);
  scene.add(ico);

  /* ---------- Pointer parallax ---------- */
  const pointer = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };

  window.addEventListener(
    "pointermove",
    (e) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
    },
    { passive: true }
  );

  /* ---------- Resize ---------- */
  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  }
  window.addEventListener("resize", resize, { passive: true });

  /* ---------- Visibility: stop work when off-screen ---------- */
  let inView = true;
  let tabVisible = !document.hidden;

  const hero = document.querySelector(".hero") || canvas;
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        inView = entries[0].isIntersecting;
        if (inView) start();
      },
      { threshold: 0.05 }
    );
    io.observe(hero);
  }

  document.addEventListener("visibilitychange", () => {
    tabVisible = !document.hidden;
    if (tabVisible && inView) start();
  });

  /* ---------- Render loop (capped ~36fps) ---------- */
  const clock = new THREE.Clock();
  const frameInterval = 1000 / 36;
  let last = 0;
  let running = false;
  let elapsed = 0;

  function render() {
    if (!reduceMotion) {
      elapsed += 0.033;
      points.rotation.y = elapsed * 0.02;
      points.rotation.x = pointer.y * 0.05;
      ico.rotation.x = elapsed * 0.05;
      ico.rotation.y = elapsed * 0.07;
    }

    camera.position.x = pointer.x * 6;
    camera.position.y = -pointer.y * 4;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  function loop(now) {
    if (!running) return;
    requestAnimationFrame(loop);
    if (!inView || !tabVisible) return;
    if (now - last < frameInterval) return;
    last = now;

    pointer.x += (target.x - pointer.x) * 0.05;
    pointer.y += (target.y - pointer.y) * 0.05;
    render();
  }

  function start() {
    if (running) return;
    running = true;
    last = 0;
    requestAnimationFrame(loop);
  }

  start();
})();
