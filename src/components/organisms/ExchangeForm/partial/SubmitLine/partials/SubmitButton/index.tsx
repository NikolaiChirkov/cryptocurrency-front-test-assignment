import classNames from "classnames";
import React from "react";
import { Button } from "../../../../../../atoms/Button";
import { Typography } from "../../../../../../atoms/Typography";
import styles from "./submit-button.module.scss";

export type SubmitButtonProps = {
  className: string;
};

export const SubmitButton: React.FC<SubmitButtonProps> = ({ className }) => {
  return (
    <Button className={classNames(styles.root, className)} preset="primary">
      <Typography.Text className={styles.root__text}>Exchange</Typography.Text>
    </Button>
  );
};
