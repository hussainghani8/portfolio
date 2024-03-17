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


// mailing codes start


const submitbtn = document.querySelector("#submitbtn");



function sendMail(e) {
    e.preventDefault();
    // (function () {
    //     emailjs.init("bGAT61Gu2o5afwKx_");
    // })();

    var params = {
        sendername: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
    }

    var serviceId = "service_hme6crc";
    var templateId = "template_5yvwu2m";
    emailjs.send(serviceId, templateId, params)
        .then((res) => {
            document.querySelector("#name").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#subject").value = "";
            document.querySelector("#message").value = "";
            alert("Message Sent Successfully");
        })
        .catch(err => {
            console.log("err block");
            alert(err, "oh");
        });
}

submitbtn.addEventListener('click', sendMail);
