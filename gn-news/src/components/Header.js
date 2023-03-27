import { Box, Button, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { changeDisplayFormat, changeSidebarVisibility } from "../store/slices/preferencesSlice";

export const Header = () => {
    const dispatch = useDispatch();

    return (
        <Box as='nav' >
            <Flex justify='space-between' >
                <Box>
                    <Button onClick={() => dispatch(changeSidebarVisibility())} >sidebar</Button>
                    <Link to='/' >gnNews</Link>
                </Box>
                <Box>
                    <Button onClick={() => dispatch(changeDisplayFormat())} >lista/kafelki</Button>
                    <Button>info</Button>
                </Box>
            </Flex>
        </Box>
    )
}