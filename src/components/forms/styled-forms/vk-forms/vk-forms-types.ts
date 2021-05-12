export type TProfileRequest = {
   profile: TProfile;
};
type TProfile = {
   id: string;
   first_name: string;
   photo_max_orig: string;
   last_name: string;
   photo_100: string;
   vk_id: string;
   photo_max: string;
   [key: string]: string;
};
