var ReactD3 = require('react-d3-components')
var {BarChart,PieChart,LineChart,AreaChart} = ReactD3
var ChartDemo = React.createClass({
    getInitialState() {
        return {
            barData1: [{
                label: 'somethingA',
                values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
            }],
            barData2: [
                {
                    label: 'somethingA',
                    values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
                },
                {
                    label: 'somethingB',
                    values: [{x: 'SomethingA', y: 6}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 5}]
                },
                {
                    label: 'somethingC',
                    values: [{x: 'SomethingA', y: 6}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 5}]
                }
            ],
            pieData: {
                label: 'somethingA',
                values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
            },
            lineData: [
                {
                    label: 'somethingA',
                    values: [
                        {x: 0, y: 2},
                        {x: 1.3, y: 5},
                        {x: 3, y: 6},
                        {x: 3.5, y: 6.5},
                        {x: 4, y: 6},
                        {x: 4.5, y: 6},
                        {x: 5, y: 7},
                        {x: 5.5, y: 8}
                    ]
                },
                {
                    label: 'somethingB',
                    values: [
                        {x: 0, y: 3},
                        {x: 1.3, y: 4},
                        {x: 3, y: 7},
                        {x: 3.5, y: 8},
                        {x: 4, y: 7},
                        {x: 4.5, y: 7},
                        {x: 5, y: 7.8},
                        {x: 5.5, y: 9}]
                }
            ],
            areaData: [
                {
                    label: 'somethingA',
                    values: [
                        {x: 0, y: 2},
                        {x: 1.3, y: 5},
                        {x: 3, y: 6},
                        {x: 3.5, y: 6.5},
                        {x: 4, y: 6},
                        {x: 4.5, y: 6},
                        {x: 5, y: 7},
                        {x: 5.5, y: 8}
                    ]
                },
                {
                    label: 'somethingB',
                    values: [
                        {x: 0, y: 3},
                        {x: 1.3, y: 4},
                        {x: 3, y: 7},
                        {x: 3.5, y: 8},
                        {x: 4, y: 7},
                        {x: 4.5, y: 7},
                        {x: 5, y: 7.8},
                        {x: 5.5, y: 9}]
                }
            ]
        }
    },
    componentDidMount() {
    },

    render() {
        return (
            <div>
                <BarChart
                    data={this.state.barData1}
                    width={400}
                    height={400}
                    margin={{top: 10, bottom: 50, left: 50, right: 10}}
                    />
                <BarChart
                    data={this.state.barData2}
                    width={400}
                    height={400}
                    margin={{top: 10, bottom: 50, left: 50, right: 10}}
                    />
                <BarChart
                    data={this.state.barData2}
                    groupedBars
                    width={400}
                    height={400}
                    margin={{top: 10, bottom: 50, left: 50, right: 10}}
                    />
                <PieChart
                    data={this.state.pieData}
                    width={600}
                    height={400}
                    margin={{top: 10, bottom: 10, left: 100, right: 100}}
                    />
                <LineChart
                    data={this.state.lineData}
                    width={400}
                    height={400}
                    margin={{top: 10, bottom: 50, left: 50, right: 10}}
                    />
                <AreaChart
                    data={this.state.areaData}
                    width={900}
                    height={400}
                    margin={{top: 10, bottom: 50, left: 50, right: 10}}
                    />
            </div>
        )
    }
})
module.exports = ChartDemo
