# pinyin_js
中文转拼音

##汉字转化成带音节的拼音
```javascript
var pinyin=require("../src/pinyin");
console.log(pinyin.pinyin("你好"));
//输出结果是nǐ hǎo 
```

##汉字转化成不带音节的拼音
```javascript
var pinyin=require("../src/pinyin");
console.log(pinyin.pinyinWithOutYin("你好"));
//输出结果是ni hao 
```

##判断是否是汉字
```javascript
var pinyin=require("../src/pinyin");
console.log(pinyin.isChineseWord("你好"));//true
console.log(pinyin.isChineseWord("!你好",false));//true
console.log(pinyin.isChineseWord("!你好",true));//第二个参数：true是严格模式，默认为严格模式
//false
```
