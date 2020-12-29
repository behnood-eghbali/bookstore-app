import React, { useState, useEffect, createContext } from 'react'

export const LoadContext = createContext()

const LoadContextProvider = (props, src) => {

    const [hasLoaded, setHasLoaded] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [hasStartedInitialFetch, setHasStartedInitialFetch] = useState(false)
    const [ image, setImage ] = useState({
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51FVPBt51ZL._SX329_BO1,204,203,200_.jpg"
    })
  
    useEffect(() => {
      setHasStartedInitialFetch(true)
      setHasLoaded(false)
      setHasError(false)
  
      const image = new Image()
      image.src = src
  
      const handleError = () => {
        setHasError(true)
      }
  
      const handleLoad = () => {
        setHasLoaded(true)
        setHasError(false)
      }
  
      image.onerror = handleError
      image.onload = handleLoad
  
      return () => {
        image.removeEventListener("error", handleError)
        image.removeEventListener("load", handleLoad)
      }
    }, [src])

    return (
        <LoadContext.Provider value={{ hasLoaded, hasError, hasStartedInitialFetch, image, setImage }}>
            {props.childern}
        </LoadContext.Provider>
    )
}
  
export default LoadContextProvider