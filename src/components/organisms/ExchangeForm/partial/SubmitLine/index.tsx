import React from "react";
import { Input } from "../../../../atoms/Input";
import { ContentLine } from "../../../../molecules/ContentLine";
import { SubmitButton } from "./partials/SubmitButton";
import styles from "./submit-line.module.scss";

export const SubmitLine: React.FC = () => {
  return (
    <ContentLine className={styles.root}>
      <Input className={styles.root__input} />
      <SubmitButton className={styles.root__button} />
    </ContentLine>
  );
};
