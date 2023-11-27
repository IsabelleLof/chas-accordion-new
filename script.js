// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// function fetchPosts() {
//   const accordion = document.getElementsByClassName("accordion");

//   for (i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener("click", function () {
//       this.classList.toggle("active");
//       var panel = this.nextElementSibling;
//       if (panel.style.display === "block") {
//         panel.style.display = "none";
//       } else {
//         panel.style.display = "block";
//       }
//     });
//   }
// }

function populateFAQ(posts) {
  const faqSection = document.querySelector(".accordion"); // Select the section that data shows in it

  posts.forEach((post) => {
    const titleElement = document.createElement("div"); // create a div
    titleElement.classList.add("title"); // add title class in div
    titleElement.textContent = post.title; // add post title

    const descriptionElement = document.createElement("div"); // create second div for descr.
    descriptionElement.classList.add("description"); // add description class in div
    descriptionElement.innerHTML = `<p>${post.body}</p>`;

    // add title and description in faqSection
    faqSection.appendChild(titleElement);
    faqSection.appendChild(descriptionElement);
  });

  // Add click event listener to new created titles
  const newTitles = document.querySelectorAll(".title");
  newTitles.forEach((title) => {
    title.addEventListener("click", toggle);
  });
}

// Pull data from JSONPlaceholder API
fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  .then((response) => response.json())
  .then((posts) => populateFAQ(posts))
  .catch((error) => console.error("Error: Something is wrong!", error));

// Selects and HTML element, and calls a function which will be executed when the element is clicked.

const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);
const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);
const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);

//hover over the cards

// change the card with a hover effect, did it with hover instead, in the css.
const card = document.querySelector("navigation-card");

// Add a mouseover event listener
card.addEventListener("mouseover", () => {
  // Change the button's background color
  card.style.backgroundColor = "blue";
});

// Add a mouseout event listener
card.addEventListener("mouseout", () => {
  // Change the button's background color back to its original color
  card.style.backgroundColor = "";
});
