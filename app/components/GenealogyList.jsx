import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
// import style from './css/Genealogy.css';
import genealogy from './getDescendantDetail.json';


class GenealogyList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            genealogyListBoxWidth:800,
            genealogyListBoxHeight:600
        };
    }
    handleClick(e){
        console.log(genealogy.data);
        console.log(e.currentTarget.offsetWidth);
    }
	render(){
        const genealogyListBoxWidth=1200;
        const genealogyListBoxHeight=600;
        const genealogyListDetailsBoxWidth=120;
        const genealogyListTitleBoxHeight=100;
        const Generations_HEIGHT=66;
        const Generations_PADDINGTOP=11;
        const genealogyListUserBoxWidth=110;
        const FONTSIZE=18;
        const genealogyListWifeInfoBoxWidth=50;
        let genealogyListBox={
            width:genealogyListBoxWidth+'px',
            height:genealogyListBoxHeight+'px',
            background: '#fff',
            fontSize: '14px',
            color: '#545454',
            textAlign: 'center',
            margin:'150px 0 0 220px'
        };
        let genealogyListDetailsBox={
            width: genealogyListDetailsBoxWidth+'px',
            height: '100%',
            float: 'left',
            background:'#eee'
        };
        let genealogyListTitleBox={
            width: '100%',
            height: genealogyListTitleBoxHeight+'px',
            borderBottom: '1px dashed #999',
            float: 'left',
            textAlign: 'center',
            fontSize: FONTSIZE+'px',
            fontWeight: 'bold'
        };
        let genealogyListUserBox={
            width: genealogyListUserBoxWidth+'px',
            padding: '10px 5px 0 5px',
            height: '240px',
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
            height: '220px'
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
            height:'250px',
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
            <div className='genealogyListBox' data={genealogy} onClick={(e)=>this.handleClick(e)} style={genealogyListBox}>
            {
                [genealogy.data].map((key,item)=>{
                    (<div className='genealogyListDetailsBox' key={key} style={genealogyListDetailsBox}>
                        <div className='genealogyListTitleBox' style={genealogyListTitleBox}>
                            <span style={{width: '22px',display: 'inline-block',paddingTop: Generations_PADDINGTOP+'px'}}>十六世</span>
                        </div>
                        <div className='genealogyListUserBox' style={genealogyListUserBox}>
                            <div className='wifeInfoBox' style={wifeInfoBox}>
                                <span style={{fontSize: FONTSIZE+'px'}}>配</span>
                                <div className='genealogyListWifeInfoBox' style={genealogyListWifeInfoBox}>
                                    <span style={{fontSize:FONTSIZE+'px'}}>李元芳</span>
                                    <p style={{float:'left',width:'50%'}}>南岭村王泽民之女</p>
                                    <p style={{float:'left',width:'50%'}}>一九六九年四月二十日生</p>
                                </div>
                            </div>
                            <div className='selfInfoBox' style={selfInfoBox}>
                                <span style={{display: 'block',fontSize: FONTSIZE+'px',fontWeight: 'bold'}}>振峰</span>
                                <p style={{fontSize: '10px',width: '50%',float: 'left'}}>二零一零年二月十三日卒</p>
                                <p style={{fontSize: '10px',width: '50%',float: 'left'}}>一九六八年事儿三日生</p>
                            </div>
                            <div className='parentInfoBox' style={parentInfoBox}>
                                十五世立城三子
                            </div>
                        </div>
                        <div className='childrenInfoBox' style={childrenInfoBox}>
                            <div className='childrenGirlInfoBox' style={childrenGirlInfoBox}>
                                <p style={{width: '20%',fontSize: '14px',float: 'right'}}>长女 适东营区小杨家村杨中伏</p>
                            </div>
                            <div className='childrenInfoDeyailsBox' style={childrenInfoDeyailsBox}><span>子二</span><label style={{marginTop: '20px',display: 'block'}}>兴锋</label></div>
                            <div className='childrenInfoDeyailsBox' style={childrenInfoDeyailsBox}><span>女二</span><label style={{marginTop: '20px',display: 'block'}}>兴兰</label></div>
                        </div>
                    </div>)
                })
            }
            </div>
	    )
	}
}

//导出组件
export default GenealogyList;