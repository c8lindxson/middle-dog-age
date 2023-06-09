let userAge = document.getElementById('userAge');
const button = document.querySelector('.button');
button.addEventListener('click', (event) => {
  const image = document.querySelector('.image');
  const age = document.querySelector('.age');
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
  const earlyYears = 21;
  laterYears = parseInt(userAge.value, 10) - 2;
  laterYears *= 4;
  let dogYears = earlyYears + laterYears;
  console.log(dogYears);
  if (dogYears < 50) {
      image.src = './images/babypuppy.jpg';
  } else if (dogYears < 100) {
      image.src = './images/puppy.jpg'
  } else if (dogYears < 150) {
      image.src = './images/young dog.jpg'
  } else if (dogYears < 200) {
      image.src = './images/dog.webp'
  } else if (dogYears < 250) {
      image.src = './images/middle aged dog.jpeg'
  } else if (dogYears < 300) {
      image.src = './images/old dog.jpg'
  } else {
      image.src = './images/super old dog.webp'
  }
  age.innerHTML = `<h1>You are ${dogYears} years old in dog years!</h1>`;
});
