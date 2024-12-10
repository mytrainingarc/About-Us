function changeBackgroundColor(color) {
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = color;
}

document.getElementById("colorButton").onclick = function() {
    const randomColors = ["#ff4e50", "#f5a623", "#2c3e50", "#1abc9c", "#8e44ad"];
    const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];
    changeBackgroundColor(randomColor);
};

$(document).ready(function() {
    $("#fadeInButton").click(function() {
        $(".about-section").fadeIn(1000);  
    });

    
    $("#toggleButton").click(function() {
        $("ul").slideToggle(500);  
    });
});
