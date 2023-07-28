let input1 = document.querySelector('.inputFirstName')
let input2 = document.querySelector('.inputLastName')
let btn = document.querySelector('button');
let popUp = document.querySelector('.popUp')

btn.addEventListener('click', () => {
if(input1.value.toLowerCase() === 'dalila' && input2.value.toLowerCase() === 'honic') {
    popUp.style.display = 'block'
}
})