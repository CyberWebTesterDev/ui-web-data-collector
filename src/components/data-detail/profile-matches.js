import React from "react";
import {
  counterNotNull,
  intersectIdChecker,
  ComplexEstimation,
  ComplexCorrelationEstimation,
} from "../../services/helper";
import {
  SimpleCheckerChild,
  SimpleCheckerRelationship,
} from "../helpers/helper-vk-matches";
import GetDataFromWeb from "../../services/service";

const ProfileMatches = ({
  matches,
  onClickListener,
  caller,
  checkedMatches,
}) => {
  console.log(
    `ProfileMatches: ProfileMatches has been called. The caller is: ${caller}`
  );

  const GDF = new GetDataFromWeb();

  let notNullCounter = counterNotNull(matches);

  if (notNullCounter === 0) {
    return (
      <div className="alert alert-danger" role="alert">
        Подходящих не найдено
      </div>
    );
  }

  const MakeTable = ({ arr }) => {
    console.info(`ProfileMatches => MakeTable: start. Parameters arr: `);
    console.log(arr);

    return arr.map((el) => {
      if (el) {
        return (
          <tr id={el.id}>
            <td>-</td>
            <td>
              <a
                href={`https://vk.com/id${el.id}`}
                target="_blank"
                onClick={() =>
                  onClickListener([el.id, el.first_name, el.last_name])
                }
              >
                {el.id}
              </a>
            </td>
            <td>
              <a
                href={`http://192.168.1.236:3000/vkdata/profile-enrichment/${el.id}`}
                target="_blank"
              >
                {el.id}
              </a>
            </td>
            <td>{el.first_name + " " + el.last_name}</td>
            <td>
              {el.is_checked ? "Ранее был переход" : "Не проверялся ранее"}
            </td>
            <td>{el.first_checked ? el.first_checked : "-"}</td>
            <td>{el.check_update ? el.check_update : "-"}</td>
            <td className="simple-rating">
              <ComplexEstimation
                rating={
                  el.estimation
                    ? el.estimation
                    : el.estimation === null || el.estimation === undefined
                    ? "-"
                    : "X"
                }
                id={el.id}
              />
            </td>
            <td id="tdChild">
              <span>
                {el.has_child
                  ? "V"
                  : el.has_child === null || el.has_child === undefined
                  ? "-"
                  : "X"}
              </span>
              <SimpleCheckerChild id={el.id} />
            </td>
            <td id="tdRelationship">
              <span>
                {el.is_in_relationship
                  ? "V"
                  : el.is_in_relationship === null ||
                    el.is_in_relationship === undefined
                  ? "-"
                  : "X"}
              </span>
              <SimpleCheckerRelationship id={el.id} />
            </td>
            <td className="simple-rating">
              <ComplexCorrelationEstimation
                corrEst={
                  el.correlation_est
                    ? el.correlation_est
                    : el.correlation_est === null ||
                      el.correlation_est === undefined
                    ? "-"
                    : "X"
                }
                id={el.id}
              />
            </td>
          </tr>
        );
      }
    });
  };

  console.log(`ProfileMatches: checkedMatches:`);
  console.log(checkedMatches);

  intersectIdChecker(matches, checkedMatches);

  console.log(`ProfileMatches: result matches is `);
  console.log(matches);

  return (
    <React.Fragment>
      <MakeTable arr={matches} />
    </React.Fragment>
  );
};

export default ProfileMatches;
