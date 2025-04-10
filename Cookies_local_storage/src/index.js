// Task 1 & Task 2: Set cookies with expiration and path for 0-3-index.html
function setCookies() {
  const firstname = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  // Set expiration to 10 days
  const now = new Date();
  now.setTime(now.getTime() + (10 * 24 * 60 * 60 * 1000)); // 10 days
  const expires = `expires=${now.toUTCString()}`;
  const path = "path=/"; // Used specifically for 2-index.html

  document.cookie = `firstname=${firstname}; ${expires}; ${path}`;
  document.cookie = `email=${email}; ${expires}; ${path}`;
}

// Task 3: Get the value of a specific cookie (only for 0-3-index.html)
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

// Task 3: Show cookies on the page
function showCookies() {
  const firstname = getCookie('firstname');
  const email = getCookie('email');

  const p = document.createElement('p');
  p.innerHTML = `Email: ${email} - Firstname: ${firstname}`;
  document.body.appendChild(p);
}

// -----------------------------
// Task 4: JS-Cookie functions
// -----------------------------

function setCookiesAndShowWelcomeMessage() {
  const firstname = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  Cookies.set('firstname', firstname, { expires: 10 });
  Cookies.set('email', email, { expires: 10 });

  showWelcomeMessageOrForm();
}

function deleteCookiesAndShowForm() {
  Cookies.remove('firstname');
  Cookies.remove('email');
  showForm();
}

function showForm() {
  document.body.innerHTML = `
    <h1>Login to the website</h1>
    <div id="login-form-container">
      <h2>Login Form</h2>
      <input type="text" id="firstname" placeholder="First Name" />
      <input type="text" id="email" placeholder="Email" />
      <button onclick="setCookiesAndShowWelcomeMessage()">Log me in</button>
    </div>
  `;
}

function showWelcomeMessageOrForm() {
  const firstname = Cookies.get('firstname');

  if (!firstname) {
    showForm();
  } else {
    document.body.innerHTML = `
      <h1>
        Welcome ${firstname}
        <a href="#" onclick="deleteCookiesAndShowForm()" style="font-weight: normal; font-style: italic; font-size: 10px;">(logout)</a>
      </h1>
    `;
  }
}

// Load welcome message or form on page load
window.addEventListener('DOMContentLoaded', showWelcomeMessageOrForm);


// Make Task 1-3 functions available globally for earlier tasks
window.setCookies = setCookies;
window.showCookies = showCookies;
window.getCookie = getCookie;

// Make Task 4 functions globally
window.setCookiesAndShowWelcomeMessage = setCookiesAndShowWelcomeMessage;
window.deleteCookiesAndShowForm = deleteCookiesAndShowForm;
