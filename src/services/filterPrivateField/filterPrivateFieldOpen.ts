import {TGroup} from "../../utils/types";

export const filterPrivateFieldOpen = (data: TGroup[]) => {
    return data.filter(group => group.closed !== undefined && !group.closed);
}