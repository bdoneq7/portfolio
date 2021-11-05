var body = document.body;
var header = document.header;

var slogan = function () {
    var moveTextEl = document.createElement("div");
    moveTextEl.textContent = "Dynamic Coding Skills";
    body.appendChild(moveTextEl);
    moveTextEl.className = "slogan";

}
setTimeout(slogan, 2000);