window.addEventListener("load", (event) => {
    profileH3 = document.getElementById("profileDescription");
    profileH3.classList.add("visible");
});

const percentLabel = document.querySelector("#percent");
const originalTitle = document.title;

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scrollTop / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);
  let eduText = document.getElementById("education-text");
  let skillsText = document.getElementById("skills-text");
  let hobbiesText = document.getElementById("hobbies-text");
  if (scrollPercentRounded > 20) {
    eduText.classList.add("text-visible");
  }

  if (scrollPercentRounded < 2) {
    eduText.classList.remove("text-visible");
    skillsText.classList.remove("text-visible");
    hobbiesText.classList.remove("text-visible");
  }

  if (scrollPercentRounded > 55  ) {
    skillsText.classList.add("text-visible");
  }

  if (scrollPercentRounded > 80  ) {
    hobbiesText.classList.add("text-visible");
  }
});