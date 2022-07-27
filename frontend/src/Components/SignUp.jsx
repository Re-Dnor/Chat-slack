import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import avatarImages from '../assets/avatar_1.jpg';

function SignUp() {
  // eslint-disable-next-line no-unused-vars
  const [registrationFailed, setRegistrationFailed] = useState(false);
  const { t } = useTranslation();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const validation = yup.object().shape({
    username: yup
      .string()
      .trim()
      .required('signup.required')
      .min(3, 'signup.usernameConstraints')
      .max(20, 'signup.usernameConstraints'),
    password: yup
      .string()
      .trim()
      .required('signup.required')
      .min(6, 'signup.passMin'),
    confirmPassword: yup
      .string()
      .test('confirmPassword', 'signup.mustMatch', (value, context) => value === context.parent.password),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validation,
  });

  return (
    <div className="container-fluid h-100 mt-5">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
              <div>
                <img
                  src={avatarImages}
                  className="rounded-circle"
                  alt={t('signup.header')}
                />
              </div>
              <Form onSubmit={formik.handleSubmit} className="w-50">
                <h1 className="text-center mb-4">{t('signup.header')}</h1>
                <Form.Group className="form-floating mb-3">
                  <Form.Control
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    placeholder={t('signup.usernameConstraints')}
                    name="username"
                    id="username"
                    autoComplete="username"
                    isInvalid={
                      (formik.errors.username && formik.touched.username)
                      || registrationFailed
                    }
                    required
                    ref={inputRef}
                  />
                  <Form.Label htmlFor="username">{t('signup.username')}</Form.Label>
                  <Form.Control.Feedback type="invalid" tooltip placement="right">
                    {t(formik.errors.username)}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-floating mb-3">
                  <Form.Control
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder={t('signup.passMin')}
                    name="password"
                    id="password"
                    aria-describedby="passwordHelpBlock"
                    isInvalid={
                      (formik.errors.password && formik.touched.password)
                      || registrationFailed
                    }
                    required
                    autoComplete="new-password"
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {t(formik.errors.password)}
                  </Form.Control.Feedback>
                  <Form.Label htmlFor="password">{t('signup.password')}</Form.Label>
                </Form.Group>
                <Form.Group className="form-floating mb-4">
                  <Form.Control
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    placeholder={t('signup.mustMatch')}
                    name="confirmPassword"
                    id="confirmPassword"
                    isInvalid={
                      (formik.errors.confirmPassword && formik.touched.confirmPassword)
                      || registrationFailed
                    }
                    required
                    autoComplete="new-password"
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {registrationFailed
                      ? t('signup.alreadyExists')
                      : t(formik.errors.confirmPassword)}
                  </Form.Control.Feedback>
                  <Form.Label htmlFor="confirmPassword">{t('signup.confirm')}</Form.Label>
                </Form.Group>
                <Button type="submit" variant="outline-primary" className="w-100">{t('signup.submit')}</Button>
              </Form>
            </div>
            <div className="card-footer p-4">
              <div className="text-center">
                <span>{t('signup.hasAccount')}</span>
                {' '}
                <Link to={'/login'}>{t('signup.login')}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
