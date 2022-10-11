import { ICurrency } from "../../../interface/ICurrency";
import { InputProps } from "../../atoms/Input";

export type RenderInputAddonAfterProps<T> = {
  selectedItem: T;
};

export type RenderListItemProps<T> = {
  item: T;
  index?: number;
  array?: T[];
};

export type RenderInputAddonAfterType<T> = (
  props: RenderInputAddonAfterProps<T>
) => React.ReactNode;

export type RenderListItemType<T> = (
  props: RenderListItemProps<T>
) => React.ReactNode;

export type InputSelectProps<T> = Omit<InputProps, "list" | "onChange"> & {
  list: T[];
  selectListInputPlaceholder?: string;
  currentItemValue?: ICurrency;
  validation?: { text: string };
  renderListItem: RenderListItemType<T>;
  renderInputAddonAfter: RenderInputAddonAfterType<T>;
  onCurrentItemChange?: (item: T) => void;
  onInputChange?: (value: string) => void;
  onSelectSearch?: (value: string) => void;
  onSelectModeChange?: (value: boolean) => void;
};

export type InputSelectType = <P = {}>(
  props: InputSelectProps<P>
) => React.ReactElement<any, any> | null;
