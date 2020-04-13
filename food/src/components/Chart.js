import React from 'react';
import Grid from '@material-ui/core';
import Chart from "react-apexcharts";

// Not yet set up

export default class ResultsChart extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          chart: {
            id: "results-chart",
            toolbar: {
              show: false
            }
          },
          xaxis: {
            categories: ["Your Score", "Highest Possible"]
          },
        colors: ['#3f51b5']
        }, 
        series: [
          {
            name: "Score",
            data: [this.props.finalScore, 27]
          }
        ]
      };
    }
  
      render(){
        return(
          <Grid item xs={12}>
            <Chart 
              options={this.state.options}
              series={this.state.series}
              type="bar"
            />
          </Grid>
        )
      }
  }