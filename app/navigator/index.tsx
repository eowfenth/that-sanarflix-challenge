import { createStackNavigator } from 'react-navigation';
import CoursesListScreen from '../containers/CoursesListScreen';
import ModulesListScreen from '../containers/ModulesListScreen';
import ContentScreen from '../containers/ContentScreen';

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
		Content: {
			screen: ContentScreen,
			navigationOptions: {
				title: 'Conteúdos',
			},
		},
	},
	{
		initialRouteName: 'Home',
	}
);

export default Navigator;
