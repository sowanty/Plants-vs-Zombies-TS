
const SetLocalStorage = (key: string , value: string ) => {

    return localStorage.setItem(key,JSON.stringify(value))

}

export default SetLocalStorage