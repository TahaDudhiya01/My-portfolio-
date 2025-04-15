// ******************
// for home splash effect
// ******************
setTimeout(() => {
  const splash = document.getElementById("splash");
  const home = document.getElementById("home");

  splash.classList.add("fade-out");
  home.classList.add("fade-in");
}, 2500);


// ******************
// for text effect
// ******************
document.addEventListener("DOMContentLoaded", function () {
  new Typed(".typedText", {
    strings: ["Frontend Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });
});

// ******************
//for toggle btn
// ******************
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[ href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// ******************
//for project section
// ******************
const showMoreButton = document.getElementById("show-more");
const showLessButton = document.getElementById("show-less");
const moreBoxes = document.querySelectorAll(".more-box");

let boxesVisible = 3; // Initially show 4 boxes

showMoreButton.addEventListener("click", () => {
  boxesVisible += 3; // Increase visible boxes by 3
  if (boxesVisible >= moreBoxes.length + 3) {
    showMoreButton.style.display = "none"; // Hide "Show More" button when all boxes are visible
  }
  showLessButton.style.display = "inline"; // Show "Show Less" button
  updateBoxesVisibility();
});

showLessButton.addEventListener("click", () => {
  boxesVisible -= 3; // Decrease visible boxes by 3
  if (boxesVisible <= 3) {
    showLessButton.style.display = "none"; // Hide "Show Less" button if no more boxes to hide
  }
  showMoreButton.style.display = "inline"; // Show "Show More" button
  updateBoxesVisibility();
});

function updateBoxesVisibility() {
  moreBoxes.forEach((box, index) => {
    if (index < boxesVisible - 3) {
      box.style.display = "inline-block";
    } else {
      box.style.display = "none";
    }
  });
}
updateBoxesVisibility(); // Update visibility on page load