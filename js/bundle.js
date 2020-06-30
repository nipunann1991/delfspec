window.onload = function () {
    var sectionGA = document.getElementsByClassName('sw-ga');

    for (var p = 0; p < sectionGA.length; p++) {
        new Waypoint.Inview({
            element: sectionGA[ p ]
        })
    }
    var chartConfidenceElement = document.getElementById('chart-confidence').getContext('2d');

    Chart.defaults.global.defaultFontFamily = 'attAleckSans-Regular';
    Chart.defaults.global.animation.duration = 3000;

    var riskChartWaypoint = new Waypoint({
        element: document.getElementById('chart-confidence'),
        offset: '75%',
        handler: function () {
            var chartConfidence = new Chart(chartConfidenceElement, {
                type: 'bar',
                data: {
                    labels: [
                        'Reduced cost in\ntime and\nresources',
                        'Increased\nbusiness\nefficiency',
                        'Improved\nemployee\nproductivity',
                        'Improved\ncustomer\nsatisfaction',
                        'Competitive\nadvantage',
                        'Enhanced\nbrand\nreputation'
                    ],
                    datasets: [ {
                        label: 'More confident',
                        backgroundColor: 'rgba(15, 84, 175, 1)',
                        data: [ 51, 43, 40, 38, 37, 35 ],
                        datalabels: {
                            align: 'start',
                            anchor: 'end'
                        },
                        borderWidth: 0,
                    }, {
                        label: 'Less confident',
                        backgroundColor: 'rgba(48, 209, 255, 1)',
                        data: [ 40, 26, 24, 13, 13, 15 ],
                        datalabels: {
                            align: 'start',
                            anchor: 'end'
                        },
                        borderWidth: 0,
                    } ]
                },
                options: {
                    tooltips: {
                        enabled: false
                    },
                    legend: {
                        onClick: function () {
                            return;
                        },
                        labels: {
                            boxWidth: 13
                        }
                    },
                    scales: {
                        xAxes: [ {
                            gridLines: {
                                display: false
                            },
                            ticks: {
                                autoSkip: false,
                                maxRotation: 0,
                                minRotation: 0
                            }
                        } ],
                        yAxes: [ {
                            afterFit: function (scale) {
                                scale.width = 10 //<-- set value as you wish
                            },
                            gridLines: {
                                borderDash: [ 3, 5 ]
                            },
                            ticks: {
                                min: 0,
                                max: 55,
                                callback: function (value, index, values) {
                                    return value + '%'
                                }
                            },
                            afterBuildTicks: function (chartConfidence) {
                                chartConfidence.ticks = [];
                                chartConfidence.ticks.push(0);
                                chartConfidence.ticks.push(25);
                                chartConfidence.ticks.push(50);
                            }
                        } ]
                    },
                    plugins: {
                        datalabels: {
                            color: 'white',
                            font: {
                                family: 'attAleckSans-Regular',
                                size: '11'
                            },
                            formatter: function (value, context) {
                                return value + '%'
                            }
                        }
                    },
                },
                plugins: [ {
                    beforeInit: function (chart) {
                        chart.data.labels.forEach(function (e, i, a) {
                            if (/\n/.test(e)) {
                                a[ i ] = e.split(/\n/)
                            }
                        })
                    }
                } ]
            });
            riskChartWaypoint.destroy();
        }
    });

    var circularChartWaypoint = new Waypoint({
        element: document.getElementById('chart-circular'),
        offset: '60%',
        handler: function () {
            document.getElementById('chart-circular').classList.add('inView');
            circularChartWaypoint.destroy();
        }
    });

    var headerTitles = document.getElementsByClassName('sw-content-title');

    for (var l = 0; l < headerTitles.length; l++) {
        new Waypoint.Inview({
            element: headerTitles[ l ],
            enter: function () {
                var activeNav = this.element.dataset.nav;
                var navs = document.getElementsByClassName('nav-item');
                for (var o = 0; o < navs.length; o++) {
                    navs[ o ].classList.remove('active-nav');
                }
                document.getElementById(activeNav).classList.add('active-nav');
            }
        });
    }

    var chartInfrastructureWaypoint = new Waypoint({
        element: document.getElementById('chart-infrastructure'),
        offset: '70%',
        handler: function () {
            var chartConfidence = new Chart(document.getElementById('chart-infrastructure').getContext('2d'), {
                type: 'horizontalBar',
                data: {
                    labels: [
                        'Improving cybersecurity',
                        'Improving the customer experience',
                        'Improving sales and marketing analytics',
                        'Improving business intelligence',
                        'Innovating or improving products and services',
                        'Meeting compliance and regulatory targets',
                        'Entering new industry sectors or global markets',
                        'Introducing digital channels/new technologies',
                        'Integrating automation technologies into our workforce model',
                        'Reducing operating costs',
                        'Transitioning towards new business models'
                    ],
                    datasets: [ {
                        label: 'Percent of Business Leaders',
                        data: [ 82, 81, 75, 73, 73, 71, 68, 65, 65, 63, 56 ],
                        backgroundColor: [
                            '#0F54AF',
                            '#0F54AF',
                            '#0A6EBE',
                            '#0A6EBE',
                            '#0586CB',
                            '#0586CB',
                            '#009FDB',
                            '#009FDB',
                            '#18B9ED',
                            '#18B9ED',
                            '#30D1FF'
                        ],
                        borderWidth: 0,
                        datalabels: {
                            align: 'start',
                            anchor: 'end'
                        }
                    } ],

                },
                options: {
                    font: function (context) {
                        var width = context.chart.width;
                        var size = Math.round(width / 32);
                        return {
                            size: size,
                            weight: 600
                        };
                    },
                    tooltips: {
                        enabled: false
                    },
                    legend: {
                        display: false

                    },
                    barPercentage: 1,
                    categoryPercentage: 1,
                    scales: {
                        xAxes: [ {
                            display: false,
                            ticks: {
                                max: 85,
                                min: 20
                            }
                        } ],
                        yAxes: [ {
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            }
                        } ]
                    },
                    plugins: {
                        datalabels: {
                            color: 'white',
                            font: {
                                family: 'attAleckSans-Regular',
                                size: '11'
                            },
                            formatter: function (value, context) {
                                return value + '%'
                            }
                        }
                    },
                }
            });
            chartInfrastructureWaypoint.destroy();
        }
    })


    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        var elem = tabs[ i ];
        elem.onclick = function () {
            var tab = this.dataset.tab;
            var tabSet = document.getElementsByClassName(this.dataset.tabset);
            for (var j = 0; j < tabSet.length; j++) {
                tabSet[ j ].style.zIndex = 1;
                tabSet[ j ].style.display = 'none'
            }
            document.getElementById(tab).style.zIndex = '5';
            document.getElementById(tab).style.display = 'flex';
            return false;
        };
    }

    var navItems = document.getElementsByClassName('nav-item');

    for (var k = 0; k < navItems.length; k++) {
        var navItem = navItems[ k ];
        navItem.onclick = function () {
            var section = this.dataset.section;

            document.getElementById(section).scrollIntoView(true);
            window.scrollBy(0, -190);
        }
    }

    var last_known_scroll_position = 0;
    var ticking = false;

    function doSomething(scroll_pos) {
        // do something with the scroll position
        var headerHeight = document.getElementById('sw-header').offsetHeight;

        if (scroll_pos > headerHeight) {
            document.getElementById('navbar').classList.add('nav-fixed');
        } else {
            document.getElementById('navbar').classList.remove('nav-fixed');
        }
    }

    window.addEventListener('scroll', function (e) {

        last_known_scroll_position = window.scrollY;

        if (!ticking) {

            window.requestAnimationFrame(function () {
                doSomething(last_known_scroll_position);
                ticking = false;
            });

            ticking = true;

        }

    });
};


