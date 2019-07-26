const myHeading = document.getElementsByTagName("h1")[0];
const myButoon = document.getElementById("myButton");
const myTextInput = document.getElementById("myTextInput");
const myList = document.getElementsByTagName("li");
const errorNotPurple = document.querySelectorAll(".error-not-purple");
let evens = document.querySelectorAll("li:nth-child(even)");
const descinput = document.querySelector("input.description");
const descp = document.querySelector("p.description");
const descbutton = document.querySelector("button.description");
const toggleList = document.getElementById("toggleList");
const listDiv = document.querySelector(".list");
const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemButton");
const removeItemButton = document.querySelector("button.removeItemButton");
const listItems = document.getElementsByTagName("li");
const listUL = listDiv.querySelector("ul");

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener('mouseover', () => {
//         listItems[i].textContent = listItems[i].textContent.toUpperCase();
//     });

//     listItems[i].addEventListener('mouseout', () => {
//         listItems[i].textContent = listItems[i].textContent.toLowerCase();
//     });

// }

//event.target.tagName

listUL.addEventListener("click", event => {
    if (event.target.tagName == "BUTTON") {
        // event.target.textContent = event.target.textContent.toUpperCase();
        if (event.target.className == 'Remove') {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        };

        if (event.target.className == 'Up') {
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if (prevLi) {
                ul.insertBefore(li, prevLi);
            };
        };   

        if (event.target.className == 'Down') { 
            let li = event.target.parentNode;
            let nextLi = li.nextElementSibling;
            let ul = li.parentNode;
            if (nextLi) {
                ul.insertBefore(nextLi, li);
            };
            
        };
    }
});

// listDiv.addEventListener("mouseout", event => {
//   if (event.target.tagName == "LI") {
//     event.target.textContent = event.target.textContent.toLowerCase();
//   }
//});

toggleList.addEventListener("click", () => {
  if (listDiv.style.display === "none") {
    toggleList.textContent = "Hide List";
    listDiv.style.display = "block";
  } else {
    toggleList.textContent = "Show List";
    listDiv.style.display = "none";
  }
});

addItemButton.addEventListener("click", () => {
  let ul = document.getElementsByTagName("ul")[0];
  let li = document.createElement("li");
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = "";
});

removeItemButton.addEventListener("click", () => {
  let ul = document.getElementsByTagName("ul")[0];
  let li = document.querySelector("li:last-child");
  ul.removeChild(li);
});

myButton.addEventListener("click", () => {
  // if (myHeading.style.color === 'black'){
  //     myHeading.style.color = 'purple';
  // } else {
  //     myHeading.style.color = 'black';
  // }
  myHeading.style.color = myTextInput.value;
  myTextInput.value = "";
});

for (let i = 0; i < myList.length; i++) {
  myList[i].style.color = "purple";
}

for (let i = 0; i < errorNotPurple.length; i++) {
  errorNotPurple[i].style.color = "red";
}

const liBackColour = () => {
    for (let i = 0; i < evens.length; i++) {
        evens[i].style.backgroundColor = "lightgray ";
    }
}


descbutton.addEventListener("click", () => {
  descp.textContent = descinput.value + ":";
  descinput.value = "";
});

liBackColour();