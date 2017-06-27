import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import style from './css/AdminManage.css';

class AdminManage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfoState:false
        };
    }

	render(){
	    return (
            <div className={style.userManageBox}>
                <div className={style.userManageTitleBox}>
                    <Link to="/adminManage" className={style.active}>全部账号</Link>
                    <Link to="/adminManage:createAdmin">创建账号</Link>
                </div>
                <div className={style.userManageSubheadBox+' '+style.adminAllListBox}>
                    <span className={style.firstChild}>账户</span>
                    <span>邮箱</span>
                    <span>账户类型</span>
                    <span>操作</span>
                </div>
                <div className={style.userManageSubheadBox+' '+style.userAllListBox+' '+style.adminAllListBox}>
                    <span className={style.firstChild}><img src="./images/photo.png" /><label>阿呆</label></span>
                    <span>280201581@qq.com</span>
                    <span>超级管理员</span>
                    <span><i className="fa fa-trash"></i><i className="fa fa-eye"></i></span>
                </div>
            </div>
	    )
	}
}

//导出组件
export default AdminManage;