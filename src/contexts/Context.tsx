import * as React from 'react'
import Forecast from '../typings/forecast'

interface ContextInt {
    forecast: Forecast | null;
    setForecast: React.Dispatch<React.SetStateAction<Forecast | null>>;
    city: String | null;
    setCity: React.Dispatch<React.SetStateAction<String | null>>;
    otherCity: boolean;
    setOtherCity: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {}

export const Context = React.createContext<ContextInt>(undefined!)

const ContextProvider: React.FC<Props> = props => {
    const [forecast, setForecast] = React.useState<Forecast | null>(null)
    const [city, setCity] = React.useState<String | null>(null)
    const [otherCity, setOtherCity] = React.useState<boolean>(false)

    const {children} = props

    return(
        <Context.Provider value={{forecast, setForecast, city, setCity, otherCity, setOtherCity}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider