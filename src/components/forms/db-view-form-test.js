import React, { useState, useEffect } from "react";
import ST from "../../services/service-test-typed";
// import type { TPost } from "../../services/service-test-typed";
import Spinner from "../spinner/spinner";
import { showPopup, PopupFlexConfProd } from "../helpers/popup-util";
import * as mc from "../helpers/main-constants";

export const DBViewLogicTest = () => {
  const st = new ST();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [popUpType, setPopUpType] = useState();
  const [popupMessage, setPopUpMessage] = useState();

  // const getTestPosts = async () => {

  //     const postList = await st.searchTestPosts;
  //     return postList;

  // }

  // (async () => {
  //     console.log(`DBViewLogicTest: async function is running`);
  //     setLoading(true);
  //     const postsData = await getTestPosts();
  //     setLoading(false);
  //     setPosts(postsData);
  //     setLoading(false);
  //     return;

  // })();
  useEffect(() => {
    console.log(`DBViewLogicTest: starting to collect posts data`);
    setLoading(true);
    st.searchTestPosts()
      .then((postList) => {
        console.log(`post list has been received`);
        console.log(postList);
        setPosts(postList);
        setLoading(false);
        setPopUpMessage(mc.SUCCESS_POPUP_MESSAGE);
        showPopup(mc.POPUP_CONTAINER_BOTTOM_RIGHT, setPopUpType);
      })
      .catch((e) => {
        setLoading(false);
        setPopUpMessage(mc.ERROR_POPUP_MESSAGE);
        showPopup(mc.POPUP_CONTAINER_CENTER_ERROR, setPopUpType);
      });
  }, []);

  if (loading) {
    return (
      <React.Fragment>
        <Spinner requestName="getTestPosts" />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <table className="table">
        <THeadPostsMakerTest obj={posts[0]} />
        <TbodyTestRenderer list={posts} />
      </table>
      <PopupFlexConfProd className={popUpType} text={popupMessage} />
    </React.Fragment>
  );
};

const THeadPostsMakerTest = (props) => {
  let ths = [];
  for (let key in props.obj) {
    ths.push(<th>{key}</th>);
  }
  return (
    <thead>
      <tr>{ths}</tr>
    </thead>
  );
};

const TDMakerTest = (props) => {
  let tds = [];
  for (let key in props.obj) {
    tds.push(<td>{props.obj[key]}</td>);
  }
  return tds;
};

const TRTableTestFiller = ({ list }) => {
  if (list.length > 0) {
    return list.map((el) => {
      if (el) {
        return (
          <React.Fragment>
            <tr>
              <TDMakerTest obj={el} />
            </tr>
          </React.Fragment>
        );
      }
    });
  }
  return false;
};

const TbodyTestRenderer = ({ list }) => {
  return (
    <tbody>
      <TRTableTestFiller list={list} />
    </tbody>
  );
};
