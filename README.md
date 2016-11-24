# React-native-share-actions

React Native show share actions for Android and iOS.

* Issues: [https://github.com/moorinteractive/react-native-share-actions/issues](https://github.com/moorinteractive/react-native-share-actions/issues)

This module uses [ActionSheetIOS](https://facebook.github.io/react-native/docs/actionsheetios.html) for iOS and a native bridge for Android.

## Installation

```
npm install react-native-share-actions
react-native link
```

## Usage

```javascript
import ShareActions from 'react-native-share-actions';

async function handlePressShare() {
  try {
    const result = await ShareActions.share({
      url: 'http://www.example.com',
      message: 'This is a message',
      subject: 'Example'
    });

    if (result.success) {
      console.log(`Shared via ${method}`);
    }
  } catch (error) {
    console.error(error);
  }
}
```
