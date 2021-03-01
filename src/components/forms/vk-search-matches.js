import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import GetDataFromWeb from "../../services/service";
import ProfileMatches from "../data-detail/profile-matches";
import { callerName } from "../../services/helper";
import ProfileMatchesDummy from "../data-detail/profile-matches-dummy";
import Spinner from "../spinner/spinner";
import { PopupFlexConfProd, showPopup } from "../helpers/popup-util";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/local-storage-util";
import * as mc from "../helpers/main-constants";
//старая реализация функции с хуками
const GetMatchesByQuery = ({ caller }) => {
  console.log(`GetMatchesByQuery has been called. Caller is: ${caller}`);

  const GDF = new GetDataFromWeb();

  const [isAfterRequest, setLoadState] = useState(false);
  const [matches, setMatches] = useState([[]]);
  const [loading, setLoading] = useState(false);
  const [popUpType, setPopUpType] = useState();
  const [arrayValues, setArrayVals] = useState([]);
  const [currentOffset, setOffset] = useState(null);
  const [controlledRowId, setControlledRowId] = useState(null);
  const [results, setResults] = useState(null);

  const useIsMounted = () => {
    const isMounted = useRef(false);
    useEffect(() => {
      isMounted.current = true;
      return () => (isMounted.current = false);
    }, []);
    return isMounted;
  };

  const isMountedComp = useIsMounted();

  const getMatches = async () => {
    let query = document.getElementById("vkquery").value;
    let qnt = document.getElementById("vkquantity").value;
    let offset = document.getElementById("vkoffset").value;
    let ageFrom = document.getElementById("vkagefrom").value;
    let ageTo = document.getElementById("vkageto").value;
    let pickedCity = document.getElementById("city").value;
    let pickedMonth = document.getElementById("month").value;
    let pickedYear = document.getElementById("year").value;
    let pickedDay = document.getElementById("day").value;
    console.log(query);
    if (pickedYear && pickedYear !== "null") {
      //console.log(`pickedYear must be TRUE: ${pickedYear}(${typeof pickedYear})`);
      ageFrom = "0";
      ageTo = "0";
    } else {
      //console.log(`pickedYear must be FALSE: ${pickedYear}(${typeof pickedYear})`);
      ageFrom ? ageFrom : (ageFrom = "20");
      ageTo ? ageTo : (ageTo = "36");
    }

    offset ? offset : (offset = "0");
    query ? query : (query = null);
    qnt ? qnt : (qnt = "0");
    offset ? offset : (offset = "0");
    setOffset(offset);
    pickedCity === "0" ? (pickedCity = null) : pickedCity;
    setLoading(true);
    setLocalStorageItem("searchParams", {
      dateSearch: new Date(),
      queryString: query,
      quantity: qnt,
      offset: offset,
      pickedCity,
      ageFrom,
      ageTo,
      pickedYear,
      pickedDay,
      pickedMonth,
    });
    let data = await GDF.getMatchProfilesByQuery(
      query,
      qnt,
      offset,
      ageFrom,
      ageTo,
      pickedCity,
      pickedYear,
      pickedMonth,
      pickedDay
    );
    let data2 = await GDF.getAllCheckedProfiles();
    setLoadState(true);
    setLoading(false);
    //console.log(data);
    //console.log(data2);
    setMatches([data, data2]);
    console.log(matches[0]);
    console.log(matches[1]);
    console.log("GetMatchesByQuery received data from getMatchProfilesByQuery");
    console.log("GetMatchesByQuery: setCheckedMatches has set array: ");
    showPopup(mc.POPUP_CONTAINER_BOTTOM_RIGHT, setPopUpType, 3000);
  };

  const onPickedYear = () => {
    if (document.getElementById("year").value !== "null") {
      document.getElementById("vkagefrom").classList.add("disabled-input");
      document.getElementById("vkageto").classList.add("disabled-input");
    } else if (
      document.getElementById("vkagefrom").className &&
      document.getElementById("vkageto").className
    ) {
      document.getElementById("vkagefrom").classList.remove("disabled-input");
      document.getElementById("vkageto").classList.remove("disabled-input");
    }
  };

  const onChangeAge = (e) => {
    if (e.target.value) {
      document.getElementById("year").value = "null";

      document.getElementById("year").disabled = true;
    } else {
      document.getElementById("year").disabled = false;
    }
  };
  const checkProfile = async (id, firstName, lastName) => {
    let searchParams;
    try {
      searchParams = JSON.parse(getLocalStorageItem("searchParams"));
      console.log(`checkProfile: Received search params:`);
      console.log(searchParams);

      let result;
      searchParams.pickedYear
        ? (result = await GDF.insertUpdateCheckedProfile(
            id,
            firstName,
            lastName,
            searchParams.pickedYear
          ))
        : (result = await GDF.insertUpdateCheckedProfile(
            id,
            firstName,
            lastName
          ));

      if (result.rowCount) {
        console.log(
          `GetMatchesByQuery.useEffect: check has been successfully saved for: ${id}`
        );
        return result;
      } else {
        console.warn(
          `GetMatchesByQuery.useEffect: check has not been saved for profile: ${id}`
        );
        return result;
      }
    } catch (e) {
      console.error(
        `GetMatchesByQuery.useEffect: received error while saving check for profile: ${id}`
      );
      throw Error(`checkProfile: ${e}`);
    }
  };

  useEffect(() => {
    console.log(`useEffect as componentDidMount`);
    if (controlledRowId) {
      setControlledRowId(null);
    }
  }, []);

  useLayoutEffect(() => {
    console.log(`GetMatchesByQuery: useEffect event`);
    if (arrayValues[0]) {
      if (!controlledRowId) {
        console.log(
          `GetMatchesByQuery.useEffect: starting to save checked profile`
        );
        checkProfile(arrayValues[0], arrayValues[1], arrayValues[2])
          .then((res) => {
            if (isMountedComp) {
              console.log(
                `GetMatchesByQuery.useEffect clickedRowId: ${arrayValues[0]}`
              );
              console.log(
                `GetMatchesByQuery.useEffect type of clickedRowId: ${typeof arrayValues[0]}`
              );
              setControlledRowId(arrayValues[0]);
              document.getElementById(arrayValues[0]).firstChild.innerText =
                "Нажата: ";
              document.getElementById(arrayValues[0]).style.backgroundColor =
                "blue";
              document.getElementById(arrayValues[0]).style.boxShadow =
                "0 0 7px white";
            }
          })
          .catch((e) => {
            console.error(e);
          });
      } else {
        console.log(
          `GetMatchesByQuery.useEffect: starting to save checked profile: ${arrayValues[0]}, ${arrayValues[1]}, ${arrayValues[2]}`
        );

        checkProfile(arrayValues[0], arrayValues[1], arrayValues[2])
          .then((res) => {
            // console.log(`GetMatchesByQuery.useEffect clickedRowId: ${clickedRowId}`);
            // console.log(`GetMatchesByQuery.useEffect type of clickedRowId: ${typeof clickedRowId}`);
            // setControlledRowId(clickedRowId);
            // document.getElementById(clickedRowId).firstChild.innerText = 'Нажата: ';
            // document.getElementById(clickedRowId).style.backgroundColor = 'blue';

            setControlledRowId(arrayValues[0]);
            console.log(
              `GetMatchesByQuery.useEffect controlledRowId: ${controlledRowId}`
            );
            console.log(
              `GetMatchesByQuery.useEffect clickedRowId: ${arrayValues[0]}`
            );
            document.getElementById(controlledRowId).style.backgroundColor = "";
            document.getElementById(controlledRowId).firstChild.innerText =
              "Ранее была нажата:";
            document.getElementById(arrayValues[0]).firstChild.innerText =
              "Сейчас Нажата: ";
            document.getElementById(arrayValues[0]).style.backgroundColor =
              "blue";
            document.getElementById(arrayValues[0]).style.boxShadow =
              "0 0 7px white";
          })
          .catch((e) => {
            console.error(e);
          });
      }
    }
    return () => false;
  }, [arrayValues[0]]);

  const RenderForm = () => {
    let daysSelectOption = [];

    for (let i = 1; i <= 31; i++) {
      daysSelectOption.push(<option value={`${i}`}> {i} </option>);
    }

    return (
      <React.Fragment>
        <label>
          Данные поиска самого свежего нажатия кнопки "подобрать подходящих":{" "}
          <br />
          {getLocalStorageItem("searchParams")}
        </label>
        <div id="divMatchesByQuery" className="search-matches-container">
          <span> Строка поиска (опционально):</span>
          <input type="text" id="vkquery" />
          <span>Количество (по умолчанию 15)</span>
          <input type="text" id="vkquantity" />
          <span>Offset (по умолчанию 0)</span>
          <input type="text" id="vkoffset" />
          <span>Возраст от (по умолчанию 20)</span>
          <input type="text" id="vkagefrom" onChange={(e) => onChangeAge(e)} />
          <span>Возраст до (по умолчанию 36)</span>
          <input type="text" id="vkageto" onChange={onChangeAge} />
          <label htmlFor="city">Выберите город: </label>
          <select id="city">
            <option value="0">Не выбрано</option>
            <option value="1">Москва</option>
            <option value="39">Владимир</option>
            <option value="122">Рязань</option>
            <option value="246">Тула</option>
            <option value="62">Калуга</option>
            <option value="141">Тверь</option>
            <option value="627">Симферополь</option>
            <option value="991">Можайск</option>
            <option value="107">Орехово-Зуево</option>
            <option value="69">Коломна</option>
            <option value="185">Севастополь</option>
            <option value="155">Химки</option>
            <option value="151">Уфа</option>
          </select>
          <label htmlFor="month">Выберите месяц: </label>
          <select id="month">
            <option value="0">Не выбрано</option>
            <option value="1">Январь</option>
            <option value="2">Февраль</option>
            <option value="3">Март</option>
            <option value="4">Апрель</option>
            <option value="5">Май</option>
            <option value="6">Июнь</option>
            <option value="7">Июль</option>
            <option value="8">Август</option>
            <option value="9">Сентябрь</option>
            <option value="10">Октябрь</option>
            <option value="11">Ноябрь</option>
            <option value="12">Декабрь</option>
          </select>
          <label htmlFor="day">Выберите день: </label>
          <select id="day">
            <option value="0">Не выбрано</option>
            {daysSelectOption}
          </select>
          <label htmlFor="year">Выберите год: </label>
          <select id="year" onChange={() => onPickedYear()}>
            <option value="null">Не выбрано</option>
            <option value="1980">1980</option>
            <option value="1981">1981</option>
            <option value="1982">1982</option>
            <option value="1983">1983</option>
            <option value="1984">1984</option>
            <option value="1985">1985</option>
            <option value="1984">1984</option>
            <option value="1985">1985</option>
            <option value="1986">1986</option>
            <option value="1987">1987</option>
            <option value="1988">1988</option>
            <option value="1989">1989</option>
            <option value="1990">1990</option>
            <option value="1991">1991</option>
            <option value="1992">1992</option>
            <option value="1993">1993</option>
            <option value="1994">1994</option>
            <option value="1995">1995</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
          </select>
          <button
            className="btn btn-info"
            id="getInfobyId"
            onClick={() => getMatches()}
          >
            Подобрать подходящих
          </button>
        </div>
      </React.Fragment>
    );
  };

  if (loading) {
    console.log(`Condition loading is true for rendering`);
    return (
      <div className="loading-text">
        Ожидание получения данных от сервера Web Scraper...
        {/*<Spinner requestName={'SearchProfilesMatchesVK'} />*/}
      </div>
    );
  }

  if (isAfterRequest && matches.length === 0) {
    console.log(
      `Condition isAfterRequest && matches.length === 0 is true for rendering`
    );

    return (
      <React.Fragment>
        <RenderForm />
        {currentOffset && <h3>Текущий offset поиска: {currentOffset}</h3>}
        <div className="vk-page-text">Не найдено подходящих</div>
        <div className="profile-info-block">
          {/* <table class="table"> 
                    <ProfileMatchesDummy />
                </table> */}
        </div>
        <PopupFlexConfProd
          className={popUpType}
          text={mc.POPUP_MESSAGE_SUCCESS_NOT_FOUND_VK_MATCHES}
        />
      </React.Fragment>
    );
  }

  if (!isAfterRequest && matches.length === 0) {
    console.log(
      `Condition !isAfterRequest && matches.length === 0 is true for rendering`
    );

    return (
      <React.Fragment>
        {currentOffset && <h3>Текущий offset поиска: {currentOffset}</h3>}
        <RenderForm />
        <div className="profile-info-block"></div>
      </React.Fragment>
    );
  }

  if (isAfterRequest && matches.length > 0) {
    console.log(
      `Condition isAfterRequest && matches.length > 0 is true for rendering`
    );

    return (
      <React.Fragment>
        <RenderForm />
        <div className="profile-info-block">
          <div className="vk-page-text">
            Данные из VK
            {currentOffset && <h3>Текущий offset поиска: {currentOffset}</h3>}
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Id аккаунта</th>
                <th>Работа с профайлом в Web Data Collector</th>
                <th>Имя Фамилия</th>
                <th>Факт проверки</th>
                <th>Дата время первой проверки</th>
                <th>Дата время самой свежей проверки</th>
                <th>Оценка</th>
                <th>Ребенок</th>
                <th>Отношения</th>
                <th>Веротяность отношений</th>
              </tr>
            </thead>
            <tbody>
              <ProfileMatches
                matches={matches[0]}
                checkedMatches={matches[1]}
                onClickListener={setArrayVals}
                caller="GetMatchesByQuery"
              />
            </tbody>
          </table>
        </div>
        <PopupFlexConfProd
          className={popUpType}
          text={mc.POPUP_MESSAGE_SUCCESS_LOAD_VK_MATCHES}
        />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <RenderForm />
      <div className="profile-info-block"></div>
    </React.Fragment>
  );
};

export default GetMatchesByQuery;
