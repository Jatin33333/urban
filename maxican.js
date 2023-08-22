window.addEventListener('scroll',abc);
function abc(){
    let header = document.getElementById('headerr');
    let scrolll = window.scrollY;

if(scrolll < 50){
    header.classList.add('change');
}else{
    header.classList.remove('change');
}
}

function fn1(){
        document.getElementById('responsive').style.display="none";
        document.getElementById('hider').style.display="block";
    }


function fn2(){
    document.getElementById('responsive').style.display="block";
    document.getElementById('hider').style.display="none";
}