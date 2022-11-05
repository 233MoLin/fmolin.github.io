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
        this.style.backgroundColor = "white";
        this.style.color = "skyblue";
        this.innerText = "W";
        body.style.backgroundColor = "skyblue";
    }
    else
    {
        bgc = "white";
        this.style.backgroundColor = "skyblue";
        this.style.color = "white";
        this.innerText = "B";
        body.style.backgroundColor = "white";
    }
}