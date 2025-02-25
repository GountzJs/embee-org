import { BorderSort } from '@/borders/models/enums/border-sort';
import { BordersOrderBy } from '@/borders/models/enums/borders-order-by.enum';
import {
  BtnPrimary,
  ChevronSvg,
  InputOutline,
  LensSvg,
  Typography,
  XSvg,
} from '@embeeorg/ui-kit';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import styles from './form-search.module.css';
import { SearchSchema } from './validations';

type FormValues = {
  search: string;
  orderBy: BordersOrderBy;
  sort: BorderSort;
};

interface Props {
  changeFilters: ({ search }: FormValues) => void;
  removeSearch: () => void;
  isActive?: boolean;
}

export function FormSearch({ changeFilters, isActive, removeSearch }: Props) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleOnSubmit = ({
    search,
    orderBy,
    sort,
  }: {
    search: string;
    orderBy: BordersOrderBy;
    sort: BorderSort;
  }) => changeFilters({ search, orderBy, sort });

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
        orderBy: BordersOrderBy.Rank,
        sort: BorderSort.Desc,
      }}
      validationSchema={SearchSchema}
      onSubmit={handleOnSubmit}
    >
      {({ values, handleChange, handleSubmit, errors }) => (
        <Form className={styles['form-search']} onSubmit={handleSubmit}>
          <div className={styles['input-detail-container']}>
            <div className={styles['input-search-container']}>
              <LensSvg
                className={styles['icon-search']}
                color={getColorLens(Boolean(errors.search))}
                size={26}
              />
              <InputOutline
                type="text"
                name="search"
                className={styles['input-search']}
                placeholder="Buscar por nombre"
                error={Boolean(errors.search)}
                autoComplete="off"
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
          <div className={styles['radio-btn-container']}>
            <Typography
              variant="h3"
              family="primary"
              color="white"
              size="3xl"
              weight="bold"
            >
              Ordenar por:
            </Typography>

            <div className={styles['radio-btn-section']}>
              <label>
                <Field
                  type="radio"
                  name="orderBy"
                  value={BordersOrderBy.Rank}
                  className={styles['radio-btn']}
                  onChange={handleChange}
                  style={{ marginRight: 10 }}
                />
                <Typography
                  variant="p"
                  family="secondary"
                  color={
                    values.orderBy === BordersOrderBy.Rank
                      ? 'primary-light'
                      : 'white'
                  }
                  size="lg"
                  weight="normal"
                >
                  Rango
                </Typography>
              </label>
              <label>
                <Field
                  type="radio"
                  name="orderBy"
                  value={BordersOrderBy.CreatedAt}
                  className={styles['radio-btn']}
                  onChange={handleChange}
                  style={{ marginRight: 10 }}
                />
                <Typography
                  variant="p"
                  family="secondary"
                  color={
                    values.orderBy === BordersOrderBy.CreatedAt
                      ? 'primary-light'
                      : 'white'
                  }
                  size="lg"
                  weight="normal"
                >
                  Fecha
                </Typography>
              </label>
            </div>

            <Typography
              variant="h3"
              family="primary"
              color="white"
              size="3xl"
              weight="bold"
            >
              Dirección del orden:
            </Typography>

            <div className={styles['radio-btn-section']}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                <Field
                  type="radio"
                  name="sort"
                  value={BorderSort.Desc}
                  className={styles['radio-btn']}
                  onChange={handleChange}
                />
                <ChevronSvg
                  color={
                    values.sort === BorderSort.Desc
                      ? 'var(--ui-kit-primary-500)'
                      : 'white'
                  }
                  size={26}
                />
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                <Field
                  type="radio"
                  name="sort"
                  value={BorderSort.Asc}
                  className={styles['radio-btn']}
                  onChange={handleChange}
                />
                <ChevronSvg
                  color={
                    values.sort === BorderSort.Asc
                      ? 'var(--ui-kit-primary-500)'
                      : 'white'
                  }
                  size={26}
                  style={{ transform: 'rotate(180deg)' }}
                />
              </label>
            </div>
          </div>
          <BtnPrimary type="submit">Buscar</BtnPrimary>
        </Form>
      )}
    </Formik>
  );
}
