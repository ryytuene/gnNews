import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { selectCountries } from "../store/slices/newsSlice";
import { changeSidebarVisibility, selectSidebarVisible } from "../store/slices/preferencesSlice";
import { SidebarItem } from "./";

export const Sidebar = () => {
    const sidebarVisible = useSelector(selectSidebarVisible);
    const countries = useSelector(selectCountries);
    const dispatch = useDispatch();
    
    return (
        <Drawer placement='left' onOpen={() => dispatch(changeSidebarVisibility())}
            onClose={() => dispatch(changeSidebarVisibility())} isOpen={sidebarVisible} >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>sidebar tytuł</DrawerHeader>
                <DrawerBody>
                    {countries && countries.map(item => <SidebarItem key={item.code} country={item.country} code={item.code} />)}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}