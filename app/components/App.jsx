import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
require('es6-promise').polyfill();
require('isomorphic-fetch');
import style from './css/App.css';
import AdminIndex from './AdminIndex.jsx';
import AlbumManage from './AlbumManage.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import ResetPassword from './ResetPassword.jsx';
import AlbumPublish from './AlbumPublish.jsx';
import UserManage from './UserManage.jsx';
import UserNewManage from './UserNewManage.jsx';
import UserInfo from './UserInfo.jsx';
import AdminManage from './AdminManage.jsx';
import CreateAdmin from './CreateAdmin.jsx';
import AdminRootManage from './AdminRootManage.jsx';
import AdminRootCreateManage from './AdminRootCreateManage.jsx';
import H5ActivityManage from './H5ActivityManage.jsx';
import H5ActivityAddManage from './H5ActivityAddManage.jsx';
import AppVersionManage from './AppVersionManage.jsx';
import AppLogTree from './AppLogTree.jsx';
import $ from 'jquery';

const url='https://api.github.com/users/octocat/gists';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            leftListState:'/',
            adminState:false,
            dataSource:''
        };
    }

    componentDidMount(){
        // $.get(url, function(result) {
        //     var lastGist = result[0];
        //     this.setState({username: lastGist.owner.login});
        // }.bind(this));

        fetch('http://gank.io/api/search/query/listview/category/福利/count/10/page/1')//请求地址  
            .then((response) => response.json())//取数据  
            .then((responseText) => {//处理数据  
                //通过setState()方法重新渲染界面  
                this.setState({    
                    //设置数据源刷新界面  
                    dataSource: responseText.results[0].url,
                    username: responseText.results[0].who
                })  
  
            })  
            .catch((error) => {  
                console.warn(error);  
            }); 
    }

    componentWillUnmount(){}

    handleManageToggle(){
        this.setState({manageState:!this.state.manageState})
    }

    handleFinanceToggle(){
        this.setState({financeState:!this.state.financeState})
    }

    handleLogoutToggle(){
        this.setState({logoutState:!this.state.logoutState})
    }

    handleDeveloperToggle(){
        this.setState({developer:!this.state.developer})
    }

    handleLeftListActive(e){
        this.setState({leftListState:e.target.href.substring(21)})
    }

    handleAdminToggle(){
        this.setState({adminState:!this.state.adminState})
    }

	render(){
	    return (
        <Router>
	        <div className={style.adminBox}>
                <div className={style.adminLeftBox}>
                    <Link to="/userInfo" className={style.userInfo}>
                        <img src={this.state.dataSource ? this.state.dataSource : './images/photo.png'} alt="头像" />
                        <span>{this.state.username}</span>
                    </Link>
                    <ul className={style.adminNavBox}>
                        <li onClick={(e) => this.handleLeftListActive(e)}><Link to="/" className={this.state.leftListState == '/' ? style.active : null}><i className="fa fa-home"></i>首页</Link></li>
                        <li><a onClick={(e)=>this.handleManageToggle(e)}>
                            <i className="fa fa-pie-chart"></i>管理</a>
                            {
                                this.state.manageState ? null :
                                    <ul className={style.adminNavListBox}>
                                        <li onClick={(e) => this.handleLeftListActive(e)}><Link to="/userManage" className={this.state.leftListState == "/userManage" ? style.active : null}>用户管理</Link></li>
                                        <li onClick={(e) => this.handleLeftListActive(e)}><Link to="/AlbumPublish" className={this.state.leftListState == "/AlbumPublish" ? style.active : null}>相册发布</Link></li>
                                        <li onClick={(e) => this.handleLeftListActive(e)}><Link to="/AlbumManage" className={this.state.leftListState == "/AlbumManage" ? style.active : null}>相册管理</Link></li>
                                        <li onClick={(e) => this.handleLeftListActive(e)}><Link to="/H5ActivityManage" className={this.state.leftListState == "/H5ActivityManage" ? style.active : null}>H5活动管理</Link></li>
                                        <li><a href="">微习惯管理</a></li>
                                        <li><a href="">早安问候管理</a></li>
                                    </ul>
                            }
                        </li>
                        <li>
                            <a onClick={(e)=>this.handleDeveloperToggle(e)}><i className="fa fa-file-code-o"></i>开发者</a>
                            {
                                this.state.developer ? null :
                                    <ul className={style.adminNavListBox}>
                                        <li onClick={(e) => this.handleLeftListActive(e)}><Link to="appVersionManage" className={this.state.leftListState == "/appVersionManage" ? style.active : null}>App版本管理</Link></li>
                                    </ul>
                            }

                        </li>
                        <li>
                            <a onClick={(e)=>this.handleAdminToggle(e)}><i className="fa fa-user"></i>管理员</a>
                            {
                                this.state.adminState ? null :
                                    <ul className={style.adminNavListBox}>
                                        <li onClick={(e) => this.handleLeftListActive(e)}><Link to="/adminManage" className={this.state.leftListState == "/adminManage" ? style.active : null}>账号管理</Link></li>
                                        <li onClick={(e) => this.handleLeftListActive(e)}><Link to="/adminRootManage" className={this.state.leftListState == "/adminRootManage" ? style.active : null}>账号权限管理</Link></li>
                                    </ul>
                            }
                        </li>
                        <li>
                            <a onClick={(e)=>this.handleFinanceToggle(e)}><i className="fa fa-money"></i>财务</a>
                            {
                                this.state.financeState ? null :
                                    <ul className={style.adminNavListBox}>
                                        <li><a href="">提现</a></li>
                                        <li><a href="">充值</a></li>
                                    </ul>
                            }
                        </li>
                        <li>
                            <a><i className="fa fa-exclamation-circle"></i>投诉</a>
                        </li>
                    </ul>
                </div>
                <div className={style.adminTopBox}>
                    <div className={style.adminTopUserBox}>
                        <img src="./images/logo.png" />
                        <ul className={style.userInfoToglgle}>
                            <li id="userInfoToglgle" onClick={(e)=>this.handleLogoutToggle(e)}><img src={this.state.dataSource ? this.state.dataSource : './images/photo.png'} className={style.userPhoto} /><span>{this.state.username}</span></li>
                            {
                                !this.state.logoutState ? null : <li id="signOut"><Link to="/login"><i className="fa fa-sign-out"></i>退出</Link></li>
                            }
                        </ul>
                    </div>
                    <h1>欢迎来到Home+管理后台</h1>
                    <Link to="/"><i className="fa fa-home"></i>首页</Link>
                </div>
                
                <Route path="/" exact component={AdminIndex} />
                <Route path="/AlbumManage" exact component={AlbumManage} />
                <Route path="/Login" exact component={Login} />
                <Route path="/Register" exact component={Register} />
                <Route path="/resetPassword" exact component={ResetPassword} />
                <Route path="/albumPublish" exact component={AlbumPublish} />
                <Route path="/userManage" exact component={UserManage} />
                <Route path="/userNewManage" exact component={UserNewManage} />
                <Route path="/userInfo" exact component={UserInfo} />
                <Route path="/adminManage" exact component={AdminManage} />
                <Route path="/adminManage:createAdmin" exact component={CreateAdmin} />
                <Route path="/adminRootManage" exact component={AdminRootManage} />
                <Route path="/adminRootManage:createAdminRoot" exact component={AdminRootCreateManage} />
                <Route path="/h5ActivityManage" exact component={H5ActivityManage} />
                <Route path="/h5ActivityAddManage" exact component={H5ActivityAddManage} />
                <Route path="/appVersionManage" exact component={AppVersionManage} />
                <Route path="/appLogTree" exact component={AppLogTree} />
            </div>
        </Router>
	    )
	}
}

//导出组件
export default App;