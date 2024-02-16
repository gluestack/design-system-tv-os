import React from "react";
import {
  Text,
  VStack,
  HStack,
  Box,
  Icon,
  Heading,
  Tooltip,
  TooltipContent,
  Button,
  Center,
} from "../../core-components";

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "../../core-components/Slider";

import { Volume, Volume2Icon, LightbulbIcon } from "lucide-react-native";
import Wrapper from "../Wrapper";

const SliderBasic = ({ value: valueProp = 60, ...props }: any) => {
  const [sliderValue, setSliderValue] = React.useState(valueProp);
  const handleChange = (value: any) => {
    setSliderValue(value);
  };

  return (
    <Wrapper>
      <Slider
        {...props}
        w={300}
        h={300}
        mt="$4"
        value={sliderValue}
        onChange={(value: any) => {
          handleChange(value);
        }}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Wrapper>
  );
};

SliderBasic.description =
  "This is a basic Slider component example. Sliders are used to select a value from a range of values.";

export default SliderBasic;

export {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  Volume,
  HStack,
  Volume2Icon,
  Text,
  Box,
  LightbulbIcon,
  Icon,
  Heading,
  Tooltip,
  TooltipContent,
  Button,
  Center,
};
