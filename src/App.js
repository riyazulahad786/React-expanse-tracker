//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {Typography,makeStyles,Box } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { mergeClasses } from '@material-ui/styles';
import Balance from './components/Balance';
import ExpanseCard from './components/ExpanseCard';
import NewTransaction from './components/NewTransaction';
import Transaction from './components/Transactions';

const useStyle= makeStyles({
  header:{
    color:'blue',
    fontSize:40,
    margin:'10px 0',
    textTransform:'uppercase'

  },
  component:{
    background:'pink',
    width:800,
    padding:10,
    borderRadius:20,
    display:'flex',
    '&>*':{
      width:'50%',
      padding:10,
      height:'60vh'
      
      
      
    }
  }
})
function App() {
  const classes=useStyle();

 // const [transactions,setTransaction]=useState([
  


 // ])
  return (
    <div className='App'>
      <Typography className={classes.header} >Expanse Tracker</Typography>
      <Box className={classes.component}>
      <Box>
        <Balance/>
        <ExpanseCard/>
        <NewTransaction/>
      </Box>
      <Box>
        <Transaction/>
        </Box>
      </Box>
    </div>
  );
}

export default App;
