
import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import "./Cards.css";
import { CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';



function Cards({data}){
    console.log(data);
    return (
        <div className="card-container">
            <Card className="card" sx={{maxWidth:400, backgroundColor : "#e6e6e6",display: "inline"}}>
                <CardMedia sx={{height:200}} image={data.image}
                title = "newImage" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    <strong> {data.title}</strong>
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.content}
                    </Typography>
                </CardContent>
                <Button className="btn"  variant="contained" color = "primary" sx={{margin : 2}}>View</Button>     
            </Card>
        </div>
        
    )
}

export default Cards;