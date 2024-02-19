import { reactive } from 'vue'
//this files is the source of truth for the user.
//here, it should lie all non-sensitive information, in order to be served in the frontend.

export const user = reactive({
    isSignedIn: false,
    data: {},
    
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
    }
  })