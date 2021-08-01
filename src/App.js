import React, {Component} from 'react';
import './App.css';
import * as d3 from 'd3';

import red from './data/red.csv';
import white from './data/white.csv';
import combined from './data/red-white.csv';

import Tabs from './components/Tabs';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.drawBox = this.drawBox.bind(this);
    this.redAlc = this.redAlc.bind(this);
    this.redDen = this.redDen.bind(this);
    this.whiteAlc = this.whiteAlc.bind(this);
    this.whiteDen = this.whiteDen.bind(this);
    this.bothAlc = this.bothAlc.bind(this);
    this.bothDen = this.bothDen.bind(this);

    this.drawBoxPlot = this.drawBoxPlot.bind(this);

    this.state = {
      red_quality: [],
      red_alcohol: [],
      red_density: [],
      white_quality: [],
      white_alcohol: [],
      white_density: []
    };
  }

  componentDidMount() {
    // this.drawBoxPlot();
  }

  drawBoxPlot(flag, color) {
    // extract unique quality values -- qual
    let raw = []; // quality
    let raw2 = []; // alcohol
    let temp = [];
    let qual = [];

    var margin = {
        top: 10,
        right: 30,
        bottom: 30,
        left: 40
      },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;
    
    // function to draw box w/ data and domain (qual)
    function drawBox(data, svg, y, color, className, number) {
      var data_sorted = data.sort(d3.ascending)
      var q1 = d3.quantile(data_sorted, .25);
      var median = d3.quantile(data_sorted, .5);
      var q3 = d3.quantile(data_sorted, .75);
      var iqr = q3 - q1;
      var min = q1 - 1.5 * iqr;
      var max = q3 + 1.5 * iqr;

      // console.log(data_sorted);
      
      var gap = (width / 12) * 2 // 65
      var center = (width / 12) + number * gap
      var boxwidth = 50

      svg.append("line")
        .attr("x1", center)
        .attr("x2", center)
        .attr("y1", y(min))
        .attr("y2", y(max))
        .attr("stroke", "black")

      svg.append("rect")
        .attr("x", center - boxwidth / 2)
        .attr("y", y(q3))
        .attr("height", (y(q1) - y(q3)))
        .attr("width", boxwidth)
        .attr("class", className)
        .attr("stroke", "black")
        .style("fill", color)

      svg.selectAll("toto")
        .data([min, median, max])
        .enter()
        .append("line")
        .attr("x1", center - boxwidth / 2)
        .attr("x2", center + boxwidth / 2)
        .attr("y1", function (d) {
          return y(d)
        })
        .attr("y2", function (d) {
          return y(d)
        })
        .attr("stroke", "black")

      svg.select("."+className)
      .style("border", "1em")

    }

    if(color === "red") {
      let alcohol = {
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: []
      };

      let density = {
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: []
      };
      d3.csv(red).then(function (data) {
        for (let i = 0; i < data.length; i++) {
          raw.push(data[i].quality);
          raw2.push(data[i].alcohol);

          // assign each alcohol values for each quality
          let x = parseFloat(data[i].alcohol);
          let y = parseFloat(data[i].density);
          if (data[i].quality === "3") {
            alcohol["3"].push(x);
            density["3"].push(y);
          }
          if (data[i].quality === "4") {
            alcohol["4"].push(x);
            density["4"].push(y);
          }
          if (data[i].quality === "5") {
            alcohol["5"].push(x);
            density["5"].push(y);
          }
          if (data[i].quality === "6") {
            alcohol["6"].push(x);
            density["6"].push(y);
          }
          if (data[i].quality === "7") {
            alcohol["7"].push(x);
            density["7"].push(y);
          }
          if (data[i].quality === "8") {
            alcohol["8"].push(x);
            density["8"].push(y);
          }
          if (data[i].quality === "9") {
            alcohol["9"].push(x);
            density["9"].push(y);
          }
        }

        // parse to float
        for (let i = 0; i < raw.length; i++) {
          raw[i] = parseFloat(raw[i]);
          raw2[i] = parseFloat(raw2[i]);
        }

        // only unique quality values to temp
        temp = raw.filter(function (elem, pos) {
          return raw.indexOf(elem) === pos;
        });

        // push to real variable
        qual.push(...temp);

        // sort ascending
        qual.sort(function (a, b) {
          return a - b;
        });

        // sort all arrays inside 'alcohol' object
        Object.keys(alcohol).map(function (key, index) {
          alcohol[key].sort((a, b) => {
            return a - b;
          });
        })

        // sort all arrays inside 'density' object
        Object.keys(density).map(function (key, index) {
          density[key].sort((a, b) => {
            return a - b;
          });
        })

        var test = document.getElementsByClassName('graph');
        if (test) {
          d3.select('.graph').remove();
          console.log("graph removed");
        }

        var svg = d3.select("#redWine")
          .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .attr("class", "graph")
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        if (flag === 1) { // alcohol
          // Show the X scale
          var x = d3.scaleBand()
            .range([0, width])
            .domain(qual)
            .paddingInner(1)
            .paddingOuter(.5)
          svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))

          // Show the Y scale
          var y = d3.scaleLinear()
            .domain([7, 16])
            .range([height, 0]);
          svg.append("g")
            .call(d3.axisLeft(y))

          drawBox(alcohol["3"], svg, y, "green", "first", 0);
          drawBox(alcohol["4"], svg, y, "yellow", "second", 1);
          drawBox(alcohol["5"], svg, y, "blue", "third", 2);
          drawBox(alcohol["6"], svg, y, "orange", "fourth", 3);
          drawBox(alcohol["7"], svg, y, "black", "fifth", 4);
          drawBox(alcohol["8"], svg, y, "purple", "sixth", 5);

        } else if (flag === 2) { // density
          // Show the X scale
          var x = d3.scaleBand()
            .range([0, width])
            .domain(qual)
            .paddingInner(1)
            .paddingOuter(.5)
          svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))

          // Show the Y scale
          var y = d3.scaleLinear()
            .domain([0.985, 1.005])
            .range([height, 0]);
          svg.append("g")
            .call(d3.axisLeft(y))

          drawBox(density["3"], svg, y, "green", "first", 0);
          drawBox(density["4"], svg, y, "yellow", "second", 1);
          drawBox(density["5"], svg, y, "blue", "third", 2);
          drawBox(density["6"], svg, y, "orange", "fourth", 3);
          drawBox(density["7"], svg, y, "black", "fifth", 4);
          drawBox(density["8"], svg, y, "purple", "sixth", 5);
        }
      });
    } else if(color === "white") {
      let alcohol = {
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: []
      };

      let density = {
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: []
      };

      d3.csv(white).then(function (data) {
        for(let i = 0; i < data.length; i++) {
          raw.push(data[i].quality);
          let x = parseFloat(data[i].alcohol);
          let y = parseFloat(data[i].density);
          if (data[i].quality === "3") {
            alcohol["3"].push(x);
            density["3"].push(y);
          } 
          if (data[i].quality === "4") {
            alcohol["4"].push(x);
            density["4"].push(y);
          }
          if (data[i].quality === "5") {
            alcohol["5"].push(x);
            density["5"].push(y);
          }
          if (data[i].quality === "6") {
            alcohol["6"].push(x);
            density["6"].push(y);
          }
          if (data[i].quality === "7") {
            alcohol["7"].push(x);
            density["7"].push(y);
          }
          if (data[i].quality === "8") {
            alcohol["8"].push(x);
            density["8"].push(y);
          }
          if (data[i].quality === "9") {
            alcohol["9"].push(x);
            density["9"].push(y);
          }
        }
        
        // parse to float
        for (let i = 0; i < raw.length; i++) {
          raw[i] = parseFloat(raw[i]);
        }
        
        // only unique quality values to temp
        temp = raw.filter(function (elem, pos) {
          return raw.indexOf(elem) === pos;
        });
        
        // push to real variable
        qual.push(...temp);
        
        // sort ascending
        qual.sort(function (a, b) {
          return a - b;
        });
        
        // sort all arrays inside 'alcohol' object
        Object.keys(alcohol).map(function (key, index) {
          alcohol[key].sort((a, b) => {
            return a - b;
          });
        })
        
        // sort all arrays inside 'density' object
        Object.keys(density).map(function (key, index) {
          density[key].sort((a, b) => {
            return a - b;
          });
        })

        var test = document.getElementsByClassName('graph');
        if (test) {
          d3.select('.graph').remove();
          console.log("graph removed");
        }
        
        var svg = d3.select("#whiteWine")
          .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .attr("class", "graph")
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        if(flag === 1) { // alcohol
          // Show the X scale
          var x = d3.scaleBand()
            .range([0, width])
            .domain(qual)
            .paddingInner(1)
            .paddingOuter(.5)
          svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))

          // Show the Y scale
          var y = d3.scaleLinear()
            .domain([6, 16])
            .range([height, 0]);
          svg.append("g")
            .call(d3.axisLeft(y))

          drawBox(alcohol["3"], svg, y, "green", "first", 0);
          drawBox(alcohol["4"], svg, y, "yellow", "second", 1);
          drawBox(alcohol["5"], svg, y, "blue", "third", 2);
          drawBox(alcohol["6"], svg, y, "orange", "fourth", 3);
          drawBox(alcohol["7"], svg, y, "black", "fifth", 4);
          drawBox(alcohol["8"], svg, y, "purple", "sixth", 5);
        } else if(flag === 2) { // density
          // Show the X scale
          var x = d3.scaleBand()
            .range([0, width])
            .domain(qual)
            .paddingInner(1)
            .paddingOuter(.5)
          svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))

          // Show the Y scale
          var y = d3.scaleLinear()
            .domain([0.985, 1.005])
            .range([height, 0]);
          svg.append("g")
            .call(d3.axisLeft(y))

          drawBox(density["3"], svg, y, "green", "first", 0);
          drawBox(density["4"], svg, y, "yellow", "second", 1);
          drawBox(density["5"], svg, y, "blue", "third", 2);
          drawBox(density["6"], svg, y, "orange", "fourth", 3);
          drawBox(density["7"], svg, y, "black", "fifth", 4);
          drawBox(density["8"], svg, y, "purple", "sixth", 5);
        }

      });
    } else if(color == "combined") {
      let alcohol = {
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: []
      };

      let density = {
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: []
      };

      d3.csv(combined).then(function (data) {
        for (let i = 0; i < data.length; i++) {
          raw.push(data[i].quality);
          let x = parseFloat(data[i].alcohol);
          let y = parseFloat(data[i].density);
          if (data[i].quality === "3") {
            alcohol["3"].push(x);
            density["3"].push(y);
          }
          if (data[i].quality === "4") {
            alcohol["4"].push(x);
            density["4"].push(y);
          }
          if (data[i].quality === "5") {
            alcohol["5"].push(x);
            density["5"].push(y);
          }
          if (data[i].quality === "6") {
            alcohol["6"].push(x);
            density["6"].push(y);
          }
          if (data[i].quality === "7") {
            alcohol["7"].push(x);
            density["7"].push(y);
          }
          if (data[i].quality === "8") {
            alcohol["8"].push(x);
            density["8"].push(y);
          }
          if (data[i].quality === "9") {
            alcohol["9"].push(x);
            density["9"].push(y);
          }
        }

        // parse to float
        for (let i = 0; i < raw.length; i++) {
          raw[i] = parseFloat(raw[i]);
        }

        // only unique quality values to temp
        temp = raw.filter(function (elem, pos) {
          return raw.indexOf(elem) === pos;
        });

        // push to real variable
        qual.push(...temp);

        // sort ascending
        qual.sort(function (a, b) {
          return a - b;
        });

        // sort all arrays inside 'alcohol' object
        Object.keys(alcohol).map(function (key, index) {
          alcohol[key].sort((a, b) => {
            return a - b;
          });
        })

        // sort all arrays inside 'density' object
        Object.keys(density).map(function (key, index) {
          density[key].sort((a, b) => {
            return a - b;
          });
        })

        var test = document.getElementsByClassName('graph');
        if (test) {
          d3.select('.graph').remove();
          console.log("graph removed");
        }

        var svg = d3.select("#combined")
          .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .attr("class", "graph")
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        if (flag === 1) { // alcohol
          // Show the X scale
          var x = d3.scaleBand()
            .range([0, width])
            .domain(qual)
            .paddingInner(1)
            .paddingOuter(.5)
          svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))

          // Show the Y scale
          var y = d3.scaleLinear()
            .domain([6, 16])
            .range([height, 0]);
          svg.append("g")
            .call(d3.axisLeft(y))

          drawBox(alcohol["3"], svg, y, "green", "first", 0);
          drawBox(alcohol["4"], svg, y, "yellow", "second", 1);
          drawBox(alcohol["5"], svg, y, "blue", "third", 2);
          drawBox(alcohol["6"], svg, y, "orange", "fourth", 3);
          drawBox(alcohol["7"], svg, y, "black", "fifth", 4);
          drawBox(alcohol["8"], svg, y, "purple", "sixth", 5);
        } else if (flag === 2) { // density
          // Show the X scale
          var x = d3.scaleBand()
            .range([0, width])
            .domain(qual)
            .paddingInner(1)
            .paddingOuter(.5)
          svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))

          // Show the Y scale
          var y = d3.scaleLinear()
            .domain([0.982, 1.005])
            .range([height, 0]);
          svg.append("g")
            .call(d3.axisLeft(y))

          drawBox(density["3"], svg, y, "green", "first", 0);
          drawBox(density["4"], svg, y, "yellow", "second", 1);
          drawBox(density["5"], svg, y, "blue", "third", 2);
          drawBox(density["6"], svg, y, "orange", "fourth", 3);
          drawBox(density["7"], svg, y, "black", "fifth", 4);
          drawBox(density["8"], svg, y, "purple", "sixth", 5);
        }

      });
    }
  }

  redAlc() {
    this.setState({
      alcohol: true,
      density: false
    });
    this.drawBoxPlot(1, "red");
  }

  redDen() {
    this.setState({
      alcohol: false,
      density: true
    });
    this.drawBoxPlot(2, "red");
  }

  whiteAlc() {
    this.setState({
      alcohol: true,
      density: false
    });
    this.drawBoxPlot(1, "white");
  }

  whiteDen() {
    this.setState({
      alcohol: false,
      density: true
    });
    this.drawBoxPlot(2, "white");
  }

  bothAlc() {
    this.setState({
      alcohol: true,
      density: false
    });
    this.drawBoxPlot(1, "combined");
  }

  bothDen() {
    this.setState({
      alcohol: false,
      density: true
    });
    this.drawBoxPlot(2, "combined");
  }

  render() {

    return(
      <div className="App">
        <h1 id="heading">Narrative Visualization Project</h1>
        <Tabs>
          <div label="Home">
            The <em>Home</em> Page! <br/ >
          </div>
          <div label="Red">
            <Button variant="outline-primary" onClick={this.redAlc}>Draw Quality vs. Alcohol</Button>{' '}
            <Button variant="outline-secondary" onClick={this.redDen}>Draw Quality vs. Density</Button>
            <div id="redWine"></div>
            <svg></svg>
          </div>
          <div label="White">
            <Button variant="outline-primary" onClick={this.whiteAlc}>Draw Quality vs. Alcohol</Button>{' '}
            <Button variant="outline-secondary" onClick={this.whiteDen}>Draw Quality vs. Density</Button>
            <div id="whiteWine"></div>
            <svg></svg>
          </div>
          <div label="Red + White">
            <Button variant="outline-primary" onClick={this.bothAlc}>Draw Quality vs. Alcohol</Button>{' '}
            <Button variant="outline-secondary" onClick={this.bothDen}>Draw Quality vs. Density</Button>
            <div id="combined"></div>
            <svg></svg>
          </div>
        </Tabs>
      </div>
      
    );
  }
}

export default App;
