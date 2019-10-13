import React from "react";
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord
} from "bizcharts";

function Radar() {
    const data = {"P":"20", "E":"30", "S":"40", "T":"50", "Es":"20", "L":"10"};
    const height ="300";
    // const { height, data } = Props;
    const cols = {
        score: {
            min: 0,
            tickCount: 5
        }
    };
    return (
        <div id="radar-chart">
            <Chart
                height={height}
                data={data}
                scale={cols}
                forceFit
                padding={[0, 0, 0, 0]}
            >
                <Coord type="polar" radius={0.8} />
                <Axis
                    name="item"
                    label={{
                        autoRotate: true,
                        textStyle: {
                            fill: "#CBCBCB",
                        }
                    }}
                    line={null}
                    tickLine={null}
                    grid={{
                        lineStyle: {
                            lineDash: null
                        },
                        hideFirstLine: false
                    }}
                />
                <Tooltip />
                <Axis
                    name="score"
                    line={null}
                    tickLine={null}
                    position={{}}
                    label={{
                        textStyle: {
                            fontSize: '15',
                            fill: "#CBCBCB",
                        }
                    }}
                    grid={{
                        type: "polygon",
                        lineStyle: {
                            lineDash: null
                        },
                        alternateColor: "rgba(0, 0, 0, 0.04)"
                    }}
                />
                <Geom type="area" position="item*score"  />
                <Geom type="line" position="item*score" size={2} />
                <Geom
                    type="point"
                    position="item*score"
                    shape="circle"
                    size={4}
                    style={{
                        stroke: "#fff",
                        lineWidth: 1,
                        fillOpacity: 1
                    }}
                />
            </Chart>
        </div>
    );
}

export default Radar;