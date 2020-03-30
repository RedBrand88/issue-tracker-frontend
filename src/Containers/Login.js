import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import * as actions from '../Store/Actions/auth';


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        color: theme.palette.common.white,
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
                color: theme.palette.common.white,
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
                color: theme.palette.common.white,
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
                color: theme.palette.common.white,
            },
        },
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    whiteText: {
        color: 'white',
    },
}));

function Copyright() {

    return (
        <Typography variant="body2" color="inherit" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                The Project Forge
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Login(props) {
    const classes = useStyles();
    const [username, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleUsername = event => {
      setUserName(event.target.value);
    };
    
    const handlePassword = event => {
      setPassword(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.onAuth(username, password);
        props.history.push('/view-tickets');
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="userName"
                        label="User Name"
                        name="userName"
                        autoComplete="username"
                        autoFocus
                        onChange={handleUsername}
                        value={username}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handlePassword}
                        value={password}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" className={classes.whiteText} />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2" className={classes.whiteText}>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/sign-up" variant="body2" className={classes.whiteText}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);