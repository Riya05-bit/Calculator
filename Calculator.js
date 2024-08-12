let string="";   
let btns=document.querySelectorAll('.btn');
Array.from(btns).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
if(e.target.innerHTML==="AC"||e.target.innerHTML==="DEL"||e.target.innerHTML==="%"||e.target.innerHTML==="/"||e.target.innerHTML==="0"||e.target.innerHTML==="9"||e.target.innerHTML==="8"||e.target.innerHTML==="7"||e.target.innerHTML==="6"||e.target.innerHTML==="5"||e.target.innerHTML==="4"||e.target.innerHTML==="3"||e.target.innerHTML==="2"||e.target.innerHTML==="1"||e.target.innerHTML==="*"||e.target.innerHTML==="+"||e.target.innerHTML==="-"||e.target.innerHTML==="="||e.target.innerHTML==="."){
    console.log(e.target.innerHTML);

        if(e.target.innerHTML==="="){
            string =eval(string);
            document.getElementById("input").value=string;
    }
    else if(e.target.innerHTML==="AC"){
        string=" ";
        document.getElementById("input").value=string;
    }
    else if(e.target.innerHTML==="DEL"){
        string=string.slice(0,-1);
        document.getElementById("input").value=string;
    }
    else{
        string=string+e.target.innerHTML;
        document.getElementById('input').value=string;
    }
}
})
})