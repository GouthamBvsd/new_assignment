const employer = document.getElementById("employer");
const branches = document.getElementById("branches");
const btn = document.getElementById("employer-btn");
btn.addEventListener("click", generateChildren);
// employer.addEventListener('click', fun)
employer.addEventListener("mouseenter", enterFun);
employer.addEventListener("mouseleave", enterLeave);

function generateChildren() {
  let text = prompt("Enter text");
  let plustext = "+";
  const mainDiv = document.createElement("div");
  const textDiv = document.createElement("div");
  const plusDiv = document.createElement("div");
  mainDiv.setAttribute("class", "editable-text");
  plusDiv.setAttribute("class", "plus-children");
  plusDiv.addEventListener("click", () => {
    console.log("clicked");
  });

  let id = "id" + Math.random().toString(16).slice(2);
  mainDiv.setAttribute("id", id);

  mainDiv.addEventListener("mouseenter", enterFun);
  mainDiv.addEventListener("mouseleave", enterLeave);

  // newDiv.addEventListener('click', function(e) {
  // })

  const textContent = document.createTextNode(text);
  const plusContent = document.createTextNode(plustext);
  plusDiv.appendChild(plusContent);
  textDiv.appendChild(textContent);
  mainDiv.appendChild(textDiv);
  mainDiv.appendChild(plusDiv);

  mainDiv.classList.add("employer");
  textDiv.classList.add("inner");
  plusDiv.classList.add("inner");
  branches.appendChild(mainDiv);
}

function enterFun() {
  btn.style.display = "block";
  console.log("entered");
}

function enterLeave() {
  btn.style.display = "none";
  console.log("left");
}

function editFun() {
  console.log("this button is clicked");
}
