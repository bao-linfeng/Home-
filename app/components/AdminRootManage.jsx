import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import style from './css/AdminRootManage.css';

class AdminRootManage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfoState:false
        };
    }

	render(){
	    return (
            <div className={style.adminRootManageBox}>
                <div className={style.adminRootManageTitleBox}>
                    <Link to="/adminRootManage" className={style.active}>全部类型</Link>
                    <Link to="/adminRootManage:createAdminRoot">创建账号类型</Link>
                </div>
                <div className={style.adminRootManageSubheadBox}>
                    <span className={style.firstChild}>账户类型</span>
                    <span>操作</span>
                </div>
                <div className={style.adminRootManageSubheadBox+' '+style.adminRootManageListBox}>
                    <span className={style.firstChild}>超级管理员</span>
                    <span><i className="fa fa-trash"></i><i className="fa fa-eye"></i></span>
                </div>
                <div className={style.adminRootManageSubheadBox+' '+style.adminRootManageListBox}>
                    <span className={style.firstChild}>研发管理员</span>
                    <span><i className="fa fa-trash"></i><i className="fa fa-eye"></i></span>
                </div>
                <div className={style.adminRootManageSubheadBox+' '+style.adminRootManageListBox}>
                    <span className={style.firstChild}>财务管理员</span>
                    <span><i className="fa fa-trash"></i><i className="fa fa-eye"></i></span>
                </div>
                <div className={style.adminRootManageSubheadBox+' '+style.adminRootManageListBox}>
                    <span className={style.firstChild}>运营管理员</span>
                    <span><i className="fa fa-trash"></i><i className="fa fa-eye"></i></span>
                </div>
            </div>
	    )
	}
}

//导出组件
export default AdminRootManage;