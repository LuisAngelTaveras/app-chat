<<<<<<< HEAD





import Button from './components/Button';
import {signInWithGoogle, signOut } from './login';

function App () {

  return(
     <div>
           {

              user ? (

                    <>
                         <button onClick={signOut}> Sign in with Google</button>
                         <p>Bienbenidos al CHAT! </p>
                         
                    </>

              ) : <button onClick={signInWithGoogle}>Sign in with Google </button>

           }


     </div>


=======
import {
  db,
  googleAuthProvider,
  firebase
} from "./config/firebase";
import Button from "./components/Button";

function App() {

  const signInWithGoogle = async() => {
    firebase.auth().useDeviceLanguage();


    try {
      await firebase.auth().signInWithPopup(googleAuthProvider);

    }catch(e) {
      console.error(e.message);
    }
};
    
  
  return (
    <div> 
    <Button onClick={signInWithGoogle}> Sign in with Google </Button>
    </div>
>>>>>>> 60ee6f6dbb619ffb52e5f3c843e7970917221f36
  );

}

 export default App ;

     
