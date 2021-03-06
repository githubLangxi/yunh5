// Set the key we'll use in local storage.
// Go to Chrome dev tools, application tab, click "Local Storage" and "http://localhost:8080"
// and you'll see this key set below (if logged in):
export const STORAGE_KEY = 'PortalStorage'

let syncedData = {
    auth: {
        isLoggedIn: false,
        accessToken: null,
        refreshToken: null,
    },
    user: {
        userId: null,
        userName: null,
        nickName: null,
        avatarUrl:null,
        departName: null,
        departId: null
    }
    ,
  menu:{
      id:null
  }
}

// Sync with local storage.
if (localStorage.getItem(STORAGE_KEY)) {
    syncedData = JSON.parse(localStorage.getItem(STORAGE_KEY))
}

// Merge data and export it.
export const state = Object.assign(syncedData)
