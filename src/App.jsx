import './App.css';
import Landingpage from './views/pages/landingpage/Landingpage';
import { ThemeSettings } from './theme/Theme'; // Ensure this matches the export in Theme.js
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  const theme = ThemeSettings(); // Ensure ThemeSettings is a function returning a theme object

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Landingpage />
      </ThemeProvider>
    </div>
  );
}

export default App;
