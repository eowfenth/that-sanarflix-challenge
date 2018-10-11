import React from 'react';
import {
	Body,
	Right,
	Left,
	Button,
	Icon,
	List,
	ListItem,
	Container,
	Content,
	Spinner,
	Text,
} from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import { ContentItems, VideoPlayer } from '../../components';
import mainActions from '../../redux/main';
import { connect } from 'react-redux';
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

interface IProps {
	modules: Module[];
	markAsSeen: Function;
	seenModules: any;
}

interface IState {
	pressed: 0;
}

class ContentScreen extends React.Component<NavigationScreenProps & IProps> {
	state: IState = {
		pressed: 0,
	};

	keyExtractor = (item: any) => item.id.toString();

	playVideo = (moduleId: string, contentId: number) => {
		console.log('moduleId', moduleId);
		console.log('contentId', contentId);
		// this.setState({ pressed: this.state.pressed + 1 });
		this.props.markAsSeen({ moduleId, contentId });
	};
	render() {
		const { modules, seenModules } = this.props;
		// console.log(JSON.stringify(modules));
		console.log(JSON.stringify(seenModules));
		console.log('params', this.props);
		const { id: moduleId } = this.props.navigation.state.params!;
		return (
			<Container>
				<VideoPlayer />
				<ContentItems
					data={modules[moduleId].conteudos}
					selected={seenModules}
					onPress={this.playVideo}
					module={moduleId}
				/>
			</Container>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		modules: state.main.modules,
		seenModules: state.main.seenModules,
	};
};

const mapDispatchToProps = (dispatch: any) => ({
	markAsSeen: (moduleId: number, contentId: number) =>
		dispatch(mainActions.markAsSeen(moduleId, contentId)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ContentScreen);
