import React from "react";
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
} from "bizcharts";

class BarBizcharts extends React.Component {
    render() {
        const {data} =this.props
        const cols = {
            value: {
                tickInterval: 20,
                alias: 'Sum'
            },
            item: {alias: 'Month',}
        };
        return (
            <div>
                <Chart height={400} data={data} scale={cols} forceFit>
                    <Axis title name="item" />
                    <Axis title name="value" />
                    <Legend />
                    {/*<Tooltip crosshairs={{ type: "y"}}/>*/}
                    <Tooltip crosshairs={{ type: "rect" }}/>
                    {/*<Geom type="interval" position="item*value"  color="item"/>*/}
                    <Geom type="interval" position="item*value"  />
                </Chart>
            </div>
        );
    }
}

export default BarBizcharts
