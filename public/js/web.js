function sendCode(){
 
    const codeSpace= document.getElementById("code-space")
    const code=codeSpace.value
    // window.location.href = `/red-web?code=${encodeURIComponent(code)}`
    window.open(`/red-web?code=${encodeURIComponent(code)}`, "_blank");
}


const webBtn = document.getElementsByClassName("web-btn")[0]
webBtn.addEventListener("click",()=>
{   console.log("clicked")
    sendCode()
})