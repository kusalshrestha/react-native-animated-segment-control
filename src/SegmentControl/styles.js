import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  mainContainer: {
    height: 80,
    padding: 12,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5EAF2'
  },
  segmentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  segment: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeSegment: {
    flex: 1,
    zIndex: 5,
    borderRadius: 40,
    position: 'absolute',
    backgroundColor: '#FFBA0D'
  },
  touchableSegment: {
    zIndex: 10
  },
  animatedView: {
    zIndex: 5,
    position: 'absolute'
  },
  defaultText: {
    color: '#DDD'
  },
  activeText: {
    color: '#FFFFFF'
  },
  vivid: {
    opacity: 0.7
  }
})
