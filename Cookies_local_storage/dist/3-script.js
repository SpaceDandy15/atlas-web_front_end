// Set cookies for 10 days
function setCookies() {
  const firstname = document.getElementById('firstname').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!firstname || !email) return;

  const now = new Date();
  now.setTime(now.getTime() + (10 * 24 * 60 * 60 * 1000));
  const expires = `expires=${now.toUTCString()}`;
  const path = "path=/";

  document.cookie = `firstname=${firstname}; ${expires}; ${path}`;
  document.cookie = `email=${email}; ${expires}; ${path}`;

  showWelcomeMessageOrForm();
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [key, value] = cookie.trim().split('=');
    if (key === name) {
      return value;
    }
  }
  return '';
}

function deleteCookiesAndShowForm() {
  document.cookie = "firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  showForm();
}

function showForm() {
  const loginForm = document.getElementById('login-form-container');
  loginForm.style.display = 'block';

  const h1 = document.querySelector('h1#welcome-message');
  if (h1) {
    h1.remove();
  }
}

function hideForm() {
  const loginForm = document.getElementById('login-form-container');
  loginForm.style.display = 'none';
}

function showWelcomeMessageOrForm() {
  const firstname = getCookie('firstname');

  if (!firstname) {
    showForm();
  } else {
    hideForm();

    const h1 = document.createElement('h1');
    h1.id = "welcome-message";
    h1.innerHTML = `Welcome ${firstname} `;

    const logoutLink = document.createElement('a');
    logoutLink.href = '#';
    logoutLink.innerText = '(logout)';
    logoutLink.style.fontWeight = 'normal';
    logoutLink.style.fontStyle = 'italic';
    logoutLink.style.fontSize = '10px';
    logoutLink.style.marginLeft = '10px';
    logoutLink.onclick = function (event) {
      event.preventDefault();
      deleteCookiesAndShowForm();
    };

    h1.appendChild(logoutLink);
    document.body.appendChild(h1);
  }
}

// Run on page load
window.onload = showWelcomeMessageOrForm;
