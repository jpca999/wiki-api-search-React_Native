import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from './screens/SearchScreen';
import HomeScreen from './screens/HomeScreen'; 

const navigator = createStackNavigator(
  {
    SearchScreen: SearchScreen,
    HomeScreen: HomeScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      title: 'Anthem Wiki Search'
    }
  }
);

export default createAppContainer(navigator);
