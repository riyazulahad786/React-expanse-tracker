import { Box , Divider, Typography,makeStyles,List} from "@material-ui/core";
const useStyle=makeStyles({
    component:{
        '$>*':{
            marginBottom:10
        }
    }

})

const Transaction=({transaction})=>{
    const classes=useStyle();
    return(
      <Box>
          <Typography variant="h4">Transaction History</Typography>
          <Divider/>
          <List>
              {
                  
              }
          </List>
      </Box>
    );
}


export default Transaction