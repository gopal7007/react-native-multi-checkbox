/*****
 *** react-native-multi-checkbox
 *** Multiple checkbox component for react native, it works on both iOS and Android
 *** https://github.com/gopal7007/react-native-multi-checkbox
 *** Email:gopal.khatri0429@gmail.com  
 *****/

import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight
} from 'react-native';


const MultiCheckbox = (props) => {

    const [selectedItem, setSelectedItems] = useState([]);

    useEffect(() => {
        const checkedItems = (props.defaultSelected) ? props.defaultSelected : [];
        setSelectedItems(checkedItems);
    }, [props.defaultSelected]);

    const renderImageAction = (itemId) => {
        const checkItem = selectedItem.includes(itemId);
        if (checkItem) {
            return props.checkedCheckboxImage ? props.checkedCheckboxImage : genCheckboxImage(checkItem);
        } else {
            return props.unCheckedCheckboxImage ? props.unCheckedCheckboxImage : genCheckboxImage(checkItem);
        }
    }
    const getCheckedColor = () => {
        return props.checkedCheckBoxColor ? props.checkedCheckBoxColor : props.checkBoxColor
    }
    const getUncheckedColor = () => {
        return props.checkBoxColor
    }
    const onClick = (checkId) => {
        props.onPress(checkId)
    }
    const genCheckboxImage = (imgType) => {
        const source = imgType ? require('./assets/img/checked_checkbox.png') : require('./assets/img/unchecked_checkbox.png');
        const tintStyle = imgType ? getCheckedColor() : getUncheckedColor()

        return (
            <Image source={source} style={{ tintColor: tintStyle }} />
        );
    }


    return (
        <View style={[styles.multiCheckboxMainSection, props.style]}>

            {props.items &&
                props.items.map((item, index) => {

                    const textPosition = props.labelPosition === 'left' ? 'left' : 'right';

                    return (
                        <TouchableHighlight key={index}
                            style={[styles.itemSection, props.itemStyle]}
                            onPress={() => onClick(item.id)}
                            underlayColor='transparent'
                        >
                            <View style={styles.multiCheckboxSection}>
                                {textPosition === 'left' &&
                                    <Text style={[styles.leftTextStyle, props.labelStyle]}>{item.label}</Text>
                                }
                                {renderImageAction(item.id)}
                                {textPosition === 'right' &&
                                    <Text style={[styles.rightTextStyle, props.labelStyle]}>{item.label}</Text>
                                }
                            </View>
                        </TouchableHighlight>
                    )
                })
            }
        </View>
    );
};

export default MultiCheckbox;


const styles = StyleSheet.create({
    multiCheckboxMainSection: {
        /* flexDirection: 'row',
        justifyContent: 'flex-start' */
    },
    multiCheckboxSection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemSection: {
        paddingBottom: 10

    },
    leftTextStyle: {
        color: "#fff",
        paddingRight: 10

    },
    rightTextStyle: {
        color: "#fff",
        paddingLeft: 10

    },
    labelStyle: {
        color: "#fff"
    },
});