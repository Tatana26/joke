const btnNext = document.querySelector(".next");
const btnNo = document.querySelector(".no");
const img = document.querySelector(".image");
const elseBlock = document.querySelector(".else-block");
const Question = document.querySelector(".question");
const dumb = document.querySelector(".dumb-image");

btnNext.addEventListener("click", function () {
  const count = Math.trunc(Math.random() * 5) + 1;

  img.src = `photo-${count}.jpg`;
});

btnNo.addEventListener("click", function () {
  img.classList.add("hidden");
  elseBlock.innerHTML = `შენ უარესი ყლე ხარ !!!!!`;
  dumb.innerHTML = `<img src="./135840.png"</img>`;
  document.querySelector(".question").classList.add("hidden");
});
