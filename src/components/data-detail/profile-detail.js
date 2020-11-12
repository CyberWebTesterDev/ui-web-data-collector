import React, { useState, useEffect } from "react";
import vkDataMapper from "../../services/helper";
import GetTestData from "../../services/service-test";
import GetDataFromWeb from "../../services/service";

const ProfileDetails = (id) => {
  const GTD = new GetTestData();
  const GDF = new GetDataFromWeb();

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    GDF.getProfileInfoById.then((profile) => {
      setLoading(false);
      setProfile(profile);
    });
  });
  let Objkeysval = [];

  for (let key in profile) {
    if (key === "last_seen.time") {
      const dateSeen = new Date(profile[key] * 1000)
        .toISOString()
        .replace("T", " ")
        .replace("Z", " ");

      Objkeysval.push(
        <span key={GTD.idGenerator()}>
          <font>{key}: </font> {dateSeen}
        </span>
      );
    } else {
      Objkeysval.push(
        <span key={GTD.idGenerator()}>
          <font>{key}: </font> {profile[key].toString()}
        </span>
      );
    }
  }

  return (
    <div className="profile-details">
      <img src={profile.photo_100} alt="photo-user" width="200" height="200" />
      <a href={profile.photo_max_orig} target="_blank">
        ссылка на фото
      </a>
      {Objkeysval}
    </div>
  );
};

export default ProfileDetail;
