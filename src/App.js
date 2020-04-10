import React , { Component } from "react";
import FusionCharts from "fusioncharts";
import Widgets from "fusioncharts/fusioncharts.widgets";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import "./App.css";

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const gaugeData = {
  "chart": {
    "caption": "Nordstorm's Customer Satisfaction Score for 2017",
    "lowerLimit": "0",
    "upperLimit": "100",
    "showValue": "1",
    "numberSuffix": "%",
    "theme": "fusion",
    "showToolTip": "0"
  },
  "colorRange": {
    "color": [
      {
        "minValue": "0",
        "maxValue": "50",
        "code": "#F2726F"
      },
      {
        "minValue": "50",
        "maxValue": "75",
        "code": "#FFC533"
      },
      {
        "minValue": "75",
        "maxValue": "100",
        "code": "#62B58F"
      }
    ]
  },
  "dials": {
    "dial": [
      {
        "value": "81"
      }
    ]
  }
};

const chartConfigs = {
  type: "angulargauge",
  width: 600,
  height: 400,
  dataFormat: "json",
  dataSource: gaugeData
};

var countryDataSource = {
  "chart": {
    // caption options
    "caption": "Top Revenue Earning Countries",
    "xAxisName": "Country",
    "yAxisName": "Revenue (In USD)",
    "theme": "carbon"
  },

  "data": [{
    "label": "United States",
    "value": "920000"
  }, {
    "label": "China",
    "value": "730000"
  }, {
    "label": "Germany",
    "value": "680000"
  }, {
    "label": "United Kingdom",
    "value": "670000"
  }, {
    "label": "Australia",
    "value": "639000"
  }, {
    "label": "Canada",
    "value": "590000"
  }]
};

const countryChartConfigs = {
  type: "column2d",
  renderAt: "country-revenue",
  width: '100%',
  height: 400,
  dataFormat: "json",
  dataSource: countryDataSource
};

function App() {
  return (
    <div className="App">
      <h1 className="main-title">Dashboard</h1>
      <div id="interactive-dashboard"></div>
      <div className="chart-row">
        <div id="country-revenue">
          {/* <ReactFC {...countryChartConfigs} /> */}
        </div>
      </div>
      <div className="chart-row">
        <div id="monthly-revenue" className="inline-chart">
          <ReactFC {...chartConfigs} />
        </div>
        <div id="monthly-revenue" className="inline-chart">
          <ReactFC {...chartConfigs} />
        </div>
      </div>
    </div>
  );
}

export default App;
