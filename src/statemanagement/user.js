import { reactive } from 'vue'
//this files is the source of truth for the user.
//here, it should lie all non-sensitive information, in order to be served in the frontend.

export const user = reactive({
    isSignedIn: false,
    data: {},
    errorMsg: "",
    
    signIn() {
      console.log("state management sign in");
      this.isSignedIn = true;
    },
    signOut() {
        console.log("state management sign out");
        this.isSignedIn = false;
    },
    setUserInfo(userPayload) {
      this.data = userPayload;
      console.log("fetched user", this.data)
    },
    setLoginErrorMsg(username, password) { //of course this shouldnt be handled in the frontend, this is just for dabbling
      if(this.isBlank(username) && this.isBlank(password)) {
        this.errorMsg = "username/password must not be empty.";
      }else if(this.isBlank(username)) {
        this.errorMsg = "username must not be empty.";
      }else if(this.isBlank(password)) {
        this.errorMsg = "password must not be empty.";
      }else {
        this.errorMsg = "incorrect username or password.";
      }
      return this.errorMsg;
    },
    isBlank(string) {
      if (string === null || string.trim() === "") {
        return true;
      }
      return false;
    }
  })