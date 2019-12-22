import React, { useEffect } from "react";
import MainLayout from "../Layouts/MainLayout";
import { db } from "../config/config";
import { useSelector, useDispatch } from "react-redux";

export default () => {
  const Candles = useSelector(state => state.candles);
  const dispatch = useDispatch();
  const getAllItems = () => {
    let candles = db.collection("candles").get();
    Promise.resolve(candles).then(data => {
      let allCandles = data.docs.map(candle => {
        return candle.data;
      });
      console.log(allCandles);
    });

    // let allData = [];
    // let data = {
    //   ...items.data()
    // };
    // allData.push(data);

    // dispatch({ type: "GET_ALL", payload: allData });
  };
  useEffect(() => {
    dispatch(getAllItems());
  }, []);
  return (
    <MainLayout>
      <>
        <h1>Items</h1>
        <ul>
          {Candles.map((candle, i) => {
            return <li key={i}> {candle.name} </li>;
          })}
        </ul>
      </>
    </MainLayout>
  );
};
