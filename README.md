# React Native Animated Segmented Control 🚀

Animated segment control for react native.

![Demo](https://github.com/kusalshrestha/react-native-animated-segment-control/blob/master/Example/screenshots/segment-control.gif)

## Installation

```
npm install --save react-native-animated-segment-control
```
```
yarn add react-native-animated-segment-control
```

## Usage
```js
import SegmentContorl from 'react-native-animated-segment-control';

render() {
  return (
    <View style={styles.mainContainer}>
      <SegmentControl
        values={['Segment1', 'Segment2', 'Segment3']}
        onChange={(currentIndex) => {}}
        disable={false}
      />
    </View>
  )
}
```

## Properties

| Prop | Type | Description |
|---|---|---|
|**`disable`**|`Boolean`|Enable / Disable the entire component. Default is false.|
|**`values`**|`Array(String)`|The labels for the control's segment buttons, in order.|
|**`onChange`**|`function`|Callback that is called when the user taps a segment.|

## License

MIT