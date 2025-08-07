const sections = [
  'header', 'mv', 'about', 'concept', 'concept-highlight', 'seminar', 'voice', 'notice', 'contact', 'footer'
];
sections.forEach(section => {
  fetch(`components/${section}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById(section).innerHTML = html;
      if (section !== 'header') {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `styles/${section}.css`;
        document.head.appendChild(link);
      }
    });
});
// Load section JS if needed
sections.forEach(section => {
  const scriptPath = `scripts/${section}.js`;
  fetch(scriptPath).then(res => {
    if (res.ok) {
      const script = document.createElement('script');
      script.src = scriptPath;
      document.body.appendChild(script);
    }
  });
});
