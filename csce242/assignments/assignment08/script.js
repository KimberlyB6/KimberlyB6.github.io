const images = [
  { title: 'Party Time',      src: 'images/birthday.jpg'    },
  { title: 'Formal Portrait', src: 'images/clown.jpg'   },
  { title: "It's Raining",    src: 'images/rain.jpg' },
  { title: 'Reading',         src: 'images/read.jpg'     },
  { title: 'Gardening',       src: 'images/shovel.jpg'   },
  { title: 'Work from Home',  src: 'images/work.jpg'   }
];

const gallery     = document.querySelector('.gallery');
const popup       = document.getElementById('popup');
const popupTitle  = document.getElementById('popup-title');
const popupImg    = document.getElementById('popup-img');
const closeBtn    = document.getElementById('close');

document.addEventListener('DOMContentLoaded', () => {
  images.forEach(({ title, src }) => {
    const card = document.createElement('div');
    card.className = 'gallery-item';
    card.innerHTML = `
      <img src="${src}" alt="${title}" />
      <div class="overlay">${title}</div>`;

    card.addEventListener('click', () => {
      popupTitle.textContent = title;
      popupImg.src           = src;
      popupImg.alt           = title;
      popup.classList.remove('hidden');
    });

    gallery.append(card);
  });
});

// close popup
closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});
