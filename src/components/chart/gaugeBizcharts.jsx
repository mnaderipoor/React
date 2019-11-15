import React from "react";
import { Chart, Axis, Coord, Geom, Guide, Shape } from "bizcharts";
import "./bizchratTheme.css"
const { Html, Arc } = Guide;
const strokeColor = (percent) => {
    const color = [
        "#FFFFFF",
        "#7ED321",
        "#FFBF00",
        "#f5222d"
    ];
    return (
        ((percent >= 0 && percent < 25) && color[0]) ||
        ((percent >= 25 && percent < 50) && color[1]) ||
        ((percent >= 50 && percent < 75) && color[2]) ||
        ((percent >= 75 && percent < 100) && color[3])
    );
};
Shape.registerShape("point", "pointer", {
    drawShape(cfg, group) {
        let point = cfg.points[0];
        point = this.parsePoint(point);
        const center = this.parsePoint({
            x: 0,
            y: 0
        });
        group.addShape("line", {
            attrs: {
                x1: center.x,
                y1: center.y,
                x2: point.x,
                y2: point.y,
                stroke: cfg.color,
                lineWidth: 5,
                lineCap: "round"
            }
        });
        return group.addShape("circle", {
            attrs: {
                x: center.x,
                y: center.y,
                r: 12,
                stroke: cfg.color,
                lineWidth: 4.5,
                fill: "#fff"
            }
        });
    }
});

const color = [
    "#FFFFFF",
    "#7ED321",
    "#FFBF00",
    "#f5222d"
];
const cols = {
    value: {
        min: 0,
        max: 100,
        tickInterval: 10,
        nice: false
    }
};

class GaugeBizcharts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lineWidth: 25
        };
    }

    render() {
        const { height, percent } = this.props;
        const { lineWidth } = this.state;
        const val = percent / 10;
        return (
<div className="bizBackground">
            <Chart height={height} data={[{ value: percent }]} scale={cols} padding={[10, 0, 0, 0]} forceFit>
                <Coord type="polar" startAngle={-9 / 8 * Math.PI} endAngle={1 / 8 * Math.PI} radius={0.75} />
                <Axis
                    name="value"
                    zIndex={2}
                    line={null}
                    label={{
                        offset: -20,
                        textStyle: {
                            fontSize: 18,
                            fill: "#CBCBCB",
                            textAlign: "center",
                            textBaseline: "middle"
                        }
                    }}
                    tickLine={{
                        length: -24,
                        stroke: "#fff",
                        strokeOpacity: 1
                    }}
                />
                <Axis name="1" visible={false} />
                <Geom
                    type="point"
                    position="value*1"
                    shape="pointer"
                    color={strokeColor(percent)}
                    active={false}
                    style={{ stroke: "#fff", lineWidth: 1 }}
                />
                <Guide>
                    <Arc
                        zIndex={0}
                        start={[0, 0.965]}
                        end={[100, 0.965]}
                        style={{ // 底灰色
                            stroke: "rgba(0, 0, 0, 0.09)",
                            lineWidth
                        }}
                    />
                    {val < 3 &&
                    <Arc
                        zIndex={1}
                        start={[0, 0.965]}
                        end={[percent, 0.965]}
                        style={{ // 底灰色
                            stroke: color[0],
                            lineWidth
                        }}
                    />}
                    {val >= 3 && <Arc
                        zIndex={1}
                        start={[0, 0.965]}
                        end={[25, 0.965]}
                        style={{ // 底灰色
                            stroke: color[0],
                            lineWidth
                        }}
                    />}
                    {val >= 5 && <Arc
                        zIndex={1}
                        start={[25, 0.965]}
                        end={[50, 0.965]}
                        style={{ // 底灰色
                            stroke: color[1],
                            lineWidth
                        }}
                    />}
                    {val >= 7 && <Arc
                        zIndex={1}
                        start={[50, 0.965]}
                        end={[75, 0.965]}
                        style={{ // 底灰色
                            stroke: color[2],
                            lineWidth
                        }}
                    />}

                    {(val >= 3 && val < 5) &&
                    <Arc
                        zIndex={1}
                        start={[25, 0.965]}
                        end={[percent, 0.965]}
                        style={{ // 底灰色
                            stroke: color[1],
                            lineWidth
                        }}
                    />}
                    {(val >= 5 && val < 7) &&
                    <Arc
                        zIndex={1}
                        start={[50, 0.965]}
                        end={[percent, 0.965]}
                        style={{ // 底灰色
                            stroke: color[2],
                            lineWidth
                        }}
                    />}
                    {(val >= 7) &&
                    <Arc
                        zIndex={1}
                        start={[75, 0.965]}
                        end={[percent, 0.965]}
                        style={{ // 底灰色
                            stroke: color[3],
                            lineWidth
                        }}
                    />}

                    <Html
                        position={["50%", "90%"]}
                        html={() => (
                            `<div style="width: 200px;text-align: center;font-size: 12px!important;">
                             <p style="font-size: 3em;margin: 0;color: white">${percent}</p>
                            </div>`
                        )}
                    />
                </Guide>
            </Chart>
            </div>
        );
    }
}

export default GaugeBizcharts;