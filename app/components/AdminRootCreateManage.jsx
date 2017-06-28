import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import style from './css/AdminRootManage.css';

class AdminRootCreateManage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfoState:false,
            checked:true,
            name:''
        };
    }

    handleCheckBoxChange(){
        this.setState({checked:!this.state.checked});
    }

    handleInputChange(e){
        this.setState({name:e.target.value});
    }

	render(){
        const manage=['管理','用户管理','相册管理','相册发布','H5活动管理','微习惯管理','早安问候管理'];
        const developer=['开发者','用户管理'];
        const admin=['管理员','账号管理','账号权限管理'];
        const FD=['财务','提现','充值'];
	    return (
            <div className={style.adminRootManageBox}>
                <div className={style.adminRootManageTitleBox}>
                    <Link to="/adminRootManage">全部类型</Link>
                    <Link to="/adminRootManage:createAdminRoot" className={style.active}>创建账号类型</Link>
                </div>
                <form className={style.adminRootCreateManageBox}>
                    <div className={style.adminRootCreateInputGroup+' '+(this.state.name ? '' : style.required)}>
                        <label>账号类型</label>
                        <input type="text" placeholder="请输入名称" value={this.state.name} onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                    <div className={style.adminRootCreateInputGroup}>
                        <label>配置权限</label>
                        <div className={style.adminRootListBox}>
                            <div className={style.adminRootList}>
                                {
                                    manage.map(function(item,index){
                                        return (
                                             <label className="checkbox" key={index}><input type="checkbox" name="adminRoot" defaultChecked="true" /><i>✓</i>{item}</label>
                                    )})
                                }
                            </div>
                            <div className={style.adminRootList}>
                                {
                                    developer.map(function(item,index){
                                        return (
                                             <label className="checkbox" key={index}><input type="checkbox" name="adminRoot" /><i>✓</i>{item}</label>
                                    )})
                                }
                            </div>
                            <div className={style.adminRootList}>
                                {
                                    admin.map(function(item,index){
                                        return (
                                             <label className="checkbox" key={index}><input type="checkbox" name="adminRoot" /><i>✓</i>{item}</label>
                                    )})
                                }
                            </div>
                            <div className={style.adminRootList}>
                                {
                                    FD.map(function(item,index){
                                        return (
                                             <label className="checkbox" key={index}><input type="checkbox" name="adminRoot" /><i>✓</i>{item}</label>
                                    )})
                                }
                            </div>
                        </div>
                    </div>
                    <a className={style.btn+' '+(this.state.name ? '' : style.disabled)}>保存</a>
                </form>
            </div>
	    )
	}
}

//导出组件
export default AdminRootCreateManage;