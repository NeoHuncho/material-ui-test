import React from 'react'
import './App.css';
import {makeStyles} from '@material-ui/core/styles'

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

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
    <>
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
    </>
  )
}

export default App;
