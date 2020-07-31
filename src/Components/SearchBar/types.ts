import { TextInputProperties, TextInputProps } from "react-native";

interface SearchBarProps {
  OnPressSearch: (text: string) => void
}

interface SearchBarStates {
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