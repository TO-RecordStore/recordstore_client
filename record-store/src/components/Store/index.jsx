import React, { useEffect, useContext } from "react";
import { StyledStore, StyledRecordsContainer} from "./style";
import PageHeader from "../PageHeader";
import { helpFetchRecords } from '../../helpers/apiCalls'
import { AppContext } from '../../context/Context'
import {BsPlusSquareFill} from 'react-icons/bs'

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
		return (
			<div key={record._id}>
				<img src={record.cover} alt={`${record.artist}: ${record.title}`} />
				<BsPlusSquareFill />
			</div>
		)
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
