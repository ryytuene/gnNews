import { Box } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { selectDisplayFormat } from "../store/slices/preferencesSlice"

export const Content = () => {
    const displayFormat = useSelector(selectDisplayFormat);
    const { country } = useParams();

    return (
        <Box flex={1} >
            {displayFormat}/{country}
        </Box>
    )
}