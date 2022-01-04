import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILHospitalBG} from '../../assets/illustration';
import {fonts, colors} from '../../utils';
import {ListHospital} from '../../components';
import {DummyHospital1, DummyHospital2, DummyHospital3} from '../../assets';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 available</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          type="General Hospital"
          name="Mayo Clinic - Rochester"
          address="Rochester, MN, USA"
          pic={DummyHospital1}
        />
        <ListHospital
          type="Children's Hospital"
          name="Boston Children's Hospital"
          address="Boston, MA, USA"
          pic={DummyHospital2}
        />
        <ListHospital
          type="Psychiatric Hospital"
          name="McLean Hospital"
          address="Belmont, MA, USA"
          pic={DummyHospital3}
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  background: {height: 240, paddingTop: 30},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  },
});
