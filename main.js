const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  const now = Date.now();
  const lastSent = localStorage.getItem('lastSentTime');

  if (lastSent && now - lastSent < 60000) {
    e.preventDefault();
    alert("Please wait at least 1 minute before sending another message.");
    return;
  }

  localStorage.setItem('lastSentTime', now);
});