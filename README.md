# **Overview**

<h3 align="center">
<b>Agile RN</b> is a <b>React Native ⚛ template</b> that was created to <i>speed up project start-up</i> as well as make <i>app development easier</i>.
<h3>

# Key features

- **React Hooks** 🎣
- **Easy form validation** ✅
- **Fast layout mounting** 📱

# Guides

## `<Form />` element

### **API**

| Prop          | Type              | Required | Note                                                                   |
| ------------- | ----------------- | -------- | ---------------------------------------------------------------------- |
| `schema`      | `Yup.object`      | `false`  | Validates form fields on button press                                  |
| `initialData` | `Object`          | `false`  | Defines initial values in form fields                                  |
| `onSubmit`    | `Function`        | `true`   | Will be called after button press, if data passes `schema` validation  |
| `ref`         | `React.createRef` | `true`   | Must be defined to send data on form button press `ref.current.send()` |

### **Example**

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

## `<Block />` element

### **API**

| Prop        | Type             | Default         | Note                                                            |
| ----------- | ---------------- | --------------- | --------------------------------------------------------------- |
| `container` | `Boolean`        | `false`         | Adds a `SafeAreaView` + `KeyboardAvoidingView` around component |
| `weight`    | `Boolean/Number` | `"none"`        | Defines the weight of component (flex)                          |
| `color`     | `String`         | `"transparent"` | Defines the component color                                     |
| `align`     | `Boolean/String` | `"flex-start"`  | Sets `align-items` style to the component                       |
| `justify`   | `Boolean/String` | `"flex-start"`  | Sets `justify-content` style to the component                   |
| `row`       | `Boolean`        | `false`         | Sets `flex-direction row` to the component                      |
| `distante`  | `Array<Number>`  | `[]`            | Sets `padding` into the component                               |

### **Example**

```javascript
import React from 'react';
import { Text } from 'react-native';

import { Block } from '~/components';

export default function App() {
  return (
    <Block container align justify>
      <Text>Hello World</Text>
    </Block>
  );
}
```

## **Dependencies**

- **Async Storage**
- **Prop Types**
- **React Native Gesture Handler**
- **React Native Masked Text**
- **React Native Vectors Icons**
- **React Navigation**
- **Redux**
- **Redux Saga**
- **Styled Components**
- **Yup**

## **Dev Dependencies**

- **Eslint**
- **Prettier**
- **Reactotron**
