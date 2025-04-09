//
// Task 1 & 2 & 3 shared functions
//

// Task 1 & 2: Set cookies with optional expiration & path
//   default: session cookie, site‑wide
function setCookies(expDays = 0, path = '/') {
  const firstname = document.getElementById('firstname').value;
  const email     = document.getElementById('email').value;
  let cookieStr;

  // firstname
  cookieStr = `firstname=${encodeURIComponent(firstname)}; path=${path}`;
  if (expDays > 0) {
    const d = new Date();
    d.setDate(d.getDate() + expDays);
    cookieStr += `; expires=${d.toUTCString()}`;
  }
  document.cookie = cookieStr;

  // email
  cookieStr = `email=${encodeURIComponent(email)}; path=${path}`;
  if (expDays > 0) {
    const d = new Date();
    d.setDate(d.getDate() + expDays);
    cookieStr += `; expires=${d.toUTCString()}`;
  }
  document.cookie = cookieStr;
}

// Task 3: Get the value of a specific cookie
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let c of cookies) {
    const [key, ...vals] = c.trim().split('=');
    if (key === name) return decodeURIComponent(vals.join('='));
  }
  return '';
}

// Task 3: Show cookies on the page
function showCookies() {
  const firstname = getCookie('firstname');
  const email     = getCookie('email');
  const p = document.createElement('p');
  p.innerHTML = `Email: ${email} - Firstname: ${firstname}`;
  document.body.appendChild(p);
}

// Expose shared functions
window.setCookiesBasic = () => setCookies(0, '/');       // for 0-index.html
window.setCookiesExp   = () => setCookies(10, '/1-index.html'); // for 1-index.html
window.setCookies      = () => setCookies(10, '/2-index.html'); // for 2-index.html & default
window.getCookie       = getCookie;
window.showCookies     = showCookies;


//
// 3‑index.html specific functions
//

// Show the login form (rebuilds #app with form)
function showForm() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h1>Login to the website</h1>
    <div id="login-form-container">
      <h2>Login</h2>
      <input type="text" id="firstname" placeholder="First Name" />
      <input type="text" id="email" placeholder="Email" />
      <button id="login-btn">Log me in</button>
    </div>
  `;
  document.getElementById('login-btn').addEventListener('click', onLogin);
}

// Hide the login form container
function hideForm() {
  const form = document.getElementById('login-form-container');
  if (form) form.style.display = 'none';
}

// Delete cookies and show the form
function deleteCookiesAndShowForm() {
  // expire both cookies
  document.cookie = 'firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/3-index.html';
  document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/3-index.html';
  showForm();
}

// Render either welcome message or form
function showWelcomeMessageOrForm() {
  const firstname = getCookie('firstname');
  const app = document.getElementById('app');

  if (!firstname) {
    showForm();
  } else {
    app.innerHTML = ''; // clear
    const h1 = document.createElement('h1');
    h1.textContent = `Welcome ${firstname} `;

    const logout = document.createElement('a');
    logout.href = '#';
    logout.textContent = '(logout)';
    logout.style.fontWeight = 'normal';
    logout.style.fontStyle = 'italic';
    logout.style.marginLeft = '10px';
    logout.addEventListener('click', e => {
      e.preventDefault();
      deleteCookiesAndShowForm();
    });

    h1.appendChild(logout);
    app.appendChild(h1);
  }
}

// Handler for login button in 3-index.html
function onLogin() {
  const fn = document.getElementById('firstname').value.trim();
  const em = document.getElementById('email').value.trim();
  if (!fn || !em) {
    alert('Please fill both fields');
    return;
  }
  // set cookies 10 days, path /3-index.html
  setCookies(10, '/3-index.html');
  showWelcomeMessageOrForm();
}

// Expose 3-index.html entrypoint
window.showWelcomeMessageOrForm = showWelcomeMessageOrForm;
window.deleteCookiesAndShowForm   = deleteCookiesAndShowForm;
window.showForm                   = showForm;
window.hideForm                   = hideForm;

// Auto‑run for 3-index.html if #app exists
window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('app')) {
    showWelcomeMessageOrForm();
  }
});
