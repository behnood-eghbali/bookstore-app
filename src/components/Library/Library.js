import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

export default function Library() {
    return (
        <div className="Library">
            <Grid container>
                <Grid item xs={1} />
                <Grid item xs={7}>
                    <Paper>
                        <h1>hi</h1>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        <h1>hi</h1>
                    </Paper>
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </div>
    )
}
