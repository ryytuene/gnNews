import { Box, Flex, IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { changeDisplayFormat, changeSidebarVisibility, selectDisplayFormat } from "../store/slices/preferencesSlice";
import { FiGrid, FiList, FiInfo } from 'react-icons/fi';
import { VscListSelection } from 'react-icons/vsc'
import { selectCurrentCountry, setCurrentCountry } from "../store/slices/newsSlice";

export const Header = () => {
    const dispatch = useDispatch();
    const displayFormat = useSelector(selectDisplayFormat);
    const currentCountry = useSelector(selectCurrentCountry);

    return (
        <Box as='nav' pb={12} py={4} px={10} bgColor='#2E4F4F' color='white' >
            <Flex justify='space-between' wrap='wrap' gap={2} >
                <Flex alignItems='center' gap={5} >
                    <IconButton size={20} p={3}
                        background='none' _hover={{backgroundColor: '#0E8388'}}
                        icon={<VscListSelection />}
                        onClick={() => dispatch(changeSidebarVisibility())} />
                    <Link to='/' onClick={() => dispatch(setCurrentCountry(null))} ><strong>gnNews</strong></Link>
                </Flex>
                <Flex alignItems='center' gap={2} >
                    {currentCountry &&
                        <IconButton size={20} p={3}
                            background='none' _hover={{backgroundColor: '#0E8388'}}
                            icon={displayFormat === 'grid' ? <FiList /> : <FiGrid />}
                            onClick={() => dispatch(changeDisplayFormat())} />}
                    <Popover>
                        <PopoverTrigger>
                            <IconButton size={20} p={3}
                                background='none' _hover={{backgroundColor: '#0E8388'}}
                                icon={<FiInfo />} />
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverBody pt={10}>
                                    Coś tu napisać.
                                </PopoverBody>
                            </PopoverContent>
                        </Portal>
                    </Popover>
                </Flex>
            </Flex>
        </Box>
    )
}