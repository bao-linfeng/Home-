import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import style from './css/Login.css';

class Register extends React.Component{
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
                <div className={style.loginBox+' '+style.registerBox}>
                    <span className={style.loginTitle}>后台管理注册</span>
                    <div className={style.line}></div>
                    <div className={style.inputI}>
                        <label htmlFor="name"><i className="fa fa-user"></i></label>
                        <input type="text" id="name" placeholder="请输入真实姓名" />
                    </div>
                    <div className={style.inputI}>
                        <label htmlFor="email"><i className="fa fa-envelope"></i></label>
                        <input type="text" id="email" placeholder="请输入邮箱地址" />
                    </div>
                    <div className={style.inputI}>
                        <label htmlFor="password"><i className="fa fa-unlock-alt"></i></label>
                        <input type="text" id="password" placeholder="密码（6-20位字母或数字）" />
                    </div>
                    <a className={style.submit}>注册</a>
                    <div className={style.loginT+' '+ style.registerT}>
                        <span>已有账号？</span>
                        <Link to="/login">点击登陆</Link>
                    </div>
                </div>
            </div>
	    )
	}
}

//导出组件
export default Register;