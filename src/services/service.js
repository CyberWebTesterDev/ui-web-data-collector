import WebSocketAsPromised from "websocket-as-promised";

Date.prototype.addHours = function (h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000);
  return this;
};

export default class GetDataFromWeb {
  _uribase = `http://192.168.1.236:8333/`;

  static _uribaseStatic = `http://192.168.1.236:8333/`;

  dateFields = [
    "creation_date",
    "change_date",
    "first_checked",
    "check_update",
    "update_time",
  ];

  static dateFieldsStatic = [
    "creation_date",
    "change_date",
    "first_checked",
    "check_update",
    "update_time",
  ];

  waitTimeout = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  waitTimeoutErrRandom = (ms) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.8) {
          reject(new Error("Thrown Error from waitTimeoutErr"));
        } else resolve();
      }, ms);
    });
  };

  waitTimeoutErr = async (ms) => {
    setTimeout(() => {
      throw new Error("Error from waitTimeoutErr2");
    }, ms);
  };

  jsonParseArray = (arr) => {
    arr.forEach((el, idx) => {
      arr[idx] = JSON.parse(el);
    });
  };

  static jsonParseArrayStatic = (arr) => {
    arr.forEach((el, idx) => {
      arr[idx] = JSON.parse(el);
    });
  };

  idGenerator = () => {
    const symbols = [
      "a",
      "k",
      "q",
      "dh",
      "er",
      "fi",
      "g",
      "_",
      "=",
      "#",
      "-",
      "_=",
      "/",
      "<",
      "?",
      "!",
    ];
    const ax = Math.floor(Math.random() * 16);
    const bx = Math.floor(Math.random() * 16);
    const cx = Math.floor(Math.random() * 16);
    const dx = Math.floor(Math.random() * 16);
    const ex = Math.floor(Math.random() * 16);
    const fx = Math.floor(Math.random() * 16);

    if (ax < 7) {
      if (bx < 7) {
        const abx = ax * bx + (bx + cx * 200) * (ax + 2) + 37 * ax * bx - ax;
        const bbx = bx + cx + ax * (273 - (ax + cx + dx - ex)) + ax;
        const mix = abx * (bbx + 7 * bx) - dx * ax * 5 + ax + 15;

        const id =
          symbols[dx] +
          symbols[fx] +
          abx.toString() +
          symbols[6] +
          symbols[fx].toUpperCase() +
          symbols[ax] +
          abx.toString() +
          symbols[ax] +
          symbols[5] +
          symbols[cx].toUpperCase() +
          symbols[9] +
          abx.toString() +
          symbols[ex].toUpperCase() +
          symbols[cx] +
          mix.toString() +
          symbols[bx] +
          symbols[14];
        return id;
      }

      if (fx < 5) {
        const abx = ax * bx + (bx + cx * 232) * (ax + 7) + 23 * ax * bx;
        const bbx = bx + cx + ax * (300 + (dx + ex + ax - fx));
        const mix = abx * (bbx + 15) - dx * ax * 5 + ax;

        const id =
          symbols[fx].toUpperCase() +
          symbols[14] +
          symbols[ex] +
          bbx.toString() +
          symbols[5] +
          symbols[fx] +
          symbols[ax].toUpperCase() +
          abx.toString() +
          symbols[cx] +
          symbols[3] +
          symbols[dx] +
          abx.toString() +
          symbols[bx].toUpperCase() +
          symbols[cx] +
          mix.toString() +
          symbols[ax];
        return id;
      }

      if (ex < 5) {
        const abx = ax * bx + (bx + cx * 225) * (ax + 2) + 37 * ax * bx;
        const bbx = bx + cx + ax * (273 - (ax + cx + dx - ex));
        const mix = abx * (bbx + 7 * bx) - dx * ax * 5 + ax;

        const id =
          symbols[dx] +
          symbols[fx] +
          symbols[11] +
          abx.toString() +
          symbols[6] +
          symbols[fx].toUpperCase() +
          symbols[ax] +
          abx.toString() +
          symbols[15] +
          symbols[cx] +
          symbols[3] +
          symbols[cx].toUpperCase() +
          abx.toString() +
          symbols[ex].toUpperCase() +
          symbols[ax] +
          mix.toString() +
          symbols[bx];
        return id;
      }

      const abx = ax * bx + (bx + cx * (217 - bx)) * (ax + 7) + 15 * ax * bx;
      const bbx = bx + cx + ax * (300 + ax + dx + bx - fx);
      const mix = abx * bbx - dx * ax * 5;

      const id =
        symbols[bx] +
        symbols[10] +
        symbols[fx].toUpperCase() +
        abx.toString() +
        symbols[1].toUpperCase() +
        symbols[dx] +
        symbols[ax] +
        abx.toString() +
        symbols[cx].toUpperCase() +
        symbols[2] +
        symbols[dx] +
        bbx.toString() +
        symbols[ax] +
        symbols[dx] +
        mix.toString() +
        symbols[ex];
      return id;
    }

    if (ax > 7) {
      if (bx > 7) {
        const abx = ax * bx + (bx + cx * 173) * (ax + 2) + 37 * ax * bx;
        const bbx = bx + cx + ax * (356 - (ax + cx + dx - ex)) - (ax + bx);
        const mix = abx * (bbx + 7 * bx) - dx * ax * 5 + ax - ax;

        const id =
          symbols[ax] +
          symbols[bx] +
          abx.toString() +
          symbols[6] +
          symbols[fx].toUpperCase() +
          symbols[ax] +
          abx.toString() +
          symbols[ax] +
          symbols[3] +
          symbols[cx].toUpperCase() +
          symbols[7] +
          abx.toString() +
          symbols[cx].toUpperCase() +
          symbols[ex] +
          mix.toString() +
          symbols[bx] +
          symbols[14];
        return id;
      }

      if (ex > 7) {
        const abx = ax * bx + (bx + cx * 225) * (ax + 2) + 37 * ax * bx;
        const bbx = bx + cx + ax * (232 - (ax + cx + dx - bx));
        const mix = abx * (bbx + 7 * bx) - dx * ax * 5 + bx - fx;

        const id =
          symbols[fx] +
          symbols[fx] +
          abx.toString() +
          symbols[6] +
          symbols[fx].toUpperCase() +
          symbols[ax] +
          abx.toString() +
          symbols[ax] +
          symbols[5] +
          symbols[ex].toUpperCase() +
          symbols[9] +
          abx.toString() +
          symbols[ax].toUpperCase() +
          symbols[cx] +
          mix.toString() +
          symbols[bx] +
          symbols[15];
        return id;
      }

      const abx = ax * bx + (bx + cx * 200) * (ax + 7) + 15 * ax * bx;
      const bbx = bx + cx + ax * (117 * fx + ex);
      const mix = abx * bbx - dx * ax * 5 + ax;

      const id =
        symbols[ax] +
        symbols[cx] +
        abx.toString() +
        symbols[2] +
        symbols[fx].toUpperCase() +
        symbols[ax] +
        abx.toString() +
        symbols[cx] +
        symbols[1] +
        symbols[12] +
        symbols[dx].toUpperCase() +
        bbx.toString() +
        symbols[ax] +
        symbols[dx] +
        mix.toString() +
        symbols[ex].toUpperCase();
      return id;
    }
  };

  static idGeneratorStatic = () => {
    const symbols = [
      "a",
      "k",
      "q",
      "dh",
      "er",
      "fi",
      "g",
      "_",
      "=",
      "#",
      "-",
      "_=",
      "/",
      "<",
      "?",
      "!",
    ];
    const ax = Math.floor(Math.random() * 16);
    const bx = Math.floor(Math.random() * 16);
    const cx = Math.floor(Math.random() * 16);
    const dx = Math.floor(Math.random() * 16);
    const ex = Math.floor(Math.random() * 16);
    const fx = Math.floor(Math.random() * 16);

    if (ax < 7) {
      if (bx < 7) {
        const abx = ax * bx + (bx + cx * 200) * (ax + 2) + 37 * ax * bx - ax;
        const bbx = bx + cx + ax * (273 - (ax + cx + dx - ex)) + ax;
        const mix = abx * (bbx + 7 * bx) - dx * ax * 5 + ax + 15;

        const id =
          symbols[dx] +
          symbols[fx] +
          abx.toString() +
          symbols[6] +
          symbols[fx].toUpperCase() +
          symbols[ax] +
          abx.toString() +
          symbols[ax] +
          symbols[5] +
          symbols[cx].toUpperCase() +
          symbols[9] +
          abx.toString() +
          symbols[ex].toUpperCase() +
          symbols[cx] +
          mix.toString() +
          symbols[bx] +
          symbols[14];
        return id;
      }

      if (fx < 5) {
        const abx = ax * bx + (bx + cx * 232) * (ax + 7) + 23 * ax * bx;
        const bbx = bx + cx + ax * (300 + (dx + ex + ax - fx));
        const mix = abx * (bbx + 15) - dx * ax * 5 + ax;

        const id =
          symbols[fx].toUpperCase() +
          symbols[14] +
          symbols[ex] +
          bbx.toString() +
          symbols[5] +
          symbols[fx] +
          symbols[ax].toUpperCase() +
          abx.toString() +
          symbols[cx] +
          symbols[3] +
          symbols[dx] +
          abx.toString() +
          symbols[bx].toUpperCase() +
          symbols[cx] +
          mix.toString() +
          symbols[ax];
        return id;
      }

      if (ex < 5) {
        const abx = ax * bx + (bx + cx * 225) * (ax + 2) + 37 * ax * bx;
        const bbx = bx + cx + ax * (273 - (ax + cx + dx - ex));
        const mix = abx * (bbx + 7 * bx) - dx * ax * 5 + ax;

        const id =
          symbols[dx] +
          symbols[fx] +
          symbols[11] +
          abx.toString() +
          symbols[6] +
          symbols[fx].toUpperCase() +
          symbols[ax] +
          abx.toString() +
          symbols[15] +
          symbols[cx] +
          symbols[3] +
          symbols[cx].toUpperCase() +
          abx.toString() +
          symbols[ex].toUpperCase() +
          symbols[ax] +
          mix.toString() +
          symbols[bx];
        return id;
      }

      const abx = ax * bx + (bx + cx * (217 - bx)) * (ax + 7) + 15 * ax * bx;
      const bbx = bx + cx + ax * (300 + ax + dx + bx - fx);
      const mix = abx * bbx - dx * ax * 5;

      const id =
        symbols[bx] +
        symbols[10] +
        symbols[fx].toUpperCase() +
        abx.toString() +
        symbols[1].toUpperCase() +
        symbols[dx] +
        symbols[ax] +
        abx.toString() +
        symbols[cx].toUpperCase() +
        symbols[2] +
        symbols[dx] +
        bbx.toString() +
        symbols[ax] +
        symbols[dx] +
        mix.toString() +
        symbols[ex];
      return id;
    }

    if (ax > 7) {
      if (bx > 7) {
        const abx = ax * bx + (bx + cx * 173) * (ax + 2) + 37 * ax * bx;
        const bbx = bx + cx + ax * (356 - (ax + cx + dx - ex)) - (ax + bx);
        const mix = abx * (bbx + 7 * bx) - dx * ax * 5 + ax - ax;

        const id =
          symbols[ax] +
          symbols[bx] +
          abx.toString() +
          symbols[6] +
          symbols[fx].toUpperCase() +
          symbols[ax] +
          abx.toString() +
          symbols[ax] +
          symbols[3] +
          symbols[cx].toUpperCase() +
          symbols[7] +
          abx.toString() +
          symbols[cx].toUpperCase() +
          symbols[ex] +
          mix.toString() +
          symbols[bx] +
          symbols[14];
        return id;
      }

      if (ex > 7) {
        const abx = ax * bx + (bx + cx * 225) * (ax + 2) + 37 * ax * bx;
        const bbx = bx + cx + ax * (232 - (ax + cx + dx - bx));
        const mix = abx * (bbx + 7 * bx) - dx * ax * 5 + bx - fx;

        const id =
          symbols[fx] +
          symbols[fx] +
          abx.toString() +
          symbols[6] +
          symbols[fx].toUpperCase() +
          symbols[ax] +
          abx.toString() +
          symbols[ax] +
          symbols[5] +
          symbols[ex].toUpperCase() +
          symbols[9] +
          abx.toString() +
          symbols[ax].toUpperCase() +
          symbols[cx] +
          mix.toString() +
          symbols[bx] +
          symbols[15];
        return id;
      }

      const abx = ax * bx + (bx + cx * 200) * (ax + 7) + 15 * ax * bx;
      const bbx = bx + cx + ax * (117 * fx + ex);
      const mix = abx * bbx - dx * ax * 5 + ax;

      const id =
        symbols[ax] +
        symbols[cx] +
        abx.toString() +
        symbols[2] +
        symbols[fx].toUpperCase() +
        symbols[ax] +
        abx.toString() +
        symbols[cx] +
        symbols[1] +
        symbols[12] +
        symbols[dx].toUpperCase() +
        bbx.toString() +
        symbols[ax] +
        symbols[dx] +
        mix.toString() +
        symbols[ex].toUpperCase();
      return id;
    }
  };

  formatDataExt = (arr, dateParamNameArr) => {
    arr.forEach((el, idx) => {
      for (let k in el) {
        for (let i = 0; i < dateParamNameArr.length; i++) {
          if (k === dateParamNameArr[i]) {
            if (el[k]) {
              arr[idx][k] = new Date(el[k]);
              arr[idx][k].addHours(3);
              arr[idx][k] = el[k]
                .toISOString()
                .replace("T", " ")
                .replace("Z", "");
            }
          }
        }
      }
    });
  };

  formatDataExtLight = (arr, dateParamNameArr) => {
    arr.forEach((el, idx) => {
      for (let k in el) {
        for (let i = 0; i < dateParamNameArr.length; i++) {
          if (k === dateParamNameArr[i]) {
            if (el[k]) {
              arr[idx][k] = new Date(el[k]);
              arr[idx][k].addHours(3);
              arr[idx][k] =
                el[k]
                  .toISOString()
                  .replace("T", " ")
                  .replace("Z", "")
                  .split(".")[0]
                  .split(":")[0] +
                ":" +
                el[k]
                  .toISOString()
                  .replace("T", " ")
                  .replace("Z", "")
                  .split(".")[0]
                  .split(":")[1];
            }
          }
        }
      }
    });
  };

  static formatDataExtLightStatic = (arr, dateParamNameArr) => {
    arr.forEach((el, idx) => {
      for (let k in el) {
        for (let i = 0; i < dateParamNameArr.length; i++) {
          if (k === dateParamNameArr[i]) {
            if (el[k]) {
              arr[idx][k] = new Date(el[k]);
              arr[idx][k].addHours(3);
              arr[idx][k] =
                el[k]
                  .toISOString()
                  .replace("T", " ")
                  .replace("Z", "")
                  .split(".")[0]
                  .split(":")[0] +
                ":" +
                el[k]
                  .toISOString()
                  .replace("T", " ")
                  .replace("Z", "")
                  .split(".")[0]
                  .split(":")[1];
            }
          }
        }
      }
    });
  };

  getDefaultMovies = async () => {
    const result = await fetch(`${this._uribase}getdefmov`);
    if (!result.ok) {
      throw new Error(
        `Could not fetch data from server and response status is ${result.status}`
      );
    }
    const body = await result.json();
    console.log(`getDefaultMovies response is ${body}`);
    return body;
  };

  getFilmsWithRangeIds = async (from, to) => {
    const result = await fetch(`${this._uribase}getdefmov/${from}/${to}`);
    if (!result.ok) {
      throw new Error(
        `Could not fetch data from server and response status is ${result.status}`
      );
    }
    const body = await result.json();
    console.log(`getDefaultMovies response is ${body}`);
    return body;
  };

  getProfileInfoById = async (profileId) => {
    const _apiserv = `http://192.168.1.236:8333/vkget/`;

    try {
      const result = await fetch(`${_apiserv}${profileId}`);
      const data = await result.json();
      return data;
    } catch (e) {
      throw e;
    }
  };
//получение данных о профайле через VK API
  static getProfileInfoByIdStatic = async (profileId) => {
    const _apiserv = `http://192.168.1.236:8333/vkget/`;

    try {
      const result = await fetch(`${_apiserv}${profileId}`);
      const data = await result.json();
      return data;
    } catch (e) {
      throw e;
    }
  };

  static getProfileFromDBStatic = async (profileId) => {
    const _apiserv = `http://192.168.1.236:8333/dbmanager/searchsingleprofiledb/`;

    try {
      const result = await fetch(`${_apiserv}${profileId}`);
      const data = await result.json();
      this.jsonParseArrayStatic(data);
      console.log(`getProfileFromDBStatic received data`);
      console.log(data);
      return data;
    } catch (e) {
      throw e;
    }
  };

  static getProfileDataExtendedStatic = async (profileId) => {
    const _apiserv = `http://192.168.1.236:8333/dbmanager/selectprofiledataextended/`;

    try {
      const result = await fetch(`${_apiserv}${profileId}`);
      const data = await result.json();
      this.jsonParseArrayStatic(data);
      console.log(`getProfileDataExtendedStatic received data`);
      console.log(data);
      return data;
    } catch (e) {
      throw e;
    }
  };

  static enrichProfileToDBStatic = async (profile) => {
    console.log(`enrichProfileToDBStatic has been called`);
    console.log(profile);

    const url = `http://192.168.1.236:8333/dbmanager/insertupdprofile`;

    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(profile),
    });
    if (result.ok) {
      const response = await result.json();
      console.log(`Received response from server`);
      console.log(response);
      return response;
    } else {
      throw Error(`HTTP error: ${result.status}`);
    }
  };

  getMatchProfilesRange = async (startId, quantity) => {
    const to = parseInt(startId, 10) + parseInt(quantity, 10);

    console.log(
      `getMatchProfilesRange from ${startId} to ${to}, quantity: ${quantity}`
    );

    const _apiserv = `http://192.168.1.236:8333/vkget/matchprofiles/`;

    try {
      const result = await fetch(`${_apiserv}${startId}/${quantity}`);
      const data = await result.json();
      console.log(data);
      return data;
    } catch (e) {
      throw e;
    }
  };

  getMatchProfilesByQuery = async (query, qnt, offset, f, t, c, y, m, day) => {
    console.log(
      `getMatchProfilesByQuery has been called with query: ${query}, ${qnt}, ${offset}, ${f}, ${t}, ${c}, ${y}, ${m}, ${day}`
    );

    const _apiserv = `http://192.168.1.236:8333/matchfromsearch/`;

    try {
      const result = await fetch(
        `${_apiserv}${encodeURIComponent(
          query
        )}/${qnt}/${offset}/${f}/${t}/${c}/${y}/${m}/${day}`
      );
      const data = await result.json();
      console.log(data);
      return data;
    } catch (e) {
      throw e;
    }
  };

  savePostOld = async (title, text) => {
    //переделать в POST

    console.log(`savePost has been called with params: ${title}, ${text}`);

    if (!text) {
      text = " ";
    }

    await this.waitTimeout(1000);
    try {
      const result = await fetch(
        `${this._uribase}insertpost/${encodeURIComponent(
          title
        )}/${encodeURIComponent(text)}`
      );
      const response = await result.json();
      return response;
    } catch (e) {
      throw e;
    }
  };

  savePost = async (postData) => {
    let { text } = postData;

    console.log(`savePost has been called with data:`);
    console.log(postData);

    const url = this._uribase + "insertpost/";

    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(postData),
    });
    if (result.ok) {
      const response = await result.json();
      console.log(`Received response for saving post data`);
      console.log(response);
      return response;
    } else {
      throw Error(
        `HTTP error while trying to save post data with code: ${result.status}`
      );
    }
  };

  searchPosts = async () => {
    console.log(`GetDataFromWeb: searchPosts has been called`);
    await this.waitTimeout(2000);

    try {
      const result = await fetch(`${this._uribase}dbmanager/searchposts`);
      const response = await result.json();
      console.log(`GetDataFromWeb: posts has been received`);
      this.jsonParseArray(response);
      this.formatDataExtLight(response, this.dateFields);
      console.log(response);
      return response;
    } catch (e) {
      throw e;
    }
  };

  checkProfile = async (profileId) => {
    console.log(
      `GetDataFromWeb: checkProfile has been called with parameter profileId: ${profileId}`
    );

    try {
      const result = await fetch(
        `${this._uribase}dbmanager/searchcheckedprofile/${profileId}`
      );
      const response = await result.json();
      console.log(
        `GetDataFromWeb: check data for profile ${profileId} has been received`
      );
      this.jsonParseArray(response);
      this.formatDataExt(response, this.dateFields);
      console.log(response);
      return response;
    } catch (e) {
      console.error(`getMatchProfilesByQuery.checkProfile.Exception: ${e}`);
      throw e;
    }
  };

  static getProfileCheckByIdStatic = async (profileId) => {
    console.log(
      `GetDataFromWeb: static checkProfile has been called with parameter profileId: ${profileId}`
    );

    try {
      const result = await fetch(
        `${this._uribaseStatic}dbmanager/searchcheckedprofile/${profileId}`
      );
      const response = await result.json();
      console.log(
        `GetDataFromWeb: check data for profile ${profileId} has been received`
      );
      this.jsonParseArrayStatic(response);
      this.formatDataExtLightStatic(response, this.dateFieldsStatic);
      console.log(response);
      return response;
    } catch (e) {
      console.error(`getMatchProfilesByQuery.checkProfile.Exception: ${e}`);
      throw e;
    }
  };

  getAllCheckedProfiles = async () => {
    try {
      const result = await fetch(
        `${this._uribase}dbmanager/searchcheckedprofiles`
      );
      const response = await result.json();
      console.log(`GetDataFromWeb: All checked posts has been received`);
      this.jsonParseArray(response);
      this.formatDataExtLight(response, this.dateFields);
      //console.log(response);
      return response;
    } catch (e) {
      throw e;
    }
  };

  updateEstimationProfile = async (estimation, profileId) => {
    if (estimation && profileId) {
      try {
        const result = await fetch(
          `${this._uribase}dbmanager/updestim/${estimation}/${profileId}`
        );
        const response = await result.json();
        console.log(`GetDataFromWeb: received result for estimation update`);
        console.log(response);
        return response;
      } catch (e) {
        throw e;
      }
    } else {
      throw Error(
        `updateEstimationProfile.Exception: estimation or profileId is not valid`
      );
    }
  };

  static updateEstimationProfileStatic = async (estimation, profileId) => {
    if (estimation && profileId) {
      try {
        const result = await fetch(
          `${this._uribaseStatic}dbmanager/updestim/${estimation}/${profileId}`
        );
        const response = await result.json();
        console.log(`GetDataFromWeb: received result for estimation update`);
        console.log(response);
        return response;
      } catch (e) {
        throw e;
      }
    } else {
      throw Error(
        `updateEstimationProfileStatic.Exception: estimation or profileId is not valid`
      );
    }
  };

  updateCorrelationEstimationProfile = async (correlationEst, profileId) => {
    if (correlationEst && profileId) {
      try {
        const result = await fetch(
          `${this._uribase}dbmanager/updcorrelationest/${correlationEst}/${profileId}`
        );
        const response = await result.json();
        console.log(
          `GetDataFromWeb: received result for correlation estimation update`
        );
        console.log(response);
        return response;
      } catch (e) {
        throw e;
      }
    } else {
      throw Error(
        `updateEstimationProfile.Exception: correlation estimation or profileId is not valid`
      );
    }
  };

  updateHasChild = async (bool, profileId) => {
    if (profileId && bool) {
      try {
        const result = await fetch(
          `${this._uribase}dbmanager/upd/haschild/${bool}/${profileId}`
        );
        const response = await result.json();
        console.log(`GetDataFromWeb: received result for has_child update`);
        console.log(response);
        return response;
      } catch (e) {
        throw e;
      }
    } else {
      throw Error(`updateHasChild.Exception: bool or profileId is not valid`);
    }
  };

  updateIsInRelationship = async (bool, profileId) => {
    if (profileId && bool) {
      try {
        const result = await fetch(
          `${this._uribase}dbmanager/upd/isinrelationship/${bool}/${profileId}`
        );
        const response = await result.json();
        console.log(
          `GetDataFromWeb: received result for is_in_relationship update`
        );
        console.log(response);
        return response;
      } catch (e) {
        throw e;
      }
    } else {
      throw Error(
        `updateIsInRelationship.Exception: bool or profileId is not valid`
      );
    }
  };

  updateIsFavorite = async (bool, profileId) => {
    console.log(`updateIsFavorite: type of bool ${bool}: ${typeof bool}`);
    if (profileId && (bool === true || bool === false)) {
      try {
        const result = await fetch(
          `${this._uribase}dbmanager/updfavor/${bool}/${profileId}`
        );
        const response = await result.json();
        console.log(`GetDataFromWeb: received result for is_favorite update`);
        console.log(response);
        return response;
      } catch (e) {
        throw e;
      }
    } else {
      throw Error(`updateIsFavorite.Exception: bool or profileId is not valid`);
    }
  };

  updateIsRelated = async (bool, profileId) => {
    console.log(`updateIsRelated: type of bool ${bool}: ${typeof bool}`);
    if (profileId && (bool === "true" || bool === "false")) {
      try {
        const result = await fetch(
          `${this._uribase}dbmanager/updrelated/${bool}/${profileId}`
        );
        const response = await result.json();
        console.log(`GetDataFromWeb: received result for is_related update`);
        console.log(response);
        return response;
      } catch (e) {
        throw e;
      }
    } else {
      throw Error(`updateIsRelated.Exception: bool or profileId is not valid`);
    }
  };

  updateBirthYear = async (year, profileId) => {
    if (profileId && year) {
      try {
        const result = await fetch(
          `${this._uribase}dbmanager/updbirthyear/${year}/${profileId}`
        );
        const response = await result.json();
        console.log(`GetDataFromWeb: received result for is_favorite update`);
        console.log(response);
        return response;
      } catch (e) {
        throw e;
      }
    } else {
      throw Error(`updateBirthYear.Exception: year or profileId is not valid`);
    }
  };

  insertUpdateCheckedProfile = async (
    profileId,
    firstName,
    lastName,
    pickedYear = ""
  ) => {
    pickedYear
      ? console.log(
          `GetDataFromWeb: insertUpdateCheckedProfile has been called with pocked year in parameters: ${profileId}, ${firstName}, ${lastName}, ${pickedYear}`
        )
      : console.log(
          `GetDataFromWeb: insertUpdateCheckedProfile has been called with parameters: ${profileId}, ${firstName}, ${lastName}`
        );

    if (profileId && firstName && lastName) {
      try {
        let result;
        pickedYear
          ? (result = await fetch(
              `${this._uribase}insertcheck/${profileId}/${encodeURIComponent(
                firstName
              )}/${encodeURIComponent(lastName)}/${pickedYear}`
            ))
          : (result = await fetch(
              `${this._uribase}insertcheck/${profileId}/${encodeURIComponent(
                firstName
              )}/${encodeURIComponent(lastName)}/0`
            ));
        const response = await result.json();
        console.log(
          `GetDataFromWeb: insertUpdateCheckedProfile received response for profile: ${profileId}`
        );
        console.log(response);
        return response;
      } catch (e) {
        throw e;
      }
    } else {
      throw new Error(
        `GetDataFromWeb.insertUpdateCheckedProfile.Exception: profileId has not been passed!`
      );
    }
  };

  static insertUpdateCheckedProfileSingleStatic = async (
    profileId,
    firstName,
    lastName
  ) => {
    console.log(
      `GetDataFromWeb: insertUpdateCheckedProfileSingleStatic has been called with parameters: ${profileId}, ${firstName}, ${lastName}`
    );

    if (profileId && firstName && lastName) {
      try {
        const result = await fetch(
          `${
            this._uribaseStatic
          }dbmanager/insertchecksingle/${profileId}/${encodeURIComponent(
            firstName
          )}/${encodeURIComponent(lastName)}`
        );
        const response = await result.json();
        console.log(
          `GetDataFromWeb: insertUpdateCheckedProfileSingleStatic received response for profile: ${profileId}`
        );
        console.log(response);
        return response;
      } catch (e) {
        throw e;
      }
    } else {
      throw new Error(
        `GetDataFromWeb.insertUpdateCheckedProfileSingleStatic.Exception: profileId has not been passed!`
      );
    }
  };

  static insertStaticUpdateCheckedProfile = async (
    profileId,
    firstName,
    lastName
  ) => {
    console.log(
      `GetDataFromWeb: insertUpdateCheckedProfile has been called with parameters: ${profileId}, ${firstName}, ${lastName}`
    );

    if (profileId && firstName && lastName) {
      try {
        const result = await fetch(
          `${this._uribase}insertcheck/${profileId}/${encodeURIComponent(
            firstName
          )}/${encodeURIComponent(lastName)}`
        );
        const response = await result.json();
        console.log(
          `GetDataFromWeb: insertUpdateCheckedProfile received response for profile: ${profileId}`
        );
        console.log(response);
        return response;
      } catch (e) {
        throw e;
      }
    } else {
      throw new Error(
        `GetDataFromWeb.insertUpdateCheckedProfile.Exception: profileId has not been passed!`
      );
    }
  };

  wsGetMatches = async (s, q) => {
    console.log("Starting to handle WS interaction with server");

    //const wsp = new WebSocketAsPromised('ws://192.168.1.236:8333/matchprofiles')

    const wsp = new WebSocketAsPromised(
      "ws://192.168.1.236:8333/matchprofiles",
      {
        packMessage: (data) => JSON.stringify(data),
        unpackMessage: (data) => JSON.parse(data),
      }
    );

    const requestId = this.idGenerator();

    const request = { startId: s, quantity: q };

    wsp
      .open()
      .then(() => {
        console.log(`WS connection has been opened for requestId ${requestId}`);
        wsp.send(JSON.stringify({ ...request, id: requestId }));
      })
      .then((res) => {
        console.log("RAW Response ");
        console.log(res);
        console.log(JSON.parse(res));
        console.log(`WS response has been received for requestId ${requestId}`);
        //wsp.close()
        return res;
      });
  };
}
