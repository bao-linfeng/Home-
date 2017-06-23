import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import style from './css/UserManage.css';

class UserManage extends React.Component{
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
                    <Link to="/userManage" className={style.active}>用户总数</Link>
                    <Link to="/userNewManage">新增用户</Link>
                </div>
                <div className={style.userAllListBox}>
                    <img src="./images/photo.png" />
                    <p>阿呆</p>
                    <p>HomeID:10086</p>
                    <span>2017-6-23 16:39</span>
                </div>
                <div className={style.userAllListBox}>
                    <img src="./images/photo.png" />
                    <p>阿呆</p>
                    <p>HomeID:10086</p>
                    <span>2017-6-23 16:39</span>
                </div>
                <div className={style.userAllListBox}>
                    <img src="./images/photo.png" />
                    <p>阿呆</p>
                    <p>HomeID:10086</p>
                    <span>2017-6-23 16:39</span>
                </div>
                <div className={style.userAllListBox}>
                    <img src="./images/photo.png" />
                    <p>阿呆</p>
                    <p>HomeID:10086</p>
                    <span>2017-6-23 16:39</span>
                </div>

                <div className={style.userAllListBox}>
                    <img src="./images/photo.png" />
                    <p>阿呆</p>
                    <p>HomeID:10086</p>
                    <span>2017-6-23 16:39</span>
                </div>
            </div>
	    )
	}
}

//导出组件
export default UserManage;