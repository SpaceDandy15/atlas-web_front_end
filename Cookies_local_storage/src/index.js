function setCookies() {
  const firstname = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  // Set cookies (no expiration — Task 0)
  document.cookie = `firstname=${firstname}`;
  document.cookie = `email=${email}`;
}

function setCookiesExp() {
  const firstname = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  // Expire in 10 days
  const date = new Date();
  date.setTime(date.getTime() + 10 * 24 * 60 * 60 * 1000);
  const expires = date.toUTCString();

  // Set cookies with expiration and path
  document.cookie = `firstname=${firstname}; expires=${expires}; path=/1-index.html`;
  document.cookie = `email=${email}; expires=${expires}; path=/1-index.html`;
}

function showCookies() {
  const p = document.createElement('p');
  p.innerHTML = `Cookies: ${document.cookie}`;
  document.body.appendChild(p);
}

// Make functions accessible globally
window.setCookies = setCookies;
window.setCookiesExp = setCookiesExp;
window.showCookies = showCookies;
