import React from 'react';
import { FlatList, Image } from 'react-native';
import { Card, CardItem, Icon, Right, Text } from 'native-base';

interface Course {
	id: number;
	nome: string;
	image: string;
	area: 'CICLO BASICO' | 'CICLO CLINICO' | 'CICLO AVANÇADO';
}

interface IProps {
	data: Course[];
	onPress: (id: string) => void;
}

const keyExtractor = (item: Course) => item.id.toString();

const areaFormatter = (area: string) => {
	switch (area) {
		case 'CICLO BASICO':
			return 'Ciclo Básico';
		case 'CICLO CLINICO':
			return 'Ciclo Clínico';
		case 'CICLO AVANÇADO':
			return 'Ciclo Avançado';
		default:
			return null;
	}
};

const CoursesList = (props: IProps) => {
	const flatListData = props.data.map((x, index) => ({
		...x,
		image: images[index],
	}));
	return (
		<FlatList
			data={flatListData}
			keyExtractor={keyExtractor}
			renderItem={({ item }) => (
				<Card>
					<CardItem
						style={styles.cardItem}
						bordered
						button
						header
						onPress={() => props.onPress(item.id.toString())}
					>
						<Text style={styles.title}>{item.nome}</Text>
					</CardItem>
					<CardItem
						cardBody
						button
						onPress={() => props.onPress(item.id.toString())}
					>
						<Image
							source={{
								uri: item.image,
							}}
							style={styles.image}
						/>
					</CardItem>
					<CardItem
						footer
						button
						style={styles.cardItem}
						onPress={() => props.onPress(item.id.toString())}
					>
						<Text style={styles.text}>
							{areaFormatter(item.area)}
						</Text>
					</CardItem>
				</Card>
			)}
		/>
	);
};

const styles = {
	image: {
		height: 200,
		flex: 1,
	},
	text: {
		color: '#ffffff',
	},
	title: {
		color: '#ffffff',
	},
	cardItem: {
		backgroundColor: 'rgba(12,29,41,0.6)',
	},
};

export default CoursesList;

const images = [
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/324/4671538161298.medium.jpg?1538161298',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/1741538601024.medium.jpg?1538601024',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/7491538400868.medium.jpg?1538400868',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/280/0831538665409.medium.jpg?1538665409',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/7891538601897.medium.jpg?1538601897',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/8681538161581.medium.jpg?1538161581',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/324/4671538161298.medium.jpg?1538161298',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/1741538601024.medium.jpg?1538601024',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/7491538400868.medium.jpg?1538400868',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/280/0831538665409.medium.jpg?1538665409',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/7891538601897.medium.jpg?1538601897',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/8681538161581.medium.jpg?1538161581',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/324/4671538161298.medium.jpg?1538161298',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/1741538601024.medium.jpg?1538601024',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/7491538400868.medium.jpg?1538400868',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/280/0831538665409.medium.jpg?1538665409',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/7891538601897.medium.jpg?1538601897',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/8681538161581.medium.jpg?1538161581',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/324/4671538161298.medium.jpg?1538161298',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/1741538601024.medium.jpg?1538601024',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/7491538400868.medium.jpg?1538400868',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/280/0831538665409.medium.jpg?1538665409',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/7891538601897.medium.jpg?1538601897',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/8681538161581.medium.jpg?1538161581',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/324/4671538161298.medium.jpg?1538161298',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/1741538601024.medium.jpg?1538601024',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/7491538400868.medium.jpg?1538400868',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/280/0831538665409.medium.jpg?1538665409',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/7891538601897.medium.jpg?1538601897',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/8681538161581.medium.jpg?1538161581',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/324/4671538161298.medium.jpg?1538161298',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/1741538601024.medium.jpg?1538601024',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/7491538400868.medium.jpg?1538400868',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/280/0831538665409.medium.jpg?1538665409',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/7891538601897.medium.jpg?1538601897',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/8681538161581.medium.jpg?1538161581',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/324/4671538161298.medium.jpg?1538161298',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/1741538601024.medium.jpg?1538601024',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/7491538400868.medium.jpg?1538400868',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/280/0831538665409.medium.jpg?1538665409',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/7891538601897.medium.jpg?1538601897',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/8681538161581.medium.jpg?1538161581',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/324/4671538161298.medium.jpg?1538161298',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/1741538601024.medium.jpg?1538601024',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/7491538400868.medium.jpg?1538400868',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/280/0831538665409.medium.jpg?1538665409',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/7891538601897.medium.jpg?1538601897',
	'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/241/8681538161581.medium.jpg?1538161581',
];
