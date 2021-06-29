import styled from 'styled-components'

export const Heading = styled.h1 `
	font-family: Arial, Helvetica, sans-serif;
	font-size: 2em;
	margin: 1em;
`

export const MovieHeading = styled(Heading) `
	font-size: 1em;
	margin: 0;
`

export const Card = styled.div `
	font-family: Arial, Helvetica, sans-serif;
	font-size: 18px;
	padding: 10px;
	margin: 10px;
`
export const CenteredRow = styled.div `
	display: flex;
	justify-content: center;
`

export const Row = styled.div `
	font-family: Arial, Helvetica, sans-serif;
	display: flex;
	margin: .5em 1em;
	width: 50%;
	justify-content: space-between;
`
export const RightRow = styled(Row) `
	justify-content: flex-end;
`

export const Button = styled.button `
        display: inline-block;
        color: #B75D69;
        background-color: #EACDC2;
        font-size: 1em;
        margin: 5px;
        padding: 5px;
        border: 2px solid #774C60;
        border-radius: 3px;
        display: block
`


export const TextField = styled.input `
	padding: 5px;
	margin: 5px;
	height: 20px;
`