
function data (){
    let a = prompt('Введите имя')
        let b = +prompt('введите дату рождения')
        let c = +prompt('введите нынешний год')
    let age = (c-b)
    return (a + ', ваш возраст '+ age)
}
alert(data())