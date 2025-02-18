import { BtnPrimary, InputOutline, LensSvg, XSvg } from '@embeeorg/ui-kit';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import styles from './form-search.module.css';

type FormValues = {
  search: string;
};

interface Props {
  changeFilters: ({ search }: FormValues) => void;
  removeSearch: () => void;
  isActive?: boolean;
}

export function FormSearch({ changeFilters, isActive, removeSearch }: Props) {
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const handleOnSubmit = ({ search }: { search: string }) => {
    changeFilters({ search });
  };

  return (
    <Formik
      initialValues={{
        search: '',
      }}
      onSubmit={handleOnSubmit}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form
          onSubmit={handleSubmit}
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            gap: 25,
            width: '100%',
          }}
        >
          <div className={styles['input-search-container']}>
            <LensSvg
              className={styles['icon-search']}
              color={isTouched ? 'var(--ui-kit-secondary-400)' : 'white'}
              size={26}
            />
            <InputOutline
              type="text"
              name="search"
              className={styles['input-search']}
              placeholder="Buscar por nombre"
              onFocus={() => setIsTouched(true)}
              onBlur={() => setIsTouched(false)}
              value={values.search}
              onChange={handleChange} // Pasa el evento directamente
            />
            {isActive && (
              <BtnPrimary
                type="button"
                className={styles['icon-close']}
                onClick={removeSearch}
              >
                <XSvg color={'var(--ui-kit-primary-500)'} size={26} />
              </BtnPrimary>
            )}
          </div>
          <BtnPrimary type="submit">Buscar</BtnPrimary>
        </Form>
      )}
    </Formik>
  );
}
