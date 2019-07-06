/* 背景音乐数据，属性包括name和url，
*  name填要显示出来的名字；url填歌曲文件名（包括后缀名）
*  建议复制第一行加在最前面进行修改，注意逗号,
*  最后一个{ }后面不要有逗号,属性的值要用引号括起来
*/
var musicData =[
  { name: '恋愛サーキュレーション', url: 'love_loop.mp3'},
  { name: 'crossing field ', url: 'crossfield.mp3'},
  { name: 'LOL S2', url: 'LOL.mp3'}
];

var stuData = `
重新调整使用另一个rand程序，
重新调整使用另一个rand程序，
重新调整使用另一个rand程序
`;

//获取信息函数，请勿修改
function getData(type) {
  var stu = stuData.replace(/\r*\n*\t*\s/g,'').split(',');
  return type==0 ? musicData : stu;
}
