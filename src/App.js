import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Setings from "./components/Setings/Setings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Prpfile/ProfileContainer";
import HeaderContainer from "./components/Hrader/HeadeContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import { compose } from 'redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {initializeApp} from "./components/Redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";
import News from "./components/News/News";


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} router={{ location, navigate, params }} />
        );
    }
    return ComponentWithRouterProp;
}

// function App() {
//   return (
//     <div className="App">
//
//     </div>
//   )
// }


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }



    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<ProfileContainer/>}>
                            <Route path=":userId" element={<ProfileContainer/>}/>
                        </Route>

                        <Route path="/login" element={<Login/>}></Route>


                        <Route exact path="/dialogs/*"
                               element={<DialogsContainer/>}/>
                        <Route exact path="/users" element={<UsersContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/setings" element={<Setings/>}/>
                    </Routes>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});
export default compose(
    withRouter,
    connect(mapStateToProps,{initializeApp}))(App);
