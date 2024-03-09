export type TUser = {
    "first_name": string,
    "last_name": string
}

export type TGroup = {
    "id": number,
    "name": string,
    "closed": boolean,
    "avatar_color"?: string,
    "members_count": number,
    "friends"?: TUser[]
}


export type TGetGroupsResponse = {
    result: 1 | 0,
    data?: TGroup[]
}



