




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


  );

}

 export default App ;

     
