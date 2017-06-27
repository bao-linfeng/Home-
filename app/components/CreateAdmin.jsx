import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import style from './css/AdminManage.css';

class CreateAdmin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            relaName:'',
            admin:'1',
            emailVaild:false,
            relaNameVaild:false,
            disabled:false
        };
    }

    handleChange(field,valid,e){
        let value=e.target.value;
        let emailREG=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        this.setState({[field]:value});

        switch(field){
            case 'email':{
                value.length == 0 ? this.setState({[valid]:false}) :this.setState({[valid]:true});
                emailREG.test(value) ? this.setState({[valid]:true}) :this.setState({[valid]:false});
                break;
            }
            case 'relaName':{
                value.length == 0 ? this.setState({[valid]:false}) :this.setState({[valid]:true});
                break;
            }
        }
    }

    handleSubmit(e){
        e.preventDefault();
    }

	render(){
        const disabled=(this.state.emailVaild && this.state.relaNameVaild);
	    return (
            <div className={style.userManageBox}>
                <div className={style.userManageTitleBox}>
                    <Link to="/adminManage">全部账号</Link>
                    <Link to="/adminManage:createAdmin" className={style.active}>创建账号</Link>
                </div>
                <form className={style.userInfoEditBox} onSubmit={(e)=>this.handleSubmit(e)}>
                     <div className={style.userInfoInputGroup+' '+(this.state.emailVaild ? '' : style.required)}>
                         <label>邮箱</label>
                         <input type="text" name="email" ref="email" value={this.state.email} placeholder="请输入邮箱" onChange={(e)=>this.handleChange('email','emailVaild',e)} />
                     </div>
                     <div className={style.userInfoInputGroup+' '+(this.state.relaNameVaild ? '' : style.required)}>
                         <label>真实姓名</label>
                         <input type="text" name="relaName" ref="email" value={this.state.relaName} placeholder="请输入真实姓名" onChange={(e)=>this.handleChange('relaName','relaNameVaild',e)} />
                     </div>
                     <div className={style.userInfoInputGroup}>
                         <label>账户类型</label>
                         <select value={this.state.admin} onChange={(e)=>this.handleChange('admin','',e)}>
                             <option value="1">超级管理员</option>
                             <option value="2">研发管理员</option>
                             <option value="3">财务管理员</option>
                         </select>
                     </div>
                     <input type="submit" value="保存" className={style.btn+' '+(disabled ? '' : style.disabled)} />
                </form>
            </div>
	    )
	}
}

//导出组件
export default CreateAdmin;