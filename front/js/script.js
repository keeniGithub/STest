window.onresize = function () {
    window.resizeTo(450, 700);
}

let go_btn = document.querySelector(".go a")
let go_btn_img = document.querySelector(".go a img")
let loader = document.querySelector(".loader")
let state = false

async function user_info() {
    let ip = document.querySelector(".ip")
    let city = document.querySelector(".city")

    ip.innerHTML = "ip: " + await eel.get_ip()()
    city.innerHTML =  await eel.get_city()()
}

async function speedtest(){
    let download = document.querySelector(".download")
    let upload = document.querySelector(".upload")
    let ping = document.querySelector(".ping")

    download.innerHTML = "Download: 0 Mbit/sec"
    upload.innerHTML = "Upload: 0 Mbit/sec"
    ping.innerHTML = "Ping: 0 ms"

    download.style = ""
    upload.style = ""
    ping.style = ""
    
    console.log("start")
    let get_download = await eel.get_download()()
    console.log("success")
    loader.style = "display: none;"
    download.style = "animation: success 1s;"
    download.innerHTML = "Download: " + get_download + " Mbit/sec"

    console.log("start")
    let get_upload = await eel.get_upload()()
    console.log("success")
    upload.style = "animation: success 1s;"
    upload.innerHTML = "Upload: " + get_upload + " Mbit/sec"

    console.log("start")
    let get_ping = await eel.get_ping()()
    console.log("success")
    ping.style = "animation: success 1s;"
    ping.innerHTML = "Ping: " + get_ping + " ms"

    go_btn_img.src = "img/GO.svg"
    go_btn.style = ""
    state = false
}

go_btn.addEventListener("click", async function() {
    if (!state){
        go_btn_img.src = "img/rolling.svg"
        loader.style = "display: block;"
        go_btn.style = "width: 200px; height: 200px; border-color: rgb(93,255,208);"

        state = true

        speedtest()
    }
})

user_info()