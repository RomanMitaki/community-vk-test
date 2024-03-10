import {
  ActionSheet,
  ActionSheetItem,
  Avatar,
  CellButton,
  Group,
} from "@vkontakte/vkui";
import React, { Dispatch, SetStateAction, useRef } from "react";
import { filterPrivateFieldClear } from "../../services/filterPrivateField/filterPrivateFieldClear";
import { TGroup } from "../../utils/types";
import { filterPrivateFieldClosed } from "../../services/filterPrivateField/filterPrivateFieldClosed";
import { filterPrivateFieldOpen } from "../../services/filterPrivateField/filterPrivateFieldOpen";
import { filterFriendsFieldClear } from "../../services/filterFriendsField/filterFriendsFieldClear";
import { filterFriendsField } from "../../services/filterFriendsField/filterFriendsField";
import { getSetColorAvatar } from "../../services/filterAvatarColorField/getSetColorAvatar";
import { filterAvatarColorField } from "../../services/filterAvatarColorField/filterAvatarColorField";
import { filterAvatarColorFieldClear } from "../../services/filterAvatarColorField/filterAvatarColorFieldClear";

type TFilterProps = {
  setPopout: Dispatch<SetStateAction<React.ReactNode>>;
  setRenderGroups: Dispatch<SetStateAction<TGroup[]>>;
  groups: TGroup[];
};

const Filter = (props: TFilterProps) => {
  const { setPopout, setRenderGroups, groups } = props;
  const onClose = () => setPopout(null);
  //const [filter, setFilter] = useState('best');
  //const onChange = (e) => setFilter(e.target.value);
  const privateRef = useRef(null);
  const friendsRef = useRef(null);
  const avatarColorRef = useRef(null);

  const handlePrivateClearClick = () => {
    let filteredGroups = filterPrivateFieldClear(groups);
    setRenderGroups(filteredGroups);
  };

  const handlePrivateClosedClick = () => {
    let filteredGroups = filterPrivateFieldClosed(groups);
    setRenderGroups(filteredGroups);
  };

  const handlePrivateOpenClick = () => {
    let filteredGroups = filterPrivateFieldOpen(groups);
    setRenderGroups(filteredGroups);
  };

  const handleFriendsClearClick = () => {
    let filteredGroups = filterFriendsFieldClear(groups);
    setRenderGroups(filteredGroups);
  };

  const handleFriendsClick = () => {
    let filteredGroups = filterFriendsField(groups);
    setRenderGroups(filteredGroups);
  };

  const handleAvatarColorClearClick = () => {
    let filteredGroups = filterAvatarColorFieldClear(groups);
    setRenderGroups(filteredGroups);
  };

  const handleAvatarColorClick = (color: string) => {
    let filteredGroups = filterAvatarColorField(groups, color);
    setRenderGroups(filteredGroups);
  };

  const openPrivate = () =>
    setPopout(
      <ActionSheet onClose={onClose} toggleRef={privateRef}>
        <ActionSheetItem onClick={handlePrivateClearClick}>
          Все группы
        </ActionSheetItem>
        <ActionSheetItem onClick={handlePrivateClosedClick}>
          Закрытые
        </ActionSheetItem>
        <ActionSheetItem onClick={handlePrivateOpenClick}>
          Открытые
        </ActionSheetItem>
      </ActionSheet>,
    );
  const openFriends = () =>
    setPopout(
      <ActionSheet onClose={onClose} toggleRef={friendsRef}>
        <ActionSheetItem onClick={handleFriendsClearClick}>
          Все группы
        </ActionSheetItem>
        <ActionSheetItem onClick={handleFriendsClick}>
          С друзьями
        </ActionSheetItem>
      </ActionSheet>,
    );

  const openAvatarColor = () =>
    setPopout(
      <ActionSheet onClose={onClose} toggleRef={avatarColorRef}>
        <ActionSheetItem onClick={handleAvatarColorClearClick}>
          Все группы
        </ActionSheetItem>
        {groups.length &&
          getSetColorAvatar(groups).map((color, index) => (
            <ActionSheetItem
              before={
                <Avatar
                  size={16}
                  src="#"
                  gradientColor="custom"
                  style={{ background: `${color}` }}
                />
              }
              key={index}
              onClick={() => {
                handleAvatarColorClick(color);
              }}
            >
              {color}
            </ActionSheetItem>
          ))}
      </ActionSheet>,
    );

  return (
    <Group>
      <CellButton getRootRef={privateRef} onClick={openPrivate}>
        Фильтр по приватности
      </CellButton>
      <CellButton getRootRef={friendsRef} onClick={openFriends}>
        Фильтр по наличию друзей
      </CellButton>
      <CellButton getRootRef={avatarColorRef} onClick={openAvatarColor}>
        Фильтр по цвету аватарки
      </CellButton>
    </Group>
  );
};

export default Filter;
