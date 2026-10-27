// let a =10;
// let b =20;
// console.log(a+b)
// let name =prompt("Enter the user name ");
// let password =prompt("enter the password");
// const  username ="sumedh"
//  const pass = 1234;
// if(name&&password ==username&&password)
// {
//     alert("login sucessfully ")

// }
// else
//     {
//     alert("wrong information")
// }

let user = prompt("Enter the user name");
let password = prompt("Enter the password");

const username = "sumedh";
const pass = "1234";

if (user === username && password === pass) {
    alert("Login successfully");
    window.location.href = "javascript.html";
} else {
    alert("Wrong information");
}