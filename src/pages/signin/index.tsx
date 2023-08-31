import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { BoxComponent } from "../../common/BoxComponent"
import { AppTextField } from "../../common/AppTextFields";
import { Colors } from "../../styles/Theme";
import { AppButtonField } from "../../common/AppButton";
import { validateEmail, validatePassword } from "../../utils/ValidationUtils";
import { showErrorMessage } from "../../utils/ErrorUtils";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/FirebaseConfig";
import { useUserState } from "../../hooks/useUserState";


const containerComponentStyles: React.CSSProperties | undefined = {
  height: '100vh',
  alignItems: "center",
  justifyContent: "center",
  padding: 2
}

export const signUpSignInButtonStyle: React.CSSProperties | undefined = {
  margin: 2
}

export const Signin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const {user} = useUserState()
  
  const onSignin = async (event: any) => {
    event.preventDefault();
    console.log("signin")
    try {
      email && validateEmail(email.toString())
      password && validatePassword(password)
      let userCredentials =  await signInWithEmailAndPassword(auth,email,password)
      console.log(userCredentials)
      navigate("/notes", {replace : true});
    }
    catch (error) {
      console.log(error)
      showErrorMessage(error)
    }
  };

  const onSignup = async (event: any) => {
    event.preventDefault();
    console.log("signup")
    try {
      email && validateEmail(email.toString())
      password && validatePassword(password.toString())
      await createUserWithEmailAndPassword(auth,email,password)
      navigate("/notes", {replace : true});
      
    }
    catch (error) {
      showErrorMessage(error)
    }
  };

  useEffect(()=>{
    if(user){
      navigate('/notes')
    }
  },[user])

  return (
    
    <Grid container component="main" maxWidth="xl" style={containerComponentStyles}>

      {/* <CssBaseline /> */}
      <BoxComponent style={{
        backgroundColor: Colors.pageBg,
        borderRadius: 5,
        padding: 30,
        paddingTop: 40,
        paddingBottom: 40
      }} >
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box>
          <AppTextField
            margin="normal"
            required
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            fullWidth
            onChange={e => { setEmail(e.target.value) }}
          />
          <AppTextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={e => { setPassword(e.target.value) }}
            autoComplete="current-password"
          />
          <AppButtonField onClick={onSignin} text="Signin" buttonWidthType="half" style={signUpSignInButtonStyle} />
          <AppButtonField onClick={onSignup} text="Signup" buttonWidthType="half" style={signUpSignInButtonStyle} />
          <Grid container>
            <Grid item xs>
              <Link href="./forgotPassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </BoxComponent>
    </Grid>
  );
}
