import React, { Component } from 'react';
import { connect } from "react-redux";
import GetDataJson from "./GetDataJson";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import RouterMain from './Router/RouterMain';
import {BrowserRouter as Router,} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import fire from '../firebase';
class App extends Component {
  // consoleClear = () => {
  //   console.clear();
  // }
  constructor(props){
    super(props);
    this.state = {
      user:{},
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user)
      if(user){
        this.setState({user});
      }
      else{
        this.setState({user:null});
      }
    })
  }
  render() { 
    //this.consoleClear();
    return ( 
    
      <Router>
        <ScrollToTop/>
        <div className="app-movies hung-movie bg-main">
          <GetDataJson/>

          <Header/>

            <RouterMain user = {this.state.user} />

          <Contact/>
          <Footer/>
        </div>
      </Router>
     );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dataPhimBoStore: state.dataPhimBo,
    dataPhimLeStore: state.dataPhimLe,
    dataPhimChieuRapStore: state.dataPhimChieuRap,
    dataPhimHoatHinhStore: state.dataPhimHoatHinh,
    isWatchingStore: state.isWatching
  }
}
// export default App;

export default connect(mapStateToProps)(App)
