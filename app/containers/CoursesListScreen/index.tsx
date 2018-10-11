import React from 'react';
import { Container } from 'native-base';
import { StyleSheet } from 'react-native';
import { CoursesList, Spinner } from '../../components';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import mainActions from '../../redux/main';
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

interface IProps {
	coursesSuccess: Function;
	courses: Course[];
}
class CoursesListScreen extends React.Component<
	NavigationScreenProps & IProps,
	IState
> {
	async componentDidMount() {
		const response = await fetch(
			'http://5b7570f8deca780014ec9f86.mockapi.io/v1/cursos'
		);
		const courses: Course[] = await response.json();

		if (this.props.courses.length === 0) {
			this.props.coursesSuccess(courses);
		}
	}

	openModules = (id: string) => {
		this.props.navigation.navigate('Modules', { id });
	};

	render() {
		const { courses } = this.props;
		return (
			<Container style={{ backgroundColor: 'rgba(12,29,41,0.5)' }}>
				{courses.length === 0 ? (
					<Spinner centered />
				) : (
					<CoursesList data={courses} onPress={this.openModules} />
				)}
			</Container>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		courses: state.main.courses,
	};
};

const mapDispatchToProps = (dispatch: any) => ({
	coursesSuccess: (ids: string[]) =>
		dispatch(mainActions.coursesSuccess(ids)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CoursesListScreen);
