var vis_1 = document.getElementById("vis_1");
var vis_2 = document.getElementById("vis_2");
var vis_3 = document.getElementById("vis_3");
var vis_4 = document.getElementById("vis_4");
var vis_5 = document.getElementById("vis_5");

var visarr = [vis_1,vis_2,vis_3,vis_4,vis_5];

var del_1 = document.getElementById("del_1");
var del_2 = document.getElementById("del_2");
var del_3 = document.getElementById("del_3");
var del_4 = document.getElementById("del_4");
var del_5 = document.getElementById("del_5");
var exist = [del_1,del_2,del_3,del_4,del_5];

function ShowTime(){
    var NowDate=new Date();
    var h=NowDate.getHours();
    var m=NowDate.getMinutes();
    //var s=NowDate.getSeconds();
    var time="";
    if(h>12){
        time = "晚上"+(h-12)+':'+m;
    } else {
        time = "早上"+(h)+':'+m;
    }
    time = time + " | Web Programming";
    document.getElementById('time_id').innerHTML = time;
    setTimeout('ShowTime()',1000);
}

add_listener();
let remain = visarr.length;
let visarr2=[1,1,1,1,1];
function add_listener() {
    for(let i=0; i<exist.length; i++){
        exist[i].addEventListener("click", function(){
            visarr2[i]=0;
            //visarr[i].remove();
            visarr[i].style.display = "none";
            /*visarr.splice(i,1);
            exist.splice(i,1);
            console.log(i);
            console.log(visarr);
            console.log(exist); */
            remain--; 
            calsize1();
            calsize2();
        });
    }
}

let mode = 1;
var vis_funcs = document.querySelectorAll("img.vis_func");
for(let i=0; i<remain; i++){
    vis_funcs[i].addEventListener("click", function() { if(mode==1) changemain(i);});
}

calsize1();
let plusvis=0;
let mode2maindelete=0;
let currentmain=-1;
let maincurrent=-1;
let countround=0;
function changemain(num) {
    /*console.log("num");
    console.log(num);
    if(mode==2) num-1;
    var headimg = document.getElementById("head").getAttribute('src');
    let pics = document.getElementsByClassName("visitor_pic");
    console.log(pics[4]);
    document.getElementById("head").src = pics[num].getAttribute('src');
    pics[num].src = headimg;
    let name = document.getElementsByClassName("visitor_name");
    var t=name[num].innerHTML;
    name[num].innerHTML = document.getElementById("main_name").innerHTML;
    document.getElementById("main_name").innerHTML = t;*/
        var headimg = document.getElementById("head").getAttribute('src');
        document.getElementById("head").src = vis_funcs[num].parentNode.firstChild.getAttribute('src');
        vis_funcs[num].parentNode.firstChild.src = headimg;
        var t=vis_funcs[num].parentNode.parentNode.lastElementChild.innerHTML;
        vis_funcs[num].parentNode.parentNode.lastElementChild.innerHTML = document.getElementById("main_name").innerHTML;
        document.getElementById("main_name").innerHTML = t;

    /*console.log("curmain:"); console.log(currentmain);
    console.log("maincur:"); console.log(maincurrent);
    console.log("num:"); console.log(num);*/
    if(maincurrent==num) {
        vis_funcs[num].parentNode.parentNode.firstElementChild.style.display = "";
        //console.log(vis_funcs[num].parentElement);
        currentmain=-1;
        maincurrent=-1;
        countround=0;
    }else {
        currentmain=num;
        if(countround==0) maincurrent=num;
    }
    if(currentmain!=-1&&countround==0) {vis_funcs[num].parentNode.parentNode.firstElementChild.style.display = "none"; countround=1;}
}

let bug=0;
var main_func_pic = document.getElementById("main_pic_id");
main_func_pic.addEventListener("click", function() {if(mode==1) switch_to_no_main(currentmain); mode = 2; calsize2();});


function switch_to_no_main(num){
    if(num==-1) {currentmain=visarr.length; maincurrent=visarr.length;}
    document.getElementById("root_section1_id").style.display = "none" ;
    var root_seection2_id = document.getElementById("root_section2_id");
    root_seection2_id.style.width = "100%";
    var section2_visitors = document.getElementsByClassName("section2_visitors") ;
    for(let i=0; i<visarr.length; i++){
        visarr[i].classList.add("switch_to_no_main");
       /* visarr[i].firstElementChild.firstElementChild.style.width = "10%";
        visarr[i].childNodes[5].firstElementChild.style.width = "100%";*/
    }
    document.getElementById("root_id").style.padding = "0%";
    let div = create_person(num);
    root_seection2_id.appendChild(div);
    visarr.push(div);
    visarr2.push(1);
    //console.log(visarr.length);
    vis_funcs = document.querySelectorAll("img.vis_func");
    for(let i=0; i<visarr.length; i++){
        vis_funcs[i].addEventListener("click", function() { if(mode==2) changemain2(i);});
    }
    for(let j=0; j<visarr.length-1; j++){
        //visarr[j].classList.remove("switch_to_no_main");
        //visarr[j].classList.add("section2_visitors");
        visarr[j].style.margin = "0.5%";
    }
}

function changemain2(i){
    //alert("hi");
    document.getElementById("root_section1_id").style.display = "";
    var root_seection2_id = document.getElementById("root_section2_id");
    root_seection2_id.style.width = "35%";
    var section2_visitors = document.getElementsByClassName("section2_visitors");
    for(let j=0; j<visarr.length-1; j++){
        visarr[j].classList.remove("switch_to_no_main");
        visarr[j].classList.add("section2_visitors");
        visarr[j].style.margin = "2%";
    }
    document.getElementById("root_id").style.padding = "2%";
    //console.log(root_seection2_id.lastChild);
    if(plusvis>0) document.getElementById("maininmode2_id").remove();
    root_seection2_id.lastChild.remove();
    //root_seection2_id.childNodes[visarr.length-plusvis].remove();
    if(mode2maindelete==0){
        //visarr[visarr.length-1].remove();
        if(plusvis>0) {visarr.splice(visarr.length-1-plusvis,1); visarr2.splice(visarr.length-1-plusvis,1);}
        visarr.splice(visarr.length-1,1);
        visarr2.splice(visarr.length-1,1);
        if(plusvis>0) remain--;
        console.log(visarr);
        console.log(visarr2);
    }
    //if(i==maincurrent) currentmain=-1;
    changemain(i);
    mode=1;
    if(plusvis!=0) addvis();
    
    calsize1();
}

function create_person(num){
    let div= document.createElement("div"); 
    div.id = "maininmode2_id";   
    div.classList.add("switch_to_no_main");  
    if(num!=-1){
        let tok1 = document.createElement("img");
        tok1.src = "cross.png";
        tok1.style.width = "10%";
        tok1.classList.add("cross_pic");
        tok1.addEventListener("click", function(){
            visarr[visarr.length-1-plusvis].remove();
            visarr.splice(visarr.length-1-plusvis,1); 
            mode2maindelete=1;
        });
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
    tok6.style.width = "150%";
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

var plus = document.getElementById("plus");
let a=0;
plus.addEventListener("click", function() { addvis();});

function add_listener2(num){
    exist[exist.length-1].addEventListener("click", function(){
        visarr2[num]=0;
        //console.log(num);
        
        //visarr[i].remove();
        visarr[num].style.display = "none";
        remain--; 
        //console.log(remain);
        calsize1();
        calsize2();
    });
}

function addvis(){
    if(mode==2) plusvis++;
    let div= document.createElement("div"); 
    //div.id = "vis_" + num;   
    visarr.push(div);
    visarr2.push(1);
    remain++;
    //console.log(visarr.length);
    let tok1 = document.createElement("img");
    tok1.src = "cross.png";
    //tok1.style.width = "10%";
    tok1.classList.add("cross_pic");
    //a=visarr.length-1;
    //console.log("a:"); console.log(visarr.length);
    exist.push(tok1);
    add_listener2(visarr.length-1);
    /*exist[exist.length-1].addEventListener("click", function(){
        visarr2[visarr.length-1]=0;
        console.log(visarr.length);
        
        //visarr[i].remove();
        visarr[visarr.length-1].style.display = "none";
        remain--; 
    });*/
    div.appendChild(tok1);

    let tok2 = document.createElement("div");
    let tok3 = document.createElement("img");
    tok3.src = "extravis.png";
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
    tok6.style.width = "150%";
    tok5.appendChild(tok6);
    div.appendChild(tok5);

    let tok7 = document.createElement("div");
    tok7.classList.add("visitor_name");
    //tok7.innerHTML = document.getElementById("main_name").innerHTML;
    tok7.innerHTML = "訪客" + visarr.length;
    div.appendChild(tok7);

    div.classList.add("section2_visitors");
    if(mode==2) div.style.margin = "0.5%";
    let root_section2_id = document.getElementById("root_section2_id");
    root_section2_id.appendChild(div);
    //visarr.push(div);
    //visarr[a-1] = div;
    setnewvisfunc(visarr.length-1);
    setnewvisfunc2(visarr.length-1);
    /*vis_funcs = document.querySelectorAll("img.vis_func");
    vis_funcs[visarr.length-1].addEventListener("click", function() { if(mode==2) changemain2(i);if(mode==1) changemain(i);});*/
    /*for(let i=0; i<visarr.length; i++){
        vis_funcs[i].addEventListener("click", function() { if(mode==2) changemain2(i);
            if(mode==1) changemain(i);
        console.log(visarr);});
    }*/
    calsize1();
    calsize2();
}

function setnewvisfunc(num){
    vis_funcs = document.querySelectorAll("img.vis_func");
    vis_funcs[num].addEventListener("click", function() {if(mode==1) changemain(num);});
}

function setnewvisfunc2(num){
    vis_funcs = document.querySelectorAll("img.vis_func");
    vis_funcs[num].addEventListener("click", function() {if(mode==2) changemain2(num);});
}

function calsize1(){
    if(mode!=1) return;
    if(remain==0) {
        document.getElementById("root_section1_id").style.width = "100%";
        document.getElementById("root_section2_id").style.width = "0%";
        return;
    }
    document.getElementById("root_section1_id").style.width = "70%";
    document.getElementById("root_section2_id").style.width = "30%";
    
    if(remain==1){
        changesize(90,60,2);
    }else if(remain==2){
        changesize(80,40,2);
    }else if(remain==3){
        changesize(46,35,2);
    }else if(remain==4){
        changesize(46,35,2);
    }else if(remain<=6){
        changesize(46,30,2);
    }else if(remain>=7&&remain<13){
        changesize(28,25,3);
    }else if(remain>12){
        changesize(28,20,3);
    }
    let cross = document.getElementsByClassName("cross_pic");
    for(let i=0; i<cross.length; i++){
        cross[i].style.width = "10%";
    }
    let mute = document.getElementsByClassName("visitor_mute");
    for(let i=0; i<mute.length; i++){
        mute[i].style.width = "10%";
    }
}

function changesize(x,y,a){
    for(let i=0; i<visarr.length; i++){
        visarr[i].style.width = x+"%";
        visarr[i].style.height = y+"%";
        if(remain>=7){
            /*visarr[i].childNodes[1].firstElementChild.style.width = "2em";
            visarr[i].childNodes[1].firstElementChild.style.height = "2em";*/
            var vis = document.getElementsByClassName("visitor_pic");
            for(let j=0; j<vis.length; j++){
                vis[j].style.width="3em";
                vis[j].style.height="3em";
            }
        }

    }
    if(mode==2) remain++;
    if(remain%a!=0){
        let count=visarr.length;
        let times = remain%a;
        //if(mode==2) times--;
        for(let i=0; i<times; i++){
            for(let j=count-1; j>-1; j--){
                if(visarr2[j]==1) {
                    count=j;
                    if(remain%a==1){
                        visarr[j].style.width = (x+15)+"%";
                    }else if(remain%a==2){
                        visarr[j].style.width = (x+10)+"%";
                    }else if(remain%a==3)
                        visarr[j].style.width = (x+5)+"%";
                    j=-1;
                }
            }
        }
        
    }
    if(mode==2) remain--;
}

function calsize2(){
    if(mode!=2) return;
    document.getElementById("root_section2_id").style.alignContent = "flex-start";
    if(remain==1){
        changesize(46,60,2);
        /*document.getElementById("root_section2_id").lastChild.style.width = "35%";
        document.getElementById("root_section2_id").lastChild.style.height = "50%";*/
        document.getElementById("root_section2_id").style.alignContent = "center";
    }else if(remain==2){
        changesize(40,50,2);
        /*document.getElementById("root_section2_id").lastChild.style.width = "55%";
        document.getElementById("root_section2_id").lastChild.style.height = "50%";*/
    }else if(remain==3){
        changesize(40,50,2);
        /*document.getElementById("root_section2_id").lastChild.style.width = "40%";
        document.getElementById("root_section2_id").lastChild.style.height = "50%";*/
    }else if(remain==4||remain==5){
        changesize(32,48,3);
    }else if(remain>=6&&remain<=8){
        console.log("fuck");
        changesize(32,33,3);
    }else if(remain>8&&remain<12){
        changesize(22,33,4);
        //document.getElementById("root_section2_id").lastChild.style.width = "22%";
    }else if(remain>11){
        changesize(22,25,4);
    }else if(remain==0){
        changesize(80,90,1);
        document.getElementById("root_section2_id").style.alignContent = "center";
    }
    let cross = document.getElementsByClassName("cross_pic");
    for(let i=0; i<cross.length; i++){
        cross[i].style.width = "7%";
    }
    let mute = document.getElementsByClassName("visitor_mute");
    for(let i=0; i<mute.length; i++){
        mute[i].style.width = "5%";
    }
    /*let pic = document.getElementsByClassName("visitor_pic");
    for(let i=0; i<pic.length; i++){
        pic[i].style.width = "22%";
        pic[i].style.height = "35%";
    }*/
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