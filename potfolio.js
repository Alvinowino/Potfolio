let btn = document.getElementById("btn")
let names = document.getElementById("myName")
console.log(names);
console.log(btn);
btn.addEventListener('click',(e) => {
e.preventDefault();
alert(`hello its me, ${names.value}`)
})