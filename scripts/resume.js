const downloadbtn = document.getElementById("downloadbtn");
const cv = document.querySelector("#cv");

window.onload = function () {
    document.getElementById("downloadbtn").
        addEventListener('click', () => {
            const cv = this.document.getElementById("cv");
            const opt = {
                margin: 0,
                filename: 'hussain-resume.pdf',
                image: { type: 'jpeg', quality: 1 },
                html2canvas: {
                    backgroundColor: "#fff",
                    scale: window.devicePixelRatio,
                    y: 0,
                    x: 0,
                    scrollY: 0,
                    scrollX: 0,
                    windowWidth: 800,
                },
                jsPDF: { unit: 'in', format: [8.30, 11.72], orientation: 'portrait', precision: 32 }
            };
            html2pdf().from(cv).set(opt).save();
        })
}