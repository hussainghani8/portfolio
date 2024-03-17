
console.log("object");

let sections = document.getElementsByTagName('section');

window.onscroll = () => {
    for (let sec of sections) {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }

    }
}