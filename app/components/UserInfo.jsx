import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import style from './css/UserInfo.css';

class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:0
        };
    }

	render(){
	    return (
            <div className={style.userInfoBox}>
                <span className={style.userInfoTitleBox}>
                    用户信息
                </span>
                <form className={style.userInfoEditBox}>
                     <div className={style.userInfoInputGroup}>
                         <label>昵称</label>
                         <input type="text" value="阿呆" />
                     </div>
                     <div className={style.userInfoInputGroup}>
                         <label>真实姓名</label>
                         <input type="text" value="鲍林峰" />
                     </div>
                     <div className={style.userInfoInputGroup}>
                         <label>邮箱</label>
                         <input type="text" value="280201581@qq.com" />
                     </div>
                     <div className={style.userInfoInputGroup}>
                         <label>手机</label>
                         <input type="text" value="15280256971" />
                     </div>
                     <a className={style.btn}>提交</a>
                </form>
            </div>
	    )
	}
}

//导出组件
export default UserInfo;