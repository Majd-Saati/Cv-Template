let pushBtn = document.querySelector('#push');
let deleteBtn = document.querySelectorAll(".delete");
let Skills = document.getElementById('skills');
let skill = document.querySelectorAll(".skill");
let skillName = document.getElementById('skill-name');
let ratingDivs = [...document.getElementsByClassName("rating")];

//remove skill
function removeSkill(window) {
    window.parentNode.remove();
}
//add skill
pushBtn.addEventListener(('click') ,function(e){
    e.preventDefault();
    var idSkill = Math.random();
    if (skillName.value.length === 0) {
        alert("Enter the name of your skill")
    }else{
    Skills.innerHTML += `
    <div class=" skill col-12 col-xl-4 " >
    <h6 class="skill-name description  ">${skillName.value} </h6>
    <div class="rating d-flex" id = ${idSkill}>
        <div class="rating-circle ms-1 opacity-50"></div>
        <div class="rating-circle ms-1 opacity-50"></div>
        <div class="rating-circle ms-1 opacity-50"></div>
        <div class="rating-circle ms-1 opacity-50"></div>
        <div class="rating-circle ms-1 opacity-50"></div>
    </div>
    <div onclick="removeSkill(this)" class="delete" >
        <i class="bi bi-trash3"></i>
    </div>
    </div>
    `
    skillName.value = '';
        // rating new skill
    ratingDivs = [...document.getElementsByClassName("rating")];
    ratingDivs.forEach((div)=>{
        rating([...div.children]);
    })
} })

    // rating skills
    ratingDivs.forEach((ratingDiv)=>{
        rating([...ratingDiv.children]);
    })


function rating(arr){
        arr.forEach((star)=>{       
            star.addEventListener('click',()=>{

              let  i = arr.indexOf(star);//get index of star
                if(star.classList.contains("opacity-50")){
                    for( i ; i>=0 ; --i)  arr[i].classList.remove("opacity-50");
                }else{
                    for( i ; i<5 ; ++i)  arr[i].classList.add("opacity-50");
                }
            })
            })
   
}  
