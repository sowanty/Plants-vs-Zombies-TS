
const SetHpForZombies = (img: string) => {

    const dot = img.lastIndexOf(".")
    const slash = img.lastIndexOf("/")
    const sliced = img.slice(slash+1,dot)    
    console.log(sliced);
    
    if(sliced == "zombie1") return 2
    else if(sliced == "zombie2") return 3
    else if(sliced == "zombie3") return 4
    else return 2

}

export default SetHpForZombies