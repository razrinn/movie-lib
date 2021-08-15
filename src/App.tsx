import { ChakraProvider, theme } from "@chakra-ui/react";
import RouterSwitch from "core/routes";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "ui/components/Layout";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <RouterSwitch />
        </Layout>
      </Router>
    </ChakraProvider>
  );
}

export default App;
