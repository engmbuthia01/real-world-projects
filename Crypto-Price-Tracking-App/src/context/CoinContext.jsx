import { createContext } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    return (
        <CoinContext.Provider value={}>
            {props.children}
        </CoinContext.Provider>
    )

}
