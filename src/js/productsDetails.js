const rating = document.querySelectorAll('[name=rating]');
console.log(rating);

console.log('From Details');

rating.forEach((star) => {
  if (star.checked) {
    console.log(star.value);
  }
});
