import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
// import { createMuiTheme } from '@material-ui/core/styles'
// import purple from '@material-ui/core/colors/purple'
import { AuthContext } from '../../contexts/AuthContext'
import ImageLoader from '../../ImageLoader' 
import './Home.css'

/* 
const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
})
 */
/* 
const style = {
    background: '#f73378'
}
 */

function Home() {

    const { values } = useContext(AuthContext)

    const imageUrl =
    "https://images-na.ssl-images-amazon.com/images/I/51FVPBt51ZL._SX329_BO1,204,203,200_.jpg"

    const { hasLoaded, hasError } = ImageLoader(imageUrl)

    if (hasError) {
        return null
    }

    return (
        <div className="Home">
            <AppBar position="static" style={{background: '#f73378'}}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Welcome {values.username}
                    </Typography>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
            <Grid container className="Grid">
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Paper>
                        <Typography variant="h5" component="h3">
                            Hi {values.username}! Check out our new books:
                        </Typography>
                        <Button size="small">Library</Button>
                    </Paper>
                    <Grid container className="Grid">
                        <Grid item xs={4}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia>
                                        {hasLoaded && <img src={imageUrl} height="400" alt=" " />}
                                    </CardMedia>
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Book
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                    View
                                    </Button>
                                    <Button size="small" color="primary">
                                    Add To Cart
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                    src="https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg"
                                    height="400"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        A Promised Land
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                    View
                                    </Button>
                                    <Button size="small" color="primary">
                                    Add To Cart
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </div>
    )
    }

export default Home
