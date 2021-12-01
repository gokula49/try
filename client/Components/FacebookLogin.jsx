import FacebookLogin from "react-facebook-login";
import axios from "axios";
import React from "react";
import { BsFacebook } from "react-icons/bs";

export default function FacebookLoginComponent(props) {
  const responseSuccessFacebook = (response) => {
    console.log(response);
    console.log("Inside Facebook Login.....");
    axios({
      method: "POST",
      url: "https://zoho-invoice-server.vercel.app/api/login-user/facebook",
      data: { accessToken: response.accessToken, userID: response.userID },
    }).then((response) => {
      const { success } = response.data;
      if (success) {
        props.signInResponse(success, response.data);
      }
    });
  };
  const responseFailureFacebook = (response) => {
    console.log("Inside Failure Facebook response...");
    props.signInResponse(false, null);
    console.log(response);
  };
  return (
    <div>
      <FacebookLogin
        disableMobileRedirect={true}
        redirectUri="https://zoho-invoice-clone.vercel.app/"
        appId={process.env.NEXT_PUBLIC_FB_ID}
        autoLoad={false}
        callback={responseSuccessFacebook}
        onFailure={responseFailureFacebook}
        fields="name,email,picture"
        textButton=""
        buttonStyle={{
          borderRadius: "6px",
          padding: "11px",
          textAlign: "center",
          display: "flex",
          border: "none",
          fontSize: "14pt",
          alignItems: "center",
          backgroundColor: "#1877f2",
        }}
        icon={<BsFacebook style={{}} />}
        scope="public_profile,user_friends,email"
        render={(renderProps) => (
          <button onClick={renderProps.onClick}></button>
        )}
      />
    </div>
  );
}
