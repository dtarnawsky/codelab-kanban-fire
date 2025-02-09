/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBVFf9ktIC5JQuV_H_QFhq6IVkfQt1JBR4",
    authDomain: "kanbanfire-68fd2.firebaseapp.com",
    projectId: "kanbanfire-68fd2",
    storageBucket: "kanbanfire-68fd2.appspot.com",
    messagingSenderId: "821863051539",
    appId: "1:821863051539:web:79f2235b3a8b965d522ae6"
    // apiKey: 'AIzaSyACR3OxVnse4KftDoKrZkfO0P00-ligW0c',
    // authDomain: 'kanban-fire-workshop.firebaseapp.com',
    // databaseURL: 'https://kanban-fire-workshop.firebaseio.com',
    // projectId: 'kanban-fire-workshop',
    // storageBucket: 'kanban-fire-workshop.appspot.com',
    // messagingSenderId: '513024923782',
    // appId: '1:513024923782:web:ef27622969067c9e565907',
    // measurementId: 'G-1GXZ633QPQ',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
