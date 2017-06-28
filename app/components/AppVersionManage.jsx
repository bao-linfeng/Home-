import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import style from './css/AppVersionManage.css';

class AppVersionManage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            version:'1.0.0',
            link:'http://qingtime.cn/home+'
        };
    }

    hangdleVersionChange(e){
        this.setState({version:e.target.value});
    }

    hangdleLinkChange(e){
        this.setState({link:e.target.value});
    }

	render(){
	    return (
            <div className={style.appVersionManageBox}>
                <div className={style.appVersionManageTitleBox}>
                    <span>平台</span>
                    <span>版本</span>
                    <span className={style.link}>链接</span>
                    <span>更新日志</span>
                </div>
                <div className={style.appVersionManageTitleBox}>
                    <span>
                        <img src="./images/apple.png" />
                        <p>ios</p>
                    </span>
                    <span>
                        <input type="text" value={this.state.version} onChange={(e)=>this.hangdleVersionChange(e)} />
                    </span>
                    <span className={style.link}>
                        <input type="text" value={this.state.link} onChange={(e)=>this.hangdleLinkChange(e)} />
                        <input type="submit" className={style.btn} value="更新" />
                    </span>
                    <span>
                        <Link to="/appLogTree" className={style.LinkTo}>管理</Link>
                    </span>
                </div>
                <div className={style.appVersionManageTitleBox}>
                    <span>
                        <img src="./images/android.png" />
                        <p>android</p>
                    </span>
                    <span>
                        <input type="text" value={this.state.version} onChange={(e)=>this.hangdleVersionChange(e)} />
                    </span>
                    <span className={style.link}>
                        <input type="text" value={this.state.link} onChange={(e)=>this.hangdleLinkChange(e)} />
                        <input type="submit" className={style.btn} value="更新" />
                    </span>
                    <span>
                        <Link to="/appLogTree" className={style.LinkTo}>管理</Link>
                    </span>
                </div>
            </div>
	    )
	}
}

//导出组件
export default AppVersionManage;