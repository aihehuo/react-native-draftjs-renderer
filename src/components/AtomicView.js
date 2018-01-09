// @flow

import React from 'react';
import {
  Image,
  View
} from 'react-native';

import PropTypes from 'prop-types';

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
      let inputImageStyle = {}
      if (entity.data.height !== 'auto') {
        inputImageStyle.height = Number(entity.data.height)
      }
      if (entity.data.width !== 'auto') {
        inputImageStyle.width = Number(entity.data.width)
      } else {
        inputImageStyle.width = '100%'
      }
      return (
        <Image
          style={[defaultStyles.image, customStyles.image, inputImageStyle]}
          source={{uri: entity.data.src}}
        />
      )
    }
    default: {
      return null
    }
  }
}

// class AtomicView extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       layoutWidth: Dimensions.get('window').width * 0.95,
//       width: '100%',
//       height: 0
//     }
//   }
//   render () {
//     const { entityRanges, entityMap, customStyles } = this.props
//     if (entityRanges.length === 0) {
//       return null
//     }
//     const entity = entityMap[entityRanges[0].key]
//     if (!entity) {
//       return null
//     }
//     switch(entity.type) {
//       case 'IMAGE': {
//         Image.getSize(entity.data.src, (width, height) => {
//           let aspectRatio = width / height
//           if (entity.data.height !== 'auto') {
//             this.setState({height: Number(entity.data.height)})
//           } else {
//             this.setState({height: this.state.layoutWidth / aspectRatio})
//           }
//           if (entity.data.width !== 'auto') {
//             this.setState({width: Number(entity.data.width)})
//           }
//         })
//         return (
//           <Image
//             style={[defaultStyles.image, customStyles.image, { width: this.state.width, height: this.state.height }]}
//             source={{uri: entity.data.src}}
//           />
//         )
//       }
//       // case 'EMBEDDED_LINK': {
//       //   const inputVideoStyle = {
//       //     height: entity.data.height === 'auto' ? 300 : Number(entity.data.height),
//       //     width: entity.data.width === 'auto' ? '100%' : Number(entity.data.width)
//       //   }
//       //   return (
//       //     <WebView
//       //       style={[defaultStyles.embed, customStyles.embed, inputVideoStyle]}
//       //       source={{uri: entity.data.src}}
//       //     />
//       //   )
//       // }
//       default: {
//         return null
//       }
//     }
//   }
// }

AtomicView.propTypes = {
  text: PropTypes.string,
  customStyles: PropTypes.any,
  inlineStyles: PropTypes.array,
};

AtomicView.defaultProps = {
  text: '',
  customStyles: {},
  inlineStyles: [],
  navigate: undefined,
};

export default AtomicView;
