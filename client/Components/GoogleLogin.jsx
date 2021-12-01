import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";

export default function GoogleLoginComponent(props) {
  const responseSuccessGoogle = (response) => {
    console.log(response);
    console.log("Inside Google Login.....");
    axios({
      method: "POST",
      url: "https://codingmart-invoice.herokuapp.com/api/login-user/google",
      data: { tokenid: response.tokenId },
    }).then((response) => {
      const { success } = response.data;
      if (success) {
        props.signInResponse(success, response.data);
      }
    });
  };
  const responseFailureGoogle = (response) => {
    console.log("Inside Failure Google response...");
    console.log(response);
    props.signInResponse(false, null);
  };

  return (
    <div>
      <GoogleLogin
        buttonText={<b>Google</b>}
        disabled={false}
      
        style={{ backgroundColor: "blue", borderRadius: "10px" }}
        clientId={"120376179753-f17hpj1k72savg4jgs99a8ii29kpsjsv.apps.googleusercontent.com"}
        onSuccess={responseSuccessGoogle}
        onFailure={responseFailureGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
