import plants from "../../services/Plants"
import GetLocalStorage from "../GetLocalStorage"

const HandleValidateWinCard = () => {
  
    const level = GetLocalStorage("level")
    return plants[level] 
    
}

export default HandleValidateWinCard