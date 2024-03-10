import {ActionSheet, ActionSheetItem, CellButton, Group} from "@vkontakte/vkui";
import React, {Dispatch, SetStateAction, useRef} from "react";
import {filterPrivateFieldClear} from "../../services/filterPrivateField/filterPrivateFieldClear";
import {TGroup} from "../../utils/types";
import {filterPrivateFieldClosed} from "../../services/filterPrivateField/filterPrivateFieldClosed";
import {filterPrivateFieldOpen} from "../../services/filterPrivateField/filterPrivateFieldOpen";

type TFilterProps = {
    setPopout: Dispatch<SetStateAction<React.ReactNode>>;
    setRenderGroups: Dispatch<SetStateAction<TGroup[]>>;
    groups: TGroup[];
};

const Filter = (props: TFilterProps) => {
    const {setPopout, setRenderGroups, groups} = props;
    const onClose = () => setPopout(null);
    //const [filter, setFilter] = useState('best');
    //const onChange = (e) => setFilter(e.target.value);
    const privateRef = useRef(null);

    const handlePrivateClearClick = () => {
        let filteredGroups = filterPrivateFieldClear(groups);
        setRenderGroups(filteredGroups)
    }

    const handlePrivateClosedClick = () => {
        let filteredGroups = filterPrivateFieldClosed(groups);
        setRenderGroups(filteredGroups)
    }

    const handlePrivateOpenClick = () => {
        let filteredGroups = filterPrivateFieldOpen(groups);
        setRenderGroups(filteredGroups)
    }

    const openPrivate = () =>
        setPopout(
            <ActionSheet onClose={onClose} toggleRef={privateRef}>
                <ActionSheetItem onClick={handlePrivateClearClick}>Все</ActionSheetItem>
                <ActionSheetItem onClick={handlePrivateClosedClick}>Закрытые</ActionSheetItem>
                <ActionSheetItem onClick={handlePrivateOpenClick}>Открытые</ActionSheetItem>
            </ActionSheet>,
        );

    return (
        <Group>
            <CellButton getRootRef={privateRef} onClick={openPrivate}>
                Фильтр по приватности
            </CellButton>
        </Group>
    )
}


export default Filter;