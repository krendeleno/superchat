import React, { Dispatch, SetStateAction } from "react";
import { observer } from "mobx-react";
import { createPortal } from 'react-dom'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Cross } from "src/assets/icons";
import { Button } from "src/shared/components/Button";
import { TextInput } from "src/shared/components/TextInput";
import { themes } from "src/shared/constants";
import { ThemeColors } from "src/shared/types";
import { Tag } from "src/shared/components/Tag";

import { RadioButtons } from "src/pages/Main/components/FormCreateChat/components/RadioButtons";

import styles from "./FormCreateChat.module.css";

export type FormCreateChatProps = {
  isOpen: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const FormCreateChat = observer(({ isOpen, setOpen }: FormCreateChatProps)  => {
  if (!isOpen) {
    return <></>
  }

  return createPortal(
    <div className={styles['FormCreateChat-ModalLayout']}>
      <Formik
        initialValues={{ title: '', colorTheme: "blue", tags: [], tagsProvider: '' }}
        onSubmit={(values, { setSubmitting }) => {
            console.log(values);
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .required('Обязательное поле'),
          colorTheme: Yup.string()
            .oneOf(
              ['blue', 'red', 'blue', 'green'],
              'Не выбран цвет'
            )
            .required('Обязательное поле'),
        })}
      >
        {props => (
          <Form className={styles['FormCreateChat']}>
            <Cross onClick={() => setOpen(false)} className={styles['FormCreateChat-Icon']}/>
            <div className={styles['FormCreateChat-Content']}>
              <TextInput placeholder="название" name="title" type="text"/>
              <label className={styles['FormCreateChat-Theme']}>
                <span className={styles['FormCreateChat-ThemeLabel']}>тема: </span>
                <RadioButtons
                  name="colorTheme"
                  defaultValues={Object.keys(themes) as ThemeColors[]}
                  className={styles['FormCreateChat-RadioButton']}/>
              </label>
              <span>теги:</span>
              <div className={styles['FormCreateChat-AddTag']}>
                <TextInput className={styles['FormCreateChat-AddTagInput']} placeholder="введите тег" name="tagsProvider" type="text"/>
                <Button type="button" className={styles['FormCreateChat-AddTagButton']} onClick={
                  () => props.setValues(
                    {...props.values,
                      tagsProvider: '',
                      // @ts-ignore
                      tags: [...props.values.tags, props.values.tagsProvider]})}>
                  <span>добавить</span>
                </Button>
              </div>
              {Boolean(props.values.tags.length) &&
                <div className={styles['FormCreateChat-SelectedTags']}>
                  {props.values.tags.map(tag => <Tag key={tag} tag={tag} shadow
                                                     onClick={() =>
                                                       props.setValues({...props.values, tags: props.values.tags.filter(x => x!== tag)})}/>)}
                </div>
              }
            </div>
            <Button className={styles['FormCreateChat-ButtonAdd']} type="submit">
              <span className={styles['FormCreateChat-ButtonAddText']}>создать чат</span>
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  , document.getElementById('root')!);
});
