// Task 1 & Task 2: Set cookies with expiration and path
function setCookies() {
  const firstname = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  // Set expiration to 10 days
  const now = new Date();
  now.setTime(now.getTime() + (10 * 24 * 60 * 60 * 1000)); // 10 days
  const expires = `expires=${now.toUTCString()}`;
  const path = "path=/2-index.html"; // Change to match your HTML file path

  // Set cookies for firstname and email
  document.cookie = `firstname=${firstname}; ${expires}; ${path}`;
  document.cookie = `email=${email}; ${expires}; ${path}`;
}

// Task 3: Get the value of a specific cookie
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [key, value] = cookie.trim().split('=');
    if (key === name) {
      return value;
    }
  }
  return ''; // Return empty string if cookie is not found
}

// Task 3: Show cookies on the page
function showCookies() {
  const firstname = getCookie('firstname');
  const email = getCookie('email');

  // Create a paragraph and show the cookies
  const p = document.createElement('p');
  p.innerHTML = `Email: ${email} - Firstname: ${firstname}`;
  document.body.appendChild(p);
}

// Make functions accessible globally
window.setCookies = setCookies;
window.showCookies = showCookies;
window.getCookie = getCookie;
