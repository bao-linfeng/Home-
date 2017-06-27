import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import style from './css/UserManage.css';

class UserNewManage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:0
        };
    }

	render(){
	    return (
            <div className={style.userManageBox}>
                <div className={style.userManageTitleBox}>
                    <Link to="/userManage">用户总数</Link>
                    <Link to="/userNewManage" className={style.active}>新增用户</Link>
                </div>
                <div className={style.userManageSubheadBox}>
                    <span className={style.firstChild}>用户</span>
                    <span>注册时间</span>
                    <span>手机号码</span>
                    <span>HomeID</span>
                    <span>邮箱</span>
                </div>
                <div className={style.userManageSubheadBox+' '+style.userAllListBox}>
                    <span className={style.firstChild}><img src="./images/photo.png" /><label>阿呆</label></span>
                    <span>2017.6.26</span>
                    <span>15280256971</span>
                    <span>10086</span>
                    <span>280201581@qq.com</span>
                </div>
                <div className={style.userManageSubheadBox+' '+style.userAllListBox}>
                    <span className={style.firstChild}><img src="./images/photo.png" /><label>阿呆</label></span>
                    <span>2017.6.26</span>
                    <span>15280256971</span>
                    <span>10086</span>
                    <span>280201581@qq.com</span>
                </div>
                <div className={style.userManageSubheadBox+' '+style.userAllListBox}>
                    <span className={style.firstChild}><img src="./images/photo.png" /><label>阿呆</label></span>
                    <span>2017.6.26</span>
                    <span>15280256971</span>
                    <span>10086</span>
                    <span>280201581@qq.com</span>
                </div>
                <div className={style.userManageSubheadBox+' '+style.userAllListBox}>
                    <span className={style.firstChild}><img src="./images/photo.png" /><label>阿呆</label></span>
                    <span>2017.6.26</span>
                    <span>15280256971</span>
                    <span>10086</span>
                    <span>280201581@qq.com</span>
                </div>
                <div className={style.userManageSubheadBox+' '+style.userAllListBox}>
                    <span className={style.firstChild}><img src="./images/photo.png" /><label>阿呆</label></span>
                    <span>2017.6.26</span>
                    <span>15280256971</span>
                    <span>10086</span>
                    <span>280201581@qq.com</span>
                </div>
                <div className={style.userManageSubheadBox+' '+style.userAllListBox}>
                    <span className={style.firstChild}><img src="./images/photo.png" /><label>阿呆</label></span>
                    <span>2017.6.26</span>
                    <span>15280256971</span>
                    <span>10086</span>
                    <span>280201581@qq.com</span>
                </div>
            </div>
	    )
	}
}

//导出组件
export default UserNewManage;