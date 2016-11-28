# React-native-share-actions

React Native show share actions for Android and iOS.

[![npm version](https://badge.fury.io/js/react-native-share-actions.svg)](https://badge.fury.io/js/react-native-share-actions)


* Issues: [https://github.com/moorinteractive/react-native-share-actions/issues](https://github.com/moorinteractive/react-native-share-actions/issues)

This module uses [ActionSheetIOS](https://facebook.github.io/react-native/docs/actionsheetios.html) for iOS and a native bridge for Android.

## Installation

```
npm install react-native-share-actions
react-native link
```

### Android manual Installation

In your `android/app/build.gradle` add:

```
dependencies {
    compile project(':react-native-share-actions')
}
```

In your `android/settings.gradle` add:

```
include ':react-native-share-actions'
project(':react-native-share-actions').projectDir = file('../node_modules/react-native-share-actions/android')
```

In your `MainApplication.java` add:

```java
import io.moori.rnshareactions.RNShareActionsPackage;

@Override
protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
    new MainReactPackage(),
    new RNShareActionsPackage() // Add the package here
  );
}
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
    }, 'Share URL');

    if (result.success) {
      console.log(`Shared via ${result.method}`);
    }
  } catch (error) {
    console.error(error);
  }
}
```
