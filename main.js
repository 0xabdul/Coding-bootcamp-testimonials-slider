let useroneprev  = document.getElementById('userone-prev');
let useronenext = document.getElementById('userone-next');
let seconddiscription = document.getElementById('discriptiontwo');
let usertwoimg = document.getElementById('usertwo');
let usertwoprev = document.getElementById('usertwo-prev');
let usertwonext = document.getElementById('usertwo-next');
let qutoes = document.getElementById('quotes');
let firstdiscription = document.getElementById('discriptionone');
let useroneimg = document.getElementById('userone');
let changeone = document.getElementById('userone-change-img');
let changetwo = document.getElementById('usertwo-change-img');
let clicksound = document.getElementById('clickSounds');
useroneprev.addEventListener('click',()=>{
seconddiscription.style.display = 'flex';
usertwoimg.style.display = 'flex';
qutoes.style.display = 'block';
firstdiscription.style.display = 'none';
useroneimg.style.display = 'none';
changetwo.style.display = 'flex';
changeone.style.display = 'none';
clicksound.play()
})
useronenext.addEventListener('click',()=>{
seconddiscription.style.display = 'flex';
usertwoimg.style.display = 'flex';
qutoes.style.display = 'block';
firstdiscription.style.display = 'none';
useroneimg.style.display = 'none';
changetwo.style.display = 'flex';
changeone.style.display = 'none';
clicksound.play()
})
usertwoprev.addEventListener('click',()=>{
firstdiscription.style.display = 'flex';
useroneimg.style.display = 'flex';
seconddiscription.style.display = 'none';
usertwoimg.style.display = 'none';
changetwo.style.display = 'none';
changeone.style.display = 'flex';
clicksound.play()
})
usertwonext.addEventListener('click',()=>{
firstdiscription.style.display = 'flex';
useroneimg.style.display = 'flex';
seconddiscription.style.display = 'none';
usertwoimg.style.display = 'none';
changetwo.style.display = 'none';
changeone.style.display = 'flex';
clicksound.play()
})
