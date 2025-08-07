let h1 = document.querySelector("h1");
let div = document.querySelector(".box");
let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let img = document.querySelector(".img");
let teams = [{
    Tname: "CSK",
    Fname: " Winner:chennai super king",
    color: "yellow",
    captain: " captain:Ruturaj Gaikward",
    image: "https://imgs.search.brave.com/wrsOO8VYEdJnftDDmPLF5zSzlR3Vb8TYE50EnADeiJs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci8yMjUv/MTIwL0hELXdhbGxw/YXBlci1jaGVubmFp/LXN1cGVyLWtpbmdz/LWNzay1pcGwtdGh1/bWJuYWlsLmpwZw"
},
{
    Tname: "RCB",
    Fname: "Winner:Royal challengers Benguluru",
    color: "red",
    captain: " captain:Faf du Plessis",
    image: "https://imgs.search.brave.com/PnmFD3m21Zn1hqT1QuSCHD7PKSRDJRkFuAKr5cvbxcI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ1Lzk4/LzU1LzQ1OTg1NWIz/OTQxNzI0ZWNiZTAx/MDhhYWY4NTk4NGQ5/LmpwZw"
},
{
    Tname: "KKR",
    Fname: "Winner:Kolkata knight riders",
    color: "purple",
    captain: " captain:Shreyas Iyer",
    image: "https://imgs.search.brave.com/aurA297nQ2TVW_Bu3o8x1uTWV38cBdVjtgZS8uFa00s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzE3NDc5NzEuanBn"
},
{
    Tname: "RR",
    Fname: "Winner:Rajasthan Royals",
    color: "pink",
    captain: " captain:Sanju Samson",
    image: "https://imgs.search.brave.com/7zQiaqmaK9zUohiPemTIKTQ3FULKX763lbe3XEi1PkI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJlLzgw/LzY0LzJlODA2NDI2/YTU4NzMyZWJlODg5/ZTMyOTcwYWVjYmI3/LmpwZw"
},
{
    Tname: "MI",
    Fname: "Winner:Mumbai indians",
    color: "blue",
    captain: " captain:Hardik pandya",
    image: "https://imgs.search.brave.com/azQZUHHqsyGv1xYRJGaxuBY3y2NX8qE3BbvJoFvLzSQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93aGF0/dGhlbG9nby5jb20v/c3RvcmFnZS9sb2dv/cy9taS1tdW1iYWkt/aW5kaWFucy0yMjk0/MzYucG5n"
},
{
    Tname: "DC",
    Fname: "Winner:Delhi capitals",
    color: "blue",
    captain: " captain:Rishabh Pant",
    image: "https://imgs.search.brave.com/08Q1z0Vj_xjU-JuCmBsDsEr2fYPf-NdroslfcT3JPoM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFlRlFwcnMyY0wu/anBn"


},
{
    Tname: "LSG",
    Fname: "Winner:Lucknow super giants",
    color: "light blue",
    captain: " captain:KL Rahul",
    image: "https://imgs.search.brave.com/TnpDkEW51ZfpDtKdq-o9MCR6-ZImrtJ9kJJoQQmlmEs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBhLzgx/LzVlLzBhODE1ZTlh/MDVkOGU5MGE5Mzhj/Y2M0MmUzZTgwNzEy/LmpwZw"
},
];
let random;

btn.addEventListener("click", function () {
    random = Math.floor(Math.random() * teams.length);
    div.style.backgroundColor = teams[random].color;
    h1.innerText = teams[random].Fname;
    h1.style.fontFamily = "Fantasy";
    h2.innerText = teams[random].captain;
    h2.style.marginBottom = "50px";
    img.src = teams[random].image;
    img.style.width = "300px";
    img.style.height = "200px";
    img.style.border = "2px solid black";
    img.style.borderRadius = "20px";
    img.style.marginBottom = "80px";
    img.style.backgroundPosition = "center";
    img.style.backgroundSize = "cover";
});