// Shared by every page: registers the offline service worker and shows the right way to install.
//   [data-install-card]    hidden once running as an installed app
//   [data-install-button]  shown when the browser offers its own install prompt (Android, desktop Chrome/Edge)
//   [data-install-ios]     iPhone/iPad: Share, then Add to Home Screen
//   [data-install-other]   any other browser: use its menu
(() => {
  const root = new URL(".", document.currentScript.src);
  if ("serviceWorker" in navigator) navigator.serviceWorker.register(new URL("sw.js", root)).catch(e => console.warn("service worker:", e));

  const standalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  const ios = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  let prompt = null;
  const show = (sel, on) => document.querySelectorAll(sel).forEach(el => { el.hidden = !on; });
  const update = () => {
    show("[data-install-card]", !standalone);
    show("[data-install-button]", !standalone && !!prompt);
    show("[data-install-ios]", !standalone && ios);
    show("[data-install-other]", !standalone && !ios && !prompt);
  };

  addEventListener("beforeinstallprompt", e => { e.preventDefault(); prompt = e; update(); });
  addEventListener("appinstalled", () => { prompt = null; update(); });
  document.addEventListener("click", async e => {
    if (!prompt || !e.target.closest("[data-install-button]")) return;
    prompt.prompt();
    await prompt.userChoice;
    prompt = null; update();
  });
  update();
})();
