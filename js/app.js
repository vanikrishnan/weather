﻿$('#getWeatherBtn').click(function(){
    //$("button").removeClass("reults-hide");
    $('#chart-container').hide();
    $('#chart').hide();
    console.log('Button clicked');
    var cityname=$('#cityInput').val();
    $.ajax({
        type: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=c6692183353a35f1d73dbe6f90af94ba`,
        success: function(data) {
            console.log('In success callback');
            console.log(data);
            var currentTemp = Math.round(data.main.temp - 270);
            var currentPressure = data.main.pressure;
            var humidity = data.main.humidity;
            
            $('#currentTemperature').html(currentTemp);
            $('#currrentHumidity').html(humidity);
              $('#currentPressure').html(currentPressure);                    ;
            $('table').show();
        },
        error: function(err){
            console.log('In error callback');
            console.log(err);
        }
    });
var cityName=$('#cityinput').val();
$.ajax({
        type: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c6692183353a35f1d73dbe6f90af94ba`,
        success: function(data) {
            console.log('In success callback');
            console.log(data);
            var currentTemp = Math.round(data.main.temp - 270);
            var currentPressure = data.main.pressure;
            var humidity = data.main.humidity;
            
            $('#cT').html(currentTemp);
            $('#cH').html(humidity);
              $('#cP').html(currentPressure);                    ;
            $('table').show();
        },
        error: function(err){
            console.log('In error callback');
            console.log(err);
        }
    });

})






$('#getForecastBtn').click(function(){
    console.log('Button Clicked');
        var cityName = $('#cityInput').val();
        $('table').hide();
        $.ajax({
            type: 'GET',
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=c6692183353a35f1d73dbe6f90af94ba`,
            success: (data) => {
                console.log('In success callback');
                console.log(data);
                
                listOfTemp = data.list.map(ele => Math.round(ele.main.temp - 270));
                console.log(listOfTemp);
               
            },
            error: (err) => {
                console.log('In error callback');
                console.log(err);
            }
        });
var cityname = $('#cityinput').val();

$.ajax({
            type: 'GET',
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=c6692183353a35f1d73dbe6f90af94ba`,
            success: (data) => {
                console.log('In success callback');
                console.log(data);
                listOfDates = data.list.map((ele) => moment(ele.dt * 1000).format('dddd, h:mm a'));
                console.log(listOfDates);
                listOftemp = data.list.map(ele => Math.round(ele.main.temp - 270));
                console.log(listOfTemp);
                plotchart(listOfTemp,listOftemp, listOfDates);
            },
            error: (err) => {
                console.log('In error callback');
                console.log(err);
            }
        });


    var plotchart=function(temp1array,temparray,datesarray){
        console.log("Button clicked");
        $('#chart-container').show();
        $('#chart').show();
        
        var cityName=$('#cityinput').val();
var cityname=$('#cityInput').val();
        Highcharts.chart('chart', {
            chart: {
              type: 'spline'
            },
            title: {
              text: 'Monthly Average Temperature'
            },
            subtitle: {
              text: 'Source: WorldClimate.com'
            },
            xAxis: {
              categories: datesarray
            },
            yAxis: {
              title: {
                text: 'Temperature'
              },
              labels: {
                formatter: function () {
                  return this.value + '°';
                }
              }
            },
            tooltip: {
              crosshairs: true,
              shared: true
            },
            plotOptions: {
              spline: {
                marker: {
                  radius: 4,
                  lineColor: '#666666',
                  lineWidth: 1
                }
              }
            },
            series: [{
              name: cityName,
              marker: {
                symbol: 'square'
              },
              data: temparray},
{name: cityname,
              marker: {
                symbol: 'square'
              },
              data: temp1array

            }]
    });
}
})