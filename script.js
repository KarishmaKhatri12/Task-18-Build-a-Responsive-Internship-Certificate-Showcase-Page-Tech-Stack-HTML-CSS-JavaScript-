const viewButtons = document.querySelectorAll('.view-btn');
const modal = document.getElementById('modal');
const modalImg = document.querySelector('.modal-img');
const closeBtn = document.querySelector('.close-btn');

// When clicking the "View" button
viewButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.certificate-card');
    const imageSrc = card.getAttribute('data-image');
    modalImg.src = imageSrc;
    modal.style.display = 'flex';
  });
});

// Close modal on × click
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Optional: Click outside image to close
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
