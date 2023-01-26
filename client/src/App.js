import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import RequireAuth from '../src/components/RequireAuth/RequireAuth'
import PersistLogin from "./components/PersistLogin/PersistLogin";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GuestHomePage from "./pages/GuestHomePage/GuestHomePage";
import CounselorRegPage from "./pages/CounselorRegPage/CounselorRegPage";
import CounselorLoginPage from "./pages/CounselorLoginPage/CounselorLoginPage";
import AdminLoginPage from "./pages/AdminLoginPage/AdminLoginPage";
import AdminHome from "./components/Admin/Specializations/AdminHome/AdminHome";
import Dashboard from "./components/Admin/Specializations/Dashboard/Dashboard";
import AdminSpecs from "./components/Admin/AdminSpecialization/AdminSpecs";
import CounselorReqPage from "./pages/CounselorRequestPage/CounselorReqPage";
import BookingSuccessPage from './pages/BookSuccessPage.js/BookSuccessPage'
import AdminCounReq from "./pages/AdminCounReq/AdminCounReq";
import AdminUsersPage from "./pages/AdminUsersPage/AdminUsersPage";
import AdminCounDetailsPage from "./pages/AdminCounDetailsPage/AdminCounDetailsPage";
import CounselorHomePage from "./pages/CounselorHomePage/CounselorHomePage";
import CounNotAppPage from "./pages/CounselorNotAppPage/CounNotAppPage";
import CounselorProfile from "./pages/CounselorProfilePage/CounselorProfilePage";
import CounselorHome from "./components/Counselor/CounselorHome/CounselorHome";
import UserCounselorProPage from "./pages/UserCounselorProPage/UserCounselorProPage";
import SubscriptionPage from "./pages/SubscriptionPage/SubscriptionPage";
import OrderSummaryPage from "./pages/OrderSummaryPage/OrderSummaryPage";
import RequireAuthLogin from "./components/RequireAuth/RequireAuthLogin";
import UserSessionsPage from "./pages/UserSessionsPage/UserSessionsPage";
import Protected from "./components/RequireAuth/Protected";
import ProtectedCounselor from "./components/RequireAuth/ProtectedCounselor";
import PersistLoginCounselor from "./components/PersistLogin/PersistLoginCounselor";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import UserChatPage from "./pages/UserChatPage/UserChatPage";
import Chat from "./components/User/Chat/Chat";
import AdminUserPage from "./pages/AdminUserPage/AdminUserPage";
import AdminCounselorViewPage from "./pages/AdminCounselorViewPage/AdminCounselorViewPage";
import CounselorViewMore from "./components/Admin/CounselorviewMore/CounselorViewMore";




function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route element={<Protected />}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/guestHome' element={<GuestHomePage />} />
            <Route path='/signup' element={<SignupPage />} />
          </Route>
        </Route>

        {/* user components that need protection, redirected to guesthome */}

        <Route element={<RequireAuth />}>
          <Route exact path='/' element={<HomePage />} />
        </Route>


        {/* redirected to login page if not authorized! */}
        <Route element={<RequireAuthLogin />}>
          <Route path='/order_summary' element={<OrderSummaryPage />} />
          <Route path='/order_success' element={<BookingSuccessPage />} />
          <Route path='/profile' element={<UserProfilePage />} />
          <Route path='/sessions' element={<UserSessionsPage />} />
          <Route path='/chat' element={<UserChatPage />} />
        </Route>

        <Route element={<PersistLoginCounselor/>}>
          <Route path='/counselor_profile/:id' element={<UserCounselorProPage />}/>

          <Route element={<ProtectedCounselor />}>
            <Route path='/counselor_login' element={<CounselorLoginPage />} />
          </Route>
          <Route exact path='/counselor_req' element={<CounselorReqPage />} />
          <Route exact path='/counselor' element={<CounselorHomePage />} />
          <Route exact path='/counselor/requested' element={<CounNotAppPage />} />
          <Route path='/counselor/profile' element={<CounselorHome value={<CounselorProfile />} />} />
          <Route path='/counselor/chat' element={<CounselorHome value={<UserChatPage value='counselor'/>} />} />

        </Route>

        <Route path='/sub_plans' element={<SubscriptionPage />} />
        <Route path='/counselor_reg' element={<CounselorRegPage />} />

        <Route path='/admin_login' element={<AdminLoginPage />} />
        <Route path='/admin' element={<AdminHome value={<Dashboard />} />} />
        <Route path='/admin_users' element={<AdminHome value={<AdminUserPage />} />} />
        <Route path='/admin_counselor' element={<AdminHome value={<AdminCounselorViewPage />} />} />
        <Route path='/admin_specs' element={<AdminHome value={<AdminSpecs />} />} />
        <Route path='/admin_counselor_req' element={<AdminHome value={<AdminCounReq />} />} />
        <Route path='/admin_users' element={<AdminHome value={<AdminUsersPage />} />} />
        <Route path='/admin/counselor_details/:counselorId' element={<AdminHome value={<AdminCounDetailsPage />} />} />
        <Route path='/admin/counselor/view/:counselorId' element={<AdminHome value={<CounselorViewMore />} />} />

      </Routes>
    </Router>

  );
}

export default App;



