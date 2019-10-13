import React,{Component} from "react";
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
import DataSet from "@antv/data-set";

class PieBizcharts extends Component {
    render() {
        const { DataView } = DataSet;
        const {data} = this.props;
        const dv = new DataView();
        dv.source(data).transform({
            type: "percent",
            field: "value",
            dimension: "item",
            as: "percent"
        });
        const cols = {
            percent: {
                formatter: val => {
                    val = val * 100 + "%";
                    return val;
                }
            }
        };
        return (
            <div>
                <Chart
                    height={window.innerHeight}
                    data={dv}
                    scale={cols}
                    padding={[8, 10, 8, 8]}
                    forceFit
                >
                    <Coord type="theta" radius={0.9} />
                    <Axis name="percent" />
                    <Legend
                        position="right"
                        offsetY={-window.innerHeight / 3 + 120}
                        offsetX={-40}
                    />
                    <Tooltip
                        showTitle={false}
                        itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                    />
                    <Geom
                        type="intervalStack"
                        position="percent"
                        color="item"
                        tooltip={[
                            "item*percent",
                            (item, percent) => {
                                percent = percent * 100 + "%";
                                return {
                                    name: item,
                                    value: percent
                                };
                            }
                        ]}
                        style={{
                            lineWidth: 1,
                            stroke: "#fff"
                        }}
                    >
                        <Label
                            content="percent"
                            formatter={(val, item) => {
                                return item.point.item + ": " + Number((val).toFixed(1));
                            }}
                        />
                    </Geom>
                </Chart>
            </div>
        );
    }
}
export default PieBizcharts
