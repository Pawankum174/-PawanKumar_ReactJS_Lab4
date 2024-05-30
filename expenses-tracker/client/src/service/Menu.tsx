import axios from "axios";
import IDataList from "../models/IDataList";

export const getDataFromServer = () =>{
    //Log the response for testing
    return axios.get<IDataList[]>(`http://localhost:4000/items`)
            .then( response => response.data );
}

export const pushDataFromUser = (newPurchase : Omit<IDataList,"id">) => {
    return axios.post<IDataList>(
        `http://localhost:4000/items`,
        newPurchase,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then( response => response.data )
}