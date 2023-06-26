import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import React from "react";

const AwardDetailTab = ({ historyText, cupText }) => {
  return (
    <Box w="100%" paddingInline="2rem">
      <Tabs>
        <Center>
          <TabList>
            <Tab>Short history</Tab>
            <Tab>Description about the cup</Tab>
          </TabList>
        </Center>

        <TabPanels>
          <TabPanel>{historyText}</TabPanel>
          <TabPanel>{cupText}</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default AwardDetailTab;
