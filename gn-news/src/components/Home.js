import { Button, Flex } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { changeSidebarVisibility } from "../store/slices/preferencesSlice"

export const Home = () => {
    const dispatch = useDispatch();

    return (
        <Flex flex={1} flexDirection='column' justifyContent='center' alignItems='center' textAlign='center' p={5} >
            <span>Wybierz kraj z którego chcesz zobaczyć wiadomości.</span>
            <p><Button _hover={{backgroundColor: '#0E8388'}} onClick={() => dispatch(changeSidebarVisibility())} >Kliknij tutaj</Button> albo w przycisk w lewym górnym rogu by otworzyć listę krajów.</p>
        </Flex>
    )
}