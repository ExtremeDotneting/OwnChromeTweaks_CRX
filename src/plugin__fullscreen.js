if (window.location.href.includes("fullscreenmode=1")) {

    let btn = document.createElement("button");
    btn.innerHTML = "Submit";
    btn.type = "submit";
    btn.name = "formBtn";
    document.body.appendChild(btn);

    btn.style.position="absolute";
    btn.style.left = "1%";
    btn.style.top = "1%";
    btn.style.width="98%"
    btn.style.height="98%"
    btn.style.background="transparent";
    btn.style.border="none";
    btn.style.fontSize=0;


    btn.onclick=function(){
        var elem = document.documentElement;
        var rfs =
            elem.requestFullScreen
            || elem.webkitRequestFullScreen
            || elem.mozRequestFullScreen
            || elem.msRequestFullScreen;
        rfs.call(elem);
        btn.style.visibility="hidden";
       
    }

}
