import { createStackNavigator } from 'react-navigation';
import CoursesListScreen from '../containers/CoursesListScreen';
import ModulesListScreen from '../containers/ModulesListScreen';
import ContentScreen from '../containers/ContentScreen';
import React from 'react';
import { Header } from '../components/';
const Navigator = createStackNavigator(
	{
		Home: {
			screen: CoursesListScreen,
			navigationOptions: {
				header: (props: any) => <Header />,
			},
		},
		Modules: {
			screen: ModulesListScreen,
			navigationOptions: {
				title: 'Módulos',
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: 'rgba(12,29,41,0.8)',
				},
			},
		},
		Content: {
			screen: ContentScreen,
			navigationOptions: {
				title: 'Conteúdos',
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: 'rgba(12,29,41,0.8)',
				},
			},
		},
	},
	{
		initialRouteName: 'Home',
	}
);

export default Navigator;
