import React from "react";

export const FavoriteMarlPresentationLabel = ({ isFavorite }) => {
  return isFavorite ? (
    <div className="label-favorite-mark">В избранном &#10003;</div>
  ) : (
    false
  );
};
