import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { changeSidebarVisibility, selectSidebarVisible } from "../store/slices/preferencesSlice";

export const Sidebar = () => {
    const sidebarVisible = useSelector(selectSidebarVisible);
    const dispatch = useDispatch();

    return (
        <Drawer placement='left' onOpen={() => dispatch(changeSidebarVisibility())}
            onClose={() => dispatch(changeSidebarVisibility())} isOpen={sidebarVisible} >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>sidebar tytuł</DrawerHeader>
                <DrawerBody>
                    sidebarItem
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}