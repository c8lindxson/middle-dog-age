let userAge = document.getElementById('userAge');
const button = document.querySelector('.button');
button.addEventListener('click', (event) => {
  const image = document.querySelector('.image');
  const age = document.querySelector('.age');
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
  const earlyYears = 10.5;
    if (parseInt(userAge.value) <= 2) {
    dogYears = parseInt(userAge.value) * earlyYears;

  } else {
    dogYears = (earlyYears * 2) + (parseInt((userAge.value) - 2) * 4);
  }
  console.log(dogYears);
  if (dogYears >= 350) {
    image.src = './images/super old dog.webp';
  }else if (dogYears >= 300) {
    image.src = './images/old dog.jpg';
  }else if (dogYears >= 250) {
    image.src = './images/middle aged dog.jpeg';
  }else if (dogYears >= 200) {
    image.src = './images/dog.webp';
  } else if (dogYears >= 150) {
    image.src = './images/young dog.jpg';
  } else if (dogYears >= 100) {
    image.src = './images/puppy.jpg';
  } else if (dogYears >= 50) {
    image.src = './images/babbypuppy.jpg';
  } else {
    image.src = './images/preemiepuppy.jpg';
  }
  age.innerHTML = `<h1>You are ${dogYears} years old in dog years!</h1>`;
});
