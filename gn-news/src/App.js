import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Content, Footer, Header, Home, Sidebar } from "./components";
import { refreshClock } from "./store/slices/preferencesSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      dispatch(refreshClock());
    }, 1000);
  }, [dispatch])

  return (
    <Flex flexDirection='column' minH='$100vh' >
      <Header />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Content />} path='/country/:country' />
      </Routes>
      <Sidebar />
      <Footer />
    </Flex>
  );
}

export default App;