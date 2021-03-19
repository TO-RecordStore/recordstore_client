import React, {useEffect, useContext} from 'react';
import PageHeader from '../PageHeader';
import StyledImageUpdater from './style'
import {helpFetchImages} from '../../helpers/apiCalls'
import {AppContext} from '../../context/Context'


const ImageUpdater = () => {

	const {profileImages, setProfileImages} = useContext(AppContext)

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const images = await helpFetchImages()

				setProfileImages(images.data)
				
			} catch(err) {
				console.log(err);
			}
		}
		fetchImages()
	},[])

	const altText = (urlStr) => urlStr.match(/weird\w+/)[0]

	const avatars = profileImages.map((image) => {
		const alt = altText(image.url)
		return <img key={alt} src={image.url} alt={alt}/>
	})
	
    return(
		<StyledImageUpdater>
			<PageHeader/>
			<img src="" alt=""/>
			{avatars}

			
			
		</StyledImageUpdater>
    )
}

export default ImageUpdater