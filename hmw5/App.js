const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const euro = document.querySelector("#euro")

som.addEventListener("input", (e) => {
    console.log(e.target.value)
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-Type", "application/json")
    request.send()

    request.addEventListener("load", () => {
        console.log(request.response)
            const data = JSON.parse(request.response)
        // console.log(data)
        usd.value = (som.value / data.usd).toFixed(2)

    euro.addEventListener("input", (e) => {
        console.log(e.target.value)
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-Type", "application/json")
        request.send()

        request.addEventListener("load", () => {
            console.log(request.response)
            const date = JSON.parse(request.response)
            // console.log(date)
            euro.value = (euro.value / date.usd).toFixed(2)
        })
    })
    })
})