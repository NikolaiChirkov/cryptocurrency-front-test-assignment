import React from "react";
import { ICurrency } from "../../../interface/ICurrency";
import { InputSelect } from "../InputSelect/Component";
import { InputSelectProps } from "../InputSelect/Types";
import { InputSelectCurrencyAddonAfter } from "./partials/InputSelectCurrencyAddonAfter";
import { InputSelectCurrencyListItem } from "./partials/InputSelectCurrencyListItem";

export type InputSelectCurrencyProps = Omit<
  InputSelectProps<ICurrency>,
  | "renderInputAddonAfter"
  | "renderListItem"
  | "onCurrentItemChange"
  | "onInputChange"
  | "currenItemValue"
> & {
  currentCurrencyValue: ICurrency;
  onCurrencyChange?: (item: ICurrency) => void;
  onAmountChange?: (value: string) => void;
};

export const InputSelectCurrency: React.FC<InputSelectCurrencyProps> = ({
  currentCurrencyValue,
  onCurrencyChange,
  onAmountChange,
  list,
  ...otherProps
}) => {
  const [isSelectMode, setIsSelectMode] = React.useState(false);
  const [displayList, setDisplayList] = React.useState(list);

  const onSelectSearch = (value: string) => {
    if (!value) {
      setDisplayList(list);
    }

    setDisplayList(
      list.filter(
        (item) =>
          new RegExp(value, "i").test(item.name) ||
          new RegExp(value, "i").test(item.ticker)
      )
    );
  };

  React.useEffect(() => {
    setDisplayList(list);
  }, [list]);

  return (
    <InputSelect
      list={displayList}
      selectListInputPlaceholder="Search through ticker or name"
      currentItemValue={currentCurrencyValue}
      onCurrentItemChange={onCurrencyChange}
      onInputChange={onAmountChange}
      onSelectModeChange={setIsSelectMode}
      onSelectSearch={onSelectSearch}
      renderInputAddonAfter={({ selectedItem }) => (
        <InputSelectCurrencyAddonAfter
          isSelectMode={isSelectMode}
          selectedItem={selectedItem}
        />
      )}
      renderListItem={({ item }) => <InputSelectCurrencyListItem item={item} />}
      {...otherProps}
    />
  );
};
