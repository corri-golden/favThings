container = document.querySelector("#wishList")
console.log(container)




//add event listener to save button
document.querySelector("#save").addEventListener("click", event => {

    const item = document.querySelector("#itemPurchased").value
    const store = document.querySelector("#storeName").value

    container.innerHTML += `
        <section>
            <h1>I purchased ${item} at ${store}</h1>
        </section>
    `

})