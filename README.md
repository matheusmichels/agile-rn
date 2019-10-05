## **Overview**

**Agile RN** is a **React Native template** that was created to speed up project start-up as well as make application development easier.

## **Starting a project**

```
react-native init AwesomeProject --template agile-rn
```

## **Features** (w/ examples)

- **Easy form creation / validation**

```javascript
import React, { useRef } from 'react';
import { Button } from 'react-native';
import * as yup from 'yup';

import { Form, Input } from '~/components';

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().required(),
});

export default function Auth() {
  const formRef = useRef();

  function handleSubmit(data) {
    console.log(data);

    /*
       {
        email: 'example@mail.com',
        password: '123'
       }
    */
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit} ref={formRef}>
      <Input name="email" label="Email" />
      <Input name="password" label="Password" />

      <Button title="Enter" onPress={() => formRef.current.send()} />
    </Form>
  );
}
```
