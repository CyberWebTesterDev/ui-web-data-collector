import React from "react";

const ProfileMatchesDummy = () => {
  return (
    <React.Fragment>
      <thead>
        <tr>
          <th>#</th>
          <th>Id аккаунта</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <a href={`https://vk.com/id21216277`} target="_blank">
              21216277
            </a>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>2</td>
          <td>
            <a href={`https://vk.com/id12483445`} target="_blank">
              12483445
            </a>
          </td>
        </tr>
      </tbody>
      <tr>
        <td>3</td>
        <td>
          <a href={`https://vk.com/id31620640`} target="_blank">
            31620640
          </a>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default ProfileMatchesDummy;
