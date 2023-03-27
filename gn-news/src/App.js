import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Content, Footer, Header, Home, Sidebar } from "./components";

function App() {
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