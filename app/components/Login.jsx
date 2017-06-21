import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import style from './css/Login.css';

class Login extends React.Component{
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
                    <span className={style.loginTitle}>后台管理登陆</span>
                    <div className={style.line}></div>
                    <div className={style.inputI}>
                        <label htmlFor="name"><i className="fa fa-user"></i></label>
                        <input type="text" id="name" placeholder="请输入邮箱或用户名" />
                    </div>
                    <div className={style.inputI}>
                        <label htmlFor="password"><i className="fa fa-unlock-alt"></i></label>
                        <input type="text" id="password" placeholder="请输入密码" />
                    </div>
                    <Link to="/" className={style.submit}>登陆</Link>
                    <div className={style.loginT}>
                        <Link to="/resetPassword">忘记密码？</Link>
                        <span>还没有账号？</span>
                        <Link to="/register">点击注册</Link>
                    </div>
                </div>
            </div>
	    )
	}
}

//导出组件
export default Login;