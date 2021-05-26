import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import SpinerLoading from "../Components/SpinerLoading";
import Card from "../Components/Card";
import FormSearch from "../Components/FormSearch";
import Axios from "axios";
import ErrorAlert from "../Components/ErrorAlert";
import ToastNotification from "../Components/ToastNotification";

function Search({ authorized }) {
  const [{ searchName }] = useStateValue();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [, dispatch] = useStateValue();

  const openAlert = (error) => {
    dispatch({
      type: "OPEN_ALERT",
      alertMsg: `${error}`,
    });
  };

  useEffect(() => {
    let fetchData = async () => {
      if (searchName === "") {
        setIsLoaded(true);
        return;
      }

      try {
        let res = await Axios.get(
          `https://superheroapi.com/api.php/10225953386043534/search/${searchName}`
        );

        let data = await res.data;

        if (data.response === "error") {
          openAlert(data.error);
        } else {
          setItems(data.results);
        }
        setIsLoaded(true);
      } catch (error) {
        setIsLoaded(true);
        openAlert(error);
      }
    };

    setIsLoaded(false);
    fetchData();
  }, [searchName]);

  if (!authorized) {
    return <Redirect to="login" />;
  }

  return (
    <div className="container p-0 my-5">
      <ErrorAlert />
      <FormSearch />
      {!isLoaded ? (
        <SpinerLoading />
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
      <ToastNotification />
    </div>
  );
}

export default Search;
