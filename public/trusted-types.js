(function () {
  if (!window.trustedTypes || !window.trustedTypes.createPolicy) return;

  window.trustedTypes.createPolicy('default', {
    createHTML: (html) => html,
    createScriptURL: (url) => url,
    createScript: (script) => script,
  });
})();
