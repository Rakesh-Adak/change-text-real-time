// Function to render text content in real time
function showInputValue() {
  // Takes value from the imput field
  const textField = document.getElementById("textField").value;

  // Renders value on the page in real time
  document.getElementById("renderContent").innerHTML = textField;
}

// Changes font of custom text to Itim
function changeFontStyle1() {
  document.getElementById("renderContent").style.fontFamily = "Itim";
}

// Changes font of custom text to Montserrat
function changeFontStyle2() {
  document.getElementById("renderContent").style.fontFamily = "Montserrat";
}

// Changes font of custom text randomly to any of the 5 fonts
function applyRandomFont(position) {
  switch (position) {
    case 0:
      return "Nunito Sans";
    case 1:
      return "Pacifico";
    case 2:
      return "Ubuntu";
    case 3:
      return "Poppins";
    case 4:
      return "Raleway";
    default:
      return "DM Sans";
  }
}
// Returns random integer
function getRandomInt() {
  let randomInt = Math.floor(Math.random() * 5);
  const fontFamily = applyRandomFont(randomInt);
  console.log("fontFamily", fontFamily);
  document.getElementById("renderContent").style.fontFamily = fontFamily;
}
