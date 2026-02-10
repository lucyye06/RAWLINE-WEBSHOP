// ===================== FILTER PRODUCTS =====================
function filter(category) {
  document.querySelectorAll('.product').forEach(item => {
    if (category === 'all') {
      item.style.display = "block";
      return;
    }

    item.style.display = item.classList.contains(category)
      ? "block"
      : "none";
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

// ===================== LOGIN =====================
document.getElementById("loginSection").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();

  if (!email || !password) {
    alert("Fill this field!");
    return;
  }

  alert("LOG-IN SUCCESSFULLY!");

  this.reset();
  closeModal();
});


// ===================== SIGN UP =====================
document.getElementById("signupSection").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = signupEmail.value.trim();
  const password = signupPassword.value.trim();

  if (!email || !password) {
    alert("Fill this field!");
    return;
  }

  alert("SIGN-UP SUCCESSFULLY!");

  this.reset();
  closeModal();
});


// ===================== TOAST FOR ADD TO CART =====================
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

// ===================== CONTACT FORM TOAST =====================
const contactForm = document.getElementById("contactForm");
const contactToast = document.getElementById("contactToast");

if (contactForm && contactToast) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }

    // show success toast
    contactToast.classList.remove("hidden");
    contactToast.classList.add("show");

    setTimeout(() => {
      contactToast.classList.remove("show");
      contactToast.classList.add("hidden");
    }, 2500);

    // clear form
    contactForm.reset();
    closeModal();
  });
}
