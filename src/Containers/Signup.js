import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import * as actions from '../Store/Actions/auth';

function Copyright() {
  const classes = useStyles();

  return (
    <Typography variant="body2" className={classes.whiteText} align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.common.white,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
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
      color: theme.palette.common.white,
  },
}));

function Signup(props) {
  const classes = useStyles();
  const [username, setUsername] = React.useState('');
  const [firstname, setFirstName] = React.useState('');
  const [lastname, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState('');

  const handleUsername = event => {
    setUsername(event.target.value);
  };

  const handleFirstName = event => {
    setFirstName(event.target.value);
  };

  const handleLastName = event => {
    setLastName(event.target.value);
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleConfirm = event => {
    setConfirm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault()
    props.onAuth(username,
                firstname,
                lastname,
                email, 
                password,
                confirm)
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
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="userName"
                label="User Name"
                id="userName"
                autoFocus
                onChange={handleUsername}
                value={username}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={handleFirstName}
                value={firstname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleLastName}
                value={lastname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleEmail}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handlePassword}
                value={password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm"
                label="Re-Type Password"
                type="password"
                id="confirm"
                onChange={handleConfirm}
                value={confirm}
              />
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2" className={classes.whiteText}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
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
        onAuth: (username, firstname, lastname, email, password1, password2) => dispatch(actions.authSignup(username, firstname, lastname, email, password1, password2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);