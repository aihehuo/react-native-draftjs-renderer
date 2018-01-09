// @flow

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import PropTypes from 'prop-types';

import DraftJsText from '../components/DraftJsText';

const styles = StyleSheet.create({
  blockquoteContainer: {
    borderLeftColor: '#eee',
    borderLeftWidth: 4,
    borderStyle: 'solid',
    marginTop: 22,
    marginBottom: 22,
    paddingLeft: 12,
  },
});

const BlockQuote = (props: Object): any => {
  const blockquoteCustomStyleContainer = props.customStyles ?
    props.customStyles.blockquoteContainer :
    undefined;
  const blockquoteCustomStyleIconBefore = props.customStyles ?
    props.customStyles.blockquoteIconBefore :
    undefined;
  const blockquoteCustomStyleIconAfter = props.customStyles ?
    props.customStyles.blockquoteIconAfter :
    undefined;

  return (
    <View style={[styles.blockquoteContainer, blockquoteCustomStyleContainer]}>
      <View style={blockquoteCustomStyleIconBefore} />
      <DraftJsText
        {...props}
      />
      <View style={blockquoteCustomStyleIconAfter} />
    </View>);
};

BlockQuote.propTypes = {
  text: PropTypes.string.isRequired,
  customStyles: PropTypes.any,
  type: PropTypes.string.isRequired,
};

BlockQuote.defaultProps = {
  customStyles: undefined,
  type: '',
};

export default BlockQuote;
