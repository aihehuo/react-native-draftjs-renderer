// @flow

import React from 'react';
import {
  Image,
  View,
  WebView,
  Dimensions
} from 'react-native';

import defaultStyles from './defaultStyles';

// type AtomicViewPropsType = {
//   type: string,
//   text: string,
//   customStyles?: Object,
//   inlineStyles: Array<Object>,
//   entityRanges: Array<Object>,
//   entityMap: Object,
//   navigate?: Function,
// };

class AtomicView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      layoutWidth: Dimensions.get('window').width * 0.95,
      width: '100%',
      height: 0
    }
  }
  render () {
    const { entityRanges, entityMap, customStyles } = this.props
    if (entityRanges.length === 0) {
      return null
    }
    const entity = entityMap[entityRanges[0].key]
    if (!entity) {
      return null
    }
    switch(entity.type) {
      case 'IMAGE': {
        Image.getSize(entity.data.src, (width, height) => {
          let aspectRatio = width / height
          if (entity.data.height !== 'auto') {
            this.setState({height: Number(entity.data.height)})
          } else {
            this.setState({height: this.state.layoutWidth / aspectRatio})
          }
          if (entity.data.width !== 'auto') {
            this.setState({width: Number(entity.data.width)})
          }
        })
        return (
          <Image
            style={[defaultStyles.image, customStyles.image, { width: this.state.width, height: this.state.height }]}
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
  }
}

// AtomicView.propTypes = {
//   text: React.PropTypes.string,
//   customStyles: React.PropTypes.any,
//   inlineStyles: React.PropTypes.array,
// };
//
// AtomicView.defaultProps = {
//   text: '',
//   customStyles: {},
//   inlineStyles: [],
//   navigate: undefined,
// };

export default AtomicView;
