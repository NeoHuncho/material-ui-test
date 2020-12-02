import React from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

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
