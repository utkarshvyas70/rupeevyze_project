// TOAST helper 
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

//  Primary buttons: show toast on click 
document.querySelectorAll('a.btn-primary').forEach((btn) => {
  btn.addEventListener('click', () => {
    showToast('Taking you there…');
  });
});

//  FORM submit (apply.html) 
const submitBtn  = document.getElementById('submitBtn');
const successBox = document.getElementById('successBox');
const formCard   = document.querySelector('.form-card');

if (submitBtn) {
  submitBtn.addEventListener('click', () => {

    
    const name  = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const goal  = document.getElementById('goal').value;

    if (!name || !email || !phone || !goal) {
      showToast('Please fill all fields first.');
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      showToast('Enter a valid email address.');
      return;
    }

    
    formCard.style.display   = 'none';
    successBox.style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
//  FAQ accordion (howitworks.html) 
document.querySelectorAll('.faq-q').forEach((btn) => {
  btn.addEventListener('click', () => {
    const id     = btn.getAttribute('data-faq');
    const answer = document.getElementById('faq-' + id);
    const isOpen = btn.classList.contains('open');

    
    document.querySelectorAll('.faq-q').forEach(b  => b.classList.remove('open'));
    document.querySelectorAll('.faq-a').forEach(a  => a.classList.remove('open'));

    
    if (!isOpen) {
      btn.classList.add('open');
      answer.classList.add('open');
    }
  });
});

//  Bar animation on scroll 
const bars = document.querySelectorAll('.bar-fill');
const card = document.querySelector('.hero-card');

if (card && bars.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          bars.forEach((bar) => {
            bar.style.animation = 'none';
            bar.offsetHeight;
            bar.style.animation = '';
          });
          io.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );
  io.observe(card);
}