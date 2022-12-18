const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector('.gallery');
galleryListEl.style = 'display: flex; column-gap: 15px; list-style: none;';
const makeGalleryCard = ({url, alt }) => {
  return `
<li class= "galery-item">  
        <img class = "img-item "src="${url}" alt="${alt} width="450" height="300">   
    </li>
    `;
};
const galleryCards = images.map(el => makeGalleryCard(el)).join('');
galleryListEl.insertAdjacentHTML('beforeend', galleryCards);