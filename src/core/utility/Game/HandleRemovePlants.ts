import Block from "../../services/Block"

const HandleRemovePlants = (children: HTMLCollection , i: number , setRemovePlants: React.Dispatch<React.SetStateAction<boolean>>) => {

    Block[i].img = ""
    Block[i].isFill = false
    children[i].children[0].setAttribute("src","")
    setRemovePlants(state => !state)

}

export default HandleRemovePlants