
import { ChakraProvider } from "@chakra-ui/react"
import Children from "./ChildrenComponent";


function App() {


  return (

    <ChakraProvider>
    <Children />
  </ChakraProvider>

 
  );
}

export default App;
