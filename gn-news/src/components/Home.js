import { Button, Flex } from "@chakra-ui/react"
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux"
import { changeSidebarVisibility } from "../store/slices/preferencesSlice"

export const Home = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    return (
        <Flex flex={1} flexDirection='column' justifyContent='center' alignItems='center' textAlign='center' p={5} >
            <span>{t('chooseCountry')}</span>
            <p>
                <Button _hover={{ backgroundColor: '#0E8388' }} onClick={() => dispatch(changeSidebarVisibility())} >
                    {t('clickHere')}
                </Button>
                {t('orClickNav')}
            </p>
        </Flex>
    )
}