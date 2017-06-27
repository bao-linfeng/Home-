import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import style from './css/UserManage.css';

class UserManage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfoState:false
        };
    }

    handleCloseUserInfoBox(){
        this.setState({userInfoState: !this.state.userInfoState});
    }

	render(){
	    return (
            <div className={style.userManageBox}>
                <div className={style.userManageTitleBox}>
                    <Link to="/userManage" className={style.active}>用户总数</Link>
                    <Link to="/userNewManage">新增用户</Link>
                </div>
                <div className={style.userManageSubheadBox}>
                    <span className={style.firstChild}>用户</span>
                    <span>注册时间</span>
                    <span>手机号码</span>
                    <span>HomeID</span>
                    <span>邮箱</span>
                </div>
                <div className={style.userManageSubheadBox+' '+style.userAllListBox}>
                    <span className={style.firstChild} onClick={(e)=>this.handleCloseUserInfoBox(e)}><img src="./images/photo.png" /><label>阿呆</label></span>
                    <span>2017.6.26</span>
                    <span>15280256971</span>
                    <span>10086</span>
                    <span>280201581@qq.com</span>
                </div>
                <div className={style.userManageSubheadBox+' '+style.userAllListBox}>
                    <span className={style.firstChild} onClick={(e)=>this.handleCloseUserInfoBox(e)}><img src="./images/photo.png" /><label>阿呆</label></span>
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
                {
                    !this.state.userInfoState ? null :
                        <div className={style.userInfoBox}>
                            <img src="./images/photo.png" />
                            <h3>阿呆<i className="fa fa-close" onClick={(e)=>this.handleCloseUserInfoBox(e)}></i></h3>
                            <p><span>注册时间:</span>2017.6.26</p>
                            <p><span>手机号码:</span>15280256971</p>
                            <p><span>Home ID:</span>10086</p>
                            <p><span>邮 箱:</span>208201581@qq.com</p>
                            <p><span>出生地:</span>常州</p>
                            <p><span>生 日:</span>1995.6.30</p>
                            <p><span>性 别:</span>男</p>
                        </div>
                }
            </div>
	    )
	}
}

//导出组件
export default UserManage;