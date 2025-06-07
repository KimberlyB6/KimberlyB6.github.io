document.addEventListener('DOMContentLoaded', () => {
  const jsonUrl = 'https://kimberlyb6.github.io/csce242/projects/part5/json/recipe.json';
  const container = document.getElementById('recipe-container');

  // Grab references to the modal elements
  const modal       = document.getElementById('recipe-modal');
  const modalBody   = document.getElementById('modal-body');
  const closeBtn    = modal.querySelector('.close-btn');

  // Close the modal when “×” is clicked
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalBody.innerHTML = '';
  });

  // Close the modal when clicking on the backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalBody.innerHTML = '';
    }
  });

  fetch(jsonUrl)
  .then(response => {
    if (!response.ok) throw new Error(`Failed to fetch JSON: ${response.status} ${response.statusText}`);
    return response.json();
  })
  .then(data => {
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.id = `dessert-${item._id}`;
      card.style.cursor = 'pointer';

      // Card content: image + footer
      const imgWrapper = document.createElement('div');
      imgWrapper.classList.add('card-img');
      const img = document.createElement('img');
      img.src = item.img_name;
      img.alt = item.name;
      imgWrapper.appendChild(img);

      const footer = document.createElement('div');
      footer.classList.add('card-footer');
      footer.textContent = item.name;

      // Assemble card
      card.appendChild(imgWrapper);
      card.appendChild(footer);
      container.appendChild(card);

      card.addEventListener('click', () => {
        let html = '';

        // Title + image + description
        html += `<h2>${item.name}</h2>`;
        html += `<img src="${item.img_name}" alt="${item.name}" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 8px; margin: 10px 0;">`;
        if (item.description) {
          html += `<p><strong>${item.description}</strong></p>`;
        }

        // Ingredients
        if (Array.isArray(item.ingredients) && item.ingredients.length) {
          html += '<h3>Ingredients:</h3><ul>';
          item.ingredients.forEach(ing => {
            html += `<li>${ing}</li>`;
          });
          html += '</ul>';
        }

        // Instructions
        if (Array.isArray(item.instructions) && item.instructions.length) {
          html += '<h3>Directions:</h3><ol>';
          item.instructions.forEach(step => {
            html += `<li>${step}</li>`;
          });
          html += '</ol>';
        }

        modalBody.innerHTML = html;
        modal.style.display = 'flex';
      });
    });
  })
  .catch(error => {
    console.error(error);
    container.innerHTML = `<p style="color:red;">Error loading recipes: ${error.message}</p>`;
  });
});
