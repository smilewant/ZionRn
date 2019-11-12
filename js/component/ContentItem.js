import React, { Component } from 'react'
import {
	Text,
	StyleSheet,
	Image,
	View,
	TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'

export default class ContentItem extends Component {
	static propTypes = {
		id: PropTypes.number,
		text: PropTypes.object
	};

	render() {
		let { id, text } = this.props;

		return (
			<TouchableOpacity

				style={{
					flexDirection: 'row',
					alignItems: 'center',
					backgroundColor: '#ffffff',
					marginTop: 10
				}}
				activeOpacity={0.9}>
				<View style={{
					flexDirection: 'row',
					alignItems: 'center',
					// justifyContent: 'center',
					padding: 15
				}}>
					<Image source={{ uri: text.logo_url }} style={styles.itemImages} />
					<View style={
						{
							flexDirection: "column",

							marginLeft: 20
						}
					}>

						<Text style={{ color: "#333333" }}  >
							{text.name}
						</Text>

						<Text style={{ marginTop: 5, color: "#666666" }}>
							{text.single_word}
						</Text>

						<Text style={{ marginTop: 5, color: "#999999" }}>
							{text.short_word}
						</Text>
					</View>

				</View >
			</TouchableOpacity >
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},


	itemImages: {
		width: 60,
		height: 60,
		resizeMode: 'stretch'
	},
});