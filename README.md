# react-native-multi-checkbox


Multiple Checkbox component for React Native, it works on both iOS and Android.

## Content

- [Installation](#installation) 
- [Getting started](#getting-started)
- [API](#api)
- [Contribution](#contribution)



## Installation

* 1.Run `npm i react-native-multi-checkbox --save`
* 2.`import MultiCheckbox from 'react-native-multi-checkbox'`    


## Getting started  

Add `react-native-multi-checkbox` to your js file.   

`import MultiCheckbox from 'react-native-multi-checkbox'`  

Add Inside render method of component , use MultiCheckbox component:   

```javascript
<MultiCheckbox
    style={{flex:1, paddingBottom:10}}
    items={[{ id: 1,  label: "item 1" }, { id: 2, label: "item 2" }]}
    labelPosition="right"
    checkBoxColor="#fff"
    checkedCheckBoxColor="#fff"
    defaultSelected={[2]}
    onPress={handleCheckboxChange}
    labelStyle={{color: '#000000'}}
    itemStyle={{marginBottom: 10}}
/>

Use action

const handleCheckboxChange = (checkId) => {
        if (selectedItem.includes(checkId)) {
            // If the value is already in the array, remove it
            setSelectedItem(selectedItem.filter((item) => item !== checkId));
        } else {
            // If the value is not in the array, add it
            setSelectedItem([...selectedItem, checkId]);
        }
    };
    
``` 
 


## API


Props              | Optional | Default     | Description
----------------- |  -------- | ----------- | -----------
style  | true |   |   Custom style for section 
itemStyle | true |  | Custom style for item (checckbox & label)
labelStyle |true |   | Custom style for label
items | false |   | Array data for items
defaultSelected | true |  | Array of id's
labelPosition   | true | Right | Position of lable
checkedCheckboxImage | true  | Checkbox image | Custom  checked Image
unCheckedCheckboxImage | true  | Unchecked checkbox image  | Custom  unchecked Image
onPress   |  false  |  | Callback  function 
checkBoxColor | true |   | Checkbox image tint color 
checkedCheckBoxColor | true |   | Checked checkbox image tint color 

## Contribution

If there are any Issues then welcome. please attach screenshot of code and issue. Will solve issue ASAP. 

Pull requests, feedbacks and suggestions are welcome!
 