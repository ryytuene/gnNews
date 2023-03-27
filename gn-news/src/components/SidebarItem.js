import { Flex, Image } from "@chakra-ui/react";
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { changeSidebarVisibility } from "../store/slices/preferencesSlice";

export const SidebarItem = ({ country, code }) => {
    const dispatch = useDispatch();

    return (
        <Link to={'/country/' + country} onClick={() => dispatch(changeSidebarVisibility())} >
            <Flex>
                <Image src={'https://flagcdn.com/' + code + '.svg'} alt={code} width='35px' />
                <span>{country}</span>
            </Flex>
        </Link>
    )
}