import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, ViewPropTypes } from 'react-native'

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
  textStyle: ViewPropTypes.style.isRequired,
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style
}

export default Segment
