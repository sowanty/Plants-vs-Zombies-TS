
const SetTimerForPlants = (selectedPlantImage: string,children: HTMLCollection,i: number) => {

    if(selectedPlantImage == "sunflower") children[i].setAttribute("data-timer","12")
    else if(selectedPlantImage.indexOf("peashooter") !== -1) children[i].setAttribute("data-timer","12")

}

export default SetTimerForPlants