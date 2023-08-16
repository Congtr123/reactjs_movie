import React, { Component } from 'react';
import {Route} from "react-router-dom";
import HomeMovieCategory from "../Contents/HomeMovieCategory";
import { connect } from "react-redux";
import MovieDetails from "../Contents/MovieDetails";
import SliderArea from "../SliderArea";
import MovieCategory from "../Contents/MovieCategory";
import SearchMovie from '../Contents/SearchMovie';
// import SignPage from '../Contents/SignPage';
import Register from '../Register';
import Login from '../Login';
import AdminPage from '../AdminPage';
class RouterMain extends Component {  
    checkPage(user){
        if(user){
            return (<AdminPage/>)
        }
        else{
            return (<Login/>)
        }
    }
    
    render() { 
        return ( 
            <div>      
                <Route path="/login">
                    {this.checkPage(this.props.user)}
                </Route> 
                <Route exact path="/register">
                    <Register/>
                </Route>     
                <Route exact path="/">

                    <SliderArea/>
                    <div className="main-movie">
                        <div className="container">
                            <HomeMovieCategory titleCategory="PHIM LẺ" dataMovieCategory = {this.props.dataPhimLeStore}/>   
                            <HomeMovieCategory titleCategory="PHIM BỘ" dataMovieCategory = {this.props.dataPhimBoStore}/>                           
                            <HomeMovieCategory titleCategory="Phim Chiếu Rạp" dataMovieCategory = {this.props.dataPhimChieuRapStore}/>
                            <HomeMovieCategory titleCategory="Phim hoạt hình" dataMovieCategory = {this.props.dataPhimHoatHinhStore}/>
                        </div>
                    </div>
                </Route>
                <Route path="/movie-details/:titleCategory/:slug.html">
                    <MovieDetails/>
                </Route> 
                <Route path="/data-films/:slug.html">
                    <MovieCategory/>
                </Route> 
                <Route path="/movie-search/:textSearch">
                    <SearchMovie/>
                </Route> 
                {/* <Route path="/login">
                    <SignPage/>
                </Route>  */}
            </div>
        );
    }
}
 
//export default RouterMain;

const mapStateToProps = (state, ownProps) => {
    return {
      dataPhimBoStore: state.dataPhimBo,
      dataPhimLeStore: state.dataPhimLe,
      dataPhimChieuRapStore: state.dataPhimChieuRap,
      dataPhimHoatHinhStore: state.dataPhimHoatHinh
    }
  }
  // export default App;
  export default connect(mapStateToProps)(RouterMain)