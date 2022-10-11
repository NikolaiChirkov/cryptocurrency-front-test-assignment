import React from "react";
import { Input } from "../../atoms/Input";
import { InputSelectType } from "./Types";
import { SelectList } from "./partials/SelectList";
import styles from "./input-select.module.scss";
import { Typography } from "../../atoms/Typography";

export const InputSelect: InputSelectType = ({
  list,
  selectListInputPlaceholder,
  currentItemValue,
  validation,
  renderListItem,
  renderInputAddonAfter,
  onCurrentItemChange,
  onInputChange,
  onSelectSearch,
  onSelectModeChange,
  ...otherProps
}) => {
  const [currentItem, setCurrentItem] = React.useState<any>(list[0] || {});
  const [isSelectMode, setIsSelectMode] = React.useState(false);

  const inputAddonAfter = React.useMemo(
    () => (
      <div
        className={styles.root__addonAfter}
        onClick={(e) => {
          const newIsSelectMode = !isSelectMode;

          setIsSelectMode(newIsSelectMode);

          if (onSelectModeChange) {
            onSelectModeChange(newIsSelectMode);
          }
        }}
      >
        {renderInputAddonAfter({
          selectedItem: currentItem,
        })}
      </div>
    ),
    [currentItem, renderInputAddonAfter, isSelectMode]
  );

  React.useEffect(() => {
    setCurrentItem(currentItemValue);
  }, [currentItemValue]);

  return (
    <div className={styles.root}>
      <Input
        onChange={(e) => onInputChange && onInputChange(e.target.value)}
        addonAfter={inputAddonAfter}
        {...otherProps}
      />
      
      {validation && (
        <Typography.Text className={styles.root__validation}>
          {validation.text}
        </Typography.Text>
      )}

      {isSelectMode && (
        <SelectList
          list={list}
          selectListInputPlaceholder={selectListInputPlaceholder}
          renderListItem={renderListItem}
          onSelectSearch={onSelectSearch}
          onItemClick={(item) => {
            if (onCurrentItemChange) {
              onCurrentItemChange(item);
            }

            setCurrentItem(item);
          }}
        />
      )}
    </div>
  );
};
