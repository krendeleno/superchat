import React, { Dispatch, SetStateAction, useContext } from "react";
import { observer } from "mobx-react";
import { createPortal } from "react-dom";
import { Formik, Form, FormikProps } from "formik";
import { AnimatePresence, motion } from "framer-motion";

import { Cross } from "src/assets/icons";
import { Button } from "src/shared/components/Button";
import { TextInput } from "src/shared/components/TextInput";
import { themes } from "src/shared/constants";
import { ThemeColors } from "src/shared/types";
import { Tag } from "src/shared/components/Tag";
import { ThemeContext } from "src/shared/themes";

import { RadioButtons } from "src/pages/Main/components/FormCreateChat/components/RadioButtons";
import { schema } from "src/pages/Main/components/FormCreateChat/FormCreateChat.schema";

import styles from "./FormCreateChat.module.css";

export type FormCreateChatProps = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const FormCreateChat = observer(
  ({ isOpen, setOpen }: FormCreateChatProps) => {
    const handleAddInput = ({
      setValues,
      values,
      errors,
      setFieldTouched,
    }: FormikProps<any>) => {
      if (!errors.tagsProvider) {
        setValues({
          ...values,
          tagsProvider: "",
          tags: [...values.tags, values.tagsProvider],
        });
        setFieldTouched("tagsProvider", false);
      }
    };

    const { theme } = useContext(ThemeContext);

    return createPortal(
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.3 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className={styles["FormCreateChat-ModalLayout"]}
            onClick={() => setOpen(false)}
          >
            <Formik
              initialValues={{
                title: "",
                colorTheme: "blue",
                tags: [],
                tagsProvider: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
              }}
              validationSchema={schema}
            >
              {(props) => (
                <Form
                  className={styles["FormCreateChat"]}
                  onClick={(e) => e.stopPropagation()}
                  style={{ backgroundColor: theme.form }}
                >
                  <Cross
                    onClick={() => setOpen(false)}
                    className={styles["FormCreateChat-Icon"]}
                    color={theme.line}
                  />
                  <div
                    className={styles["FormCreateChat-Content"]}
                    style={{ border: `3px dashed ${theme.border}` }}
                  >
                    <TextInput
                      placeholder="????????????????"
                      name="title"
                      type="text"
                      required
                    />
                    <label className={styles["FormCreateChat-Theme"]}>
                      <span
                        className={styles["FormCreateChat-ThemeLabel"]}
                        style={{ color: theme.text }}
                      >
                        ????????:{" "}
                      </span>
                      <RadioButtons
                        name="colorTheme"
                        defaultValues={Object.keys(themes) as ThemeColors[]}
                        className={styles["FormCreateChat-RadioButton"]}
                      />
                    </label>
                    <div className={styles["FormCreateChat-AddTag"]}>
                      <span
                        className={styles["FormCreateChat-AddTagLabel"]}
                        style={{ color: theme.text }}
                      >
                        ????????:
                      </span>
                      <TextInput
                        className={styles["FormCreateChat-AddTagInput"]}
                        classNameError={styles["FormCreateChat-AddTagError"]}
                        name="tagsProvider"
                        type="text"
                      />
                      <Button
                        type="button"
                        className={styles["FormCreateChat-AddTagButton"]}
                        onClick={() => handleAddInput(props)}
                        style={{
                          backgroundColor: theme.buttonAddTag,
                          color: theme.buttonAddTagText,
                        }}
                      >
                        <span>????????????????</span>
                      </Button>
                    </div>
                    <div className={styles["FormCreateChat-SelectedTags"]}>
                      <AnimatePresence>
                        {props.values.tags.map((tag) => (
                          <Tag
                            key={tag}
                            tag={tag}
                            shadow
                            deletable
                            onClick={() =>
                              props.setValues({
                                ...props.values,
                                tags: props.values.tags.filter(
                                  (x) => x !== tag
                                ),
                              })
                            }
                          />
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                  <Button
                    className={styles["FormCreateChat-ButtonAdd"]}
                    type="submit"
                  >
                    <span
                      className={styles["FormCreateChat-ButtonAddText"]}
                      style={{ color: theme.buttonText }}
                    >
                      ?????????????? ??????
                    </span>
                  </Button>
                </Form>
              )}
            </Formik>
          </motion.div>
        )}
      </AnimatePresence>,
      document.getElementById("root")!
    );
  }
);
