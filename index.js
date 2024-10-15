let user = window.alert("Having a good day?");

document.getElementById("mySubmit").onclick = function(){
    user = document.getElementById("myIp").value;
    // user = document.getElementById("mySubmit").onclick = function(){
    //     console.log("");
    // }
    document.getElementById("myH1").textContent = `Greetings ${user},`
}
//Noob i am.
// const pi=22/7;
// let raduis;
// let circumference;
// let res;

// document.getElementById(`calc`).onclick=function(){
//     raduis=document.getElementById(`Ip`).ariaValueMax;
// }
// raduis=Number(raduis);

// circumference=2*pi*raduis;
// console.log(circumference);

const pi = 22/7;
let radius;
let circumference;

document.getElementById('calc').onclick = function() {
    radius = document.getElementById('Ip').value;
    radius = Number(radius);

    if (!isNaN(radius) && radius > 0) {
        circumference = 2 * pi * radius;
        document.getElementById('Op').value = `Answer: ${circumference.toFixed(3)}`;
    } else {
        document.getElementById('Op').value = 'Invalid input. Please enter a valid radius.';
    }
};
