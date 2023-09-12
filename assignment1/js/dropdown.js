const dropDownBtn = document.getElementById("dropDownBtn");
const dropDownContent = document.getElementById("dropDownBtn__content");
const contentInner = document.getElementById("content_inner");
const symPlus = document.getElementById("symPlus")
const symMinus = document.getElementById("symMinus")

let isOpen = true;
let totalheight = contentInner.offsetHeight + 20;
dropDownBtn.addEventListener("click", (event) => {
  event.preventDefault();
  isOpen = !isOpen;
  if (isOpen) {
    //to close
    dropDownContent.style.height = "0px";
    dropDownContent.style.paddingTop = "0px";
    dropDownContent.style.paddingBottom = "0px";
    //'-' -> '+'
    symPlus.style.removeProperty("display");
    symMinus.style.display = 'none';
  } else {
    //to open
    dropDownContent.style.height = totalheight + "px";
    dropDownContent.style.removeProperty("padding-top");
    dropDownContent.style.removeProperty("padding-bottom");
    //'-' <- '+'
    symMinus.style.display = 'inline-block';
    symPlus.style.display = 'none';
  }
});
