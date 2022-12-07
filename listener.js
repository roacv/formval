let btn = document.querySelector('.card-footer');
btn.addEventListener('click', function(evento){
    let inpt = document.getElementsByTagName('input');
    let sele = document.getElementById('state');
    // es -4 por los check de las tarjetas para no revisarlos
    let alert=false;
    for (let i=0; i<inpt.length-4; i++){
        if (inpt[i].value==""){
            alert=true;
        }
    }
    console.log(alert);
    var element = document.getElementsByClassName("alert");
    alert ? element[0].classList.remove('d-none') : element[0].classList.add('d-none')
 })