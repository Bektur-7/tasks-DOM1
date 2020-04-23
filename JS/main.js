// 8 задание 

document.addEventListener('DOMContentLoaded', event =>{
    alert("Добро Пожаловать!")
})



// 10 задание

function valid(form) {
    let fail = false
    let name = form.name.value
    let password = form.password.value
    let hobby = form.hobby.value
    let state = form.state.value
    if (name == "" || name == " ")
    fail = "Вы не ввели имя";
    else if (password == "")
    fail = "Вы не ввели пароль "
    else if (hobby == " ")
    fail = "Вы не ввели ваше хобби"
    else if(state == " ")
    fail = "Укажите пол"

    if (fail)
        alert(fail)
    else 
        window.location = "http://google.com"
}

// 12 задание

document.addEventListener('mousemove', event =>{
    console.log(event.clientX, event.clientY)
})


11 задание

не получается
