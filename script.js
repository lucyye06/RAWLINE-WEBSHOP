// ===================== FILTER PRODUCTS =====================
function filter(category) {
  document.querySelectorAll('.product').forEach(item => {
    if (category === 'all') {
      item.style.display = "block";
      return;
    }
    item.style.display = item.classList.contains(category) ? "block" : "none";
  });
}

// ===================== MODALS =====================
function openAuth() {
  document.getElementById("auth").classList.remove("hidden");
  document.getElementById("auth").style.display = "flex";
}

function openContact() {
  document.getElementById("contact").classList.remove("hidden");
  document.getElementById("contact").style.display = "flex";
}

function closeModal() {
  const auth = document.getElementById("auth");
  const contact = document.getElementById("contact");

  auth.classList.add("hidden");
  contact.classList.add("hidden");

  auth.style.display = "none";
  contact.style.display = "none";
}

// ===================== LOGIN/SIGNUP =====================
function showSignup() {
  document.getElementById("loginSection").classList.add("hidden");
  document.getElementById("signupSection").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("signupSection").classList.add("hidden");
  document.getElementById("loginSection").classList.remove("hidden");
}

document.getElementById("loginSection").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("LOG-IN SUCCESSFULLY!");
  this.reset();
  closeModal();
});

document.getElementById("signupSection").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("SIGN-UP SUCCESSFULLY!");
  this.reset();
  closeModal();
});

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
  alert("MESSAGE SENT SUCCESSFULLY!");
  contactForm.reset();
  closeModal();
  contactToast.classList.remove("hidden");
  contactToast.classList.add("show");
  setTimeout(() => {
    contactToast.classList.remove("show");
    contactToast.classList.add("hidden");
  }, 2500);
});
