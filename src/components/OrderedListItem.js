// @flow

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import PropTypes from 'prop-types';

import DraftJsText from '../components/DraftJsText';

const styles = StyleSheet.create({
  orderedListItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderedListItemNumber: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 8,
    alignSelf: 'center',
  },
});

const OrderedListItem = (props: Object): any => {
  const number = props.counter;
  const separator = props.separator;
  const orderedListItemCustomStyleContainer = props.customStyles ?
    props.customStyles.orderedListItemContainer :
    undefined;

  const orderedListItemCustomStyleNumber = props.customStyles ?
    props.customStyles.orderedListItemNumber :
    undefined;

  return (
    <View style={[styles.orderedListItemContainer, orderedListItemCustomStyleContainer]}>
      <Text
        style={[styles.orderedListItemNumber, orderedListItemCustomStyleNumber]}
      >
        {number}{separator}
      </Text>
      <DraftJsText
        {...props}
      />
    </View>);
};

OrderedListItem.propTypes = {
  counter: PropTypes.number,
  customStyles: PropTypes.any,
  separator: PropTypes.string,
};

OrderedListItem.defaultProps = {
  counter: 1,
  customStyles: {},
  separator: '.',
};

export default OrderedListItem;
