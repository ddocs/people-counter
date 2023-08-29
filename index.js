let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")

let count = 0

console.log(countEl)

function increment() {
    count += 1 
    countEl.textContent = count
}

function decrement() {
    if (count >= 1) 
    count -= 1 
    countEl.textContent = count
}

function save() {
    console.log(count)
    let CountStr = count + " - "
    saveEl.textContent += CountStr
}

function reset() {
    count = 0
    countEl.textContent = 0
}


