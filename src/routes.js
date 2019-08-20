import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';

import Home from '~/screens/Home';
import Login from '~/screens/Login';
import Register from '~/screens/Register';

const Routes = createAppContainer(
  createSwitchNavigator({
    Auth: createStackNavigator({
      Login,
      Register,
    }),
    Home,
  })
);

export default Routes;
