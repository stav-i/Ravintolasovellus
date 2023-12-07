import { createTheme } from '@mui/material/styles';

const StaffTheme = () => {
    return(
        createTheme({
            palette: {
                primary: {
                  main: '#ade6d8',
                },
                secondary: {
                  main: '#ade6d8',
                },
                background: {
                    default: '#def0f5',
                    paper: '#add8e6',
                },
              },
            typography: {
                        h6: {
                            fontWeight: 700,
                            fontSize: "1.1rem"
                        },
                        h5: {
                            fontSize: "1.1rem",
                            lineHeight: '2.2rem',
                            textAlign: 'left',
                            letterSpacing: 0.7,
                            marginRight: '15px',
                            width: '50%'
                        },
                        h4: {
                            fontSize: '1.7rem'
                        },
                        body2: {
                            fontWeight: 600,
                            lineHeight: '2.2rem',
                            fontSize: '1.2rem'
                        }
                    },
            components: {
                        MuiButton: {
                            styleOverrides:{
                                root: {
                                textTransform: 'lowercase',
                                color: '#000',
                                backgroundColor: '#add8e6'
                                },
                            },
                        },
                        MuiDivider: {
                            styleOverrides:{
                                root: {
                                    backgroundColor: '#3D3D3D',
                                    margin: 5
                                }
                            }
                        }
                        }    
        })
    )
}

export default StaffTheme;