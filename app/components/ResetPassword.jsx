import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import style from './css/Login.css';

class ResetPassword extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:0
        };
    }

	render(){
	    return (
            <div className={style.loginbg}>
                <img src="./images/logo-w.png" />
                <div className={style.loginBox}>
                    <span className={style.loginTitle}>后台管理账号重置密码</span>
                    <div className={style.line}></div>
                    <div className={style.inputI}>
                        <label htmlFor="password"><i className="fa fa-unlock-alt"></i></label>
                        <input type="password" id="password" placeholder="新密码" />
                    </div>
                    <div className={style.inputI}>
                        <label htmlFor="rpassword"><i className="fa fa-unlock-alt"></i></label>
                        <input type="password" id="rpassword" placeholder="确认密码" />
                    </div>
                    <Link to="/login" className={style.submit}>重置</Link>
                </div>
                <div className={style.sendEmailbg} id="sendEmailbg">
                    <div className={style.sendEmailBox}>
                        <span>提示<i className="fa fa-close" id="sendEmailClose"></i></span>
                        <p><i className="fa fa-check-circle resetPasswordOkTips"></i>已经成功重置了密码</p>
                        <a href="login.html" className={style.btn}>马上登陆</a>
                    </div>
                </div>
            </div>
	    )
	}
}

//导出组件
export default ResetPassword;