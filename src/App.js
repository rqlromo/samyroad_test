import React, { useState, useEffect } from "react";

// Components
import Header from "./components/header";
import CardList from "./components/cardList";

// Helpers
import { filterValue } from "./helpers/getFilteredValues";

// Variables
var blockScrollCall = false;
var oldResponseJson = [];

function App() {
  const [dataFromApi, setDataFromApi] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (value) => {
    setInputValue(value);
  };

  const notRefreshOnPressEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const success = (responseJson) => {
    setDataFromApi(oldResponseJson.concat(responseJson));
    blockScrollCall = true;
    oldResponseJson = responseJson;
  };

  const error = () => {
    alert("error");
  };

  const getDataFromApi = (page) => {
    blockScrollCall = false;

    const url = "http://localhost:3000/data?_page=" + page + "&_limit=5";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          response.json().then((responseJson) => {
            success(responseJson);
          });
        } else {
          error();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    let page = 1;
    getDataFromApi(page);

    window.onscroll = function () {
      // How much the user has scrolled
      const scrollTop = document.documentElement.scrollTop;

      // windowHeigth is the height of the window
      const windowHeight = window.innerHeight;

      // documentHeight could be larger than windowHeight
      const documentHeight = document.documentElement.scrollHeight;

      const offset = 50;

      if (scrollTop + windowHeight > documentHeight - offset) {
        if (page < 2 && blockScrollCall) {
          page = page + 1;
          getDataFromApi(page);
        }
      }
    };
  }, []);

  return (
    <div className="mainPage">
      <Header
        withIcon={true}
        onChangeAction={(value) => changeInputValue(value)}
        onKeyDownAction={(e) => notRefreshOnPressEnter(e)}
      />
      <CardList
        filteredData={
          !inputValue ? dataFromApi : filterValue(inputValue, dataFromApi)
        }
      />
    </div>
  );
}

export default App;
