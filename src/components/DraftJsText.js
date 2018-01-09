// @flow

import React from 'react';
import {
  Text,
} from 'react-native';

import PropTypes from 'prop-types';

import loadAttributes from '../loadAttributes';

import defaultStyles from './defaultStyles';

type DraftJsTextPropsType = {
  type: string,
  text: string,
  customStyles?: Object,
  inlineStyles: Array<Object>,
  entityRanges: Array<Object>,
  entityMap: Object,
  navigate?: Function,
};

const DraftJsText = (props: DraftJsTextPropsType): any => {
  let textElements = props.text;

  if (textElements) {
    textElements = loadAttributes(
      props.text,
      props.customStyles,
      props.inlineStyles,
      props.entityRanges,
      props.entityMap,
      props.navigate,
    );

    const customStyle = props.customStyles ? props.customStyles[props.type] : undefined;

    return (<Text
      style={[defaultStyles[props.type], customStyle]}
    >{textElements}</Text>);
  }
  return null;
};

DraftJsText.propTypes = {
  text: PropTypes.string,
  customStyles: PropTypes.any,
  inlineStyles: PropTypes.array,
};

DraftJsText.defaultProps = {
  text: '',
  customStyles: {},
  inlineStyles: [],
  navigate: undefined,
};

export default DraftJsText;
