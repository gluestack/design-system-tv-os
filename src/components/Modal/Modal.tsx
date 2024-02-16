import React from "react";
import { Button, ButtonText } from "../../core-components/Button";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "../../core-components/Modal";
import { Center } from "../../core-components/Center";

import { X } from "lucide-react-native";
import { Text } from "../../core-components/Text";
import Wrapper from "../Wrapper";

const ModalBasic = () => {
  const [showModal, setShowModal] = React.useState(false);
  const ref = React.useRef(null);
  return (
    <Wrapper>
      <Button
        onPress={() => {
          setShowModal(!showModal);
        }}
      >
        <ButtonText>Open Modal</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Text>Are you absolutely sure?</Text>
            <ModalCloseButton>
              <X size={20} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Continue</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Wrapper>
  );
};

export default ModalBasic;

export {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ButtonText,
  Text,
  Center,
};
