import { createContext} from "react";

export const UseApiContext = createContext();

export const ApiContext = ({children}) => {

    // LLAMADO A MARVEL API
    const apiFetch1=async(url)=>{
      await fetch(
          `${url}`
        )
          .then((response) => response.json())
          .then((data) => {
            return(data)
          })
          .catch((error) => {
            console.log(error);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
    }

    // LLAMADO A SUPERHERO API
    const apiFetch2=async(id)=>{
      await fetch(
          `https://superheroapi.com/api/5651474918252451/${id}`
        )
          .then((response) => response.json())
          .then((data) => {
            return(data)
          })
          .catch((error) => {
            console.log(error);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
    }

    return(
        <UseApiContext.Provider value={{apiFetch1,apiFetch2}}>
            {children}
        </UseApiContext.Provider>
    )
}
