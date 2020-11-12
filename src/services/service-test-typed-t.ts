//@flow
export type TPost = {
  id: string,
  title: string,
  text: string,
  creation_date: string,
  change_date: string,
  author: string,
};

export default class GetTestDataTyped {
  postList: Array<string> = [
    '{"id":"1","title":"TestPost#1","text":"Some text for post","creation_date":"2020-05-10T13:49:35.594Z","change_date":"2020-05-10T13:49:35.594Z","author":"Anatoly Loskutov"}',
    '{"id":"2","title":"TestPostDirectlyFromDbApp#2","text":"Some text for post directly","creation_date":"2020-05-10T13:50:42.580Z","change_date":"2020-05-10T13:50:42.580Z","author":"Anatoly Loskutov"}',
    '{"id":"3","title":"100","text":"110","creation_date":"2020-05-10T15:24:09.187Z","change_date":"2020-05-10T15:24:09.187Z","author":"Anatoly Loskutov"}',
    '{"id":"4","title":"120text","text":"110texttext","creation_date":"2020-05-10T15:25:37.602Z","change_date":"2020-05-10T15:25:37.602Z","author":"Anatoly Loskutov"}',
    '{"id":"5","title":"220text","text":"210texttext","creation_date":"2020-05-10T15:26:50.661Z","change_date":"2020-05-10T15:26:50.661Z","author":"webscraper"}',
    '{"id":"6","title":"rhrtrtt","text":"tntntn","creation_date":"2020-05-11T12:23:11.477Z","change_date":"2020-05-11T12:23:11.477Z","author":"webscraper"}',
    '{"id":"7","title":"rfhbrhrhr","text":"rhrhhrhr","creation_date":"2020-05-11T12:24:35.554Z","change_date":"2020-05-11T12:24:35.554Z","author":"webscraper"}',
    '{"id":"8","title":"Post from UI","text":"This post has been submitted from UI ","creation_date":"2020-05-11T12:25:21.447Z","change_date":"2020-05-11T12:25:21.447Z","author":"webscraper"}',
    '{"id":"9","title":"Post from UI","text":"Второй пост из UI","creation_date":"2020-05-11T12:39:59.700Z","change_date":"2020-05-11T12:39:59.700Z","author":"webscraper"}',
    '{"id":"10","title":"Пост из UI без заполненного текста","text":" ","creation_date":"2020-05-13T19:02:01.081Z","change_date":"2020-05-13T19:02:01.081Z","author":"webscraper"}',
    '{"id":"11","title":"Пост из UI без заполненного текста (2)","text":" ","creation_date":"2020-05-13T19:02:47.749Z","change_date":"2020-05-13T19:02:47.749Z","author":"webscraper"}',
  ];

  targetList: Array<TPost> = [];

  waitTimeout = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  waitTimeoutErrRandom = (ms: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.8) {
          reject(new Error("Thrown Error from waitTimeoutErr"));
        } else resolve();
      }, ms);
    });
  };

  waitTimeoutErr = async (ms: number): Promise<void> => {
    setTimeout(() => {
      throw new Error("Error from waitTimeoutErr2");
    }, ms);
  };

  jsonParseArray = (arr: Array<string>) => {
    arr.forEach((el, idx) => {
      arr[idx] = JSON.parse(el);
    });
  };

  idGenerator = (): string => {
    const letters: Array<string> = ["a", "k", "q", "dh", "er", "fi", "g"];
    const ax = Math.floor(Math.random() * 7);
    const bx = Math.floor(Math.random() * 7);
    const cx = Math.floor(Math.random() * 7);
    const dx = Math.floor(Math.random() * 7);
    const ex = Math.floor(Math.random() * 7);
    const fx = Math.floor(Math.random() * 7);

    if (ax + bx < 10) {
      const abx = ax * bx + (bx + cx * (217 - bx)) * (ax + 7) + 15 * ax * bx;
      const bbx = bx + cx + ax * (300 + ax + dx + bx - fx);
      const mix = abx * bbx - dx * ax * 5;

      const id =
        letters[bx] +
        letters[fx].toUpperCase() +
        abx.toString() +
        letters[1].toUpperCase() +
        letters[dx] +
        letters[ax] +
        abx.toString() +
        letters[cx].toUpperCase() +
        letters[2] +
        letters[dx] +
        bbx.toString() +
        letters[ax] +
        letters[dx] +
        mix.toString() +
        letters[ex];
      return id;
    }

    if (ax + cx < 10) {
      const abx = ax * bx + (bx + cx * 200) * (ax + 7) + 15 * ax * bx;
      const bbx = bx + cx + ax * (117 * fx + ex);
      const mix = abx * bbx - dx * ax * 5 + ax;

      const id =
        letters[ax] +
        letters[cx] +
        abx.toString() +
        letters[2] +
        letters[fx].toUpperCase() +
        letters[ax] +
        abx.toString() +
        letters[cx] +
        letters[1] +
        letters[dx].toUpperCase() +
        bbx.toString() +
        letters[ax] +
        letters[dx] +
        mix.toString() +
        letters[ex].toUpperCase();
      return id;
    }

    if (fx < 5) {
      const abx = ax * bx + (bx + cx * 232) * (ax + 7) + 23 * ax * bx;
      const bbx = bx + cx + ax * (300 + (dx + ex + ax - fx));
      const mix = abx * (bbx + 15) - dx * ax * 5 + ax;

      const id =
        letters[fx].toUpperCase() +
        letters[ex] +
        bbx.toString() +
        letters[5] +
        letters[fx] +
        letters[ax].toUpperCase() +
        abx.toString() +
        letters[cx] +
        letters[3] +
        letters[dx] +
        abx.toString() +
        letters[bx].toUpperCase() +
        letters[cx] +
        mix.toString() +
        letters[ax];
      return id;
    }

    if (ax < 5) {
      const abx = ax * bx + (bx + cx * 225) * (ax + 2) + 37 * ax * bx;
      const bbx = bx + cx + ax * (273 - (ax + cx + dx - ex));
      const mix = abx * (bbx + 7 * bx) - dx * ax * 5 + ax;

      const id =
        letters[dx] +
        letters[fx] +
        abx.toString() +
        letters[6] +
        letters[fx].toUpperCase() +
        letters[ax] +
        abx.toString() +
        letters[cx] +
        letters[3] +
        letters[cx].toUpperCase() +
        abx.toString() +
        letters[ex].toUpperCase() +
        letters[ax] +
        mix.toString() +
        letters[bx];
      return id;
    }

    return "null";
  };

  getTestProfileData = () => {
    return {
      id: 1212234,
      first_name: "Anna",
      is_closed: false,
      can_access_closed: true,
      sex: 1,
      followers_count: 150,
      is_single: false,
      photo_ava_url: `test`,
      city: { id: 1, title: "Москва" },
      about: ["something", "something2"],
      props: [
        { prop: "kindness", value: 7 },
        { prop: "beauty", value: 5 },
      ],
    };
  };

  parsedList: Array<string> = [];

  searchTestPosts = async (): Promise<Array<string>> => {
    console.log(
      `GetTestData: the async function searchTestPosts has been called`
    );
    await this.waitTimeout(3000);
    this.jsonParseArray(this.postList);
    //console.log(`GetTestData: the posts data has been successfully parsed to JSON object`);
    //console.log(this.targetList);
    return this.postList;
  };
}
