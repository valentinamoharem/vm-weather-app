import * as React from 'react'
import Forecast from '../typings/forecast'

interface ContextInt {
    forecast: Forecast | null;
    setForecast: React.Dispatch<React.SetStateAction<Forecast | null>>;
    currentLoc: number[] | null;
    setCurrentLoc: React.Dispatch<React.SetStateAction<number[] | null>>;
    customCities: String[];
    setCustomCities: React.Dispatch<React.SetStateAction<String[]>>;
}

interface Props {}

export const Context = React.createContext<ContextInt>(undefined!)

const ContextProvider: React.FC<Props> = props => {
    const [forecast, setForecast] = React.useState<Forecast | null>(null)
    const [currentLoc, setCurrentLoc] = React.useState<number[] | null>([])
    const [customCities, setCustomCities] = React.useState<String[]>([])

    const {children} = props

    return(
        <Context.Provider value={{forecast, setForecast, currentLoc, setCurrentLoc, customCities, setCustomCities}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider