# React Native Draft.js Render

A React Native render for [Draft.js](http://draftjs.org/) model and works great with [react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg).

## Getting Started
Install **React Native Draft.js Render** on your React Native project, using NPM or Yarn:

```sh
npm i -S react-native-draftjs-renderer
# or...
yarn add react-native-draftjs-renderer
```

### Using
Just import and insert your Draft.js model on RNDraftJSRender:

```js
import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import RNDraftJSRender from 'react-native-draftjs-renderer';
import contentState from 'DraftJs/contentState';

const MyApp = () => (
  <RNDraftJSRender
    contentState={contentState}
  />
);

AppRegistry.registerComponent('MyApp', () => MyApp);
```

UPDATE:
## 1.0.1
* Fix the image auto height crop problem.
* Fix fontSize can not be over 14 bug.
* Increase the Text padding size to 2.
