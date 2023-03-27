import { Box } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { selectDisplayFormat } from "../store/slices/preferencesSlice"

export const Content = () => {
    const displayFormat = useSelector(selectDisplayFormat);

    return (
        <Box flex={1} >
            {displayFormat}
        </Box>
    )
}