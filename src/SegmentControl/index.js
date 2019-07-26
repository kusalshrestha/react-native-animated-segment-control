import React from 'react'
import PropTypes from 'prop-types'
import { View, Animated, ViewPropTypes, Easing } from 'react-native'

import styles from './styles'
import Segment from './Segment'

/**
 * A custom `SegmentControl` component, pretty much similar to native's SegmentControl but with animation.
 * Animates when changing the segment value.
 */
class SegmentControl extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedIndex: props.selectedIndex,
      segmentDimension: { width: 0, height: 0 },
      activeSegmentPosition: { x: props.offsetHeight, y: props.offsetHeight },
      positionAnimationValue: new Animated.Value(0)
    }
  }

  /**
   * On segment change event.
   *
   * @param {Number} index
   */
  onSegmentSelection = index => {
    const animate = () => {
      Animated.timing(this.state.positionAnimationValue, {
        toValue: this.state.activeSegmentPosition.x,
        duration: 150,
        easing: Easing.ease
      }).start(() => this.props.onChange(index))
    }

    this.setState(
      prevState => ({
        selectedIndex: index,
        activeSegmentPosition: { x: prevState.segmentDimension.width * index  + this.props.offsetHeight, y: prevState.activeSegmentPosition.y }
      }),
      animate
    )
  }

  /**
   * Invoked on mount and layout change of `segmentContainer` view.
   *
   * @param {Object} event
   */
  segmentOnLayout = event => {
    const { width, height } = event.nativeEvent.layout
    const segmentWidth = (width - this.props.offsetHeight * 2) / this.props.values.length

    const animate = () => {
      Animated.timing(this.state.positionAnimationValue, {
        toValue: segmentWidth * this.state.selectedIndex + this.props.offsetHeight,
        duration: 100
      }).start()
    }

    this.setState(() => ({
      segmentDimension: { width: segmentWidth, height }
    }), animate)
  }

  render() {
    const { style, disable, activeSegmentStyle, segmentControlStyle, selectedTextStyle, unSelectedTextStyle } = this.props
    const { width, height } = this.state.segmentDimension
    const segmentHeight = height - this.props.offsetHeight * 2

    const isDisabled = disable ? 'none' : 'auto'
    const extraStyles = disable ? styles.vivid : {}

    return (
      <View style={[styles.mainContainer, style]} pointerEvents={isDisabled}>
        <View
          style={[styles.segmentContainer, extraStyles, { height, borderRadius: height }, segmentControlStyle]}
          onLayout={this.segmentOnLayout}
        >
          {this.props.values.map((segment, index) => (
            <Segment
              style={{ height: segmentHeight }}
              title={segment}
              textStyle={index !== this.state.selectedIndex ? unSelectedTextStyle : {...styles.activeText, ...selectedTextStyle}}
              onPress={() => this.onSegmentSelection(index)}
            />
          ))}
          <Animated.View
            style={[
              {
                width,
                height: segmentHeight,
                left: this.state.positionAnimationValue,
                top: this.state.activeSegmentPosition.y
              },
              styles.segment,
              styles.activeSegment,
              activeSegmentStyle,
            ]}
          />
        </View>
      </View>
    )
  }
}

SegmentControl.defaultProps = {
  offsetHeight: 3,
  selectedIndex: 0,
  style: {},
  segmentControlStyle: {},
  activeSegmentStyle: {},
  selectedTextStyle: {},
  unSelectedTextStyle: {}
}

SegmentControl.propTypes = {
  /**
   * Segment values that are rendered on the view itself.
   */
  values: PropTypes.arrayOf(PropTypes.string).isRequired,

  /**
   * To enable diable the segment control. Default value is `false`.
   */
  disable: PropTypes.bool.isRequired,

  /**
   * A callback function of segment index on change. Changed index is send on the callback as a param.
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Index of the selected segment
   */
  selectedIndex: PropTypes.number,

  /**
   * Active Segment's offset height. Basically a padding.
   */
  offsetHeight: PropTypes.number,

  /**
   * Styles props of main wrapper
   */
  style: ViewPropTypes.style,

  /**
   * Styles props of segment control
   */
  segmentControlStyle: ViewPropTypes.style,

  /**
   * Styles props of active segment
   */
  activeSegmentStyle: ViewPropTypes.style,

  /**
   * Selected Segment text style.
   */
  selectedTextStyle: ViewPropTypes.style,

  /**
   * Unselected Segment text style.
   */
  unSelectedTextStyle: ViewPropTypes.style,
}

export default SegmentControl
