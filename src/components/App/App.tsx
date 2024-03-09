import * as React from 'react';
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell, usePlatform,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {useEffect, useState} from "react";
import {TGroup} from "../../utils/types";
import {getGroups} from "../../utils/api";
import GroupContainer from "../GroupContainer/GroupContainer";

const App = () => {
  const platform = usePlatform();
  const [groups, setGroups] = useState<TGroup[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGroups = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getGroups();
      if (data) setGroups(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGroups()
  }, []);

  console.log(groups)

  return (
      <AppRoot>
        <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none"/>}>
          <SplitCol autoSpaced>
            <View activePanel="main">
              <Panel id="main">
                <PanelHeader>Community VK test</PanelHeader>
                <Group header={<Header mode="secondary">Groups</Header>}>
                  {groups.length && groups.map(group => (
                      <GroupContainer info={group} key={group.id}/>
                  ))}
                </Group>
              </Panel>
            </View>
          </SplitCol>
        </SplitLayout>
      </AppRoot>
  );
};

export default App;
