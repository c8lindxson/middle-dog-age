// This is where it all goes :)
let userAge = document.getElementById('userAge');
const button = document.getElementsByClassName('button');
const image = document.getElementsByClassName('image');

document.addEventListener('click', function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
  let userAge = userAge.to_i;
  const earlyYears = 21;
  laterYears = userAge - 2;
  laterYears *= 4;
  let dogYears = earlyYears + laterYears;
  switch (dogYears) {
    case (dogYears < 50) :
      image = './images/babypuppy.jpg';
      break;
    case (dogYears < 100) :
      image = './images/puppy.jpg'
      break;
    case (dogYears < 200) :
      image = './images/young dog.jpg'
      break;
    case (dogYears < 300) :
      image = './images/dog.webp'
      break;
    case (dogYears < 400) :
      image = './images/middle aged dog.jpeg'
      break;
    case (dogYears < 500) :
      image = './images/old dog.jpg'
      break;
    case (dogYears < 600) :
      image = './images/super old dog.webp'
      break;
    default :
    image = './images/dog-questino.png'
    break;
  }
  age.insertAdjacentHTML("beforeend", `<h1>You are ${dog_years} years old in dog years!</h1>`);
  image.insertAdjacentHTML("beforeend", `src="${image}" alt="" `);
});
