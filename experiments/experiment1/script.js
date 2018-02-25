function handleEvent(e){
    var evt = e ? e:window.event;

    var para = document.createElement("div");
    var node = document.createElement("input");
    para.appendChild(node);
    para.style.position = "fixed";
    para.style.top = evt.clientY + "px";
    para.style.left = evt.clientX + "px";
    para.onclick = function (ev) {
        ev.stopPropagation();
    };
    node.onkeypress = function (ev) {
        if (ev.keyCode != 13){
            return
        }
        var text = para.childNodes[0].value;
        para.removeChild(para.childNodes[0]);
        var ne = document.createTextNode(text);
        para.appendChild(ne);

        if (text.includes("=")){
            var var_name = text.split("=")[0];
            var var_value = text.split("=")[1];

            window[var_name] = var_value;

            console.log("setting "+var_name+" to "+var_value)
        }else{
            ne.nodeValue = window[text];
        }

    };

    node.onblur = function () {
        if (para.childNodes[0].value==""){
            para.removeChild(para.childNodes[0])
        }
    };

    var element = document.getElementById("mybody");
    element.appendChild(para);

    node.focus();

    return false;
}

window.onclick = handleEvent;