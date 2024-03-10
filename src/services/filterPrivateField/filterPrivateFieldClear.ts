import {TGroup} from "../../utils/types";

export const filterPrivateFieldClear = (data: TGroup[]) => {
    return data.filter(group => group.closed !== undefined);
}