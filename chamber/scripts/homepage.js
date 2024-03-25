// Meet and greet banner******************************
document.addEventListener("DOMContentLoaded",function() {
    const today = new Date().getDay();
    if (today === 1 || today === 2 || today === 3){
        document.querySelector("#meetGreetBanner").style.display ="block";

    }
});
function closeBanner(){
    document.querySelector("#meetGreetBanner").style.display = "none";
}
