import { TextInputProperties, TextInputProps } from "react-native";

interface TheBestRestaurentsProps {
  OnPressSearch: (text: string) => void
}

interface TheBestRestaurentsProps {
  text: String;

}

interface ISearchBar extends TextInputProps {
  onPress: () => void,
}

export {
  SearchBarProps,
  SearchBarStates,
  ISearchBar
};