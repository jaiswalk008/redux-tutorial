import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
function App() {
  // const dispatch = useDispatch();
  const {isAuthenticated} = useSelector(state => state.authentication);
  console.log(isAuthenticated);
  return (
    <>
      {isAuthenticated && <Header/>}
      {!isAuthenticated && <Auth/>}
      <Counter />
    </>
  );
}

export default App;
