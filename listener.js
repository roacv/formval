let btn = document.querySelector('.card-footer');
btn.addEventListener('click', function(evento){
    let inpt = document.getElementsByTagName('input');
    let sele = document.getElementById('state');
    // es -4 por los check de las tarjetas para no revisarlos
    let alert=false;
    for (let i=0; i<inpt.length-4; i++){
        if (inpt[i].value==""){
            alert=true;
            inpt[i].classList.add('bg-warning');
            inpt[i].classList.add('bg-gradient');
        }else{
            inpt[i].classList.remove('bg-warning');
            inpt[i].classList.remove('bg-gradient');
        }
    }
    if(sele.value==0){
        sele.classList.add('bg-warning')
        sele.classList.add('bg-gradient');
        alert=true; 
        evento.preventDefault();
    }else{
        sele.classList.remove('bg-warning')
        sele.classList.remove('bg-gradient');
        alert=false;
    } 
    console.log(sele.value);
    var element = document.getElementsByClassName("alert");
    alert ? element[0].classList.remove('d-none') : element[0].classList.add('d-none')
 })