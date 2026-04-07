let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
let doublezero = document.getElementById("doublezero")
let del = document.getElementById("del")
let ac = document.getElementById("ac")
let div = document.getElementById("div")
let mul = document.getElementById("mul")
let sub = document.getElementById("sub")
let add = document.getElementById("add")
let eq = document.getElementById("eq")
let inp = document.getElementById("inp")
let dot = document.getElementById("dot")

one.addEventListener("click",()=>{
    inp.value += 1
})
 
two.addEventListener("click",()=>{
    inp.value += 2
})
 
three.addEventListener("click",()=>{
    inp.value += 3
})
 
four.addEventListener("click",()=>{
    inp.value += 4
})
 
five.addEventListener("click",()=>{
    inp.value += 5
})
 
six.addEventListener("click",()=>{
    inp.value += 6
})
 
seven.addEventListener("click",()=>{
    inp.value += 7
})
 
eight.addEventListener("click",()=>{
    inp.value += 8
})
 
nine.addEventListener("click",()=>{
    inp.value += 9
})
 
zero.addEventListener("click",()=>{
    inp.value += 0
})
 
doublezero.addEventListener("click",()=>{
    inp.value += "00"
})
 
dot.addEventListener("click",()=>{
    inp.value += "."
})
 
ac.addEventListener("click",()=>{
    inp.value = ""
})
 
del.addEventListener("click",()=>{
    inp.value = inp.value.slice(0,-1)
})
 
add.addEventListener("click",()=>{
    inp.value += "+"
})
 
sub.addEventListener("click",()=>{
    inp.value += "-"
})
 
div.addEventListener("click",()=>{
    inp.value+="/"
})
 
mul.addEventListener("click",()=>{
    inp.value += "*"
})
 
eq.addEventListener("click",()=>{
    inp.value = eval(inp.value)
})
