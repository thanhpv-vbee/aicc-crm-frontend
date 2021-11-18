import React from 'react';
import { useTranslation } from 'react-i18next';

const Payment = () => {
  const { t } = useTranslation(['payment']);

  return <div>{t('payment')}</div>;
};

export default Payment;
