if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const isLocal =
      location.hostname === 'localhost' || location.hostname === '127.0.0.1';

    if (isLocal) {
      navigator.serviceWorker.getRegistrations().then((regs) => {
        regs.forEach((reg) => reg.unregister());
      });
      if (window.caches) {
        caches.keys().then((keys) => keys.forEach((key) => caches.delete(key)));
      }
      return;
    }

    navigator.serviceWorker.register('/sw.js');
  });
}
