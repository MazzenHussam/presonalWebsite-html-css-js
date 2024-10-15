function toggleMenu() {
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// function getCurrentYear() {
//     const date = new Date().getFullYear();
//     console.log(date);

//     document.getElementById("sss").innerHTML = `Copyright &#169${{date}}Mazen Hossam. All Rights Reserved`;
// }