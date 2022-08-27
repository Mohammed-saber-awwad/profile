// let mainColors = localStorage.getItem("color_option");
// if (mainColors !== null) {
//   document.documentElement.style.setProperty('--main-color', mainColors);
//   document.querySelectorAll(".colors-list li").forEach(element => {
//     element.classList.remove("active");
//     if (element.dataset.color === mainColors) {
//       element.classList.add("active");
//     }
//   });

// }

// let backgroundOption = true;
// let backgroundInterval;
// let backgroundLocalItem = localStorage.getItem("background_option");
// if (backgroundLocalItem !== null) {
//   document.querySelectorAll(".random-backgrounds span").forEach(element => {
//     element.classList.remove("active");
//   });
//   if (backgroundLocalItem === 'true') {
//     backgroundOption = true;
//     document.querySelector(".random-backgrounds .yes").classList.add("active");
//   } else {
//     backgroundOption = false;
//     document.querySelector(".random-backgrounds .no").classList.add("active");
//   }

// }

// document.querySelector(".toggle-settings .fa-gear").onclick = function () {
//   this.classList.toggle("fa-spin");
//   document.querySelector(".settings-box").classList.toggle("open");
  
// };

// const colorsLi = document.querySelectorAll(".colors-list li");
// colorsLi.forEach(li => {
//   li.addEventListener("click", (e) => {
//     document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
//     localStorage.setItem("color_option", e.target.dataset.color);
//     handleActive(e);
//   });
// });

// const randomBackEl = document.querySelectorAll(".random-backgrounds span");
// randomBackEl.forEach(span => {
//   span.addEventListener("click", (e) => {
//     handleActive(e);
//     if (e.target.dataset.background === 'yes') {
//       backgroundOption = true;
//       randomizeImgs();
//       localStorage.setItem("background_option", true);
//     } else {
//       backgroundOption = false;
//       clearInterval(backgroundInterval);
//       localStorage.setItem("background_option", false);
//     }
//   });
// });
