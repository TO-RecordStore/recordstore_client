import React from 'react';
import StyledLoading from './style';
import surf from '../../assets/Surf1.gif';

const Loading = () => {
	return (
		<StyledLoading stackSections as="section">
			<h3>Just a sec! Nice stuff is coming!!!</h3>
      <p>Meanwhile, watch these feet riding a wave...</p>
      <img src={surf} alt="feet surfing back and forth" />
		</StyledLoading>
	)
}

export default Loading
