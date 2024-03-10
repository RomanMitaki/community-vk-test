import {TGroup} from "../../utils/types";

export const filterPrivateFieldClosed = (data: TGroup[]) => {
    return data.filter(group => group.closed !== undefined && group.closed);
}