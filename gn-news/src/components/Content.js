import { Flex, Spinner } from "@chakra-ui/react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { selectCurrentCountry, selectNews, selectNewsLoading, setCurrentCountry } from "../store/slices/newsSlice";
import { selectDisplayFormat } from "../store/slices/preferencesSlice"
import { ContentItem } from "./";

export const Content = () => {
    const { country } = useParams();
    const displayFormat = useSelector(selectDisplayFormat);
    const news = useSelector(selectNews);
    const currentCountry = useSelector(selectCurrentCountry);
    const isLoading = useSelector(selectNewsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentCountry || currentCountry.country !== country) {
            dispatch(setCurrentCountry(country));
        }
    }, [dispatch, currentCountry, country])

    if (isLoading) {
        return (
            <Flex alignItems='center' justifyContent='center' flex={1} >
                <Spinner />
            </Flex>
        )
    } else return (
        <Flex flex={1} flexWrap='wrap'
            flexDir={displayFormat === 'grid' ? 'row' : 'column'}
            justifyContent='space-evenly' alignItems='flex-start'
            gap={5} p={5} >
            {news && news.map(n => <ContentItem news={n} key={n.url} />)}
        </Flex>
    )
}