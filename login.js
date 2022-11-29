const username = document.getElementById('username')
const password = document.getElementById('password')
const botton = document.getElementById('button')

botton.addEventListener('click' , (e) =>{
    e.preventDefault()
    const data = {
    username: username.value,
    password: password.value,
    }

    console.log(data)
})