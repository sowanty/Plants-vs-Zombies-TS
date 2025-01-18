
const handlePeaImage = (target: Element) => {
  
    const slash = target.getAttribute("src")?.lastIndexOf("/") as number
    const img = target.getAttribute("src")?.slice(slash + 1)

    if(img == "peashooter1.png") return "pea"
    else if(img == "peashooter2.png") return "SnowPea"
    else if(img == "peashooter3.png") return "pea"
    


}

export default handlePeaImage