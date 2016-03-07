/**
 * Created by Alex on 2016/3/7.
 */
var pinyin=require("../src/pinyin");
pinyin.pinyin("你好");
console.log(pinyin.isChineseWord("你好"));//true
console.log(pinyin.isChineseWord("!你好"));//true
console.log(pinyin.isChineseWord("!你好",true));//false