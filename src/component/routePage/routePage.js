// 页面跳转路由
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// login
import Login from '../../containers/login/login';                                                      //登录页面
import RegisterPage from '../../containers/login/register/register';                                   //注册页面
import ForgetPassword from '../../containers/login/forgetPassword/forgetPassword';                     //忘记密码
// 任务大厅
import TaskHallPage from '../../containers/taskHall/taskHall';                                         //任务大厅
import MyTaskPage from '../../containers/myTask/myTask';                                               //我的任务
import MyCenterPage from '../../containers/myCenter/myCenter';                                         //个人中心
import CashPage from '../../containers/cash/cash';                                                     //提现页面
import CommissionPage from '../../containers/commission/commission';                                   //佣金页面
import MyTaskDetails from '../../containers/myTaskDetails/myTaskDetails';                              //我的详情任务页
import TaskStateChild from '../../containers/myTaskDetails/taskState/taskStateChild/taskStateChild';  //操作任务页面
import GoodPingJia from '../../containers/myTaskDetails/taskState/goodPingjia/goodPingjia';           //收货好评页面
import AppealTask from '../../containers/myTaskDetails/taskState/appealTask/appealTask';              //申诉任务页面
// 我的任务
import DfTaskNo from '../../containers/myTask/dianFuTask/dfTaskNo';                                   //已接垫付任务  未完成
import DfTaskOk from '../../containers/myTask/dianFuTask/dfTaskOk';                                   //已接垫付任务  已完成
import DfTaskChe from '../../containers/myTask/dianFuTask/dfTaskChe';                                 //已接垫付任务  已撤销
import LiuLanTaskNo from '../../containers/myTask/liuLanTask/liuLanTaskNo';                           //已接浏览任务  未完成
import LiuLanTaskOk from '../../containers/myTask/liuLanTask/liuLanTaskOk';                           //已接浏览任务  已完成
import LiuLanTaskChe from '../../containers/myTask/liuLanTask/liuLanTaskChe';                         //已接浏览任务  已撤销
import WenDaTaskNo from '../../containers/myTask/wenDaTask/wenDaTaskNo';                              //已接问答任务  未完成
import WenDaTaskOk from '../../containers/myTask/wenDaTask/wenDaTaskOk';                              //已接问答任务  已完成
import WenDaTaskChe from '../../containers/myTask/wenDaTask/wenDaTaskChe';                            //已接问答任务  已撤销
// 个人中心
import BuyAdmin from '../../containers/myCenter/buyAdmin/buyAdmin';                                   //买号管理
import AllCenter from '../../containers/myCenter/callCenter/allCenter';                               //客服中心
import Personal from '../../containers/myCenter/personal/personal';                                   //个人信息
import ShenSu from '../../containers/myCenter/shenSu/shenSu';                                         //申诉记录
import TongZhi from '../../containers/myCenter/tongZhi/tongZhi';                                      //通知公告
  // 通知公告子页面 公告详情
  import TongZhiChild from '../../containers/myCenter/tongZhi/tongZhiChild/tongZhiChild';              //公告详情
import TuiJian from '../../containers/myCenter/tuiJian/tuiJian';                                      //推荐有奖
// 个人信息
import Account from '../../containers/myCenter/personal/account/account';                              //修改账号
import LoginPassword from '../../containers/myCenter/personal/loginPassword/loginPassword';            //修改登录密码
import TxPassword from '../../containers/myCenter/personal/txPassword/txPassword';                     //修改提现密码
import XgQQ from '../../containers/myCenter/personal/xgQQ/xgQQ';                                       //修改QQ号
import Certification from '../../containers/myCenter/personal/certification/certification';            //实名认证
import Bank from '../../containers/myCenter/personal/bank/bank';                                       //银行卡绑定

class RouteTabComponent extends Component {
  render() {
    return(
      <Router>
        <div>
          {/* login */}
          <Route exact path="/" component={Login} />
          <Route path="/registerPage" component={RegisterPage}/>
          <Route path="/forgetPassword" component={ForgetPassword}/>
          {/* 任务大厅 */}
          <Route path="/taskHallPage" component={TaskHallPage} />
          <Route path="/myTask" component={MyTaskPage} />
          <Route path="/myCenter" component={MyCenterPage} />
          <Route path="/cash" component={CashPage} />
          <Route path="/commission" component={CommissionPage} />
          <Route path="/myTaskDetails" component={MyTaskDetails} />
          {/* <Route path="/myTaskDetails/:id" component={MyTaskDetails} /> 点击抢任务按钮 进入相对应的任务详情页面 */}
          <Route path="/taskStateChild" component={TaskStateChild}/>
          <Route path="/goodPingJia" component={GoodPingJia} />
          <Route path="/appealTask" component={AppealTask} />
          {/* 我的任务 */}
          {/* 已接垫付任务 */}
          <Route path="/dfTaskNo" component={DfTaskNo} />
          <Route path="/dfTaskOk" component={DfTaskOk} />
          <Route path="/dfTaskChe" component={DfTaskChe} />
          {/* 已接浏览任务 */}
          <Route path="/liuLanTaskNo" component={LiuLanTaskNo} />
          <Route path="/liuLanTaskOk" component={LiuLanTaskOk} />
          <Route path="/liuLanTaskChe" component={LiuLanTaskChe} />
          {/* 已接问答任务 */}
          <Route path="/wenDaTaskNo" component={WenDaTaskNo}/>
          <Route path="/wenDaTaskOk" component={WenDaTaskOk}/>
          <Route path="/wenDaTaskChe" component={WenDaTaskChe}/>
          {/* 个人中心 */}
          <Route path="/buyAdmin" component={BuyAdmin} />
          <Route path="/allCenter" component={AllCenter} />
          <Route path="/personal" component={Personal} />
          <Route path="/shenSu" component={ShenSu} />
          <Route path="/tongZhi" component={TongZhi} />
          <Route path="/tuiJian" component={TuiJian} />
          {/* 个人信息 */}
          <Route path="/account" component={Account} />
          <Route path="/loginPassword" component={LoginPassword} />
          <Route path="/txPassword" component={TxPassword} />
          <Route path="/xgQQ" component={XgQQ} />
          <Route path="/certification" component={Certification} />
          <Route path="/bank" component={Bank} />
          {/* 通知公告子页面  公告详情 */}
          <Route path="/tongZhiChild" component={TongZhiChild} />
        </div>
      </Router>
    )
  }
}

export default RouteTabComponent