var vis_1 = document.getElementById("vis_1");
var vis_2 = document.getElementById("vis_2");
var vis_3 = document.getElementById("vis_3");
var vis_4 = document.getElementById("vis_4");
var vis_5 = document.getElementById("vis_5");

const visarr = [vis_1,vis_2,vis_3,vis_4,vis_5];

var del_1 = document.getElementById("del_1");
var del_2 = document.getElementById("del_2");
var del_3 = document.getElementById("del_3");
var del_4 = document.getElementById("del_4");
var del_5 = document.getElementById("del_5");
var exist = [del_1,del_2,del_3,del_4,del_5];

add_listener();
let remain = visarr.length;
function add_listener() {
    for(let i=0; i<exist.length; i++){
        exist[i].addEventListener("click", function(){
        
            visarr[i].remove();
            /*visarr.splice(i,1);
            exist.splice(i,1);
            console.log(i);
            console.log(visarr);
            console.log(exist); */
            remain--; 
        });
    }
}

let mode = 1;
var vis_funcs = document.querySelectorAll("img.vis_func");
for(let i=0; i<remain; i++){
    vis_funcs[i].addEventListener("click", function() { if(mode==1) changemain(i);});

}


let currentmain=-1;
let maincurrent=-1;
let countround=0;
function changemain(num) {    
    var headimg = document.getElementById("head").getAttribute('src');
    document.getElementById("head").src = vis_funcs[num].parentNode.firstChild.getAttribute('src');
    vis_funcs[num].parentNode.firstChild.src = headimg;
    var t=vis_funcs[num].parentNode.parentNode.lastElementChild.innerHTML;
    vis_funcs[num].parentNode.parentNode.lastElementChild.innerHTML = document.getElementById("main_name").innerHTML;
    document.getElementById("main_name").innerHTML = t;
    if(maincurrent==num) {
        vis_funcs[num].parentNode.parentNode.firstElementChild.style.display = "";
        currentmain=-1;
        maincurrent=-1;
        countround=0;
    }else {
        currentmain=num;
        if(countround==0) maincurrent=num;
    }
    
    if(currentmain!=-1&&countround==0) {vis_funcs[num].parentNode.parentNode.firstElementChild.style.display = "none"; countround=1;}
  
    //console.log(vis_funcs[num].parentNode.parentNode.firstElementChild);
    console.log("cur:");
    console.log(currentmain);
}

var main_func_pic = document.getElementById("main_pic_id");
main_func_pic.addEventListener("click", function() {if(mode==1) switch_to_no_main(currentmain); mode = 2;});


function switch_to_no_main(num){
    document.getElementById("root_section1_id").style.display = "none" ;
    var root_seection2_id = document.getElementById("root_section2_id");
    root_seection2_id.style.width = "100%";
    var section2_visitors = document.getElementsByClassName("section2_visitors") ;
    for(let i=0; i<remain; i++){
        section2_visitors[i].classList.add("switch_to_no_main");
    }
    document.getElementById("root_id").style.padding = "0%";
    let div = create_person(num);
    root_seection2_id.appendChild(div);
    //console.log(visarr.length);
    vis_funcs = document.querySelectorAll("img.vis_func");
    for(let i=0; i<remain+1; i++){
        vis_funcs[i].addEventListener("click", function() { if(mode==2) changemain2(i);});
    }
}

function changemain2(i){
    alert("hi");
    document.getElementById("root_section1_id").style.display = "";
    //var root_section1_id = document.getElementById("root_section1_id");
    //root_section1_id.classList.add("root_section1");
    var root_seection2_id = document.getElementById("root_section2_id");
    root_seection2_id.style.width = "35%";
    var section2_visitors = document.getElementsByClassName("section2_visitors");
    for(let i=0; i<remain; i++){
        section2_visitors[i].classList.remove("switch_to_no_main");
        section2_visitors[i].classList.add("section2_visitors");
    }
    document.getElementById("root_id").style.padding = "2%";
    root_seection2_id.lastChild.remove();
    changemain(i);
    mode=1;
}

function create_person(num){
    let div= document.createElement("div"); 
    //div.id = "vis_" + num;   
    div.classList.add("switch_to_no_main");  
    if(num!=-1){
        let tok1 = document.createElement("img");
        tok1.src = "cross.png";
        tok1.classList.add("cross_pic");
        tok1.addEventListener("click", function(){
            visarr[visarr.length-1].remove();
            visarr.splice(visarr.length-1,1); });
        div.appendChild(tok1);
    }

    let tok2 = document.createElement("div");
    let tok3 = document.createElement("img");
    console.log("num");
    console.log(num);
    if(num==-1) {
        tok3.src = "head1.jpg";
    }else {
        tok3.src = document.getElementById("head").getAttribute('src');
    }
    tok3.classList.add("visitor_pic");
    let tok4 = document.createElement("img");
    tok4.src = "fuck.jpg";
    tok4.classList.add("vis_func");
    tok2.appendChild(tok3);
    tok2.appendChild(tok4);
    div.appendChild(tok2);

    let tok5 = document.createElement("div");
    tok5.classList.add("visitor_mute");
    let tok6 = document.createElement("img");
    tok6.src = "mute.png";
    tok6.classList.add("participant_mute");
    tok5.appendChild(tok6);
    div.appendChild(tok5);

    let tok7 = document.createElement("div");
    tok7.classList.add("visitor_name");
    tok7.innerHTML = document.getElementById("main_name").innerHTML;
    div.appendChild(tok7);
    //let div = document.createElement("section2_visitors");
    //div.appendChild(document.createElement(""))
    return div;
}


/*function add_listener(){
    for(let i=0; i<exist.length; i++){
        exist[i].addEventListener("click", function(){
            movevis(i+1);      
        });
    }
}*/





//const visarr = [vis_1,vis_2,vis_3,vis_4,vis_5];
var positionx = [visarr[0].offsetLeft,visarr[1].offsetLeft,visarr[2].offsetLeft,visarr[3].offsetLeft,visarr[4].offsetLeft];
var positiony = [visarr[0].offsetTop,visarr[1].offsetTop,visarr[2].offsetTop,visarr[3].offsetTop,visarr[4].offsetTop];

function changevis(num){
    console.log(visarr.length);
    console.log(visarr.length);
}



function printarr() {
    for(let i=0; i<5; i++){
        console.log(i);
        console.log(positionx[i]);
        console.log(positiony[i]);
    }
}
let arrx = [0,0,0,0,0];
let arry = [0,0,0,0,0];
let deletedvis = [1,1,1,1,1];

function movevis(num){
    deletedvis[num-1] = 0;
    console.log(num); 
    let tok=0;
    for (let i=0; i<num-1; i++){
        if(deletedvis[i]==0) tok++;
    }
    num = num-tok;
    console.log(num);
    if(visarr.length==num){
        visarr[num-1].classList.add("deleted");
        exist.splice(num-1,1);
        positionx.splice(num-1,1);
        positiony.splice(num-1,1);
        visarr.splice(num-1,1);
        arrx.splice(num-1,1);
        arry.splice(num-1,1);
        return ;
    }
    for(let i = num; i < visarr.length; i++) {
        let idx = null;
        let idy=null;
        let count1=0,count2=0;
        let dx = visarr[i-1].offsetLeft-visarr[i].offsetLeft;
        let dy = visarr[i-1].offsetTop-visarr[i].offsetTop;  
        idx = setInterval(movehorizon,1);
        idy = setInterval(movevertical,1); 
        function movehorizon() {
            if (count1 == dx) {
                //newx=0;
                count1=0;
                positionx[i] = positionx[i]+dx;
                clearInterval(idx);
            } else {
                if(dx>0) {
                    arrx[i]++; count1++;
                }else {
                    arrx[i]--; count1--;
                } 
                visarr[i].style.left = arrx[i] + "px"; 
            }
        }
        function movevertical() {
            if(count2 == dy) {
                count2=0;
                positiony[i] = positiony[i]+dy;
                clearInterval(idy);
            } else {
                if(dy>0) {
                    arry[i]++; count2++;
                }else {
                    arry[i]--; count2--;
                } 
                visarr[i].style.top = arry[i] + "px"; 
            }
        }        
    }
    setTimeout(function() {
                    visarr[num-1].classList.add("deleted");
                    exist.splice(num-1,1);
                    positionx.splice(num-1,1);
                    positiony.splice(num-1,1);
                    visarr.splice(num-1,1);
                    arrx.splice(num-1,1);
                    arry.splice(num-1,1);
                    console.log(visarr);
                    
                    console.log(exist);
                    console.log(positionx);
                    console.log(positiony);
                }, 1000);

}