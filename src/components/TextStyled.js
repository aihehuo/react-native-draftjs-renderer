// @flow

import React from 'react';
import {
  Text,
  StyleSheet,
  Platform
} from 'react-native';

import PropTypes from 'prop-types';

type TextStyledPropsType = {
 text: string,
 type: any,
 customStyles: any,
 onPress?: Function,
};

const styles = StyleSheet.flatten({
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  link: {
    textDecorationLine: 'underline',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  strikethrough: {
    textDecorationLine: 'line-through',
  },
  superscript: {
    // WIP
  },
  subscript: {
    // WIP
  },
  // "fontsize-14": {
  //   fontSize: 20
  // },
  // "fontsize-12": {
  //   fontSize: 18
  // },
  // "fontsize-11": {
  //   fontSize: 16
  // },
  // "fontsize-10": {
  //   fontSize: 14
  // },
  // "fontsize-9": {
  //   fontSize: 12
  // },
  // "fontsize-8": {
  //   fontSize: 10
  // },
  "fontfamily-georgia": {
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'sans-serif'
  },
  "fontfamily-arial": {
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'notoserif'
  },
  "fontfamily-impact": {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto'
  },
  "fontfamily-tahoma": {
    fontFamily: Platform.OS === 'ios' ? 'Verdana' : 'monospace'
  },
  "fontfamily-times new roman": {
    fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif'
  }
});

const getStyles = (itemType: any, customStyles: Object): any => {
  console.log("ITEM TYPE", itemType)
  // if (itemType.includes('bgcolor')) {
  //   return [StyleSheet.flatten({
  //     backgroundColor: itemType.split('-')[1]
  //   }), customStyles[itemType]]
  // }
  // if (typeof itemType === 'string') return [styles[itemType], customStyles[itemType]];

  let defaultTextStyles = {};
  let customTextStyles = {};
  let bgcolorStyle = {}
  let colorStyle = {}
  let fontsizeStyle = {}
  itemType.forEach((i: string) => {
    if (i.includes('bgcolor')) {
      bgcolorStyle = StyleSheet.flatten({
        backgroundColor: i.split('-')[1]
      })
    }
    if (i.split('-')[0] === 'color') {
      colorStyle = StyleSheet.flatten({
        color: i.split('-')[1]
      })
    }
    if (i.split('-')[0] === 'fontsize') {
      let fontSize = Number(i.split('-')[1])
      fontsizeStyle = StyleSheet.flatten({
        lineHeight: fontSize + 14,
        fontSize: fontSize
      })
    }
    Object.assign(defaultTextStyles, styles[i]);
    Object.assign(customTextStyles, customStyles[i]);
  });
  const newStyles = [defaultTextStyles, customTextStyles, colorStyle, bgcolorStyle, fontsizeStyle];
  return newStyles;
};

const TextStyled = (props: TextStyledPropsType): any => {
  const textStyle = getStyles(props.type, props.customStyles, props.data);
  console.log("Text style",textStyle)
  if (props.onPress) {
    return <Text style={textStyle} onPress={props.onPress}>{props.text}</Text>;
  }
  return <Text style={textStyle}>{props.text}</Text>;
};

TextStyled.propTypes = {
  text: PropTypes.string,
  type: PropTypes.any.isRequired,
};

TextStyled.defaultProps = {
  text: '',
  onPress: undefined,
};

export default TextStyled;
