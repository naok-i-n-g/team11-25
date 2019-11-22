// let subTitle = document.getElementsByClassName("s4");
//     subTitle.addEventListener("mouseover", ();
    
// $(".s4").on("mouseover", function(){
//     $(this).slideIn(slow);
// });
    
ityped.init(document.querySelector("#s-ityped"), {
    showCursor: false,
    strings: ['3大フロントエンドフレームワーク', '(React・Angular・Vue.js)について']
  })

// var barChartData = {
//     labels: ['2016', '2017', '2018'],
//     datasets: [{
//         label: 'Dataset 1',
//         backgroundColor: window.chartColors.red,
//         data: [
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor()
//         ]
//     }, {
//         label: 'Dataset 2',
//         backgroundColor: window.chartColors.blue,
//         data: [
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor()
//         ]
//     }, {
//         label: 'Dataset 3',
//         backgroundColor: window.chartColors.green,
//         data: [
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor()
//         ]
//     }]
// };
// window.onload = function() {
//     var ctx = document.getElementById('s17').getContext('2d');
//     window.myBar = new Chart(ctx, {
//         type: 'bar',
//         data: barChartData,
//         options: {
//             title: {
//                 display: true,
//                 text: 'Chart.js Bar Chart - Stacked'
//             },
//             tooltips: {
//                 mode: 'index',
//                 intersect: false
//             },
//             responsive: true,
//             scales: {
//                 x: {
//                     stacked: true,
//                 },
//                 y: {
//                     stacked: true
//                 }
//             }
//         }
//     });
// };
// document.getElementById('s18').addEventListener('click', function() {
//     barChartData.datasets.forEach(function(dataset) {
//         dataset.data = dataset.data.map(function() {
//             return randomScalingFactor();
//         });
//     });
//     window.myBar.update();
// });