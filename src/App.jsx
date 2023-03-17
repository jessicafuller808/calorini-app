import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {

  return (
    <div className="App">
        <Typography variant="h1">
          Calorini
        </Typography>
        <Typography variant="subtitle1">
          Build your best body with simple, protein-packed recipes from around the web
        </Typography>
        <Button variant="contained">
          Sign Up
        </Button>
        <Button variant="outlined">
          Log In
        </Button>
    </div>
  )
}

export default App
