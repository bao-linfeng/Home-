import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
// import style from './css/Genealogy.css';
import genealogy from './getDescendantDetail.json';


var data='{"a00bb440-2a89-4959-a1eb-535e58f0aeb8":{"id":"a00bb440-2a89-4959-a1eb-535e58f0aeb8","name":"张三","level":2,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"曾经是世界冠军","usedName":"","styled":"崔","hao":"伯乐","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"1990年3月","deadDay":"2016年3月","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":1,"children":["2558d30d-6b57-417a-9702-d69866d03c1b"]},"2558d30d-6b57-417a-9702-d69866d03c1b":{"id":"2558d30d-6b57-417a-9702-d69866d03c1b","name":"李四","level":3,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"李四是个商人","usedName":"","styled":"文泽","hao":"泽凯","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"2001年三月","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":1,"children":["3b1b3293-be19-4d2d-9b93-a02fd05d0db6","ec8b1d24-5f2c-40e2-be24-b2c34cc5f516"],"parents":["a00bb440-2a89-4959-a1eb-535e58f0aeb8"]},"ec8b1d24-5f2c-40e2-be24-b2c34cc5f516":{"id":"ec8b1d24-5f2c-40e2-be24-b2c34cc5f516","name":"王全","level":4,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":1,"parents":["2558d30d-6b57-417a-9702-d69866d03c1b"],"children":["dc9f4f70-1743-44f5-8189-558b3afc1381","11be8c51-2d1f-428b-8580-32e73a3a6ba4","c0e1039f-d5f2-45ff-b227-71e48a42e9cc","a29e21f0-33a1-4a27-afee-2cb1dbedb88e","0744f8f6-a7bd-497c-8046-9c186fb7dc74","441f7ee3-afc6-457d-a38e-0073ce7d0bce","aefbb58b-aca3-46a0-9503-4d682766866c"]},"3b1b3293-be19-4d2d-9b93-a02fd05d0db6":{"id":"3b1b3293-be19-4d2d-9b93-a02fd05d0db6","name":"卫东","level":4,"gender":"male","birthday":"1990","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":2,"parents":["2558d30d-6b57-417a-9702-d69866d03c1b"],"children":["7debd899-35d9-4f90-8640-ef87e312243d","e47180bf-4fdb-45c5-8748-ce01c62d67bb"]},"aefbb58b-aca3-46a0-9503-4d682766866c":{"id":"aefbb58b-aca3-46a0-9503-4d682766866c","name":"周八","level":5,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":1,"parents":["ec8b1d24-5f2c-40e2-be24-b2c34cc5f516"],"children":["5bb1dfd5-d30f-4658-ae80-c8c6220c14ae"]},"441f7ee3-afc6-457d-a38e-0073ce7d0bce":{"id":"441f7ee3-afc6-457d-a38e-0073ce7d0bce","name":"白六","level":5,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":2,"parents":["ec8b1d24-5f2c-40e2-be24-b2c34cc5f516"],"children":["bb805019-517d-486b-a06d-d405dd96e1c4","6b50889f-1dee-49d3-a522-bf47450ae35a"]},"0744f8f6-a7bd-497c-8046-9c186fb7dc74":{"id":"0744f8f6-a7bd-497c-8046-9c186fb7dc74","name":"周酒","level":5,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":3,"parents":["ec8b1d24-5f2c-40e2-be24-b2c34cc5f516"],"children":["5caec75a-4aa7-43be-9fb8-e681020fc0de"]},"a29e21f0-33a1-4a27-afee-2cb1dbedb88e":{"id":"a29e21f0-33a1-4a27-afee-2cb1dbedb88e","name":"王五","level":5,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":4,"parents":["ec8b1d24-5f2c-40e2-be24-b2c34cc5f516"],"children":["b6c517f2-597a-4929-8ce3-d9800826dd9a"]},"c0e1039f-d5f2-45ff-b227-71e48a42e9cc":{"id":"c0e1039f-d5f2-45ff-b227-71e48a42e9cc","name":"赖仓","level":5,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":5,"parents":["ec8b1d24-5f2c-40e2-be24-b2c34cc5f516"],"children":["432fa0b8-4742-4b3f-b23f-f66247494ddd","1ece66a9-b0a1-4e26-a3bb-91d1f1192123"]},"11be8c51-2d1f-428b-8580-32e73a3a6ba4":{"id":"11be8c51-2d1f-428b-8580-32e73a3a6ba4","name":"思思","level":5,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":6,"parents":["ec8b1d24-5f2c-40e2-be24-b2c34cc5f516"],"children":["47d9d954-2952-4016-9618-4eba7b3c1879"]},"dc9f4f70-1743-44f5-8189-558b3afc1381":{"id":"dc9f4f70-1743-44f5-8189-558b3afc1381","name":"木木","level":5,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":7,"parents":["ec8b1d24-5f2c-40e2-be24-b2c34cc5f516"],"children":["5e39bd83-60a2-4036-9a53-ecdc5ad35eca","10420a2f-616a-4983-b803-b2b52905ffc1"]},"e47180bf-4fdb-45c5-8748-ce01c62d67bb":{"id":"e47180bf-4fdb-45c5-8748-ce01c62d67bb","name":"孙权","level":5,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":1,"parents":["3b1b3293-be19-4d2d-9b93-a02fd05d0db6"]},"7debd899-35d9-4f90-8640-ef87e312243d":{"id":"7debd899-35d9-4f90-8640-ef87e312243d","name":"朱雀","level":5,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":2,"parents":["3b1b3293-be19-4d2d-9b93-a02fd05d0db6"],"children":["9b1bc0d6-d639-4592-9275-9d4b753c87f6","4d3cccee-1f29-4ba4-a71f-45948d9bc824"]},"6b50889f-1dee-49d3-a522-bf47450ae35a":{"id":"6b50889f-1dee-49d3-a522-bf47450ae35a","name":"孙七","level":6,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":1,"parents":["441f7ee3-afc6-457d-a38e-0073ce7d0bce"],"children":["6597e8ea-31cb-424c-82ea-a4009607d5b3"]},"bb805019-517d-486b-a06d-d405dd96e1c4":{"id":"bb805019-517d-486b-a06d-d405dd96e1c4","name":"孙八","level":6,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":2,"parents":["441f7ee3-afc6-457d-a38e-0073ce7d0bce"]},"5bb1dfd5-d30f-4658-ae80-c8c6220c14ae":{"id":"5bb1dfd5-d30f-4658-ae80-c8c6220c14ae","name":"周桥","level":6,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":1,"parents":["aefbb58b-aca3-46a0-9503-4d682766866c"]},"5caec75a-4aa7-43be-9fb8-e681020fc0de":{"id":"5caec75a-4aa7-43be-9fb8-e681020fc0de","name":"张久儿","level":6,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":1,"parents":["0744f8f6-a7bd-497c-8046-9c186fb7dc74"],"children":["ab9cf1f6-99ac-40c1-a7e4-7e1ec58ce607"]},"b6c517f2-597a-4929-8ce3-d9800826dd9a":{"id":"b6c517f2-597a-4929-8ce3-d9800826dd9a","name":"白柳","level":6,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":1,"parents":["a29e21f0-33a1-4a27-afee-2cb1dbedb88e"]},"1ece66a9-b0a1-4e26-a3bb-91d1f1192123":{"id":"1ece66a9-b0a1-4e26-a3bb-91d1f1192123","name":"花豆","level":6,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":1,"parents":["c0e1039f-d5f2-45ff-b227-71e48a42e9cc"]},"432fa0b8-4742-4b3f-b23f-f66247494ddd":{"id":"432fa0b8-4742-4b3f-b23f-f66247494ddd","name":"蛮才","level":6,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":2,"parents":["c0e1039f-d5f2-45ff-b227-71e48a42e9cc"],"children":["485ec493-470e-4e68-9ad2-27a117d1bad4"]},"47d9d954-2952-4016-9618-4eba7b3c1879":{"id":"47d9d954-2952-4016-9618-4eba7b3c1879","name":"理论","level":6,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":1,"parents":["11be8c51-2d1f-428b-8580-32e73a3a6ba4"]},"10420a2f-616a-4983-b803-b2b52905ffc1":{"id":"10420a2f-616a-4983-b803-b2b52905ffc1","name":"茫昧","level":6,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":1,"parents":["dc9f4f70-1743-44f5-8189-558b3afc1381"]},"5e39bd83-60a2-4036-9a53-ecdc5ad35eca":{"id":"5e39bd83-60a2-4036-9a53-ecdc5ad35eca","name":"尜尜","level":6,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":2,"parents":["dc9f4f70-1743-44f5-8189-558b3afc1381"]},"4d3cccee-1f29-4ba4-a71f-45948d9bc824":{"id":"4d3cccee-1f29-4ba4-a71f-45948d9bc824","name":"迈达","level":6,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":1,"parents":["7debd899-35d9-4f90-8640-ef87e312243d"]},"9b1bc0d6-d639-4592-9275-9d4b753c87f6":{"id":"9b1bc0d6-d639-4592-9275-9d4b753c87f6","name":"庄前","level":6,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":2,"parents":["7debd899-35d9-4f90-8640-ef87e312243d"],"children":["eccd1038-a4da-4854-a519-ccfe4e2deed7"]},"6597e8ea-31cb-424c-82ea-a4009607d5b3":{"id":"6597e8ea-31cb-424c-82ea-a4009607d5b3","name":"孙思","level":7,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":1,"parents":["6b50889f-1dee-49d3-a522-bf47450ae35a"]},"ab9cf1f6-99ac-40c1-a7e4-7e1ec58ce607":{"id":"ab9cf1f6-99ac-40c1-a7e4-7e1ec58ce607","name":"李四服","level":7,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":1,"parents":["5caec75a-4aa7-43be-9fb8-e681020fc0de"]},"485ec493-470e-4e68-9ad2-27a117d1bad4":{"id":"485ec493-470e-4e68-9ad2-27a117d1bad4","name":"武昌","level":7,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":1,"parents":["432fa0b8-4742-4b3f-b23f-f66247494ddd"]},"eccd1038-a4da-4854-a519-ccfe4e2deed7":{"id":"eccd1038-a4da-4854-a519-ccfe4e2deed7","name":"后督","level":7,"gender":"male","birthday":"","birthAddress":"","fatherName":"","motherName":"","isAlive":0,"tailed":"","profile":"","usedName":"","styled":"","hao":"","academic":"","occupation":"","birthPlace":"","residence":"","birthday2":"","deadDay":"","yearOfLife":0,"cemetery":"","spouseData":"[]","spouseList":"[]","outsideLink":"[]","IsCelebrity":0,"biography":"","portrait":"[]","sort":1,"parents":["9b1bc0d6-d639-4592-9275-9d4b753c87f6"]}}';
var	Data = JSON.parse(data);
	console.log(data);
function Arabia_To_SimplifiedChinese(Num) {//把阿拉伯数字转换成中文数字
    for (let i = Num.length - 1; i >= 0; i--) {
        Num = Num.replace(",", "")//替换Num中的“,”
        Num = Num.replace(" ", "")//替换Num中的空格
    }    
    if (isNaN(Num)) { //验证输入的字符是否为数字
        //alert("请检查小写金额是否正确");
        return;
    }
    //字符处理完毕后开始转换，采用前后两部分分别转换
    let part = String(Num).split(".");
    let newchar = "";
    //小数点前进行转化
    for (let i = part[0].length - 1; i >= 0; i--) {
        if (part[0].length > 10) {
            //alert("位数过大，无法计算");
            return "";
        }//若数量超过拾亿单位，提示
        let tmpnewchar = ""
        let perchar = part[0].charAt(i);
        switch (perchar) {
            case "0":  tmpnewchar = "零" + tmpnewchar;break;
            case "1": tmpnewchar = "一" + tmpnewchar; break;
            case "2": tmpnewchar = "二" + tmpnewchar; break;
            case "3": tmpnewchar = "三" + tmpnewchar; break;
            case "4": tmpnewchar = "四" + tmpnewchar; break;
            case "5": tmpnewchar = "五" + tmpnewchar; break;
            case "6": tmpnewchar = "六" + tmpnewchar; break;
            case "7": tmpnewchar = "七" + tmpnewchar; break;
            case "8": tmpnewchar = "八" + tmpnewchar; break;
            case "9": tmpnewchar = "九" + tmpnewchar; break;
        }
        switch (part[0].length - i - 1) {
            case 0: tmpnewchar = tmpnewchar; break;
            case 1: if (perchar != 0) tmpnewchar = tmpnewchar + "十"; break;
            case 2: if (perchar != 0) tmpnewchar = tmpnewchar + "百"; break;
            case 3: if (perchar != 0) tmpnewchar = tmpnewchar + "千"; break;
            case 4: tmpnewchar = tmpnewchar + "万"; break;
            case 5: if (perchar != 0) tmpnewchar = tmpnewchar + "十"; break;
            case 6: if (perchar != 0) tmpnewchar = tmpnewchar + "百"; break;
            case 7: if (perchar != 0) tmpnewchar = tmpnewchar + "千"; break;
            case 8: tmpnewchar = tmpnewchar + "亿"; break;
            case 9: tmpnewchar = tmpnewchar + "十"; break;
        }
        newchar = tmpnewchar + newchar;
    }   
    //替换所有无用汉字，直到没有此类无用的数字为止
    while (newchar.search("零零") != -1 || newchar.search("零亿") != -1 || newchar.search("亿万") != -1 || newchar.search("零万") != -1) {
        newchar = newchar.replace("零亿", "亿");
        newchar = newchar.replace("亿万", "亿");
        newchar = newchar.replace("零万", "万");
        newchar = newchar.replace("零零", "零");      
    }
    //替换以“一十”开头的，为“十”
    if (newchar.indexOf("一十") == 0) {
        newchar = newchar.substr(1);
    }
    //替换以“零”结尾的，为“”
    if (newchar.lastIndexOf("零") == newchar.length - 1) {
        newchar = newchar.substr(0, newchar.length - 1);
    }
    return newchar;
}

function setNumberToString(n){//数字转换成长等
    switch(n){
        case 0:
            return '长';
            break;
        case 1:
            return '二';
            break;
        case 2:
            return '三';
            break;
        case 3:
            return '四';
            break;
        case 4:
            return '五';
            break;
        case 5:
            return '六';
            break;
        case 6:
            return '七';
            break;
        case 7:
            return '八';
            break;
        case 8:
            return '九';
            break;

    }
}

class GenealogyList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            genealogyListBoxWidth:800,
            genealogyListBoxHeight:600,
            page:1
        };
    }

    componentDidMount(){

    }

    componentDidUpdate(){
        
    }

    handleMinuPage(e){
    	if(this.state.page <= 1){
    		this.setState({page:1});
    		return;
    	}
    	this.setState({page:this.state.page-1
    	});
    }

    handleAddPage(e){
    	let dataLength=Math.ceil(Object.values(Data).length*0.1);
    	if(this.state.page >= dataLength){
    		this.setState({page:dataLength});
    		return;
    	}
    	this.setState({page:this.state.page+1});
    	console.log(dataLength);
    }

    handleChangePage(e){
    	let page=Number(e.target.value);
    	let dataLength=Math.ceil(Object.values(Data).length*0.1);
    	if(page <= 1){
    		this.setState({page:1});
    		return;
    	}
    	if(page >= dataLength){
    		this.setState({page:dataLength});
    		return;
    	}
    	this.setState({page:page});
    }

	render(){
        const genealogyListBoxWidth=1200;//最外围大框宽度
        const genealogyListBoxHeight=600;
        const FONTSIZE=18;//妻子“配”字体大小
        const genealogyListWifeInfoBoxWidth=50;//妻子信息框
        let genealogyListBox={
            width:(genealogyListBoxWidth+50)+'px',
            height:genealogyListBoxHeight+'px',
            background: '#fff',
            fontSize: '14px',
            color: '#545454',
            textAlign: 'center',
            margin:'150px auto 0 auto'
        };
        let genealogyListDetailsBox={
            width: (genealogyListBoxWidth*0.1-1)+'px',
            height: (genealogyListBoxHeight-2)+'px',
            float: 'right',
            background:'#fff',
            border:'1px solid #999',
            borderRight:'none'
        };
        let genealogyListDetailsRightBox={
        	width: (genealogyListBoxWidth*0.1-1)+'px',
            height: (genealogyListBoxHeight-2)+'px',
            float: 'right',
            background:'#fff',
            border:'1px solid #999',
        	borderLeft:'none'
        };
        let genealogyListTitleBox={
            width: '100%',
            height: '16.5%',
            borderBottom: '1px dashed #999',
            float: 'left',
            textAlign: 'center',
            fontSize: FONTSIZE+'px',
            fontWeight: 'bold',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
        };
        let genealogyListUserBox={
            width: (genealogyListBoxWidth*0.1-10)+'px',
            padding: '10px 5px 0 5px',
            height: '40%',
            float: 'left'
        };
        let wifeInfoBox={
            width: '60%',
            float: 'left'
        };
        let genealogyListWifeInfoBox={
            width: genealogyListWifeInfoBoxWidth+'%',
            fontSize: '10px',
            overflow: 'hidden',
        };
        let selfInfoBox={
            width: '30%',
            float: 'left'
        };
        let parentInfoBox={
            width: '10%',
            float: 'left',
            fontSize: '10px'
        };
        let childrenInfoBox={
            width: '110px',
            height:'41.66%',
            padding: '0 5px',
            float: 'left'
        };
        let childrenGirlInfoBox={
            width: '60%',
            float: 'right'
        };
        let childrenInfoDeyailsBox={
            width: '20%',
            float: 'right',
            fontWeight: 'bold'
        };
        let page={
        	display:'inline-block',
        	width:'25px',
        	height:'25px',
        	lineHeight:'25px',
        	textAlign:'center',
        	border:'1px solid #999',
        	marginLeft:'20px',
        	cursor:'pointer'
        }
	    return (
	    	<div style={{width:'100%',height:'100%',background:'#fff'}}>
	    	    <div className='genealogyListBox' style={genealogyListBox}>
	                <div style={{width:genealogyListBoxWidth*0.5+'px',height:genealogyListBoxHeight+'px',float:'right',overflow:'hidden'}}>
	                {
	                	this.state.page == 1 ? 
	                	    <div style={{width:(genealogyListBoxWidth*0.1-1)+'px',height:(genealogyListBoxHeight-2)+'px',float:'right',border:'1px solid #999',borderLeft:'none',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
			                    <h3 style={{width:'25px'}}>郭氏族谱<p style={{fontWeight:'normal',marginTop:'20px'}}>前院支族</p></h3>
			                </div> : null
	                }
		            {
		            	this.state.page == 1 ? 
		                Object.values(Data).slice(0,4).map((item,key)=>{
			                return <div className='genealogyListDetailsBox' key={key} style={genealogyListDetailsRightBox}>
			                    <div className='genealogyListTitleBox' style={genealogyListTitleBox}>
			                        <span style={{width: '22px',display: 'inline-block'}}>{Arabia_To_SimplifiedChinese(item.level)}世</span>
			                    </div>
			                    <div className='genealogyListUserBox' style={genealogyListUserBox}>
			                        <div className='wifeInfoBox' style={wifeInfoBox}>
			                            <span style={{fontSize: FONTSIZE+'px'}}>配</span>
			                            {
			                                JSON.parse(item.spouseList).map((item,key)=>{
			                                    return (
			                                        <div className='genealogyListWifeInfoBox' key={key} style={genealogyListWifeInfoBox}>
			                                            <span style={{fontSize:FONTSIZE+'px'}}>{item.surname}</span>
			                                            <p style={{float:'left',width:'50%'}}>{item.death ? item.death+'卒': item.death}</p>
			                                            <p style={{float:'left',width:'50%'}}>{item.birth ? item.birth+'生': item.birth}</p>
			                                        </div>
			                                        )
			                                })
			                            }
			                        </div>
			                        <div className='selfInfoBox' style={selfInfoBox}>
			                            <span style={{display: 'block',fontSize: FONTSIZE+'px',fontWeight: 'bold'}}>{item.name}</span>
			                            <p style={{fontSize: '10px',width: '50%',float: 'left'}}>{item.deadDay ? item.deadDay+'卒' : item.deadDay}</p>
			                            <p style={{fontSize: '10px',width: '50%',float: 'left'}}>{item.birthday2 ? item.birthday2+'生' : item.birthday2}</p>
			                        </div>
			                        {
			                            !(item.level-1) ? null :
			                            <div className='parentInfoBox' style={parentInfoBox}>
			                                {Arabia_To_SimplifiedChinese(item.level-1)}世
			                                {item.fatherName}
			                                {!!item.parents ? item.parents.map((pid) => {return Arabia_To_SimplifiedChinese(1+Data[pid].children.findIndex(child=> child===item.id))}) : null}子
			                            </div>
			                        }
			                    </div>
			                    <div className='childrenInfoBox' style={childrenInfoBox}>
			                        {
			                            !!(item.children&&item.children.filter(cid=>Data[cid].gender==='male').length) ? 
			                                <div className='childrenInfoDeyailsBox' style={childrenInfoDeyailsBox}>
			                                    <span>{'子'+Arabia_To_SimplifiedChinese(item.children.filter(cid=>Data[cid].gender==='male').length)}</span>
			                                    {
			                                        item.children.filter(cid=>Data[cid].gender==='male').map((cid,key)=>{
			                                        return <label style={{marginTop: '10px',display: 'block'}} key={key}>{Data[cid].name}</label>})
			                                    }
			                                </div> : null 
			                        }
			                        {
			                            !!(item.children&&item.children.filter(cid=>Data[cid].gender==='female').length) ?
			                            <div className='childrenInfoDeyailsBox' style={childrenInfoDeyailsBox}>
			                                <span>{'女'+Arabia_To_SimplifiedChinese(item.children.filter(cid=>Data[cid].gender==='female').length)}</span>
			                                {
			                                    item.children.filter(cid=>Data[cid].gender==='female').map((cid,key)=>{
			                                    return <label style={{marginTop: '20px',display: 'block'}} key={key}>{Data[cid].name}</label>})
			                                }
			                            </div> : null
			                        }
			                        {
			                            !!(item.children&&item.children.filter(cid=>Data[cid].gender==='female').length) ? 
			                            <div className='childrenGirlInfoBox' style={childrenGirlInfoBox}>
			                                <p style={{width: '20%',fontSize: '14px',float: 'right'}}>长女 适东营区小杨家村杨中伏</p>
			                            </div> : null
			                        }
			                        {
			                            !!(item.children&&item.children.filter(cid=>Data[cid].gender==='male').length) ? 
			                            <div className='childrenGirlInfoBox' style={childrenGirlInfoBox}>
			                                {   
			                                    item.children.filter(cid=>Data[cid].gender==='male').map((cid,key)=>{
			                                        return <p style={{width: '20%',fontSize: '14px',float: 'right'}} key={key}>{setNumberToString(key)}子{Data[cid].birthday2 ? (Data[cid].birthday2+'生') : null}</p>})
			                                }
			                            </div> : null
			                        }
			                    </div>
			                </div>
		                })
                        :
                        Object.values(Data).slice((this.state.page-1)*9,(this.state.page-1)*9+5).map((item,key)=>{
			                return <div className='genealogyListDetailsBox' key={key} style={genealogyListDetailsRightBox}>
			                    <div className='genealogyListTitleBox' style={genealogyListTitleBox}>
			                        <span style={{width: '22px',display: 'inline-block'}}>{Arabia_To_SimplifiedChinese(item.level)}世</span>
			                    </div>
			                    <div className='genealogyListUserBox' style={genealogyListUserBox}>
			                        <div className='wifeInfoBox' style={wifeInfoBox}>
			                            <span style={{fontSize: FONTSIZE+'px'}}>配</span>
			                            {
			                                JSON.parse(item.spouseList).map((item,key)=>{
			                                    return (
			                                        <div className='genealogyListWifeInfoBox' key={key} style={genealogyListWifeInfoBox}>
			                                            <span style={{fontSize:FONTSIZE+'px'}}>{item.surname}</span>
			                                            <p style={{float:'left',width:'50%'}}>{item.death ? item.death+'卒': item.death}</p>
			                                            <p style={{float:'left',width:'50%'}}>{item.birth ? item.birth+'生': item.birth}</p>
			                                        </div>
			                                        )
			                                })
			                            }
			                        </div>
			                        <div className='selfInfoBox' style={selfInfoBox}>
			                            <span style={{display: 'block',fontSize: FONTSIZE+'px',fontWeight: 'bold'}}>{item.name}</span>
			                            <p style={{fontSize: '10px',width: '50%',float: 'left'}}>{item.deadDay ? item.deadDay+'卒' : item.deadDay}</p>
			                            <p style={{fontSize: '10px',width: '50%',float: 'left'}}>{item.birthday2 ? item.birthday2+'生' : item.birthday2}</p>
			                        </div>
			                        {
			                            !(item.level-1) ? null :
			                            <div className='parentInfoBox' style={parentInfoBox}>
			                                {Arabia_To_SimplifiedChinese(item.level-1)}世
			                                {item.fatherName}
			                                {!!item.parents ? item.parents.map((pid) => {return Arabia_To_SimplifiedChinese(1+Data[pid].children.findIndex(child=> child===item.id))}) : null}子
			                            </div>
			                        }
			                    </div>
			                    <div className='childrenInfoBox' style={childrenInfoBox}>
			                        {
			                            !!(item.children&&item.children.filter(cid=>Data[cid].gender==='male').length) ? 
			                                <div className='childrenInfoDeyailsBox' style={childrenInfoDeyailsBox}>
			                                    <span>{'子'+Arabia_To_SimplifiedChinese(item.children.filter(cid=>Data[cid].gender==='male').length)}</span>
			                                    {
			                                        item.children.filter(cid=>Data[cid].gender==='male').map((cid,key)=>{
			                                        return <label style={{marginTop: '10px',display: 'block'}} key={key}>{Data[cid].name}</label>})
			                                    }
			                                </div> : null 
			                        }
			                        {
			                            !!(item.children&&item.children.filter(cid=>Data[cid].gender==='female').length) ?
			                            <div className='childrenInfoDeyailsBox' style={childrenInfoDeyailsBox}>
			                                <span>{'女'+Arabia_To_SimplifiedChinese(item.children.filter(cid=>Data[cid].gender==='female').length)}</span>
			                                {
			                                    item.children.filter(cid=>Data[cid].gender==='female').map((cid,key)=>{
			                                    return <label style={{marginTop: '20px',display: 'block'}} key={key}>{Data[cid].name}</label>})
			                                }
			                            </div> : null
			                        }
			                        {
			                            !!(item.children&&item.children.filter(cid=>Data[cid].gender==='female').length) ? 
			                            <div className='childrenGirlInfoBox' style={childrenGirlInfoBox}>
			                                <p style={{width: '20%',fontSize: '14px',float: 'right'}}>长女 适东营区小杨家村杨中伏</p>
			                            </div> : null
			                        }
			                        {
			                            !!(item.children&&item.children.filter(cid=>Data[cid].gender==='male').length) ? 
			                            <div className='childrenGirlInfoBox' style={childrenGirlInfoBox}>
			                                {   
			                                    item.children.filter(cid=>Data[cid].gender==='male').map((cid,key)=>{
			                                        return <p style={{width: '20%',fontSize: '14px',float: 'right'}} key={key}>{setNumberToString(key)}子{Data[cid].birthday2 ? (Data[cid].birthday2+'生') : null}</p>})
			                                }
			                            </div> : null
			                        }
			                    </div>
			                </div>
		                })
		            }
		            </div>
	                <div style={{width:'48px',height:(genealogyListBoxHeight-2)+'px',float:'right',border:'1px solid #999'}}>
	                    <div style={{height:'20%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
	                        <p style={{width:'24px'}}>欧山金氏常</p>
	                        <p style={{width:'24px'}}>州银行支行</p>
	                    </div>
	                    <div style={{height:'60%',position:'relative'}}>
	                        <div style={{width:'100%',height:'10px',background:'#000',paddingTop:'10px'}}><span style={{display:'block',width:'0',height:'0',borderBottom:'10px solid #fff',borderLeft:'25px solid transparent',borderRight:'25px solid transparent'}}></span></div>
	                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:'100%',position:'absolute',top:'0'}}>
	                            <p style={{width:'25px'}}>郭氏族谱 后院</p>
	                            <p style={{width:'25px'}}>郭氏族谱 后院</p>
	                        </div>
	                        <div style={{position:'absolute',bottom:'0',width:'100%',height:'10px',background:'#000',paddingBottom:'10px'}}><span style={{display:'block',width:'0',height:'0',borderTop:'10px solid #fff',borderLeft:'25px solid transparent',borderRight:'25px solid transparent'}}></span></div>
	                    </div>
	                    <div style={{height:'20%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
	                        <span style={{width:'20px'}}>{Arabia_To_SimplifiedChinese(this.state.page)}</span>
	                    </div>
	                </div>
	                <div style={{width:genealogyListBoxWidth*0.5+'px',height:genealogyListBoxHeight+'px',float:'right',overflow:'hidden'}}>
		            {
		            	this.state.page == 1 ?
		            	Object.values(Data).slice(4,9).map((item,key)=>{
			                return <div className='genealogyListDetailsBox' key={key} style={genealogyListDetailsBox}>
			                    <div className='genealogyListTitleBox' style={genealogyListTitleBox}>
			                        <span style={{width: '22px',display: 'inline-block'}}>{Arabia_To_SimplifiedChinese(item.level)}世</span>
			                    </div>
			                    <div className='genealogyListUserBox' style={genealogyListUserBox}>
			                        <div className='wifeInfoBox' style={wifeInfoBox}>
			                            <span style={{fontSize: FONTSIZE+'px'}}>配</span>
			                            {
			                                JSON.parse(item.spouseList).map((item,key)=>{
			                                    return (
			                                        <div className='genealogyListWifeInfoBox' key={key} style={genealogyListWifeInfoBox}>
			                                            <span style={{fontSize:FONTSIZE+'px'}}>{item.surname}</span>
			                                            <p style={{float:'left',width:'50%'}}>{item.death ? item.death+'卒': item.death}</p>
			                                            <p style={{float:'left',width:'50%'}}>{item.birth ? item.birth+'生': item.birth}</p>
			                                        </div>
			                                        )
			                                })
			                            }
			                        </div>
			                        <div className='selfInfoBox' style={selfInfoBox}>
			                            <span style={{display: 'block',fontSize: FONTSIZE+'px',fontWeight: 'bold'}}>{item.name}</span>
			                            <p style={{fontSize: '10px',width: '50%',float: 'left'}}>{item.deadDay ? item.deadDay+'卒' : item.deadDay}</p>
			                            <p style={{fontSize: '10px',width: '50%',float: 'left'}}>{item.birthday2 ? item.birthday2+'生' : item.birthday2}</p>
			                        </div>
			                        {
			                            !(item.level-1) ? null :
			                            <div className='parentInfoBox' style={parentInfoBox}>
			                                {Arabia_To_SimplifiedChinese(item.level-1)}世
			                                {item.fatherName}
			                                {!!item.parents ? item.parents.map((pid) => {return Arabia_To_SimplifiedChinese(1+Data[pid].children.findIndex(child=> child===item.id))}) : null}子
			                            </div>
			                        }
			                    </div>
			                    <div className='childrenInfoBox' style={childrenInfoBox}>
			                        {
			                            !!(item.children&&item.children.filter(cid=>Data[cid].gender==='male').length) ? 
			                                <div className='childrenInfoDeyailsBox' style={childrenInfoDeyailsBox}>
			                                    <span>{'子'+Arabia_To_SimplifiedChinese(item.children.filter(cid=>Data[cid].gender==='male').length)}</span>
			                                    {
			                                        item.children.filter(cid=>Data[cid].gender==='male').map((cid,key)=>{
			                                        return <label style={{marginTop: '20px',display: 'block'}} key={key}>{Data[cid].name}</label>})
			                                    }
			                                </div> : null 
			                        }
			                        {
			                            !!(item.children&&item.children.filter(cid=>Data[cid].gender==='female').length) ?
			                            <div className='childrenInfoDeyailsBox' style={childrenInfoDeyailsBox}>
			                                <span>{'女'+Arabia_To_SimplifiedChinese(item.children.filter(cid=>Data[cid].gender==='female').length)}</span>
			                                {
			                                    item.children.filter(cid=>Data[cid].gender==='female').map((cid,key)=>{
			                                    return <label style={{marginTop: '20px',display: 'block'}} key={key}>{Data[cid].name}</label>})
			                                }
			                            </div> : null
			                        }
			                        {
			                            !!(item.children&&item.children.filter(cid=>Data[cid].gender==='female').length) ? 
			                            <div className='childrenGirlInfoBox' style={childrenGirlInfoBox}>
			                                <p style={{width: '20%',fontSize: '14px',float: 'right'}}>长女 适东营区小杨家村杨中伏</p>
			                            </div> : null
			                        }
			                        {
			                            !!(item.children&&item.children.filter(cid=>Data[cid].gender==='male').length) ? 
			                            <div className='childrenGirlInfoBox' style={childrenGirlInfoBox}>
			                                {   
			                                    item.children.filter(cid=>Data[cid].gender==='male').map((cid,key)=>{
			                                        return <p style={{width: '20%',fontSize: '14px',float: 'right'}} key={key}>{setNumberToString(key)}子{Data[cid].birthday2 ? (Data[cid].birthday2+'生') : null}</p>})
			                                }
			                            </div> : null
			                        }
			                    </div>
			                </div>
		                })
                        :
		                Object.values(Data).slice(((this.state.page-1)*9+5),(this.state.page*9+9)).map((item,key)=>{
			                return <div className='genealogyListDetailsBox' key={key} style={genealogyListDetailsBox}>
			                    <div className='genealogyListTitleBox' style={genealogyListTitleBox}>
			                        <span style={{width: '22px',display: 'inline-block'}}>{Arabia_To_SimplifiedChinese(item.level)}世</span>
			                    </div>
			                    <div className='genealogyListUserBox' style={genealogyListUserBox}>
			                        <div className='wifeInfoBox' style={wifeInfoBox}>
			                            <span style={{fontSize: FONTSIZE+'px'}}>配</span>
			                            {
			                                JSON.parse(item.spouseList).map((item,key)=>{
			                                    return (
			                                        <div className='genealogyListWifeInfoBox' key={key} style={genealogyListWifeInfoBox}>
			                                            <span style={{fontSize:FONTSIZE+'px'}}>{item.surname}</span>
			                                            <p style={{float:'left',width:'50%'}}>{item.death ? item.death+'卒': item.death}</p>
			                                            <p style={{float:'left',width:'50%'}}>{item.birth ? item.birth+'生': item.birth}</p>
			                                        </div>
			                                        )
			                                })
			                            }
			                        </div>
			                        <div className='selfInfoBox' style={selfInfoBox}>
			                            <span style={{display: 'block',fontSize: FONTSIZE+'px',fontWeight: 'bold'}}>{item.name}</span>
			                            <p style={{fontSize: '10px',width: '50%',float: 'left'}}>{item.deadDay ? item.deadDay+'卒' : item.deadDay}</p>
			                            <p style={{fontSize: '10px',width: '50%',float: 'left'}}>{item.birthday2 ? item.birthday2+'生' : item.birthday2}</p>
			                        </div>
			                        {
			                            !(item.level-1) ? null :
			                            <div className='parentInfoBox' style={parentInfoBox}>
			                                {Arabia_To_SimplifiedChinese(item.level-1)}世
			                                {item.fatherName}
			                                {!!item.parents ? item.parents.map((pid) => {return Arabia_To_SimplifiedChinese(1+Data[pid].children.findIndex(child=> child===item.id))}) : null}子
			                            </div>
			                        }
			                    </div>
			                    <div className='childrenInfoBox' style={childrenInfoBox}>
			                        {
			                            !!(item.children&&item.children.filter(cid=>Data[cid].gender==='male').length) ? 
			                                <div className='childrenInfoDeyailsBox' style={childrenInfoDeyailsBox}>
			                                    <span>{'子'+Arabia_To_SimplifiedChinese(item.children.filter(cid=>Data[cid].gender==='male').length)}</span>
			                                    {
			                                        item.children.filter(cid=>Data[cid].gender==='male').map((cid,key)=>{
			                                        return <label style={{marginTop: '20px',display: 'block'}} key={key}>{Data[cid].name}</label>})
			                                    }
			                                </div> : null 
			                        }
			                        {
			                            !!(item.children&&item.children.filter(cid=>Data[cid].gender==='female').length) ?
			                            <div className='childrenInfoDeyailsBox' style={childrenInfoDeyailsBox}>
			                                <span>{'女'+Arabia_To_SimplifiedChinese(item.children.filter(cid=>Data[cid].gender==='female').length)}</span>
			                                {
			                                    item.children.filter(cid=>Data[cid].gender==='female').map((cid,key)=>{
			                                    return <label style={{marginTop: '20px',display: 'block'}} key={key}>{Data[cid].name}</label>})
			                                }
			                            </div> : null
			                        }
			                        {
			                            !!(item.children&&item.children.filter(cid=>Data[cid].gender==='female').length) ? 
			                            <div className='childrenGirlInfoBox' style={childrenGirlInfoBox}>
			                                <p style={{width: '20%',fontSize: '14px',float: 'right'}}>长女 适东营区小杨家村杨中伏</p>
			                            </div> : null
			                        }
			                        {
			                            !!(item.children&&item.children.filter(cid=>Data[cid].gender==='male').length) ? 
			                            <div className='childrenGirlInfoBox' style={childrenGirlInfoBox}>
			                                {   
			                                    item.children.filter(cid=>Data[cid].gender==='male').map((cid,key)=>{
			                                        return <p style={{width: '20%',fontSize: '14px',float: 'right'}} key={key}>{setNumberToString(key)}子{Data[cid].birthday2 ? (Data[cid].birthday2+'生') : null}</p>})
			                                }
			                            </div> : null
			                        }
			                    </div>
			                </div>
		                })
		            }
		            </div>
	            </div>
	            <div style={{height:'35px',textAlign:'right',width:'1250px',margin:'20px auto'}}>
		            <span style={page} onClick={(e)=>this.handleMinuPage(e)}>&lt;</span>
		            <input type="text" value={this.state.page} style={{width:'50px',height:'25px',marginLeft:'20px',textAlign:'center',border:'1px solid #999',outline:'none'}} onChange={(e)=>this.handleChangePage(e)} />
		            <span style={page} onClick={(e)=>this.handleAddPage(e)}>&gt;</span>
		        </div>
	    	</div>
	    )
	}
}

//导出组件
export default GenealogyList;