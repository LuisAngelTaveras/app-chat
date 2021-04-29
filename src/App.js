
import Button from './components/Button';
import { signInWithGoogle, signOut} from './login';

function App() {

    return (
        <div>

        {
           
           user ? (

                  <>
                       <Button onClick={signOut} Sing in with Goggle ></Button> 
                       <p>Bienvenidos al CHAT!</p>
                  </>

           ) : <Button onClick={signInWithGoogle}  Sign In With Google> </Button>

        }
                
        </div>
    );

    }

    export default App;




     
