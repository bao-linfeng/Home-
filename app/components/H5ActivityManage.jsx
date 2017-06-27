import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import style from './css/H5ActivityManage.css';

class H5ActivityManage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfoState:false,
            h5ActivityDelete:false
        };
    }

    handleh5ActivityDelete(){
        this.setState({h5ActivityDelete:!this.state.h5ActivityDelete});
    }

	render(){
	    return (
            <div className={style.h5ActivityManageBox}>
                <div className={style.h5ActivityTitleManageBox}>
                    <Link to="/h5ActivityManage" className={style.active}>全部H5活动</Link>
                    <Link to="/h5ActivityAddManage">添加H5活动</Link>
                </div>
                <div className={style.h5ActivitySubheadManageBox}>
                    <span className={style.firstChild}>页面内容</span>
                    <span>创建时间</span>
                    <span>配置键</span>
                    <span>配置值</span>
                    <span>操作</span>
                </div>
                <div className={style.h5ActivitySubheadManageBox+' '+style.h5ActivityListManageBox}>
                    <span className={style.firstChild}>
                        <h3>Home+共享美好时光共享美好时光</h3>
                        <p>在世界范围内澳大利亚以其海滩而闻名,而其理由也显而易见:拥有世界上</p>
                    </span>
                    <span>2017.6.26</span>
                    <span>icareidicareidicareidicareid</span>
                    <span>icareidicareidicareidicareidicareidicareidicareidicareid</span>
                    <span><i className="fa fa-edit"></i><i className="fa fa-trash" onClick={(e)=>this.handleh5ActivityDelete(e)}></i><i className="fa fa-eye"></i></span>
                </div>
                {
                    !this.state.h5ActivityDelete ? null :
                    <div className={style.h5ActivityDeleteBoxBg}>
                        <div className={style.h5ActivityDeleteBox}>
                            <i className="fa fa-close" onClick={(e)=>this.handleh5ActivityDelete(e)}></i>
                            <p>确定删除？</p>
                            <span>删除以后，无法恢复数据</span>
                            <a className={style.btn}>确定</a>
                            <a className={style.btn+' '+style.disabled} onClick={(e)=>this.handleh5ActivityDelete(e)}>取消</a>
                        </div>
                    </div>
                }
            </div>
	    )
	}
}

//导出组件
export default H5ActivityManage;