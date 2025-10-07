document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Zde můžeš přidat AJAX volání na server, validaci nebo integraci s e‑mailem
  alert('Děkujeme, zpráva byla odeslána.');
  this.reset();
});
