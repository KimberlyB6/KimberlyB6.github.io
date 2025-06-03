document.addEventListener('DOMContentLoaded', () => {
  const jsonUrl = 'https://kimberlyb6.github.io/csce242/projects/part5/json/recipe.json';

  const container = document.getElementById('recipe-container');

  fetch(jsonUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch JSON: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.id = `dessert-${item._id}`;

        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('card-img');
        const img = document.createElement('img');
        img.src = item.img_name; 
        img.alt = item.name;
        imgWrapper.appendChild(img);

        const footer = document.createElement('div');
        footer.classList.add('card-footer');
        footer.textContent = item.name;

        const content = document.createElement('div');
        content.classList.add('recipe-content');

        const descP = document.createElement('p');
        descP.innerHTML = `<strong>${item.description}</strong>`;
        content.appendChild(descP);

        const ingHeader = document.createElement('strong');
        ingHeader.textContent = 'Ingredients:';
        content.appendChild(ingHeader);
        const ingList = document.createElement('ul');
        item.ingredients.forEach(ing => {
          const li = document.createElement('li');
          li.textContent = ing;
          ingList.appendChild(li);
        });
        content.appendChild(ingList);

        const instrHeader = document.createElement('strong');
        instrHeader.textContent = 'Directions:';
        content.appendChild(instrHeader);
        const instrList = document.createElement('ol');
        item.instructions.forEach(step => {
          const li = document.createElement('li');
          li.textContent = step;
          instrList.appendChild(li);
        });
        content.appendChild(instrList);

        card.appendChild(imgWrapper);
        card.appendChild(footer);
        card.appendChild(content);

        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error(err);
      container.innerHTML = `<p style="color:red;">Error loading recipes: ${err.message}</p>`;
    });
});