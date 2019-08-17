import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from '~/screens/Home';
import Login from '~/screens/Auth';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Home,
  })
);

export default Routes;
