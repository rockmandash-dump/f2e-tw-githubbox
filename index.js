function loadScript(src) {
  return new Promise((resolve) => {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.src = src;
    s.onload = resolve;
    document.body.appendChild(s);
  });
}

async function main() {
  await loadScript("https://unpkg.com/three@0.115.0/build/three.js");
  await loadScript("https://unpkg.com/vanta@0.5.14/dist/vanta.net.min.js");

  VANTA.NET({
    el: "#vanta-net",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x6bd96b,
    backgroundColor: 0xebebeb,
    points: 7.0,
    maxDistance: 24.0,
    spacing: 17.0,
  });
}

main();
