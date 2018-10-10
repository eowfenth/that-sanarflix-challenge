import { createStackNavigator } from 'react-navigation';
import CoursesListScreen from '../containers/CoursesListScreen';
import ModulesListScreen from '../containers/ModulesListScreen';

const Navigator = createStackNavigator(
	{
		Home: {
			screen: CoursesListScreen,
			navigationOptions: {
				header: null,
			},
		},
		Modules: {
			screen: ModulesListScreen,
			navigationOptions: {
				title: 'Módulos',
			},
		},
	},
	{
		initialRouteName: 'Home',
	}
);

export default Navigator;
