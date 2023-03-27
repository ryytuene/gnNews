import { Button, Card, CardBody, CardHeader, Flex, Image, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectDisplayFormat } from "../store/slices/preferencesSlice";

export const ContentItem = ({ news }) => {
    const displayFormat = useSelector(selectDisplayFormat);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {displayFormat === 'grid' ?
                <Card maxW='300px' onClick={onOpen} cursor='pointer' shadow='md' bgColor='gray.100' >
                    <CardHeader>
                        <Text><strong>{news.title}</strong></Text>
                    </CardHeader>
                    <CardBody>
                        {news.urlToImage && <Image src={news.urlToImage} />}
                        <Flex justifyContent='space-between' >
                            <Text>{news.source.name}</Text>
                            <Text>{new Date(news.publishedAt).toLocaleDateString()}</Text>
                        </Flex>
                    </CardBody>
                </Card>
                : <Card w='100%' onClick={onOpen} cursor='pointer' shadow='md' bgColor='gray.100' >
                    <CardBody>
                        <Text><strong>{news.title}</strong></Text>
                        <Flex justifyContent='space-between' >
                            <Text>{news.source.name}</Text>
                            <Text>{new Date(news.publishedAt).toLocaleDateString()}</Text>
                        </Flex>
                    </CardBody>
                </Card>
            }
            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior='inside' >
                <ModalOverlay />
                <ModalContent>
                    <ModalBody mt={3}>
                        {news.content ? news.content : news.title}
                    </ModalBody>
                    <ModalBody flexDir='column' >
                        <Text>Autor: {news.author}</Text>
                        <Link href={news.url} isExternal={true} >Źródło</Link>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose} _hover={{ backgroundColor: '#0E8388' }} >
                            Zamknij
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}