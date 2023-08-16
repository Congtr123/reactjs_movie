import React, { Component } from 'react';
import { connect } from "react-redux";
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
class PieChart extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //   countDataPhimBo:0,
        //   countDataPhimBo:0,
        //   countDataPhimLe:0,
        //   countDataPhimChieuRap:0,
        //   countDataPhimHoatHinh:0   
        // }
    }

    // componentDidMount = () =>{
    //     if(this.props.dataPhimBoStore && this.props.dataPhimLeStore && this.props.dataPhimChieuRapStore && this.props.dataPhimHoatHinhStore){
    //       console.log(this.props.dataPhimBoStore.length);
    //       this.setState({
    //         countDataPhimBo:this.props.dataPhimBoStore.length,
    //         countDataPhimLe:this.props.dataPhimLeStore.length,
    //         countDataPhimChieuRap:this.props.dataPhimChieuRapStore.length,
    //         countDataPhimHoatHinh:this.props.dataPhimHoatHinhStore.length,    
    //       })
    //     }
    //     return 0;
    // }
        
    render() { 
      // this.checkCount()
      const dataSet = {
        labels: ['Phim bộ', 'Phim lẻ', 'Phim chiếu rạp', 'Phim hoạt hình'],
        datasets: [
          {
            label: '# of Votes',
            data: [this.props.dataPhimBoStore.length, this.props.dataPhimLeStore.length, this.props.dataPhimChieuRapStore.length, this.props.dataPhimHoatHinhStore.length],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }
        return ( <div>
            <Pie data = {dataSet}/>
        </div> );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    dataPhimBoStore: state.dataPhimBo,
    dataPhimLeStore: state.dataPhimLe,
    dataPhimChieuRapStore: state.dataPhimChieuRap,
    dataPhimHoatHinhStore: state.dataPhimHoatHinh
  }
}
// export default App;
export default connect(mapStateToProps)(PieChart)
// export default PieChart;