import React from 'react';
import { Container } from 'native-base';
import { Image, StyleSheet, View } from 'react-native';
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

class ContentScreen extends React.Component<NavigationScreenProps & IProps> {
	keyExtractor = (item: any) => item.id.toString();

	playVideo = (moduleId: string, contentId: number) => {
		this.props.markAsSeen({ moduleId, contentId });
	};
	render() {
		const { modules, seenModules } = this.props;
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
