import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, ViewStyle } from 'react-native'

import styles from './styles'

/**
 * A unit segment that is inside the segment control
 */
const Segment = ({ title, style, textStyle, onPress }) => (
  <TouchableOpacity style={[styles.segment, styles.touchableSegment, style]} onPress={onPress}>
    <Text style={[styles.defaultText, textStyle]}>{title}</Text>
  </TouchableOpacity>
)

Segment.defaultProps = {
  style: {}
}

Segment.propTypes = {
  title: PropTypes.string.isRequired,
  textStyle: PropTypes.shape(ViewStyle).isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.shape(ViewStyle)
}

export default Segment
