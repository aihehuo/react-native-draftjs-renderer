/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

import React from 'react';
import {
  Image,
  View,
  WebView
} from 'react-native';

import defaultStyles from './defaultStyles';

type AtomicViewPropsType = {
  type: string,
  text: string,
  customStyles?: Object,
  inlineStyles: Array<Object>,
  entityRanges: Array<Object>,
  entityMap: Object,
  navigate?: Function,
};

const AtomicView = (props: AtomicViewPropsType): any => {
  const { entityRanges, entityMap, customStyles } = props
  if (entityRanges.length === 0) {
    return null
  }
  const entity = entityMap[entityRanges[0].key]
  if (!entity) {
    return null
  }
  switch(entity.type) {
    case 'IMAGE': {
      const inputImageStyle = {
        height: entity.data.height === 'auto' ? 300 : Number(entity.data.height),
        width: entity.data.width === 'auto' ? '100%' : Number(entity.data.width)
      }
      return (
        <Image
          style={[defaultStyles.image, customStyles.image, inputImageStyle]}
          source={{uri: entity.data.src}}
        />
      )
    }
    // case 'EMBEDDED_LINK': {
    //   const inputVideoStyle = {
    //     height: entity.data.height === 'auto' ? 300 : Number(entity.data.height),
    //     width: entity.data.width === 'auto' ? '100%' : Number(entity.data.width)
    //   }
    //   return (
    //     <WebView
    //       style={[defaultStyles.embed, customStyles.embed, inputVideoStyle]}
    //       source={{uri: entity.data.src}}
    //     />
    //   )
    // }
    default: {
      return null
    }
  }
};

AtomicView.propTypes = {
  text: React.PropTypes.string,
  customStyles: React.PropTypes.any,
  inlineStyles: React.PropTypes.array,
};

AtomicView.defaultProps = {
  text: '',
  customStyles: {},
  inlineStyles: [],
  navigate: undefined,
};

export default AtomicView;
