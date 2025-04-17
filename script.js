document.getElementById("phishing-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("emailbox").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
    }

    document.getElementById("alert-box").style.display = "block";
});

function closeAlert() {
    window.open("https://cc.kmutt.ac.th/phishing-mail.html","_blank");
    document.getElementById("alert-box").style.display = "none";
}
