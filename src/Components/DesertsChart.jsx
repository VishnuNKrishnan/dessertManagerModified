import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../UserContext'
import './DesertsChart.css'
import { Bar, Line, Pie } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

function DesertsChart() {
  const { dessertList } = useContext(UserContext)
  // set data
  //   const [chartData, setChartData] = useState({})
  var chartLabels = []
  dessertList.map((obj) => {
    chartLabels.push(obj.name)
  })
  var chartdata = []
  dessertList.map((obj) => {
    chartdata.push(obj.price)
  })

  console.log(chartdata)

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'test label',
        data: chartdata,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderWidth: 3,
      },
    ],
  }

  return (
    <div className="holder">
      <h1>DESSERTS CHART</h1>
      <div className="canvas">
        <Pie data={chartData} />
      </div>
    </div>
  )
}

export default DesertsChart
