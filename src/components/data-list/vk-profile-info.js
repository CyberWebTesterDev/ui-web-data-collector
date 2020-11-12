import React from "react";
import vkDataMapper from "../../services/helper";
import GetTestData from "../../services/service-test";

const ProfileInfo = ({ profile }) => {
  const GTD = new GetTestData();

  let Objkeysval = [];

  for (let key in profile) {
    if (
      key !== "photo_max" &&
      key !== "photo_100" &&
      key !== "photo_max_orig" &&
      key !== "counters.videos" &&
      key !== "counters.audios" &&
      key !== "counters.online_friends" &&
      key !== "counters.mutual_friends"
    ) {
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

  //  return (
  //      <React.Fragment>
  //         <div className="profile-details">
  //             <img src={obj.photo_100} alt="photo-user" width="200" height="200"/>
  //             <a href={obj.photo_max_orig} target="_blank">ссылка на фото</a>
  //             <span key={obj.id}><font>id:</font> {obj.id}</span>
  //             <span key={obj.id+1}><font>bdate:</font> {obj.bdate}</span>
  //             <span key={obj.id+2}><font>can_access_closed:</font> {obj.can_access_closed.toString()}</span>
  //             <span key={obj.id+3}><font>city.title:</font> {obj.city.title}</span>
  //             <span key={obj.id+4}><font>first_name:</font> {obj.first_name}</span>
  //             <span key={obj.id+5}><font>last_name:</font> {obj.last_name}</span>
  //             <span key={obj.id+6}><font>is_closed:</font> { obj.is_closed.toString() }</span>
  //             <span key={obj.id+7}><font>sex:</font> {vkDataMapper(obj.sex, 'sex')}</span>
  //             <span key={obj.id+9}><font>followers_count:</font> {obj.followers_count}</span>
  //             <span key={obj.id+10}><font>friends_count:</font> {obj.counters.friends}</span>
  //             <span key={obj.id+11}><font>photos_count:</font> {obj.counters.photos}</span>
  //             <span key={obj.id+12}><font>relation:</font> {vkDataMapper(obj.relation, 'relation')}</span>
  //             <span key={obj.id+13}><font>online:</font> {obj.online}</span>
  //             <span key={obj.id+14}><font>country:</font> {obj.country.title}</span>
  //         </div>
  //     </React.Fragment>
  //  )
};

export default ProfileInfo;
