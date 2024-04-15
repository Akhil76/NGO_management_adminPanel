import { Typography,Grid} from "@mui/material"


function Card(props) {
  
  return (
    <Grid item xs={12} sm={6} md={4} style={{ marginTop:"10px",}}>
        <div style={{
          height:"200px",
          borderRadius:"8px",
          background:"#66ff99",
          marginRight:"10px"
          }}
          >
            <Typography variant='h4' style={{padding:"10px"}}>{props.Title}</Typography>
          </div>
        </Grid>
  )
}

export default Card
