import { Box, Flex } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <Box as='footer' >
            <Flex justifyContent='space-between' >
                <Box>czas</Box>
                <Box>artykuły</Box>
            </Flex>
        </Box>
    )
}