import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"

export default responsiveFontSizes(createMuiTheme({
    palette: {
        primary: {
            main: "#375bd2"
        },
        secondary: {
            main: "#1a2b6b"
        }
    },
    typography: {
        fontFamily: "'Montserrat', sans-serif"
    }
}))