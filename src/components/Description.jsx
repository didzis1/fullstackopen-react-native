import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
	mainContainer: {
		display: 'flex',
		flexDirection: 'row'
	},
	imageContainer: {
		display: 'flex',
		flexDirection: 'column'
	},
	infoContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		padding: 5,
		flexShrink: 1
	},
	logo: {
		minHeight: 50,
		width: 50,
		height: 50,
		borderRadius: 5,
		margin: 10
	},
	languageBox: {
		backgroundColor: theme.colors.primary,
		color: theme.colors.white,
		paddingHorizontal: 7,
		paddingVertical: 4,
		borderRadius: 5
	}
});

const Description = ({ item }) => {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.imageContainer}>
				<Image
					style={styles.logo}
					source={{
						uri: item.ownerAvatarUrl
					}}
				/>
			</View>

			<View style={styles.infoContainer}>
				<Text fontWeight='bold' fontSize='subheading'>
					{item.fullName}
				</Text>
				<Text
					color='textSecondary'
					fontSize='subheading'
					style={{ paddingVertical: 3 }}>
					{item.description}
				</Text>
				<View>
					<Text style={styles.languageBox} fontSize='subheading'>
						{item.language}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default Description;
