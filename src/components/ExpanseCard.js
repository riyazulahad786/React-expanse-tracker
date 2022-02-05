import { Box, Card, CardContent, Typography,makeStyles } from "@material-ui/core"
import { findByLabelText } from "@testing-library/react"
const useStyle=makeStyles({
    container:{
        display:'flex',
        '& >*':{
            padding:10,
            flex:1

        }
    },
    income:{
        color:'green',

    },
    expanse:{
        color:'red'
    }
})

const ExpanseCard=()=>{
    const classes=useStyle();
    return(
    <Card>
    <Box className={classes.container}>
        <CardContent>
            <Typography>Income</Typography>
            <Typography className={classes.income}>RS 60000</Typography>
        </CardContent>
        <CardContent>
            <Typography>Expanse</Typography>
            <Typography className={classes.expanse}>RS 10000</Typography>
        </CardContent>
    </Box>
    </Card>

    )
}
export default ExpanseCard