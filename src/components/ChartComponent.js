import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({id}) => {
  const chartRef = useRef(null); // 使用ref来引用chart实例

  useEffect(() => {
    // 模拟数据
    const salesData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [{
        label: 'Monthly Sales',
        data: [15000, 12000, 18000, 22000, 16000, 20000],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2
      }]
    }

    // 配置图表
    const config = {
      type: 'line',
      data: salesData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }

    // 初始化图表
    //console.log('salesChart'+id);
    const ctx = document.getElementById('salesChart'+id).getContext('2d')
    
    if (chartRef.current) {
      chartRef.current.destroy(); // 如果已有chart实例，先销毁
    }
    chartRef.current = new Chart(ctx, config)

    // 清理函数
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // 组件卸载时销毁chart实例
      }
    }
  }); // 依赖项为空数组，这段逻辑仅在组件挂载时运行

  return (<canvas id={`salesChart${id}`} className="h-64"></canvas> );
};

export default ChartComponent;
