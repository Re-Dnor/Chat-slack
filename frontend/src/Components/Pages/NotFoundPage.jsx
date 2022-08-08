import React from 'react';
import { useTranslation } from 'react-i18next';

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="text-center h-100 mt-5">
      <img alt={t('notFound.header')} className="img-thumbnail" style={{ height: '700px' }} src="https://cdn2.hexlet.io/assets/error-pages/404-4b6ef16aba4c494d8101c104236304e640683fa9abdb3dd7a46cab7ad05d46e9.svg" />
      <h1 className="h4 text-muted">
        {t('notFound.header')}
      </h1>
      <p className="text-muted">
        {t('notFound.message')}
        <a href="/">{t('notFound.linkText')}</a>
      </p>
    </div>
  );
}

export default NotFoundPage;