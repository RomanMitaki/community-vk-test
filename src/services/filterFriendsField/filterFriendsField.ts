import { TGroup } from "../../utils/types";

export const filterFriendsField = (data: TGroup[]) => {
  return data.filter(
    (group) => group.friends !== undefined && group.friends.length,
  );
};
