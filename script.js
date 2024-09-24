var box = document.getElementById("colored-box");
// console.log(box);
var button = document.getElementById("color-changer-btn");
// console.log(button);

// Get Random Color function
const getRandomColor = () => {
  // Change the hexadecimal color value
  return `rgb(${Math.random() * (256 - 0) + 0},${
    Math.random() * (256 - 0) + 0
  }, ${Math.random() * (256 - 0) + 0})`;
};
// Change the box color when button is clicked
button.addEventListener("click", () => {
  box.style.backgroundColor = getRandomColor();
});
