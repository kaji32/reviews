const reviews = [
    {
        id:1,
        name:"Taro",
        job:"freelance",
        img:"./person-1.jpg",
        text:"I like this service"
    },
    {   
        id:2,
        name:"Jiro",
        job:"neet",
        img:"./person2.jpg",
        text:"I like baseball"
    },
    {   
        id:3,
        name:"Saburo",
        job:"Prime minister",
        img:"./person3.jpg",
        text:"I like soccer."
    },
    {
        id:4,
        name:"Shiro",
        job:"President",
        img:"./person4.jpg",
        text:"I like reading."
    },
    {
        id:5,
        name:"Goro",
        job:"Major league player",
        img:"./person5.jpg",
        text:"My father gave me this spirit."
    }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
});

function showPerson(person){
    const item = reviews[person]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem>4){
        currentItem=0;
    }
    showPerson(currentItem);
});
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem<0){
        currentItem=4;
    }
    showPerson(currentItem);
});
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson(currentItem);
});

