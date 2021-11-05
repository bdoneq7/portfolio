var body = document.body;

var slogan = function () {
    var moveTextEl = document.createElement("div");
    moveTextEl.textContent = "Dynamic Coding Skills";
    body.appendChild(moveTextEl);
    moveTextEl.className = "slogan";

}
setTimeout(slogan, 2000);