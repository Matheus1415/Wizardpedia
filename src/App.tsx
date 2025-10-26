import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.layer.css';

import { Router } from "./Routes/Router";

function App() {
  return (
    <MantineProvider>
      <Router />
    </MantineProvider>
  );
}

export default App;
