import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Content, Error, Footer, Header, Home, NotFound, Sidebar } from "./components";
import { calculateTotalResults, clearError, fetchNews, selectCurrentCountry, selectError, selectNews } from "./store/slices/newsSlice";
import { refreshClock } from "./store/slices/preferencesSlice";

function App() {
  const dispatch = useDispatch();
  const currentCountry = useSelector(selectCurrentCountry);
  const error = useSelector(selectError);
  const news = useSelector(selectNews);
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      dispatch(refreshClock());
    }, 1000);
  }, [dispatch])

  useEffect(() => {
    if (currentCountry) {
      dispatch(fetchNews(currentCountry.code));
    }
  }, [dispatch, currentCountry])

  useEffect(() => {
    if (error) {
      navigate('/error')
      console.log(error);
      dispatch(clearError());
    }
  }, [dispatch, navigate, error])

  useEffect(() => {
    dispatch(calculateTotalResults());
  }, [dispatch, news])

  return (
    <Flex flexDirection='column' minH='$100vh' >
      <Header />
      <Routes>
        <Route element={<NotFound />} path="*" />
        <Route element={<Error />} path="/error" />
        <Route element={<Home />} path='/' />
        <Route element={<Content />} path='/country/:country' />
      </Routes>
      <Sidebar />
      <Footer />
    </Flex>
  );
}

export default App;