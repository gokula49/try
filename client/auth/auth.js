export const isAutheticated = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    } else {
      return false;
    }
  };

  export const signout = next => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      next();
     }
  };
  
