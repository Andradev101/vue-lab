import { reactive } from 'vue'
//this files is the source of truth for the user.
//here, it should lie all non-sensitive information, in order to be served in the frontend.

export const pseudoBackendService = reactive({
    userData: {},
    showComponent: false,
    setUserData(fetchedUser) { //of course this shouldnt be handled in the frontend, this is just for dabbling
      this.userData = fetchedUser;
      this.showComponent = true;
      console.log(this.userData)
    }
  })