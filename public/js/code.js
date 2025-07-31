
const codebtn = document.getElementsByClassName("code-btn")[0]
const url = document.getElementById("url")
const codeDiv = document.getElementById("code-gen-div")

function getCode()
{
    const urlvalue = url.value
    fetch("/shorten",{
        method:'POST',
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({url:urlvalue})
    }).then(res=>res.json())
    .then((id)=>
    {  
        if(id.status==200 && id.shortCode!="null")
        {
          url.value= id.shortCode
          makebtn()
        }else{
            alert(id.status)
        }
       
    }) .catch(err => {
        alert("Something went wrong");
        console.error(err);
    });

}  
codebtn.addEventListener("click",()=>
{   
    getCode()

})


url.addEventListener("keydown",(e)=>
{
    console.log("keypress")
  if (e.key) {
      const copy= document.getElementsByClassName("copy")[0]
      if(copy!=undefined)
      {
        copy.classList.add("hide")
        codebtn.classList.remove("hide")

      }
    }
})

function makebtn()
{
     const copybtn=document.getElementsByClassName("copy")[0]
    if(copybtn)
    {
       codebtn.classList.add("hide")
       copybtn.classList.remove("hide")
    }
    if(copybtn==undefined)
    {
        codebtn.classList.add("hide")
        const newbtn = document.createElement("div")
        newbtn.classList.add("copy")
        newbtn.textContent="Copy Code"
        newbtn.addEventListener("click", () => {
        const uidText = url.value;
        navigator.clipboard.writeText(uidText).then(() => {
            alert("Code copied")
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });

        });

        codeDiv.appendChild(newbtn)

    }
}


