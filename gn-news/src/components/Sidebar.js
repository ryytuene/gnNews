import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react"

export const Sidebar = () => {
    return (
        <Drawer placement='left' >
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