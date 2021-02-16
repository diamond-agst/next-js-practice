import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8F83F3",
      light: "#EDEBFF",
    },
    secondary: {
      main: "#FFC2E0",
      light: "#FFEEF6"
    },
    text:{
        main: "#7E7B98"
    }
  },
  overrides:{
    MuiButton:{
        root: {
            borderRadius: 12,
            textTransform: "none",
            fontWeight: 700,
            width: 110,
            height: 45
        },
        contained:{
            boxShadow: "none",
            '&:hover':{
                boxShadow: "none",
            }
        },
        containedPrimary:{
            '&:hover':{
                backgroundColor: '#9F94FE',
            }
        },
        containedSecondary:{
            backgroundColor: "#EDEBFF",
            color: "#8F83F3",
            '&:hover':{
                backgroundColor: '#E3DFFE',
            },
        },
        sizeSmall:{
            padding: 0
        }
    },
    MuiTypography:{
        colorPrimary: {
            color: "#7E7B98"
        },
        colorSecondary:{
            color: "#C0BECF"
        }
    },
    MuiIconButton:{
        root:{
            borderRadius: 12,
            margin: 10
        },
        colorPrimary: {
            backgroundColor: "#8F83F3",
            color: "#fff",
            '&:hover':{
                backgroundColor: '#8F83F3',
            }
        },
        colorSecondary: {
            backgroundColor: "#FFC2E0",
            color: "#fff",
            '&:hover':{
                backgroundColor: '#FFC2E0',
            }
        }
    }
  },
  
});