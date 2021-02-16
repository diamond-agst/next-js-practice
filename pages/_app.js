import '../styles/globals.css';
import {ThemeProvider} from "@material-ui/core";
import {theme} from "../styles/theme"

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps}/>
    </ThemeProvider>
  
  )
}

export default App
