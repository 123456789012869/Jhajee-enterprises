// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

// Hide button initially
topBtn.style.display = "none";

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }

});

// Scroll smoothly to top
topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// Sticky Header Shadow
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Smooth Fade-in Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

// Floating WhatsApp Button
const whatsapp = document.createElement("a");

whatsapp.href = "https://wa.me/919830931672";
whatsapp.target = "_blank";
whatsapp.innerHTML = "💬";
whatsapp.className = "floating-whatsapp";

document.body.appendChild(whatsapp);
/* Floating WhatsApp */

.floating-whatsapp{
position:fixed;
bottom:25px;
right:25px;
width:60px;
height:60px;
background:#25D366;
color:#fff;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
font-size:32px;
text-decoration:none;
box-shadow:0 10px 25px rgba(0,0,0,.3);
z-index:9999;
transition:.3s;
}

.floating-whatsapp:hover{
transform:scale(1.1);
}
