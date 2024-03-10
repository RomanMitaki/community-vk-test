import * as React from "react";
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  usePlatform,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { ReactNode, useEffect, useState } from "react";
import { TGroup } from "../../utils/types";
import { getGroups } from "../../utils/api";
import GroupContainer from "../GroupContainer/GroupContainer";
import Filter from "../Filter/Filter";

const App = () => {
  const platform = usePlatform();
  const [groups, setGroups] = useState<TGroup[]>([]);
  const [renderGroups, setRenderGroups] = useState<TGroup[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [popout, setPopout] = useState<React.ReactNode>(null);

  const fetchGroups = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getGroups();
      if (data) {
        setGroups(data);
        setRenderGroups(data);
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  console.log(groups);

  return (
    <AppRoot>
      <SplitLayout
        header={platform !== "vkcom" && <PanelHeader delimiter="none" />}
        popout={popout}
      >
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>Community VK test</PanelHeader>
              <Filter
                setPopout={setPopout}
                setRenderGroups={setRenderGroups}
                groups={groups}
              />
              <Group header={<Header mode="secondary">Groups</Header>}>
                {renderGroups.length &&
                  renderGroups.map((group) => (
                    <GroupContainer info={group} key={group.id} />
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
