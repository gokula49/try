

  export const addOrg = async(orgs) => {
    return await fetch("https://codingmart-invoice.herokuapp.com/organs", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orgs)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  