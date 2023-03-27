import { Box, Button, Flex, IconButton, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { changeDisplayFormat, changeSidebarVisibility, selectDisplayFormat } from "../store/slices/preferencesSlice";
import { FiGrid, FiList, FiInfo } from 'react-icons/fi';
import { VscListSelection } from 'react-icons/vsc'
import { selectCurrentCountry, setCurrentCountry } from "../store/slices/newsSlice";
import { useTranslation } from "react-i18next";

export const Header = () => {
    const dispatch = useDispatch();
    const displayFormat = useSelector(selectDisplayFormat);
    const currentCountry = useSelector(selectCurrentCountry);
    const { t, i18n } = useTranslation();

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
                                    {t('headerPop')}
                                </PopoverBody>
                            </PopoverContent>
                        </Portal>
                    </Popover>
                    <Button leftIcon={<Image boxSize={5} src={i18n.language === 'pl' ? 'https://flagcdn.com/gb.svg' : 'https://flagcdn.com/pl.svg' } />}
                        onClick={() => i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl')}
                        variant='outline' borderColor='white' _hover={{backgroundColor: '#0E8388', borderColor: 'transparent'}} >
                        {i18n.language === 'pl' ? 'English' : 'Polski'}
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
}