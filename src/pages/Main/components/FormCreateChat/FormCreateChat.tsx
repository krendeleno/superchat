import React, { Dispatch, SetStateAction } from "react";
import { observer } from "mobx-react";
import { createPortal } from 'react-dom'
import { Formik, Form, FormikProps } from "formik";
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

  const handleAddInput = ({setValues, values, errors, setFieldTouched}:  FormikProps<any>) => {
    if (!errors.tagsProvider) {
      setValues({...values, tagsProvider: '', tags: [...values.tags, values.tagsProvider]});
      setFieldTouched('tagsProvider', false);
    }
  }

  return createPortal(
    <div className={styles['FormCreateChat-ModalLayout']} onClick={() => setOpen(false)}>
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
          tags: Yup.array(),
          tagsProvider: Yup.string().ensure()
            .min(3, 'Длина тега должна быть хотя бы 3 символа')
            .transform((value) => !!value ? value : null)
            .test('unique', 'Такой тег уже есть в вашем списке',
              // @ts-ignore
              (value, context) => !context.resolve(Yup.ref('tags')).includes(value))
        })}
      >
        {props => (
          <Form className={styles['FormCreateChat']} onClick={e => e.stopPropagation()}>
            <Cross onClick={() => setOpen(false)} className={styles['FormCreateChat-Icon']}/>
            <div className={styles['FormCreateChat-Content']}>
              <TextInput placeholder="название" name="title" type="text" required/>
              <label className={styles['FormCreateChat-Theme']}>
                <span className={styles['FormCreateChat-ThemeLabel']}>тема: </span>
                <RadioButtons
                  name="colorTheme"
                  defaultValues={Object.keys(themes) as ThemeColors[]}
                  className={styles['FormCreateChat-RadioButton']}/>
              </label>
              <div className={styles['FormCreateChat-AddTag']}>
                <span className={styles['FormCreateChat-AddTagLabel']}>теги:</span>
                <TextInput className={styles['FormCreateChat-AddTagInput']}
                           classNameError={styles['FormCreateChat-AddTagError']}
                           name="tagsProvider"
                           type="text"/>
                <Button type="button" className={styles['FormCreateChat-AddTagButton']} onClick={() => handleAddInput(props)}>
                  <span>добавить</span>
                </Button>
              </div>
              {Boolean(props.values.tags.length) &&
                <div className={styles['FormCreateChat-SelectedTags']}>
                  {props.values.tags.map(tag => <Tag key={tag} tag={tag} shadow deletable
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
