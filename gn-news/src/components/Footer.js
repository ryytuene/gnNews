import { Box, Flex } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { selectClock } from "../store/slices/preferencesSlice"

export const Footer = () => {
    const clock = useSelector(selectClock);

    return (
        <Box as='footer' >
            <Flex justifyContent='space-between' >
                <Box>{clock}</Box>
                <Box>artykuły</Box>
            </Flex>
        </Box>
    )
}