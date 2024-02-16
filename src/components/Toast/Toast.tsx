import React from "react";
import {
  Icon,
  CloseIcon,
  VStack,
  CheckIcon,
  Pressable,
  Center,
} from "../../core-components";
import {
  Toast,
  ToastTitle,
  ToastDescription,
  useToast,
} from "../../core-components";
import { Button, ButtonText } from "../../core-components";
import { MessageCircle, AlertTriangleIcon } from "lucide-react-native";
import Wrapper from "../Wrapper";

const ToastBasic = ({ placement = "top", ...props }: any) => {
  const toast = useToast();
  return (
    <Wrapper>
      <Button
        onPress={() => {
          toast.show({
            placement: placement,
            duration: null,
            render: ({ id }) => {
              const toastId = `toast-${id}`;
              return (
                <>
                  <Toast nativeID={toastId} {...props}>
                    <VStack space="xs">
                      <ToastTitle>Hello World Toast</ToastTitle>
                      <ToastDescription>
                        Please create a support tibnnbcket from the support page
                      </ToastDescription>
                    </VStack>
                    <Pressable onPress={() => toast.close(id)}>
                      <Icon as={CloseIcon} />
                    </Pressable>
                  </Toast>
                </>
              );
            },
          });
        }}
      >
        <ButtonText>Press Me</ButtonText>
      </Button>
    </Wrapper>
  );
};

export default ToastBasic;
