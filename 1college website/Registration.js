// registration.js
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');
  const modal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModal');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // required fields check
    const requiredIds = ['name','email','phone','dob','college','branch','year','address','password'];
    for (let id of requiredIds) {
      const el = document.getElementById(id);
      if (!el || !el.value.trim()) {
        el && el.focus();
        alert('Please fill all required fields.');
        return;
      }
    }

    // phone validation
    const phone = document.getElementById('phone').value.trim();
    if (!/^\d{10}$/.test(phone)) {
      alert('Enter a valid 10-digit phone number.');
      return;
    }

    // skills
    const skills = document.querySelectorAll('.checkbox-group input:checked');
    if (skills.length === 0) {
      alert('Select at least one skill.');
      return;
    }

    // gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
      alert('Select your gender.');
      return;
    }

    // show modal
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden','false');

    // reset form
    form.reset();
  });

  closeModalBtn.addEventListener('click', function () {
    document.getElementById('successModal').style.display = 'none';
    document.getElementById('successModal').setAttribute('aria-hidden','true');
  });

  // Close modal with Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden','true');
    }
  });
});
