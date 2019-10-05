import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from '~/screens/Login';
import Register from '~/screens/Register';

const Routes = createAppContainer(
  createStackNavigator({
    Login,
    Register,
  })
);

export default Routes;
