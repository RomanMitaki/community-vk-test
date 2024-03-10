import { TGroup } from "../../utils/types";

export const filterAvatarColorField = (data: TGroup[], color: string) => {
  return data.filter(
    (group) => group.avatar_color !== undefined && group.avatar_color === color,
  );
};
