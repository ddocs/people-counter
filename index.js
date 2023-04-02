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


// 1. Create a function, save(), which logs out the count when it's called
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph

// function save() {
//     let saved = count + " - "
//     saveEl.innerText += saved
   

