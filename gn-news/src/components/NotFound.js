import { Flex } from "@chakra-ui/react"
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { setCurrentCountry } from "../store/slices/newsSlice";

export const NotFound = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentCountry(null))
    }, [dispatch])

    return (
        <Flex flex={1} flexDirection='column' justifyContent='center' alignItems='center' textAlign='center' p={5} >
            <h1>404</h1>
            <h2>Strona nie istnieje.</h2>
        </Flex>
    )
}