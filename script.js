// menu handle 
const menuButton = document.getElementById('menuToggle');
menuButton.addEventListener('click', function(){
    document.getElementById('menuArea').style.display = "flex";
})

const menuClose = document.getElementById('menuClose');
menuClose.addEventListener('click', function(){
    document.getElementById('menuArea').style.display = "none";
})