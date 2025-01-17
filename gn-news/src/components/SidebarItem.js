import { Flex, Image, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { changeSidebarVisibility } from "../store/slices/preferencesSlice";
import { useTranslation } from "react-i18next";

export const SidebarItem = ({ country, code, active }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    return (
        <Link to={'/country/' + country} onClick={() => dispatch(changeSidebarVisibility())} >
            <Flex backgroundColor={active && '#0E8388'}
                color={active && 'white'}
                my={1} borderRadius={8}
                p={2} gap={2}
                _hover={{ textDecor: 'none', backgroundColor: '#0E8388', color: 'white' }} >
                <Image src={'https://flagcdn.com/' + code + '.svg'} alt={code} width='35px' />
                <Text fontWeight='semibold' >{t(country, { ns: 'sidebar' })}</Text>
            </Flex>
        </Link>
    )
}