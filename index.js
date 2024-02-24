/* 
select an icon
add event listener on the corresponding icon
    when clicked,
    toggle the text content of the corresponding p element
    change the icon from plus to minus
    // can a class store a change of svg?
    // if so, could add a classList.toggle to do this
*/

const toggleOne = document.querySelector("#toggle-1");
const answerOne = document.querySelector("#answer-1");
const iconPlus = "./images/icon-plus.svg";
const iconMinus = "./images/icon-minus.svg";



toggleOne.addEventListener("click", event => {
    answerOne.classList.toggle("disabled");
    toggleOne.src = iconMinus;
});


const toggleTwo = document.querySelector("#toggle-2");
const answerTwo = document.querySelector("#answer-2");

toggleTwo.addEventListener("click", event => {
    answerTwo.classList.toggle("disabled");
});

const toggleThree = document.querySelector("#toggle-3");
const answerThree = document.querySelector("#answer-3");

toggleThree.addEventListener("click", event => {
    answerThree.classList.toggle("disabled");
});

const toggleFour = document.querySelector("#toggle-4");
const answerFour = document.querySelector("#answer-4");

toggleFour.addEventListener("click", event => {
    answerFour.classList.toggle("disabled");
});