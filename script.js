
let text1_ref = document.getElementById("text1"); // this can be done using a class also.
let text2_ref = document.getElementById("text2"); // this can be done using a class also.
// console.log(text1_ref);
// console.log(text2_ref);

let box3; // this is just a variable not anoblect.

function swipe_data() {
    box3 = text1_ref.innerText;
    text1_ref.innerText = text2_ref.innerText
    text2_ref.innerText = box3;
};
