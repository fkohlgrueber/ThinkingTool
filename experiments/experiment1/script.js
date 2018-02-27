
class Cell {

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.pos1=0; this.pos2=0; this.pos3=0; this.pos4=0;

        this.div = document.createElement("div");
        this.div.style.position = "fixed";

        this.dragHandle = document.createElement("div");
        this.dragHandle.className = "dragHandle";
        //this.dragHandle.innerHTML = ".";
        this.input = document.createElement("input");
        this.label = document.createElement("span");

        this.div.appendChild(this.dragHandle);
        this.div.appendChild(this.input);
        this.div.appendChild(this.label);
        document.getElementById("mybody").appendChild(this.div);

        this.label.style.display = "none";

        let top = y - this.div.offsetHeight/2;
        this.div.style.top = top - top%5 + "px";
        this.div.style.left = x - x%5+ "px";

        this.input.focus();

        this.div.onclick = function (ev) {ev.stopPropagation();};
        this.input.onblur = (ev) => {
            if (this.input.value === ""){
                this.deleteDiv();
            }else{
                this.onSubmit();
            }
        };
        this.input.onkeypress = (ev) => {
            if (ev.keyCode === 13){  // enter key
                this.onSubmit();
            }
            if (ev.keyCode === 27){  // escape key
                this.onCancel();
            }
        };
        this.label.ondblclick = (ev) => {
            this.onEdit();
        };
        this.dragHandle.onmousedown = (e) => {
            console.log("test");
            e = e || window.event;
            this.pos3 = e.clientX;
            this.pos4 = e.clientY;
            document.onmouseup = this.closeDragElement;
            document.onmousemove = (e) => {
                e = e || window.event;
                this.pos1 = this.pos3 - e.clientX;
                this.pos2 = this.pos4 - e.clientY;
                this.pos3 = e.clientX;
                this.pos4 = e.clientY;
                this.div.style.top = (this.div.offsetTop - this.pos2) + "px";
                this.div.style.left = (this.div.offsetLeft - this.pos1) + "px";
            };
        }
    }

    // noinspection JSMethodCanBeStatic
    closeDragElement(e){
        document.onmouseup = null;
        document.onmousemove = null;
    }

    deleteDiv (){
        document.getElementById("mybody").removeChild(this.div);
    }

    onSubmit(){
        this.content = this.input.value;
        this.showLabel();
    }

    showLabel(){
        this.label.innerHTML = this.content;
        this.input.style.display = "none";
        this.label.style.display = "inline";
    }

    onCancel(){
        if (typeof this.content === 'undefined'){
            this.deleteDiv();
        }else{
            this.showLabel();
        }
    }

    onEdit(){
        this.input.style.display = "inline";
        this.label.style.display = "none";
        this.input.focus();
    }
}

function handleEvent(e){
    let evt = e ? e:window.event;

    new Cell(evt.clientX, evt.clientY);

    return false;
}

window.onclick = handleEvent;