import { Box, Flex } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { selectClock } from "../store/slices/preferencesSlice"

export const Footer = () => {
    const clock = useSelector(selectClock);

    return (
        <Box as='footer' pb={12} py={4} px={10} bgColor='#2E4F4F' color='white' >
            <Flex justifyContent='space-between' wrap='wrap' gap={2} >
                <Box>{clock}</Box>
                <Box>artykuły</Box>
            </Flex>
        </Box>
    )
}