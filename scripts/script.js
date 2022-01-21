$(document).ready(() => {
    setTimeout(() => {
        $(".loading-screen i").html("Cool :)");
        setTimeout(() => $(".loading-screen").addClass("loaded"), 500);
    }, 1000);
});