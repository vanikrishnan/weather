$('#getweather').click(function(){
    console.log('Button clicked');
    var cityname=$('getcityname').val();
    $.ajax({
        type: 'GET',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=27d43832d2a4adcb97fcbfa23db130aa`,
        success: function(data) {
            console.log('In success callback');
            console.log(data);
            var currentTemp = Math.round(data.main.temp - 270);
            var currentPressure = data.main.pressure;
            var humidity = data.main.humidity;
            $('#current temp').html(currentTemp);
            $('table').show();
        },
        error: function(err){
            console.log('In error callback');
            console.log(err);
        }
    });
})
$('#getforecast').click(function(){
    console.log("Button clicked");
    var cityname=$('#getcityname').val();
    $.ajax({
        type: 'GET',
        url: `http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=27d43832d2a4adcb97fcbfa23db130aa`,
        success: function(data){
            console.log('In success callback');
            console.log(data);

            listOfDates = data.list.map(function(ele) {moment(ele.dt * 1000).format('dddd, h:mm a')});
            console.log(listOfDates);
            listOfTemp = data.list.map(function(ele){Math.round(ele.main.temp - 270)});
            console.log(listOfTemp);
            plotChart(listOfTemp, listOfDates);
        },
        error: function(err){
            console.log('In error callback');
            console.log(err);
        }
    });

var plotcharts=function(temparr,datesarr){
    $('#chart-container').show();
Highcharts.chart('chart-container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    xAxis: {
        categories: datesArr
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            formatter: function () { return this.value + '°'; }
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
        data: tempArr

    }]
});
}

})
