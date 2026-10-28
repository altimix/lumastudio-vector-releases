// Public Cloudflare Web Analytics token; this is not an API credential.
(() => {
  const hosts = ["vector.lumastudio.jp"];
  if (location.protocol !== 'https:' || !hosts.includes(location.hostname)) return;
  if (document.querySelector('script[data-cf-beacon]')) return;
  const script = document.createElement('script');
  script.type = 'module';
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  script.setAttribute('data-cf-beacon', JSON.stringify({token: '62ad18be7ad1455e8ee33393ba359328', spa: false}));
  document.head.appendChild(script);
})();
