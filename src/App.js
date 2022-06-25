import React , {useState} from "react";
import { Button } from "./components/Button.style";
import { Navbar } from "./components/Nav.style";
function App() {
  const [color ,setColor] = useState(false)
  return (
    <Navbar >
      <Button>toggle</Button>
    </Navbar>
  );
}

export default App;
