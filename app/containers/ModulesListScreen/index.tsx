import React from 'react';
import { Container } from 'native-base';
import { ModulesList, Spinner } from '../../components';
import { NavigationScreenProps } from 'react-navigation';

interface Module {
	id: number;
	nome: string;
	conteudos: {
		id: number;
		titulo: string;
		tipio: 'video';
	}[];
}

interface IState {
	modules: Module[];
}

class ModulesListScreen extends React.Component<NavigationScreenProps, IState> {
	state: IState = {
		modules: [],
	};

	async componentDidMount() {
		const response = await fetch(
			'http://5b7570f8deca780014ec9f86.mockapi.io/v1/modulos'
		);
		const modules: Module[] = await response.json();
		this.setState({ modules });
	}

	openContent = () => {
		this.props.navigation.navigate('Content');
	};

	render() {
		const { modules } = this.state;
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

export default ModulesListScreen;
