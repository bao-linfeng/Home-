import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import style from './css/App.css';
import AdminIndex from './AdminIndex.jsx';
import AlbumManage from './AlbumManage.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import ResetPassword from './ResetPassword.jsx';
import AlbumPublish from './AlbumPublish.jsx';
import $ from 'jquery';

const url='https://api.github.com/users/octocat/gists';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        };
    }

    componentDidMount(){
        $.get(url, function(result) {
            var lastGist = result[0];
            this.setState({username: lastGist.owner.login});
        }.bind(this));
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
        this.setState({leftListState:e.currentTarget.value})
    }

	render(){
	    return (
        <Router>
	        <div className={style.adminBox}>
                <div className={style.adminLeftBox}>
                    <a href="" className={style.userInfo}>
                        <img src="./images/photo.png" alt="头像" />
                        <span>{this.state.username}</span>
                    </a>
                    <ul className={style.adminNavBox}>
                        <li onClick={(e) => this.handleLeftListActive(e)} value='1'><Link to="/" className={this.state.leftListState == 1 ? style.active : null}><i className="fa fa-home"></i>首页</Link></li>
                        <li><a onClick={(e)=>this.handleManageToggle(e)}>
                            <i className="fa fa-pie-chart"></i>管理</a>
                            {
                                this.state.manageState ? null :
                                    <ul className={style.adminNavListBox}>
                                        <li><a href="">用户管理</a></li>
                                        <li onClick={(e) => this.handleLeftListActive(e)} value='3'><Link to="/AlbumPublish" className={this.state.leftListState == 3 ? style.active : null}>相册发布</Link></li>
                                        <li onClick={(e) => this.handleLeftListActive(e)} value='4'><Link to="/AlbumManage" className={this.state.leftListState == 4 ? style.active : null}>相册管理</Link></li>
                                        <li><a href="">H5活动管理</a></li>
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
                                        <li><a href="">App版本管理</a></li>
                                    </ul>
                            }

                        </li>
                        <li><a href=""><i className="fa fa-user"></i>管理员</a></li>
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
                            <li id="userInfoToglgle" onClick={(e)=>this.handleLogoutToggle(e)}><img src="./images/user.png" className={style.userPhoto} /><span>{this.state.username}</span></li>
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
            </div>
        </Router>
	    )
	}
}

//导出组件
export default App;