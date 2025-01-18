
const WalkZombies = (img: HTMLImageElement , div: HTMLDivElement) => {
  
    if(div.getAttribute("data-stop") == "false") {

        if(div.getAttribute("data-dead") == "false") {
            
            if(parseInt(img.style.left) <= -10) {
                alert("You Are Loser")
                location.pathname = "/select-plants"
            }
            else {
                img.style.left = `${ parseInt(img.style.left) - 1 }%` 
                img.setAttribute("data-left",`${parseInt(img.style.left) - 1}`)
            }

        }
       
        
    }

}

export default WalkZombies