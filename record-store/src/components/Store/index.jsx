import React, { useEffect, useContext } from "react";
import { StyledStore, StyledRecordsContainer} from "./style";
import PageHeader from "../PageHeader";
import { helpFetchRecords } from '../../helpers/apiCalls'
import { AppContext } from '../../context/Context'

const StorePage = () => {
	const { records, setRecords } = useContext(AppContext)

	useEffect(() => {
		const getRecords = async () => {
			try {
				const recordsData = await helpFetchRecords()
				setRecords(recordsData.data)
			} catch (error) {
				console.log(error)
			}
		}
		getRecords()
	}, [])

	const recordsArray = records.map(record => {
		return <img key={record._id} src={record.cover} alt={`${record.artist}: ${record.title}`} />
	})

	return (
		<StyledStore>
			<PageHeader
				h2="Records Collection"
				par="Here you can find all our records."
			/>

			<StyledRecordsContainer>
				{recordsArray}
			</StyledRecordsContainer>
		</StyledStore>
	);
};

export default StorePage;
