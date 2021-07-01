import React, { useEffect, useContext, useState } from "react";
import { StyledStore, StyledRecordsContainer } from "./style";
import PageHeader from "../PageHeader";
import { helpFetchRecords } from "../../helpers/apiCalls";
import { AppContext } from "../../context/Context";
import { BsPlusSquareFill } from "react-icons/bs";
import Loading from "../Loading";
import { useMediaQuery } from "@material-ui/core";

const StorePage = () => {
  const { records, setRecords, currentOrder, setCurrentOrder } =
    useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  const shrinkGap = useMediaQuery("(max-width: 930px)");

  useEffect(() => {
    setIsLoading(true);
    const getRecords = async () => {
      try {
        const recordsData = await helpFetchRecords();
        setRecords(recordsData.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getRecords();
  }, [setRecords]);

  const addToCart = (record) => {
    const orderedRecord = {
      record: {
        _id: record._id,
        title: record.title,
        artist: record.artist,
        price: record.price,
        cover: record.cover,
      },
      quantity: 1,
    };

    const recordInsideOrder = currentOrder.find(
      (order) => order.record._id === orderedRecord.record._id
    );

    if (!recordInsideOrder) {
      setCurrentOrder([...currentOrder, orderedRecord]);
    } else {
      const newOrder = currentOrder.map((order) => {
        if (order.record._id === recordInsideOrder.record._id) {
          order.quantity++;
        }
        return order;
      });
      setCurrentOrder([...newOrder]);
    }
  };

  const recordsArray = records.map((record) => {
    return (
      <div key={record._id}>
        <img src={record.cover} alt={`${record.artist}: ${record.title}`} />
        <BsPlusSquareFill onClick={() => addToCart(record)} />
      </div>
    );
  });

  return (
    <StyledStore>
      <PageHeader
        h2="Records Collection"
        par="Here you can find all our records."
      />

      {isLoading ? (
        <Loading />
      ) : (
        <StyledRecordsContainer shrinkGap={shrinkGap}>
          {recordsArray}
        </StyledRecordsContainer>
      )}
    </StyledStore>
  );
};

export default StorePage;
