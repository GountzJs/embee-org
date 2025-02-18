import {
  BtnPrimary,
  InputOutline,
  LensSvg,
  Typography,
  XSvg,
} from '@embeeorg/ui-kit';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import styles from './form-search.module.css';
import { SearchSchema } from './validations';

type FormValues = {
  search: string;
};

interface Props {
  changeFilters: ({ search }: FormValues) => void;
  removeSearch: () => void;
  isActive?: boolean;
}

export function FormSearch({ changeFilters, isActive, removeSearch }: Props) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleOnSubmit = ({ search }: { search: string }) =>
    changeFilters({ search });

  const getColorLens = (isError: boolean): string => {
    if (isError && isFocused) return 'var(--ui-kit-primary-700)';
    if (isError) return 'var(--ui-kit-primary-400)';
    if (isFocused) return 'var(--ui-kit-secondary-400)';
    return 'white';
  };

  return (
    <Formik
      initialValues={{
        search: '',
      }}
      validationSchema={SearchSchema}
      onSubmit={handleOnSubmit}
    >
      {({ values, handleChange, handleSubmit, errors, touched }) => (
        <Form className={styles['form-search']} onSubmit={handleSubmit}>
          <div className={styles['input-detail-container']}>
            <div className={styles['input-search-container']}>
              <LensSvg
                className={styles['icon-search']}
                color={getColorLens(Boolean(touched.search && errors.search))}
                size={26}
              />
              <InputOutline
                type="text"
                name="search"
                className={styles['input-search']}
                placeholder="Buscar por nombre"
                error={Boolean(touched.search && errors.search)}
                value={values.search}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleChange}
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
            <Typography
              variant="p"
              color="primary"
              size="base"
              family="primary"
              weight="semibold"
              style={{
                textShadow: '0 0 2px #000',
              }}
            >
              {errors.search}
            </Typography>
          </div>
          <BtnPrimary type="submit">Buscar</BtnPrimary>
        </Form>
      )}
    </Formik>
  );
}
