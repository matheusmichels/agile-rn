## Starting

```js
react-native init ${projectName} --template agile-rn
```

## Changing app icon/name

- Android

  - Icon
    - https://apetools.webprofusion.com (Import icon/download bundle zip)
    - Replace icons in android\app\src\main\res
  - Name

    - android\app\src\main\res\values\strings.xml

    `<string name="app_name">${name}</string>`
