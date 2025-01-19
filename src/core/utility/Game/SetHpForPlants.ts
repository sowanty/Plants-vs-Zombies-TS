
const SetHpForPlants = (selectedPlantImage: string,children: HTMLCollection,i: number) => {

    if(selectedPlantImage == "sunflower") children[i].setAttribute("data-hp","4")
    else if(selectedPlantImage.indexOf("peashooter") !== -1) children[i].setAttribute("data-hp","4")
    else if(selectedPlantImage.indexOf("Wall-nut") !== -1) children[i].setAttribute("data-hp","10")

}

export default SetHpForPlants