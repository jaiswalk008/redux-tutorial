import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useSelector } from 'react-redux';

function App() {
  const {notification} = useSelector(state => state.ui);
  // console.log(notification);
  return (
   <>
   {notification && <Notification notification={notification}></Notification>}
    <Layout>
      <Cart />
      <Products />
    </Layout>
   </>
  );
}

export default App;
