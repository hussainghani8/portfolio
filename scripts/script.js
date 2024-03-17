

// loader code start
// function time() {
//   let a = 9;
//   setInterval(function () {
//     a = a + Math.floor(Math.random() * 15);
//     if (a <= 100) {
//       document.querySelector('#loader h1').innerHTML = 'Loading...' + a + '%';
//     } else {
//       a = 100;
//       document.querySelector('#loader h1').innerHTML = 'Loading...' + a + '%';
//     }
//   }, 150)
// }





// loader code end


//########## ########## ########## #page1  start ########## ########## ##########
// setting up the variables
let bars = document.getElementById("nav-action");
let nav = document.getElementById("nav");
// setting up the listener
bars.addEventListener("click", barClicked, false);
// setting up the clicked Effect
function barClicked() {
  console.log('clicked');
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}
//########## ########## ########## #page1  start ########## ########## ##########
//########## ########## ########## #page2 animations start ########## ########## ##########
// ========== text-left code start ==========

// ========== text-left code end ==========

// text-right code start


// ========== text-right code end ==========

//########## ########## ########## #page2 animations end ########## ########## ##########



// ########## ########## ########## #page3 start ########## ########## #########

// ========== about me start ==========

// ========== about me end ==========

// ========== edupath start ==========

// ========== edupath end ==========
// ########## ########## ########## #page3 end ########## ########## #########


// ########## ########## ########## #page4 start ########## ########## #########
const mySkill = document.querySelector('#myskill');
const fire = (e) => {
  if (!e[0].isIntersecting) {
    document.getElementById("link").disabled = true;
    document.getElementById("link").checked = false;
  } else {
    document.getElementById("link").disabled = false;
    document.getElementById("link").checked = true;

  }
}
const watchman = new IntersectionObserver(fire);
watchman.observe(mySkill)

// ========== End text start ==========

// ========== End text end ==========
// ########## ########## ########## #page4 end ########## ########## #########