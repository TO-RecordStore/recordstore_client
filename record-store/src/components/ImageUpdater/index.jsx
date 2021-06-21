import React, {useEffect, useContext} from 'react';
import PageHeader from '../PageHeader';
import StyledImageUpdater from './style'
import {helpFetchImages} from '../../helpers/apiCalls'
import {AppContext} from '../../context/Context'


const ImageUpdater = () => {

	const {user, setUser, profileImages, setProfileImages} = useContext(AppContext);

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const images = await helpFetchImages();

				setProfileImages(images.data);
				
			} catch(err) {
				console.log(err);
			}
		}
		fetchImages();

	},[setProfileImages]);

  const generateAltText = (urlStr) => urlStr.match(/weird\w+/)[0];
  
  const avatars = profileImages.map((image) => {
    const alt = generateAltText(image.url);
    return <img tabIndex="0" onClick={() => setUser({...user, avatar: image.url})} key={alt} src={image.url} alt={alt}/>;
  })
	

    return(
		<StyledImageUpdater>
			<PageHeader h2="You can also update your avatar!" par="Grab one cool pic! Don't forget to save!"/>
			<img tabIndex="0" className="profile-image" src={user.avatar} alt={user.nickname}/>
			
			{avatars}
			
		</StyledImageUpdater>
    )
}

export default ImageUpdater;