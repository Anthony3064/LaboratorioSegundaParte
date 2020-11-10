/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Image } from 'react-native';
import {
  Grayscale,
  Sepia,
  Tint,
  ColorMatrix,
  concatColorMatrices,
  invert,
  contrast,
  saturate
} from 'react-native-color-matrix-image-filters';

const GrayscaledImage = (imageProps) => (
  <Grayscale>
    <Image {...imageProps} />
  </Grayscale>
);

const CombinedFiltersImage = (imageProps) => (
  <Tint amount={1.25}>
    <Sepia>
      <Image {...imageProps} />
    </Sepia>
  </Tint>
);

const ColorMatrixImage = (imageProps) => (
  <ColorMatrix
    matrix={concatColorMatrices([saturate(-0.9), contrast(5.2), invert()])}
  // alt: matrix={[saturate(-0.9), contrast(5.2), invert()]}
  >
    <Image {...imageProps} />
  </ColorMatrix>
);

const App = () => {

  const [change, setChange] = useState(false);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>

              <Button title="Press" onPress={() => {
                if (change) {
                  setChange(false);
                } else {
                  setChange(true);
                }
              }} />

              {change === false ? <Image source={require('./image/parrot.png')} style={{ width: "100%" }} /> : <GrayscaledImage source={require('./image/parrot.png')} style={{ width: "100%" }} />}


            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
