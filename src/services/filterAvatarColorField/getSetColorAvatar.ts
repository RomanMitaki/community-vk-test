import { TGroup } from "../../utils/types";

export const getSetColorAvatar = (groups: TGroup[]) => {
  const colors = groups.reduce((acc, group) => {
    if (group.avatar_color !== undefined) {
      acc.add(group.avatar_color);
    }
    return acc;
  }, new Set<string>());
  return Array.from(colors);
};
