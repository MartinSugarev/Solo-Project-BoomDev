import styles from './Footer.module.scss';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import {Container, Grid, Typography, Button} from '@mui/material';
import Logo from '../logo/Logo';
import classNames from "classnames";


export default function Footer() {
    
    const theme = useTheme()

    return (
        <Container maxWidth={false} sx={{background: theme.palette.background.paper}}>
            <Grid container justifyContent="space-around" alignItems="center"  >
               <Grid item xs={"auto"} >
                   <Logo type="muted" />
               </Grid>
               <Grid item xs={"auto"} >
                   <Typography className={classNames(styles['footer-paragraph'])} variant="subtitle2">
                   Bum All Rights Reserved 2021
                   </Typography>
               </Grid>
               <Grid item xs={"auto"} >
                  <Button sx={{color: theme.palette.text.secondary, padding: 1}} size="small" variant="text">Privacy Policy</Button>
                  <Button sx={{color: theme.palette.text.secondary, padding: 1}}  size="small" variant="text">Cookie Policy</Button>
               </Grid>
            </Grid>
        </Container>
    )
}
