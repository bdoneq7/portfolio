var body = document.body;

var sloganHtml = function () {
    var htmlEl = document.createElement("div");
    htmlEl.textContent = "HTML5";
    body.appendChild(htmlEl);
    htmlEl.className = "slogan-html";

}
setTimeout(sloganHtml, 1000);

var sloganCss = function () {
    var cssEl = document.createElement("div");
    cssEl.textContent = "CSS3";
    body.appendChild(cssEl);
    cssEl.className = "slogan-css";

}
setTimeout(sloganCss, 2000);

var sloganJavascript = function () {
    var javascriptEl = document.createElement("div");
    javascriptEl.textContent = "JavaScript";
    body.appendChild(javascriptEl);
    javascriptEl.className = "slogan-javascript";

}
setTimeout(sloganJavascript, 3000);

var sloganJquery = function () {
    var jqueryEl = document.createElement("div");
    jqueryEl.textContent = "JQuery";
    body.appendChild(jqueryEl);
    jqueryEl.className = "slogan-jquery";

}
setTimeout(sloganJquery, 4000);

var sloganBootstrap = function () {
    var bootstrapEl = document.createElement("div");
    bootstrapEl.textContent = "Bootstrap";
    body.appendChild(bootstrapEl);
    bootstrapEl.className = "slogan-bootstrap";

}
setTimeout(sloganBootstrap, 5000);

var sloganBulma = function () {
    var bulmaEl = document.createElement("div");
    bulmaEl.textContent = "Bulma";
    body.appendChild(bulmaEl);
    bulmaEl.className = "slogan-bulma";

}
setTimeout(sloganBulma, 6000);

var sloganAjax = function () {
    var ajaxEl = document.createElement("div");
    ajaxEl.textContent = "Ajax";
    body.appendChild(ajaxEl);
    ajaxEl.className = "slogan-ajax";

}
setTimeout(sloganAjax, 7000);

var sloganGithub = function () {
    var githubEl = document.createElement("div");
    githubEl.textContent = "Github";
    body.appendChild(githubEl);
    githubEl.className = "slogan-github";

}
setTimeout(sloganGithub, 8000);



$(document).ready(function(){

$( "#develop" ).animate({
      width: "70%",
      opacity: 1,
      fontSize: "3em",
      borderWidth: "10px"
}, 1500 );

}); 

