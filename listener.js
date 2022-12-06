let btn = document.querySelector('.card-footer');

btn.addEventListener('click', function(evento){
    //console.log(evento);
    var element = document.getElementsByClassName("alert");
    console.log(element[0].attributes[0]);
    element[0].classList.remove('d-none');

    //let front = document.getElementsByClassName('front');
    //front[0].getElementsByTagName('li');
    //front[0].classList.add('frontend');
    //front[0].classList.remove('front');
})