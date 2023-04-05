var toolbar = document.querySelector(".toolbar");
var toolbar_backgroundColor = toolbar.querySelector(".background-color");
// 背景颜色
var body = document.querySelector("body");
var bgc = "white";
toolbar_backgroundColor.onclick = function()
{
    if (bgc == "white")
    {
        bgc = "skyblue";
        this.style.backgroundColor = "pink";
        this.style.color = "skyblue";
        this.innerText = "P";
        body.style.backgroundColor = "skyblue";
    }
    else if (bgc == "skyblue")
    {
        bgc = "pink";
        this.style.backgroundColor = "white";
        this.style.color = "rgba(255,0,0,0.1)";
        this.innerText = "W";
        body.style.backgroundColor = "rgba(255,0,0,0.1)";
    }
    else if (bgc == "pink")
    {
        bgc = "white";
        this.style.backgroundColor = "skyblue";
        this.style.color = "white";
        this.innerText = "B";
        body.style.backgroundColor = "white";
    }
}