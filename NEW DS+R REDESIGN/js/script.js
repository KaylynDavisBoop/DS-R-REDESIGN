/* JavaScript File */

// Hamburger ("sandwich") toggles the primary navigation.
(function () {
  var nav = document.querySelector('.nav');
  var button = document.querySelector('.sandwich');
  if (!nav || !button) return;

  button.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  // Close the menu after choosing a link.
  nav.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open menu');
    });
  });
})();
