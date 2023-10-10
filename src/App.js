import logo from './logo.svg';
import Dashboard from './view/dashboard';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Dashboard/>
      </div>
    </ThemeProvider>
  );
}

export default App;
