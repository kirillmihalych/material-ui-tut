import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create.js'
import { ThemeProvider, createTheme } from '@material-ui/core'
import { purple } from '@mui/material/colors'
import Layout from './components/Layout'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
    secondary: purple,
  },
  typography: {
    fontFamily: 'PT Mono',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeigthMedium: 600,
    fontWeightBold: 700,
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Notes />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
