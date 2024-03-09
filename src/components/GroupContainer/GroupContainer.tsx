import * as React from 'react';
import {
    Accordion,
    Avatar,
    Group,
    Header,
    SimpleCell,
} from "@vkontakte/vkui";
import {TGroup} from "../../utils/types";

type TGroupContainerProps = {
    info: TGroup
};

const GroupContainer = (props: TGroupContainerProps) => {
    const {info} = props;
    return (
        <Group header={<Header mode="secondary">Группа</Header>}>
            <SimpleCell>{`Имя группы: ${info.name}`}</SimpleCell>
            {info.avatar_color && (
                <SimpleCell>
                    <Avatar
                        size={100}
                        src="#"
                        gradientColor="custom"
                        style={{background: `${info.avatar_color}`}}
                    />
                </SimpleCell>
            )}
            <SimpleCell>{`Приватность: ${info.closed ? 'закрытая' : 'открытая'}`}</SimpleCell>
            <SimpleCell>{`Количество участников: ${info.members_count}`}</SimpleCell>
            <Accordion/>
        </Group>
    );
};

export default GroupContainer;