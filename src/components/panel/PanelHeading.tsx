import React from "react"
import { Typography, makeStyles } from "@material-ui/core"

interface PanelHeadingProps {
    children: React.ReactNode
}

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(1),
        borderBottom: `2px solid ${theme.palette.primary.main}`
    }
}))

export const PanelHeading = ({ children }: PanelHeadingProps) => {

    const classes = useStyles()

    return <div className={classes.container}>
        <Typography variant="h4" color="primary">{children}</Typography>
    </div>
}