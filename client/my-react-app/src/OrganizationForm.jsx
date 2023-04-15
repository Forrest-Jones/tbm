import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './OrganizationForm.css';


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Organization name is required'),
  tagline: Yup.string()
    .required('Organization tagline is required'),
  logo: Yup.string(),
  description: Yup.string()
});

const OrganizationForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues || { name: '', tagline: '', logo: '', description: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div class="form-group">
            <label htmlFor="name">Organization Name</label>
            <Field type="text" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div class="form-group">
            <label htmlFor="tagline">Organization Tagline</label>
            <Field type="text" name="tagline" className="form-control" />
            <ErrorMessage name="tagline" component="div" className="error" />
          </div>
          <div class="form-group">
            <label htmlFor="logo">Organization Logo</label>
            <Field type="text" name="logo" className="form-control" />
            <ErrorMessage name="logo" component="div" className="error" />
          </div>
          <div class="form-group">
            <label htmlFor="description">Organization Description</label>
            <Field type="text" name="description" className="form-control" />
            <ErrorMessage name="description" component="div" className="error" />
          </div>
          <button type="submit" disabled={isSubmitting} className="btn btn-primary">
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default OrganizationForm;
