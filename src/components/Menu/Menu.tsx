import React from "react";

import {
  Box,
  Button,
  ButtonText,
  GlobeIcon,
  HStack,
  // Icon,
  SettingsIcon,
  AddIcon,
  Text,
  Center,
} from "../../core-components";
import {
  Menu,
  // MenuIcon,
  MenuItem,
  MenuItemLabel,
} from "../../core-components/Menu";
import { Icon } from "../../core-components";
import { PaintBucket, PuzzleIcon } from "lucide-react-native";
import Wrapper from "../Wrapper";

const MenuBasic = ({ placement = "bottom" }: any) => {
  return (
    <Wrapper>
      <Center>
        <Menu
          // isOpen={true}
          placement={placement}
          disabledKeys={["Settings"]}
          // eslint-disable-next-line react/no-unstable-nested-components
          trigger={({ ...triggerProps }) => {
            return (
              <Button {...triggerProps}>
                <ButtonText>Menu</ButtonText>
              </Button>
            );
          }}
        >
          <MenuItem key="Community" textValue="Community" gap="$2">
            <Icon as={GlobeIcon} size="sm" />
            <MenuItemLabel size="sm">Community</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Plugins" textValue="Plugins" gap="$2">
            <Icon as={PuzzleIcon} size="sm" />
            <MenuItemLabel size="sm">Plugins</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Theme" textValue="Theme" gap="$2">
            <Icon as={PaintBucket} size="sm" />
            <MenuItemLabel size="sm">Theme</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Settings" textValue="Settings" gap="$2">
            <Icon as={SettingsIcon} size="sm" />
            <MenuItemLabel size="sm">Settings</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Add account" textValue="Add account" gap="$2">
            <Icon as={AddIcon} size="sm" />
            <MenuItemLabel size="sm">Add account</MenuItemLabel>
          </MenuItem>
        </Menu>
      </Center>
    </Wrapper>
  );
};

MenuBasic.description =
  "This is a basic Menu component example.The Menu component creates a user-friendly dropdown interface that can be utilized to present a range of options or actions. This feature ensures accessibility and ease of use for the user.";

export default MenuBasic;
