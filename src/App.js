//npm install @material-ui/core
import React from 'react'
import './App.css';


import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline";

import 'fontsource-roboto';//npm install fontsource-roboto 
import Typography from '@material-ui/core/Typography'


import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'

import {orange,green} from '@material-ui/core/colors'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

const theme= createMuiTheme({//This will be imported below in the app compenent as the theme 
  typography:{
    h2:{
      fontSize:36,
    }
  },
  palette:{
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    },
    primary:{
      main:orange[500]
    },
    secondary:{
      main:green[500]
    }
  }
})

const useStyles = makeStyles ({
  root:{
    background: 'linear-gradient(45deg,#333,#999)',
    border:0,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }
})

function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample(){
  const [checked,setChecked] =React.useState(true);
  return(
    <FormControlLabel 
    control= {<Checkbox
    checked ={checked}
    icon ={<DeleteIcon />}
    checkedIcon ={<SaveIcon />}
    onChange= {(e) => setChecked(e.target.checked)}
    color = 'primary'
    inputProps={{
      'aria-label':'secondary checkbox'
    }}
    />}
    label= 'Testing Checkbox'
   />

  )
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
      <Container maxWidth='md'>
      <Typography variant='h2' component='div'>
        Welcome to MUI
      </Typography>
      <Typography variant='subtitle1'>
        Learning Material Ui
      </Typography>
    <ButtonStyled />
    <TextField
    variant='filled'
    color= 'secondary'
    type='date'
    label='Enter Date'
    />
    <CheckboxExample />
      <ButtonGroup
        size='large'
        variant='contained'>
        <Button
          style={{
            fontSize: 25
          }}
          startIcon={<SaveIcon />}
          endIcon={<SaveIcon />}
          variant='contained'
          color='primary'>
          Save
          </Button>
        <Button
          startIcon={<DeleteIcon />}
          endIcon={<DeleteIcon />}
          color='secondary'>
          Discard
          </Button>
      </ButtonGroup>
      </Container>
    </ThemeProvider>
  )
}

export default App;
