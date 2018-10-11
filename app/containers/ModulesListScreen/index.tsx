import React from 'react';
import { Container } from 'native-base';
import { ModulesList, Spinner } from '../../components';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import mainActions from '../../redux/main';

interface Module {
	id: number;
	nome: string;
	conteudos: {
		id: number;
		titulo: string;
		tipio: 'video';
	}[];
}

interface IProps {
	modulesSuccess: Function;
	modules: Module[];
}
interface IState {}

class ModulesListScreen extends React.Component<
	NavigationScreenProps & IProps,
	IState
> {
	async componentDidMount() {
		const response = await fetch(
			'http://5b7570f8deca780014ec9f86.mockapi.io/v1/modulos'
		);
		const modules: Module[] = await response.json();
		// if (this.props.modules.length === 0) {
		// 	this.props.modulesSuccess(modules);
		// }
		this.props.modulesSuccess(modules);
	}

	openContent = (id: string) => {
		this.props.navigation.navigate('Content', { id });
	};

	render() {
		const { modules } = this.props;
		console.log(modules);
		return (
			<Container>
				{modules.length === 0 ? (
					<Spinner centered />
				) : (
					<ModulesList data={modules} onPress={this.openContent} />
				)}
			</Container>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		modules: state.main.modules,
	};
};

const mapDispatchToProps = (dispatch: any) => ({
	modulesSuccess: (ids: string[]) =>
		dispatch(mainActions.modulesSuccess(ids)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ModulesListScreen);
