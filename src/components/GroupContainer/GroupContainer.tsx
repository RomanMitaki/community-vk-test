import * as React from "react";
import { Accordion, Avatar, Group, Header, SimpleCell } from "@vkontakte/vkui";
import { TGroup } from "../../utils/types";

type TGroupContainerProps = {
  info: TGroup;
};

const GroupContainer = (props: TGroupContainerProps) => {
  const [isOpen, setOpen] = React.useState(false);
  const { info } = props;
  return (
    <Group header={<Header mode="secondary">Группа</Header>}>
      <SimpleCell>{`Имя: ${info.name}`}</SimpleCell>
      {info.avatar_color && (
        <SimpleCell>
          <Avatar
            size={100}
            src="#"
            gradientColor="custom"
            style={{ background: `${info.avatar_color}` }}
          />
        </SimpleCell>
      )}
      <SimpleCell>{`Приватность: ${
        info.closed ? "закрытая" : "открытая"
      }`}</SimpleCell>
      {info.members_count > 0 && (
        <SimpleCell>{`Количество участников: ${info.members_count}`}</SimpleCell>
      )}
      {info.friends && info.friends.length && (
        <Accordion expanded={isOpen} onChange={(e) => setOpen(!isOpen)}>
          <Accordion.Summary>Друзья</Accordion.Summary>
          <Accordion.Content>
            {info.friends.map((friend, index) => (
              <SimpleCell
                key={index}
              >{`${friend.first_name} ${friend.last_name}`}</SimpleCell>
            ))}
          </Accordion.Content>
        </Accordion>
      )}
    </Group>
  );
};

export default GroupContainer;
