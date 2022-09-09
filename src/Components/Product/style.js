import { makeStyles } from "@mui/styles";
export default makeStyles(()=>({
    root:{
        maxWidth:"100%",
        maxHeight:"100%"
    },
    media:{
      maxHeight:"56.25%",
        paddingTop:"0",
        width: "100%",
        
    },
    cardActions:{
        display:"flex",
        justifyContent:"flex-end"
    },
    cardContent:{
        display:"flex",
        justifyContent:"space-between"

    }
}))