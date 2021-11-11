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
setTimeout(sloganBootstrap, 4000);

var sloganGithub = function () {
    var githubEl = document.createElement("div");
    githubEl.textContent = "Github";
    body.appendChild(githubEl);
    githubEl.className = "slogan-github";

}
setTimeout(sloganGithub, 5000);

