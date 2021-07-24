export enum EColumnNamesMatchProfilesMap {
  id = 'id',
  first_name = 'Имя',
  last_name = 'Фамилия',
  bdate = 'День рождения',
  birth_date = 'День рождения',
  estimation = 'Оценка',
  is_in_relationship = 'Отношения',
  has_child = 'Ребенок',
};

type TcolumnNamesMatchProfilesMap = {
  [key: string]: string;
  id: 'id';
  first_name: 'Имя';
  last_name: 'Фамилия';
  bdate: 'День рождения';
  birth_date: 'День рождения';
  estimation: 'Оценка';
  is_in_relationship: 'Отношения';
  has_child: 'Ребенок';
}

export const columnNamesMatchProfilesMap: TcolumnNamesMatchProfilesMap = {
  id: 'id',
  first_name: 'Имя',
  last_name: 'Фамилия',
  bdate: 'День рождения',
  birth_date: 'День рождения',
  estimation: 'Оценка',
  is_in_relationship: 'Отношения',
  has_child: 'Ребенок',
};

export const keysProfileToExcludeInTable = [
  'city',
  'counters',
  'country',
  'last_seen',
  'photo_100',
  'photo_max',
  'photo_max_orig',
  'is_closed',
  'online',
  'has_photo',
  'sex',
  'relation',
  'followers_count',
  'can_access_closed',
  'home_phone',
  'mobile_phone',
  'online_app',
  'online_mobile',
];
