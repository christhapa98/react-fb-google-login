import './App.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

function App() {
  const facebookAppId: string = "1326133208218519";
  // const facebookAppId: string = "1089202245077219";
  // 1089202245077219
  const googleClientId: string = "679506518416-hiui3bm045d76bsk0gqbfkeidv4q59q0.apps.googleusercontent.com";

  const onFacebookLogin = (response: any) => {
    console.log(response);
  }

  const onGoogleLogin = (response: any) => {
    console.log(response);
  }

  const onGoogleLoginFailed = (response: any) => {
    console.log(response)
  }

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId: googleClientId })
    })
    return () => {
    }
  }, [])

  return (
    <>
      <FacebookLogin
        appId={facebookAppId}
        autoLoad={false}
        fields="name,email,picture"
        scope="public_profile,user_friends"
        callback={onFacebookLogin}
        icon="fa-facebook" />

      <GoogleLogin
        clientId={googleClientId}
        buttonText="Login"
        onSuccess={onGoogleLogin}
        onFailure={onGoogleLoginFailed}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
}

export default App;
