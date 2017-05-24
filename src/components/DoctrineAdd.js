import React from 'react';

// Choose your theme
import AutoForm from 'uniforms-bootstrap3/AutoForm';
import AutoField from 'uniforms-bootstrap3/AutoField';
import SubmitField from 'uniforms-bootstrap3/SubmitField';

// A compatible schema
import Schema from '../schema/schema';

// This will render an automatic, validated form, with labelled fields, inline
// validation and a submit button. If model will be present, form will be filled
// with appropriate values.
const PostForm = () =>
  <AutoForm schema={Schema} onSubmit={doc => console.log(doc)}/>
;

export default PostForm;