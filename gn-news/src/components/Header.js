import { Box, Button, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <Box as='nav' >
            <Flex justify='space-between' >
                <Box>
                    <Button>sidebar</Button>
                    <Link to='/' >gnNews</Link>
                </Box>
                <Box>
                    <Button>lista/kafelki</Button>
                    <Button>info</Button>
                </Box>
            </Flex>
        </Box>
    )
}