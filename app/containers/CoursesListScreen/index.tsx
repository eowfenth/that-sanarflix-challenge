import React from 'react';
import { Container } from 'native-base';
import { StyleSheet } from 'react-native';
import { CoursesList, Spinner } from '../../components';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';

interface Course {
	id: number;
	nome: string;
	image: string;
	area: 'CICLO BASICO' | 'CICLO CLINICO' | 'CICLO AVANÇADO';
}

interface IState {
	courses: Course[];
	hasError: boolean;
}

class CoursesListScreen extends React.Component<NavigationScreenProps, IState> {
	state: IState = {
		courses: [],
		hasError: false,
	};

	async componentDidMount() {
		const response = await fetch(
			'http://5b7570f8deca780014ec9f86.mockapi.io/v1/cursos'
		);
		const courses: Course[] = await response.json();
		this.setState({ courses });
	}

	openModules = () => {
		this.props.navigation.navigate('Modules');
	};

	render() {
		console.log('Courses', this.state.courses);
		console.log(this.props);
		const { courses } = this.state;
		return (
			<Container style={styles.container}>
				{courses.length === 0 ? (
					<Spinner centered />
				) : (
					<CoursesList data={courses} onPress={this.openModules} />
				)}
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});

export default CoursesListScreen;

