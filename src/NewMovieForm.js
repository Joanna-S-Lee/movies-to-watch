import React from 'react'
import {TextField, Button, Row, RightRow} from './Styled'

export default function NewMovieForm() {
	return (
		<form>
			<Row>
				<label>Name:</label>	
				<TextField></TextField>
			</Row>
			<Row>
				<label>Description:</label>
				<TextField></TextField>
			</Row>
			<RightRow>
				<Button>Add Movie or TV Show</Button>
			</RightRow>
		</form>
	)
}