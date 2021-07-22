/**
 * A careless developer has defined the password in such a way that the hack function that was injected below got access to the password.
 *
 * Edit the code so that the hacker does not get access to the password but the LOGGED IN still shows in the console when the password is correct
 * TIP: Think of scoping
 */

let decryptedPassword;

/**
 * This function decrypts our password.
 * You do not need to understand what this does, it is a cool thing though.
 */
const decryptPassword = (encryptedPassword) => {
  let password = "";
  for (let i = 0; i < encryptedPassword.length; i++) {
    password += String.fromCharCode(encryptedPassword.charCodeAt(i) + 1);
  }

  return password;
};

const loginToAPI = (encryptedPassword) => {
  decryptedPassword = decryptPassword(encryptedPassword);
  if (decryptedPassword === "donthackmeplease") {
    console.log("LOGGED IN");
  }
};

loginToAPI('cnmsg`bjldokd`rd');

/** 
 * EVIL HACKER CODE STARTS HERE. DO NOT EDIT THIS PART
 * You also don't need to understand it, you will learn about try/catch later in the curriculum
 */
try {
    if (decryptedPassword != undefined) {
      console.log(`Well well, looks like your password is ${decryptedPassword}`);
    }
} catch (e) {
    // Do nothing, our hack failed
}
