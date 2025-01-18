import { THTMLDivElement } from "../../types";

const NotEnoughSun = (sunParent: THTMLDivElement) => {
  
    sunParent.current?.classList.add("shake")
    setTimeout(() => sunParent.current?.classList.remove("shake"), 1000);

}

export default NotEnoughSun