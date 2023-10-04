import catsData from "/data.js";
import Cat from "/Cat.js";
import { disableButtons } from "/utils.js";

let cat = getNewCat(catsData);

document.querySelector(".nope-icon").addEventListener("click", handleIconClick);
document.querySelector(".like-icon").addEventListener("click", handleIconClick);
document.querySelector(".superlike-icon").addEventListener("click", handleIconClick);


function handleIconClick(e) {
  if (!cat.hasBeenSwiped) {
    let element = e.target;
    renderAssociatedImage(element);
    disableButtons(true);
  }
}

function renderAssociatedImage(element) {
  document.querySelector(".cat-container").innerHTML +=
    cat.getAssociatedImageHtml(element);
}

function displayEndMessage() {
  let endMessage = "no more 🐾 to choose.";
  document.body.innerHTML = `
    <div class="end-message">
      <h2>${endMessage}</h2>
    </div>
  `;
}

function getNewCat(cats) {
  let newCat = cats.shift();
  return cats.length ? new Cat(newCat) : {};
}

setInterval(() => {
  if (cat.hasBeenSwiped) {
    cat = new Cat(getNewCat(catsData));
    render();
    !catsData.length && displayEndMessage();
  }
}, 2000);

function render() {
  document.querySelector(".main").innerHTML = cat.getCatHtml();
}

render();
