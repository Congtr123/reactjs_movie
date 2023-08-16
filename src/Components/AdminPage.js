import React, { Component } from 'react';
import fire from '../firebase';
import PieChart from '../Chart/PieChart'
class AdminPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    componentDidMount() {
        var circle1 = document.getElementById('circles-1');
        console.log(circle1)
        
    }
    logout(){
        fire.auth().signOut();
    }
    render() { 
        return ( <div className='container'>
            <div className='list-moviecategory'>
                <div className='d-flex align-items-center justify-content-between mb-5'>
                    <h5>Hi Amin !</h5>
                    <button className='btn btn-primary' onClick={this.logout}>Log out</button>
                </div>
                <div className='row'>
                    <div className='col-md-12 col-12'>
                        <div className='card full-height'>
                            <div className='card-body'>
                                <div className='card-title mb-5'>Thống kê tổng quan</div>
                                <div className='row justify-content-center'>
                                    <div className='col-md-6 col-6'>
                                        <PieChart/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div> 
    );
    }
}

export default AdminPage;
