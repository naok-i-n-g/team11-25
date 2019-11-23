
// let subTitle = document.getElementsByClassName("s4");
//     subTitle.addEventListener("mouseover", ();
    
// $(".s4").on("mouseover", function(){
//     $(this).slideIn(slow);
// });
    
// itypedJSライブラリー
ityped.init(document.querySelector("#s-ityped"), {
    showCursor: false,
    strings: ['3大フロントエンドフレームワーク', '(React・Angular・Vue.js)について']
  })

  // let opacity = document.getElementById("q2");
  // let opanum = document.getElementsByClassName("q1");
  // function disapear(){
  //   if (opacity="click"){
  //     console.log(disapear(opanum));
  //   }
  // }

// JS トップへ戻る
//  let btn = document.getElementById("s10").onclick = function(){
//     let top = document.getElementById("s1");
//     top.window.screenY = btn;
//  };

// jQuery Y座標以上で表示
// let Y = $("#s10").offset();
// $(function(){
//   if(Y >= 750){
//     $(this).css("display", "block");
//   }
// });

// jQuery トップへ戻る
$("#s10").on("click", function () {
  let Y = $("#s10").offset().top;
  if (Y >= 750) {
      $(this).css("display", "block");
      $("html, body").animate({ scrollTop: 0 }, 300);
  }
});


var barChartData = {
    labels: ['2016', '2017', '2018'],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: window.chartColors.red,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        label: 'Dataset 2',
        backgroundColor: window.chartColors.blue,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        label: 'Dataset 3',
        backgroundColor: window.chartColors.green,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }]
};
window.onload = function() {
    var ctx = document.getElementById('s17').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            title: {
                display: true,
                text: 'Chart.js Bar Chart - Stacked'
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        }
    });
};
// document.getElementById('s18').addEventListener('click', function() {
//     barChartData.datasets.forEach(function(dataset) {
//         dataset.data = dataset.data.map(function() {
//             return randomScalingFactor();
//         });
//     });
//     window.myBar.update();
// });