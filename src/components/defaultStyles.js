// @flow

import {
  StyleSheet,
  Platform,
} from 'react-native';

const defaultStyles = StyleSheet.create({
  paragraph: {
    lineHeight: 18,
    fontSize: 16,
    fontWeight: 'normal',
  },
  unstyled: {
    textAlign: 'justify',
    lineHeight: 26,
    fontSize: 16,
    paddingTop: 11,
    paddingBottom: 11,
    fontWeight: 'normal',
    fontFamily: 'PingFangSC-Regular',
    letterSpacing: 0.5
  },
  'header-one': {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  'header-two': {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  'header-three': {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  'header-four': {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  'header-five': {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  'header-six': {
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  'unordered-list-item': {
    fontSize: 14,
    fontWeight: 'normal',
  },
  'ordered-list-item': {
    fontSize: 14,
    fontWeight: 'normal',
  },
  'code-block': {
    backgroundColor: '#cecece',
    fontFamily: Platform.OS === 'android' ? 'monospace' : 'Courier New',
    padding: 16,
  },
  blockquote: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'italic',
    marginLeft: 16,
  },
  image: {
    height: 200,
    width: '100%'
  }
});

export default defaultStyles;
