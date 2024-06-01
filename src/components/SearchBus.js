import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { AVAILABLE_ROUTES } from "../mockDataBase/availableRoutes";
import ModifyCurrentSearch from "./ModifyCurrentSearch";
import CurrentSearch from "./CurrentSearch";
import EachBusData from "./EachBusData";
import Loading from "./Loading";
import { addDate, selectBus } from "../features/seats/seatsSlice";
import { useDispatch, useSelector } from "react-redux";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchBus() {
  let query = useQuery();
  let from = query.get("from");
  let to = query.get("to");
  let date = query.get("date");

  let dispatch = useDispatch();
  let busSelectedId = useSelector(selectBus);
  const [modify, setModify] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    let source = axios.CancelToken.source();
    dispatch(addDate(date));
    fetchData();

    return () => {
      source.cancel("Cancelling in cleanup");
    };
  }, [from, to, date]);

  async function fetchData() {
    setIsLoading(true);
    const response = AVAILABLE_ROUTES.data.filter((route) => (route.to === to && route.from === from ));

    if (response) {
      console.log("INSIDE SEARCH: " + response);
      console.log("INSIDE SEARCH_02: " + JSON.stringify(response));

      console.log("FROM VALUE: " + from);
      console.log("TO VALUE: " + to);
      setData(response);
      setIsLoading(false);
    }
  }

  function onModifyClicked() {
    setModify(!modify);
  }

  return (
    <>
      <div className="search-current">
        {modify ? (
          <div>
            <ModifyCurrentSearch
              onModifyClicked={onModifyClicked}
              from={from}
              to={to}
              date={date}
            />
          </div>
        ) : (
          <CurrentSearch
            onModifyClicked={onModifyClicked}
            from={from}
            to={to}
            date={date}
          />
        )}
      </div>
      <div className="result">
        {isLoading ? (
          <div className="result-loading">
            <Loading />
          </div>
        ) : (
          <>
            {data.length === 0 ? (
              <div>
                <h3>We don't have an available bus for the route you're lookin for</h3>
              </div>
            ) : (
              <div>
                <h3>
                  {data.length} Buses{" "}
                  <span className="result-count">Found</span>
                </h3>
                {busSelectedId === ""
                  ? data.length != 0 &&
                    data.map((eachbus) => {
                      return <EachBusData key={eachbus._id} data={eachbus} />;
                    })
                  : data.length != 0 &&
                    data.map((eachbus) => {
                      if (busSelectedId === eachbus._id)
                        return <EachBusData key={eachbus._id} data={eachbus} />;
                    })}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
