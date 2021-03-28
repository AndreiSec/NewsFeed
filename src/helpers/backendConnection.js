const expressServerBase = "http://172.25.10.129:8080/";

export async function registerFunction(dataObject) {
  const url = expressServerBase + "api/account/signup";

  const user = dataObject.userName;
  const email = dataObject.email;
  const password = dataObject.password;

  const data = {
    userName: user,
    password: password,
    email: email,
  };

  const response = await fetch(url, {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  const returnData = await response.json();
  console.log("Signup request result: " + JSON.stringify(returnData));

  return returnData; // parses JSON response into native JavaScript objects
}

export async function loginFunction(dataObject) {
  const url = expressServerBase + "api/account/signin";

  const email = dataObject.email;
  const password = dataObject.password;

  const data = {
    password: password,
    email: email,
  };

  const response = await fetch(url, {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  const returnData = await response.json();
  console.log("Login request result: " + JSON.stringify(returnData));

  return returnData; // parses JSON response into native JavaScript objects
}

export async function verifyFunction(dataObject) {
  const url =
    expressServerBase + "api/account/verify?token=" + dataObject.token;

  const response = await fetch(url);
  const returnData = await response.json();
  console.log("Verify request result: " + JSON.stringify(returnData));

  return returnData; // parses JSON response into native JavaScript objects
}

export async function logoutFunction(token) {
  token = token.slice(1, -1);
  console.log("In logout function token = " + token);
  const url = expressServerBase + "api/account/logout?token=" + token;
  console.log("URL: " + url);
  console.log("D");
  const response = await fetch(url);

  const returnData = await response.json();
  console.log("Logout request result: " + JSON.stringify(returnData));

  return; // parses JSON response into native JavaScript objects
}
