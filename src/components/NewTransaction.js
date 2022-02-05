
import { Box ,Typography,TextField,makeStyles,Button} from "@material-ui/core"
const useStyle=makeStyles({
    container:{
        display:'flex',
        flexDirection:'column',
        '&>*':{
            margin:30
        }
    },
    button:{
        color:' light blue'

    }
})
const NewTransaction=()=>{
    const classes=useStyle();
    return(
        <Box className={classes.container}>
        <Typography variant="h6">New Transactions</Typography>
        <TextField label="Enter Expanse"/>
        <TextField label="total Amount"/>
        <Button className={classes.button} variant="contained">Add New Transaction</Button>

        

        </Box>

    )
}
export default NewTransaction