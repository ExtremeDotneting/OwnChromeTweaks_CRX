if (window.location.href.includes("fullscreenmode=1")) {
    console.log("Fullscreen mode plugin initialized.");

    function enableFullscreen() {
        var elem = document.documentElement;
        var rfs =
            elem.requestFullScreen
            || elem.webkitRequestFullScreen
            || elem.mozRequestFullScreen
            || elem.msRequestFullScreen;
        rfs.call(elem);
    }

    //BTN
    let btn = document.createElement("button");
    btn.innerHTML = "Submit";
    btn.type = "submit";
    btn.name = "formBtn";
    document.body.appendChild(btn);
    btn.style.position = "absolute";
    btn.style.left = "1%";
    btn.style.top = "1%";
    btn.style.width = "98%"
    btn.style.height = "98%"
    btn.style.background = "transparent";
    btn.style.border = "none";
    btn.style.fontSize = 0;
    btn.onclick = myEventHandler;

    //Handler
    function myEventHandler() {
        console.log("Requesting fullscreen.");
        unsubscribeEvents();
        btn.style.visibility = "hidden";
        enableFullscreen();
    }

    //Subscribe and unsubscribe
    function subscribeEvents() {
        document.addEventListener("change", myEventHandler);
        document.addEventListener("contextmenu", myEventHandler);
        document.addEventListener("dblclick", myEventHandler);
        document.addEventListener("click", myEventHandler);
        document.addEventListener("mouseup", myEventHandler);
        document.addEventListener("pointerup", myEventHandler);
        document.addEventListener("reset", myEventHandler);
        document.addEventListener("submit", myEventHandler);
        document.addEventListener("touchend", myEventHandler);
    }
    subscribeEvents();

    function unsubscribeEvents() {
        document.removeEventListener("change", myEventHandler);
        document.removeEventListener("contextmenu", myEventHandler);
        document.removeEventListener("dblclick", myEventHandler);
        document.removeEventListener("click", myEventHandler);
        document.removeEventListener("mouseup", myEventHandler);
        document.removeEventListener("pointerup", myEventHandler);
        document.removeEventListener("reset", myEventHandler);
        document.removeEventListener("submit", myEventHandler);
        document.removeEventListener("touchend", myEventHandler);
    }

}

