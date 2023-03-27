import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react"
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { selectCountries, selectCurrentCountry } from "../store/slices/newsSlice";
import { changeSidebarVisibility, selectSidebarVisible } from "../store/slices/preferencesSlice";
import { SidebarItem } from "./";

export const Sidebar = () => {
    const sidebarVisible = useSelector(selectSidebarVisible);
    const countries = useSelector(selectCountries);
    const currentCountry = useSelector(selectCurrentCountry);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    
    return (
        <Drawer placement='left' onOpen={() => dispatch(changeSidebarVisibility())}
            onClose={() => dispatch(changeSidebarVisibility())} isOpen={sidebarVisible} >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader mt={3} textAlign='center' ><strong>{t('chooseCountrySide')}</strong></DrawerHeader>
                <DrawerBody>
                    {countries && countries.map(item => <SidebarItem key={item.code} country={item.country} code={item.code} active={currentCountry && currentCountry === item} />)}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}