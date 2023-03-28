let wrapper = document.querySelector('.wrapper');
let loginLink = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');
let btnPopup = document.querySelector('.btn-popup')
let iconClose = document.querySelector('.icon-close')

registerLink.addEventListener('click', function(){
    wrapper.classList.add('active')
})
loginLink.addEventListener('click', function(){
    wrapper.classList.remove('active')
})
btnPopup.addEventListener('click', function(){
    wrapper.classList.add('active-popup')
})
iconClose.addEventListener('click', function(){
    wrapper.classList.remove('active-popup')
})


let icon = document.getElementById('m-glass')
let search_box = document.querySelector('.search-box')



    icon.addEventListener('click', function(){
        search_box.classList.add('show')
    })
   

    let input = document.getElementById('input_field');
    let password_eye = document.getElementById('password_eye');

    password_eye.addEventListener('click', function(){
        if(input.type == 'password'){
            input.type = 'text';
            password_eye.classList.remove('fa-eye-slash')
            password_eye.classList.add('fa-eye')
        }else{
            input.type = 'password'
            password_eye.classList.add('fa-eye-slash')
            password_eye.classList.remove('fa-eye')
        }
    })
  

