// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBiVsDn27zqi8vLMof6A8GBHrCxGVsOTnE',
    authDomain: 'prueba-ripley.firebaseapp.com',
    databaseURL: 'https://prueba-ripley.firebaseio.com',
    projectId: 'prueba-ripley',
    storageBucket: '',
    messagingSenderId: '521835118740',
    appId: '1:521835118740:web:ee860b87a45a65a1'
  },
  baseUrlApi: 'http://localhost:8100'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
