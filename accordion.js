var acc = document.getElementsByClassName("accordion");
var cl = document.getElementsByClassName("check-list");
var ci = document.getElementsByClassName("check-items");
var btn_ready = document.getElementById("ready");
var i;
var last;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        if(last){
            if (this==last & last.classList.contains("active")){
            last.classList.toggle("active",false);
            last.nextElementSibling.classList.toggle("show",false);
            return;
            }else{
                last.classList.toggle("active",false);
                last.nextElementSibling.classList.toggle("show",false); 
            }
        }
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
        last=this;
        
    }
}

var next = document.getElementsByClassName("next");


for (i = 0; i < next.length; i++) {
    next[i].onclick = function() {
        var prevcl=this.parentElement;
        for (i = 0; i < cl.length; i++) {
            if (cl[i] == prevcl){
                var next = acc[i+1];
                if(last){
                    if (next==last & last.classList.contains("active")){
                      last.classList.toggle("active",false);
                      last.nextElementSibling.classList.toggle("show",false);
                      return;
                      }else{
                        last.classList.toggle("active",false);
                        last.nextElementSibling.classList.toggle("show",false); 
                    }
                }
                next.classList.toggle("active");
                next.nextElementSibling.classList.toggle("show");
                last=next;
                
            }
    }
}}
var total;

function checkboxes(el, topic){
    //var el = document.getElementById('panel1');
    total = el.querySelectorAll('input[name='+topic+']:checked').length;
    return(total);

}
var totalarray = [0, 0, 0, 0];

for (i = 0; i < ci.length; i++) {
    ci[i].onclick = function to() {
        
        var el = this.parentElement;
        if (el.id =="panel1"){
                document.getElementById("total1").innerHTML=checkboxes(el, "topic1")+"/3";
                totalarray[0]=total;
                ready(totalarray);
        }else if (el.id =="panel2"){
                document.getElementById("total2").innerHTML=checkboxes(el, "topic2")+"/3";
                totalarray[1]=total;
                ready(totalarray);
        }else if (el.id =="panel3"){
                document.getElementById("total3").innerHTML=checkboxes(el, "topic3")+"/3";
                totalarray[2]=total;
                ready(totalarray);
        }else {
                document.getElementById("total4").innerHTML=checkboxes(el, "topic4")+"/3";
                totalarray[3]=total;
                ready(totalarray);
}}}

function positive(t){
    return t > 0;
}

function max(t) {
    return t > 3;
}


function ready() {

    if (totalarray.some(positive)){
        if (totalarray.some(max)){
            btn_ready.disabled = true;
            return;
        }else{ 
            btn_ready.disabled = false;
            return;
        }                
    }else{ 
        btn_ready.disabled = true;
}}


function info() {

    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
}}