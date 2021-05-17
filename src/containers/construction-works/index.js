import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {
  KeyboardAwareScrollView,
  Input,
  Button,
  Row,
  Text,
} from 'src/components';
import {COLORS} from 'src/constants';

const btnInfo = [
  {
    content: 'Welding works',
    active: true,
  },
  {
    content: 'Foundation works',
    active: true,
  },
  {
    content: 'Roofing',
    active: false,
  },
  {
    content: 'Waterproofing',
    active: true,
  },
  {
    content: 'Architecture',
    active: false,
  },
  {
    content: 'Design',
    active: false,
  },
];
export const ConstructionWorks = () => {
  const [statesArray, setStatesArray] = useState(btnInfo);

  const changeState = (status, index) => {
    const changedData = statesArray.map((item, ind) => {
      let result = ind === index ? {...item, active: !status} : {...item};
      return result;
    });
    setStatesArray(changedData);
  };
  const renderBtn = (item, index) => {
    return (
      <TouchableOpacity style={styles.btn} key={index}>
        <Row style={styles.contentBlock}>
          <Text extraStyles={styles.greyText}>{item.content}</Text>
          <Button
            extraStyles={[
              styles.btnWidth,
              item.active ? styles.checkedBtn : styles.unCheckedBtn,
            ]}
            icon={
              item.active
                ? require('src/assets/images/checked.png')
                : require('src/assets/images/unchecked.png')
            }
            onPress={() => {
              changeState(item.active, index);
            }}
          />
        </Row>
      </TouchableOpacity>
    );
  };
  return (
    <KeyboardAwareScrollView>
      <Input placeholder="Search by category" icon="search" />
      <View style={styles.block}>
        {statesArray.map((item, index) => renderBtn(item, index))}
      </View>
      <Row style={styles.btnContainer}>
        <Button
          extraStyles={styles.transparentBtn}
          extraTextStyles={styles.greyText}
          text="Skip"
          theme="small"
        />
        <Button text="Done" theme="small" />
      </Row>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  block: {
    marginVertical: 30,
    width: '100%',
  },
  btnContainer: {
    width: '100%',
  },
  greyText: {
    color: COLORS.GREY_DARK,
  },
  contentBlock: {
    flex: 1,
    paddingLeft: '5%',
  },
  btn: {
    backgroundColor: COLORS.PRIMARY,
    borderWidth: 1,
    borderColor: COLORS.ORANGE,
    flexDirection: 'row',
    marginVertical: 5,
  },
  transparentBtn: {
    borderWidth: 1,
    borderColor: COLORS.BTN_BORDER,
    backgroundColor: COLORS.TRANSPARENT,
  },
  btnWidth: {
    width: '20%',
    height: 55,
  },
  checkedBtn: {
    backgroundColor: COLORS.ORANGE,
  },
  unCheckedBtn: {
    backgroundColor: COLORS.GREY_LIGHTER,
  },
});
