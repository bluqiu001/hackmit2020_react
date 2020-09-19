import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBGAxRh_ms0k33wg27ZJETgETILYmJbouM",
    authDomain: "hackmit-c6641.firebaseapp.com",
    databaseURL: "https://hackmit-c6641.firebaseio.com",
    projectId: "hackmit-c6641",
    storageBucket: "hackmit-c6641.appspot.com",
    messagingSenderId: "637297214400",
    appId: "1:637297214400:web:180099622beda77f6f3e25",
    measurementId: "G-3R8Q1Q9KSY"
};
firebase.initializeApp(config);
export default firebase;

// // firebase.js
// // contains the Firebase context and provider

// import React, { createContext, useEffect } from 'react'
// import firebaseConfig from './firebaseConfig';
// import app from 'firebase/app'
// import 'firebase/database';
// import { useDispatch } from 'react-redux';

// import { todoActions } from '../state/todos';

// // we create a React Context, for this to be accessible
// // from a component later
// const FirebaseContext = createContext(null)
// export { FirebaseContext }

// export default ({ children }) => {
//     let firebase = {
//         app: null,
//         database: null
//     }

//     const dispatch = useDispatch();

//     // check if firebase app has been initialized previously
//     // if not, initialize with the config we saved earlier
//     if (!app.apps.length) {
//         app.initializeApp(firebaseConfig);
//         firebase = {
//             app: app,
//             database: app.database(),

//             api: {
//                 getTodos
//             }
//         }
//     }

//     // function to query Todos from the database and
//     // fire a Redux action to update the items in real-time
//     function getTodos(){
//         firebase.database.ref('todos').on('value', (snapshot) => {
//             const vals = snapshot.val();
//             let _records = [];
//             for(var key in vals){
//                 _records.push({
//                     ...vals[key],
//                     id: key
//                 });
//             }
//             // setTodos is a Redux action that would update the todo store
//             // to the _records payload
//             dispatch(setTodos(_records));
//         })
//     }

//     return (
//         <FirebaseContext.Provider value={firebase}>
//             {children}
//         </FirebaseContext.Provider>
//     )
// }