
(() => {
  
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    formMessage.textContent = '';
    formMessage.classList.remove('success', 'error');

    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });
      const result = await response.json();

      if (result.success) {
        formMessage.textContent = '✅ Thank you! Your message has been sent.';
        formMessage.classList.add('success');
        form.reset();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      formMessage.textContent = 'Oops! Something went wrong. Please try again later.';
      formMessage.classList.add('error');
      console.error('Form submission error:', error);
    }
  });

  let slideIndex = 0;
  const slides = document.getElementsByClassName('slides');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  function showSlide(n) {
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
  }

  function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
  }

  showSlide(slideIndex);

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Auto‐advance every 5 seconds
  setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
  }, 5000);
})();