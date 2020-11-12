import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GetDataFromWeb from "../../services/service";
import Spinner from "../spinner/spinner";

const ProfileDetails2 = () => {
  const GDF = new GetDataFromWeb();
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const Loading = () => {
    return (
      <div className="loading-text">
        Ожидание получения данных от сервера Web Scraper...
        <Spinner />
      </div>
    );
  };

  const RenderData = ({ profile }) => {
    let Objkeysval = [];
    for (let key in profile) {
      if (key === "last_seen.time") {
        const dateSeen = new Date(profile[key] * 1000)
          .toISOString()
          .replace("T", " ")
          .replace("Z", " ");
        Objkeysval.push(
          <span key={GDF.idGenerator()}>
            <font>{key}: </font> {dateSeen}
          </span>
        );
      } else if (key === "id") {
        Objkeysval.push(
          <span key={GDF.idGenerator()}>
            <font>{key}: </font>
            <a href={`https://vk.com/id${profile[key]}`} target="_blank">
              {profile[key].toString()}
            </a>
          </span>
        );
      } else {
        Objkeysval.push(
          <span key={GDF.idGenerator()}>
            <font>{key}: </font>
            {profile[key].toString()}
          </span>
        );
      }
    }

    return (
      <React.Fragment>
        <img src={profile.photo_max} width="200" height="200" />
        <div id="controlPanel">
          <button className="btn-primary">Записать в БД</button>
        </div>
        <div className="profile-details">{Objkeysval}</div>
      </React.Fragment>
    );
  };

  //запускается только при первом рендере компонента
  useEffect(() => {
    if (id) {
      setLoading(true);
      GDF.getProfileInfoById(id).then((profile) => {
        setLoading(false);
        setProfile(profile);
      });
    }
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (Object.keys(profile).length !== 0) {
    return (
      <React.Fragment>
        <div className="profile-detail-header">
          <h4>Данные о профайле с ID {id}</h4>
          <label> {Boolean(id).toString()}</label>
        </div>
        <RenderData profile={profile} />
      </React.Fragment>
    );
  }
  if (Object.keys(profile).length === 0) {
    return <NullIndicator />;
  }
};

export default ProfileDetails2;
