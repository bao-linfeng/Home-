import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
// import style from './css/Genealogy.css';
import genealogy from './getDescendantDetail.json';

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

class GenealogyList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            genealogyListBoxWidth:800,
            genealogyListBoxHeight:600
        };
    }

    componentDidMount(){

    }

    componentDidUpdate(){
        
    }

	render(){
        const Data=genealogy.data;//家谱数据
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
            margin:'150px 0 0 220px'
        };
        let genealogyListDetailsBox={
            width: (genealogyListBoxWidth*0.1-1)+'px',
            height: '100%',
            float: 'left',
            background:'#fff',
            border:'1px solid #999',
            borderRight:'none'
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
            float: 'left'
        };
        let childrenInfoDeyailsBox={
            width: '20%',
            float: 'right',
            fontWeight: 'bold'
        };
	    return (
            <div className='genealogyListBox' style={genealogyListBox}>
            {
                Object.values(Data).map((item,key)=>{
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
                        <div className='childrenGirlInfoBox' style={childrenGirlInfoBox}>
                            <p style={{width: '20%',fontSize: '14px',float: 'right'}}>长女 适东营区小杨家村杨中伏</p>
                        </div>
                        <div className='childrenInfoDeyailsBox' style={childrenInfoDeyailsBox}>
                            <span>{!!(item.children&&item.children.filter(cid=>Data[cid].gender==='male').length) ? ('子'+Arabia_To_SimplifiedChinese(item.children.filter(cid=>Data[cid].gender==='male').length)) : null}</span>
                            {!!item.children ? item.children.filter(cid=>Data[cid].gender==='male').map((cid,key)=>{
                                return <label style={{marginTop: '20px',display: 'block'}} key={key}>{Data[cid].name}</label>
                            }) : null}
                        </div>
                        <div className='childrenInfoDeyailsBox' style={childrenInfoDeyailsBox}>
                            <span>{!!(item.children&&item.children.filter(cid=>Data[cid].gender==='female').length) ? ('女'+Arabia_To_SimplifiedChinese(item.children.filter(cid=>Data[cid].gender==='female').length)) : null}</span>
                            {!!item.children ? item.children.filter(cid=>Data[cid].gender==='female').map((cid,key)=>{
                                return <label style={{marginTop: '20px',display: 'block'}} key={key}>{Data[cid].name}</label>
                            }) : null}
                        </div>
                    </div>
                </div>
                })
            }
                <div style={{width:'48px',height:'100%',float:'left',border:'1px solid #999'}}>
                    <div style={{height:'20%'}}>
                        <p style={{width:'24px',float:'left'}}>欧山金氏常</p>
                        <p style={{width:'24px',float:'left'}}>州银行支行</p>
                    </div>
                    <div style={{height:'60%',position:'relative'}}>
                        <div style={{width:'100%',height:'10px',background:'#000',paddingTop:'10px'}}><span style={{display:'block',width:'0',height:'0',borderBottom:'10px solid #fff',borderLeft:'25px solid transparent',borderRight:'25px solid transparent'}}></span></div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:'100%',position:'absolute',top:'0'}}>
                            <p style={{width:'25px'}}>郭氏族谱 后院</p>
                            <p style={{width:'25px'}}>郭氏族谱 后院</p>
                        </div>
                        <div style={{position:'absolute',bottom:'0',width:'100%',height:'10px',background:'#000',paddingBottom:'10px'}}><span style={{display:'block',width:'0',height:'0',borderTop:'10px solid #fff',borderLeft:'25px solid transparent',borderRight:'25px solid transparent'}}></span></div>
                    </div>
                </div>
            </div>
	    )
	}
}

//导出组件
export default GenealogyList;