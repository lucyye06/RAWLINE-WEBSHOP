// ===================== FILTER PRODUCTS =====================
function filter(category) {
  document.querySelectorAll('.product').forEach(item => {
    item.style.display = (category === 'all' || item.classList.contains(category)) ? "block" : "none";
  });
}

// ===================== MODALS =====================
function openAuth() {
  document.getElementById("auth").classList.remove("hidden");
}

function openContact() {
  document.getElementById("contact").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("auth").classList.add("hidden");
  document.getElementById("contact").classList.add("hidden");
}

// ===================== LOGIN & SIGNUP ELEMENTS =====================
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const loginSection = document.getElementById("loginSection");
const signupSection = document.getElementById("signupSection");

// ===================== LOGIN =====================
loginSection.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();

  if (!email || !password) {
    alert("Please fill in all fields!");
    return;
  }

  alert("LOG-IN SUCCESSFULLY!");
  this.reset();
  closeModal();
});

// ===================== SIGN UP =====================
signupSection.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = signupEmail.value.trim();
  const password = signupPassword.value.trim();

  if (!email || !password) {
    alert("Please fill in all fields!");
    return;
  }

  alert("SIGN-UP SUCCESSFULLY!");
  this.reset();
  closeModal();
});

// ===================== SWITCH LOGIN/SIGNUP =====================
function showSignup() {
  loginSection.classList.add("hidden");
  signupSection.classList.remove("hidden");
}

function showLogin() {
  signupSection.classList.add("hidden");
  loginSection.classList.remove("hidden");
}

// ===================== ADD TO CART TOAST =====================
const toast = document.getElementById('toast');

document.querySelectorAll('.product button').forEach(button => {
  button.addEventListener('click', () => {
    toast.classList.remove('hidden');
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
      toast.classList.add('hidden');
    }, 2000);
  });
});

// ===================== CONTACT FORM =====================
const contactForm = document.getElementById("contactForm");
const contactToast = document.getElementById("contactToast");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields!");
    return;
  }

  contactToast.classList.remove("hidden");
  contactToast.classList.add("show");

  setTimeout(() => {
    contactToast.classList.remove("show");
    contactToast.classList.add("hidden");
  }, 2500);

  contactForm.reset();
  closeModal();
});
