import * as React from 'react';

type TIsFavorite = {
   isFavorite: boolean;
};
export const FavoriteMarlPresentationLabel = ({
   isFavorite,
}: TIsFavorite): React.FunctionComponent<TIsFavorite> | boolean => {
   return isFavorite ? (
      <div className="label-favorite-mark">В избранном &#10003;</div>
   ) : (
      false
   );
};
