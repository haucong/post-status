import React from 'react'
import { Typography } from '@material-ui/core';
import UseStyles from './style';

const index = () => {
    const classes = UseStyles();

    return (
        <Typography variant='h4' align='center' className={classes.container}>
            this is header
        </Typography>
    )
}

export default index
