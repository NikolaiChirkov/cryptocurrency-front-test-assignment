import React from "react";
import { InputProps } from "../../../../atoms/Input";
import { RenderListItemType } from "../../Types";
import styles from "./select-list.module.scss";

export type SelectListProps<T> = Omit<InputProps, "list"> & {
  list: T[];
  selectListInputPlaceholder?: string;
  renderListItem: RenderListItemType<T>;
  onItemClick: (item: T) => void;
  onSelectSearch?: (value: string) => void;
};

export type SelectListType = <P = {}>(
  props: SelectListProps<P>
) => React.ReactElement<any, any> | null;

export const SelectList: SelectListType = ({
  list,
  selectListInputPlaceholder,
  renderListItem,
  onItemClick,
  onSelectSearch,
}) => {
  const renderList = React.useMemo(
    () =>
      list.map((item, index, array) => (
        <li key={index} onClick={() => onItemClick(item)}>
          {renderListItem({ item, index, array })}
        </li>
      )),
    [list, onItemClick, renderListItem]
  );

  return (
    <div className={styles.root}>
      <input
        className={styles.root__input}
        placeholder={selectListInputPlaceholder}
        onChange={(e) => onSelectSearch && onSelectSearch(e.target.value)}
      />
      <ul className={styles.root__list}>{renderList}</ul>
    </div>
  );
};
