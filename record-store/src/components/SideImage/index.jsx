import React from 'react'
import StyledSideImage from './style'

const SideImage = ({image, altTxt}) => {
	return (
		<StyledSideImage>
			<img src={image} alt={altTxt}/>
		</StyledSideImage>
	)
}



export default SideImage