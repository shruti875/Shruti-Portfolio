
// ===============================
// Typing Animation
// ===============================


const text = [
    "AI & Data Analytics Developer",
    "Python Developer",
    "Building Intelligent Solutions"
];


let index = 0;
let charIndex = 0;

const typingElement = document.querySelector(".typing");


function typeEffect(){

    if(charIndex < text[index].length){

        typingElement.innerHTML += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(deleteEffect,1500);

    }

}



function deleteEffect(){

    if(charIndex > 0){

        typingElement.innerHTML =
        text[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteEffect,50);

    }

    else{

        index++;

        if(index >= text.length){

            index=0;

        }

        setTimeout(typeEffect,500);

    }

}



if(typingElement){

    typeEffect();

}






// ===============================
// Scroll Reveal Animation
// ===============================


const revealElements =
document.querySelectorAll(".reveal");


function revealOnScroll(){

    revealElements.forEach(element=>{


        let windowHeight =
        window.innerHeight;


        let elementTop =
        element.getBoundingClientRect().top;



        if(elementTop < windowHeight - 100){

            element.classList.add("active");

        }


    });


}



window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();






// ===============================
// Navbar Effect
// ===============================


const navbar =
document.querySelector(".navbar");



window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 50){

navbar.style.background =
"rgba(2,6,23,0.9)";


navbar.style.boxShadow =
"0 10px 30px rgba(0,0,0,.3)";


}

else{


navbar.style.background =
"rgba(2,6,23,.65)";


navbar.style.boxShadow =
"none";


}


}

);






// ===============================
// Cursor Glow Effect
// ===============================


const glow =
document.createElement("div");


glow.className="cursor-glow";


document.body.appendChild(glow);



document.addEventListener(
"mousemove",
(e)=>{


glow.style.left =
e.clientX+"px";


glow.style.top =
e.clientY+"px";


}

);