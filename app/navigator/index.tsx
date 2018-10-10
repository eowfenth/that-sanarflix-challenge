import { createStackNavigator } from 'react-navigation';
import CoursesListScreen from '../containers/CoursesListScreen';

const Navigator = createStackNavigator(
	{
		Home: {
			screen: CoursesListScreen,
			navigationOptions: {
				header: null,
			},
		},
	},
	{
		initialRouteName: 'Home',
	}
);

export default Navigator;
