// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDWQNPe8MpilRw5DR6UCmKxmMtWbOObn0I",
    authDomain: "bookstore-ba21c.firebaseapp.com",
    databaseURL: "https://bookstore-ba21c.firebaseio.com",
    projectId: "bookstore-ba21c",
    storageBucket: "bookstore-ba21c.appspot.com",
    messagingSenderId: "654947264614"
  }
};
