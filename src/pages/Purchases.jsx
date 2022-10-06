import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { isLoading } from "../redux/slices/loadingSlice"
import { getPurchases } from "../services"

const Purchases = () => {

    const [purchasesData, setPurchasesData] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(isLoading(true))
        getPurchases()
            .then(r => setPurchasesData(r))
            .finally(() => dispatch(isLoading(false)))
    }, [])

    return(
        <React.Fragment>
            {
                !purchasesData.length ? 
                    <h1>Not purchases</h1>
                :
                    <h1>there is purchases</h1>
            }
        </React.Fragment>
    )
}

export { Purchases }