import React from "react";
// import propTypes from "prop-types";

const SysAdminOverview = () => {
  return (
    <div className="col-12">
      <div className="card card-hover">
        <div className="card-body">
          <div className="d-md-flex align-items-center">
            <div>
              <div className="card-title ml-0">Surveys</div>
              <div className="card-subtitle">Overview of Results</div>
            </div>
            <div className="ml-auto d-flex align-items-center">
              <div className="dl">
                <div className="form-group">
                  <select className="custom-select form-control">
                    <option value={0}>Monthly</option>
                    <option value={1}>Daily</option>
                    <option value={2}>Weekly</option>
                    <option value={3}>Yearly</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div
              style={{
                height: 350,
                width: "100%",
                maxHeight: 350,
                position: "relative"
              }}
              className="c3"
            >
              <svg
                width="582.9750366210938"
                height={350}
                style={{ overflow: "hidden" }}
              >
                <defs>
                  <clipPath id="c3-1574899218865-clip">
                    <rect width="541.9750366210938" height={276} />
                  </clipPath>
                  <clipPath id="c3-1574899218865-clip-xaxis">
                    <rect
                      x={-31}
                      y={-20}
                      width="603.9750366210938"
                      height={70}
                    />
                  </clipPath>
                  <clipPath id="c3-1574899218865-clip-yaxis">
                    <rect x={-29} y={-24} width={50} height={320} />
                  </clipPath>
                  <clipPath id="c3-1574899218865-clip-grid">
                    <rect width="541.9750366210938" height={276} />
                  </clipPath>
                  <clipPath id="c3-1574899218865-clip-subchart">
                    <rect width="541.9750366210938" />
                  </clipPath>
                </defs>
                <g transform="translate(30.5,24.5)">
                  <text
                    className="c3-text c3-empty"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    x="270.9875183105469"
                    y={138}
                    style={{ opacity: 0 }}
                  />
                  <rect
                    className="c3-zoom-rect"
                    width="541.9750366210938"
                    height={276}
                    style={{ opacity: 0 }}
                  />
                  <g
                    clipPath="url(https://wrappixel.com/demos/react-admin-templates/xtreme-react-admin/main/dashboards/cryptocurrency#c3-1574899218865-clip)"
                    className="c3-regions"
                    style={{ visibility: "visible" }}
                  />
                  <g
                    clipPath="url(https://wrappixel.com/demos/react-admin-templates/xtreme-react-admin/main/dashboards/cryptocurrency#c3-1574899218865-clip-grid)"
                    className="c3-grid"
                    style={{ visibility: "visible" }}
                  >
                    <g className="c3-xgrid-focus">
                      <line
                        className="c3-xgrid-focus"
                        x1={-10}
                        x2={-10}
                        y1={0}
                        y2={276}
                        style={{ visibility: "hidden" }}
                      />
                    </g>
                  </g>
                  <g
                    clipPath="url(https://wrappixel.com/demos/react-admin-templates/xtreme-react-admin/main/dashboards/cryptocurrency#c3-1574899218865-clip)"
                    className="c3-chart"
                  >
                    <g
                      className="c3-event-rects c3-event-rects-single"
                      style={{ fillOpacity: 0 }}
                    >
                      <rect
                        className=" c3-event-rect c3-event-rect-0"
                        x="-24.109724256727432"
                        y={0}
                        width="60.219448513454864"
                        height={276}
                      />
                      <rect
                        className=" c3-event-rect c3-event-rect-1"
                        x="41.89027574327257"
                        y={0}
                        width="60.219448513454864"
                        height={276}
                      />
                      <rect
                        className=" c3-event-rect c3-event-rect-2"
                        x="108.89027574327257"
                        y={0}
                        width="60.219448513454864"
                        height={276}
                      />
                      <rect
                        className=" c3-event-rect c3-event-rect-3"
                        x="174.89027574327258"
                        y={0}
                        width="60.219448513454864"
                        height={276}
                      />
                      <rect
                        className=" c3-event-rect c3-event-rect-4"
                        x="240.89027574327258"
                        y={0}
                        width="60.219448513454864"
                        height={276}
                      />
                      <rect
                        className=" c3-event-rect c3-event-rect-5"
                        x="307.8902757432726"
                        y={0}
                        width="60.219448513454864"
                        height={276}
                      />
                      <rect
                        className=" c3-event-rect c3-event-rect-6"
                        x="373.8902757432726"
                        y={0}
                        width="60.219448513454864"
                        height={276}
                      />
                      <rect
                        className=" c3-event-rect c3-event-rect-7"
                        x="440.8902757432726"
                        y={0}
                        width="60.219448513454864"
                        height={276}
                      />
                      <rect
                        className=" c3-event-rect c3-event-rect-8"
                        x="506.8902757432726"
                        y={0}
                        width="60.219448513454864"
                        height={276}
                      />
                    </g>
                    <g className="c3-chart-bars">
                      <g
                        className="c3-chart-bar c3-target c3-target-Ripple"
                        style={{ pointerEvents: "none" }}
                      >
                        <g
                          className=" c3-shapes c3-shapes-Ripple c3-bars c3-bars-Ripple"
                          style={{ cursor: "pointer" }}
                        />
                      </g>
                      <g
                        className="c3-chart-bar c3-target c3-target-Ethereum"
                        style={{ pointerEvents: "none" }}
                      >
                        <g
                          className=" c3-shapes c3-shapes-Ethereum c3-bars c3-bars-Ethereum"
                          style={{ cursor: "pointer" }}
                        />
                      </g>
                      <g
                        className="c3-chart-bar c3-target c3-target-Bitcoin"
                        style={{ pointerEvents: "none" }}
                      >
                        <g
                          className=" c3-shapes c3-shapes-Bitcoin c3-bars c3-bars-Bitcoin"
                          style={{ cursor: "pointer" }}
                        />
                      </g>
                    </g>
                    <g className="c3-chart-lines">
                      <g
                        className="c3-chart-line c3-target c3-target-Ripple"
                        style={{ opacity: 1, pointerEvents: "none" }}
                      >
                        <g className=" c3-shapes c3-shapes-Ripple c3-lines c3-lines-Ripple">
                          <path
                            className=" c3-shape c3-shape c3-line c3-line-Ripple"
                            d="M6,276Q58.699999999999996,269.8636363636364,72,269.1818181818182C91.95,268.15909090909093,119.05,270.75,139,269.1818181818182S185.2,258.25,205,258.72727272727275S251.05,272.5,271,272.3636363636364S318.05,258.6363636363636,338,257.8181818181818S384.05,271,404,266.90909090909093S451.05,233.95454545454544,471,230.54545454545453Q484.3,228.27272727272725,537,244.18181818181816"
                            style={{
                              stroke: "rgb(255, 130, 28)",
                              opacity: 1
                            }}
                          />
                        </g>
                        <g className=" c3-shapes c3-shapes-Ripple c3-areas c3-areas-Ripple">
                          <path
                            className=" c3-shape c3-shape c3-area c3-area-Ripple"
                            d="M6,276Q58.699999999999996,269.8636363636364,72,269.1818181818182C91.95,268.15909090909093,119.05,270.75,139,269.1818181818182S185.2,258.25,205,258.72727272727275S251.05,272.5,271,272.3636363636364S318.05,258.6363636363636,338,257.8181818181818S384.05,271,404,266.90909090909093S451.05,233.95454545454544,471,230.54545454545453Q484.3,228.27272727272725,537,244.18181818181816L537,276Q484.3,276,471,276C451.05,276,423.95,276,404,276S357.95,276,338,276S290.95,276,271,276S224.8,276,205,276S158.95,276,139,276S91.95,276,72,276Q58.699999999999996,276,6,276Z"
                            style={{
                              fill: "rgb(255, 130, 28)",
                              opacity: "0.2"
                            }}
                          />
                        </g>
                        <g className=" c3-selected-circles c3-selected-circles-Ripple" />
                        <g
                          className=" c3-shapes c3-shapes-Ripple c3-circles c3-circles-Ripple"
                          style={{ cursor: "pointer" }}
                        >
                          <circle
                            className=" c3-shape c3-shape-0 c3-circle c3-circle-0"
                            r={2}
                            style={{
                              fill: "rgb(255, 130, 28)",
                              opacity: 1
                            }}
                            cx={6}
                            cy={276}
                          />
                          <circle
                            className=" c3-shape c3-shape-1 c3-circle c3-circle-1"
                            r={2}
                            style={{
                              fill: "rgb(255, 130, 28)",
                              opacity: 1
                            }}
                            cx={72}
                            cy="269.1818181818182"
                          />
                          <circle
                            className=" c3-shape c3-shape-2 c3-circle c3-circle-2"
                            r={2}
                            style={{
                              fill: "rgb(255, 130, 28)",
                              opacity: 1
                            }}
                            cx={139}
                            cy="269.1818181818182"
                          />
                          <circle
                            className=" c3-shape c3-shape-3 c3-circle c3-circle-3"
                            r={2}
                            style={{
                              fill: "rgb(255, 130, 28)",
                              opacity: 1
                            }}
                            cx={205}
                            cy="258.72727272727275"
                          />
                          <circle
                            className=" c3-shape c3-shape-4 c3-circle c3-circle-4"
                            r={2}
                            style={{
                              fill: "rgb(255, 130, 28)",
                              opacity: 1
                            }}
                            cx={271}
                            cy="272.3636363636364"
                          />
                          <circle
                            className=" c3-shape c3-shape-5 c3-circle c3-circle-5"
                            r={2}
                            style={{
                              fill: "rgb(255, 130, 28)",
                              opacity: 1
                            }}
                            cx={338}
                            cy="257.8181818181818"
                          />
                          <circle
                            className=" c3-shape c3-shape-6 c3-circle c3-circle-6"
                            r={2}
                            style={{
                              fill: "rgb(255, 130, 28)",
                              opacity: 1
                            }}
                            cx={404}
                            cy="266.90909090909093"
                          />
                          <circle
                            className=" c3-shape c3-shape-7 c3-circle c3-circle-7"
                            r={2}
                            style={{
                              fill: "rgb(255, 130, 28)",
                              opacity: 1
                            }}
                            cx={471}
                            cy="230.54545454545453"
                          />
                          <circle
                            className=" c3-shape c3-shape-8 c3-circle c3-circle-8"
                            r={2}
                            style={{
                              fill: "rgb(255, 130, 28)",
                              opacity: 1
                            }}
                            cx={537}
                            cy="244.18181818181816"
                          />
                        </g>
                      </g>
                      <g
                        className="c3-chart-line c3-target c3-target-Ethereum"
                        style={{ opacity: 1, pointerEvents: "none" }}
                      >
                        <g className=" c3-shapes c3-shapes-Ethereum c3-lines c3-lines-Ethereum">
                          <path
                            className=" c3-shape c3-shape c3-line c3-line-Ethereum"
                            d="M6,276Q58.699999999999996,255.31818181818187,72,253.2727272727273C91.95,250.2045454545455,119.05,258.81818181818176,139,255.5454545454545S185.2,230.29545454545453,205,231.45454545454547S251.05,264.7727272727273,271,263.2727272727273S318.05,224.3181818181818,338,221.45454545454544S384.05,255.09090909090912,404,244.18181818181822S451.05,158.95454545454547,471,148.72727272727272Q484.3,141.90909090909088,537,175.99999999999994"
                            style={{
                              stroke: "rgb(64, 196, 255)",
                              opacity: 1
                            }}
                          />
                        </g>
                        <g className=" c3-shapes c3-shapes-Ethereum c3-areas c3-areas-Ethereum">
                          <path
                            className=" c3-shape c3-shape c3-area c3-area-Ethereum"
                            d="M6,276Q58.699999999999996,255.31818181818187,72,253.2727272727273C91.95,250.2045454545455,119.05,258.81818181818176,139,255.5454545454545S185.2,230.29545454545453,205,231.45454545454547S251.05,264.7727272727273,271,263.2727272727273S318.05,224.3181818181818,338,221.45454545454544S384.05,255.09090909090912,404,244.18181818181822S451.05,158.95454545454547,471,148.72727272727272Q484.3,141.90909090909088,537,175.99999999999994L537,244.18181818181816Q484.3,228.27272727272725,471,230.54545454545453C451.05,233.95454545454544,423.95,262.81818181818187,404,266.90909090909093S357.95,257,338,257.8181818181818S290.95,272.22727272727275,271,272.3636363636364S224.8,259.2045454545455,205,258.72727272727275S158.95,267.6136363636364,139,269.1818181818182S91.95,268.15909090909093,72,269.1818181818182Q58.699999999999996,269.8636363636364,6,276Z"
                            style={{
                              fill: "rgb(64, 196, 255)",
                              opacity: "0.2"
                            }}
                          />
                        </g>
                        <g className=" c3-selected-circles c3-selected-circles-Ethereum" />
                        <g
                          className=" c3-shapes c3-shapes-Ethereum c3-circles c3-circles-Ethereum"
                          style={{ cursor: "pointer" }}
                        >
                          <circle
                            className=" c3-shape c3-shape-0 c3-circle c3-circle-0"
                            r={2}
                            style={{
                              fill: "rgb(64, 196, 255)",
                              opacity: 1
                            }}
                            cx={6}
                            cy={276}
                          />
                          <circle
                            className=" c3-shape c3-shape-1 c3-circle c3-circle-1"
                            r={2}
                            style={{
                              fill: "rgb(64, 196, 255)",
                              opacity: 1
                            }}
                            cx={72}
                            cy="253.2727272727273"
                          />
                          <circle
                            className=" c3-shape c3-shape-2 c3-circle c3-circle-2"
                            r={2}
                            style={{
                              fill: "rgb(64, 196, 255)",
                              opacity: 1
                            }}
                            cx={139}
                            cy="255.5454545454545"
                          />
                          <circle
                            className=" c3-shape c3-shape-3 c3-circle c3-circle-3"
                            r={2}
                            style={{
                              fill: "rgb(64, 196, 255)",
                              opacity: 1
                            }}
                            cx={205}
                            cy="231.45454545454547"
                          />
                          <circle
                            className=" c3-shape c3-shape-4 c3-circle c3-circle-4"
                            r={2}
                            style={{
                              fill: "rgb(64, 196, 255)",
                              opacity: 1
                            }}
                            cx={271}
                            cy="263.2727272727273"
                          />
                          <circle
                            className=" c3-shape c3-shape-5 c3-circle c3-circle-5"
                            r={2}
                            style={{
                              fill: "rgb(64, 196, 255)",
                              opacity: 1
                            }}
                            cx={338}
                            cy="221.45454545454544"
                          />
                          <circle
                            className=" c3-shape c3-shape-6 c3-circle c3-circle-6"
                            r={2}
                            style={{
                              fill: "rgb(64, 196, 255)",
                              opacity: 1
                            }}
                            cx={404}
                            cy="244.18181818181822"
                          />
                          <circle
                            className=" c3-shape c3-shape-7 c3-circle c3-circle-7"
                            r={2}
                            style={{
                              fill: "rgb(64, 196, 255)",
                              opacity: 1
                            }}
                            cx={471}
                            cy="148.72727272727272"
                          />
                          <circle
                            className=" c3-shape c3-shape-8 c3-circle c3-circle-8"
                            r={2}
                            style={{
                              fill: "rgb(64, 196, 255)",
                              opacity: 1
                            }}
                            cx={537}
                            cy="175.99999999999994"
                          />
                        </g>
                      </g>
                      <g
                        className="c3-chart-line c3-target c3-target-Bitcoin"
                        style={{ opacity: 1, pointerEvents: "none" }}
                      >
                        <g className=" c3-shapes c3-shapes-Bitcoin c3-lines c3-lines-Bitcoin">
                          <path
                            className=" c3-shape c3-shape c3-line c3-line-Bitcoin"
                            d="M6,276Q58.699999999999996,220.7727272727273,72,216.90909090909093C91.95,211.11363636363637,119.05,241.99999999999997,139,237.36363636363632S185.2,184.1590909090909,205,186S251.05,254.54545454545453,271,249.63636363636363S318.05,159.5454545454545,338,153.27272727272722S384.05,226.90909090909093,404,207.81818181818184S451.05,47.8181818181818,471,25.99999999999997Q484.3,11.454545454545418,537,62.36363636363632"
                            style={{
                              stroke: "rgb(18, 64, 194)",
                              opacity: 1
                            }}
                          />
                        </g>
                        <g className=" c3-shapes c3-shapes-Bitcoin c3-areas c3-areas-Bitcoin">
                          <path
                            className=" c3-shape c3-shape c3-area c3-area-Bitcoin"
                            d="M6,276Q58.699999999999996,220.7727272727273,72,216.90909090909093C91.95,211.11363636363637,119.05,241.99999999999997,139,237.36363636363632S185.2,184.1590909090909,205,186S251.05,254.54545454545453,271,249.63636363636363S318.05,159.5454545454545,338,153.27272727272722S384.05,226.90909090909093,404,207.81818181818184S451.05,47.8181818181818,471,25.99999999999997Q484.3,11.454545454545418,537,62.36363636363632L537,175.99999999999994Q484.3,141.90909090909088,471,148.72727272727272C451.05,158.95454545454547,423.95,233.2727272727273,404,244.18181818181822S357.95,218.59090909090907,338,221.45454545454544S290.95,261.7727272727273,271,263.2727272727273S224.8,232.6136363636364,205,231.45454545454547S158.95,252.27272727272722,139,255.5454545454545S91.95,250.2045454545455,72,253.2727272727273Q58.699999999999996,255.31818181818187,6,276Z"
                            style={{
                              fill: "rgb(18, 64, 194)",
                              opacity: "0.2"
                            }}
                          />
                        </g>
                        <g className=" c3-selected-circles c3-selected-circles-Bitcoin" />
                        <g
                          className=" c3-shapes c3-shapes-Bitcoin c3-circles c3-circles-Bitcoin"
                          style={{ cursor: "pointer" }}
                        >
                          <circle
                            className=" c3-shape c3-shape-0 c3-circle c3-circle-0"
                            r={2}
                            style={{
                              fill: "rgb(18, 64, 194)",
                              opacity: 1
                            }}
                            cx={6}
                            cy={276}
                          />
                          <circle
                            className=" c3-shape c3-shape-1 c3-circle c3-circle-1"
                            r={2}
                            style={{
                              fill: "rgb(18, 64, 194)",
                              opacity: 1
                            }}
                            cx={72}
                            cy="216.90909090909093"
                          />
                          <circle
                            className=" c3-shape c3-shape-2 c3-circle c3-circle-2"
                            r={2}
                            style={{
                              fill: "rgb(18, 64, 194)",
                              opacity: 1
                            }}
                            cx={139}
                            cy="237.36363636363632"
                          />
                          <circle
                            className=" c3-shape c3-shape-3 c3-circle c3-circle-3"
                            r={2}
                            style={{
                              fill: "rgb(18, 64, 194)",
                              opacity: 1
                            }}
                            cx={205}
                            cy={186}
                          />
                          <circle
                            className=" c3-shape c3-shape-4 c3-circle c3-circle-4"
                            r={2}
                            style={{
                              fill: "rgb(18, 64, 194)",
                              opacity: 1
                            }}
                            cx={271}
                            cy="249.63636363636363"
                          />
                          <circle
                            className=" c3-shape c3-shape-5 c3-circle c3-circle-5"
                            r={2}
                            style={{
                              fill: "rgb(18, 64, 194)",
                              opacity: 1
                            }}
                            cx={338}
                            cy="153.27272727272722"
                          />
                          <circle
                            className=" c3-shape c3-shape-6 c3-circle c3-circle-6"
                            r={2}
                            style={{
                              fill: "rgb(18, 64, 194)",
                              opacity: 1
                            }}
                            cx={404}
                            cy="207.81818181818184"
                          />
                          <circle
                            className=" c3-shape c3-shape-7 c3-circle c3-circle-7"
                            r={2}
                            style={{
                              fill: "rgb(18, 64, 194)",
                              opacity: 1
                            }}
                            cx={471}
                            cy="25.99999999999997"
                          />
                          <circle
                            className=" c3-shape c3-shape-8 c3-circle c3-circle-8"
                            r={2}
                            style={{
                              fill: "rgb(18, 64, 194)",
                              opacity: 1
                            }}
                            cx={537}
                            cy="62.36363636363632"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      className="c3-chart-arcs"
                      transform="translate(270.9875183105469,133)"
                    >
                      <text
                        className="c3-chart-arcs-title"
                        style={{ textAnchor: "middle", opacity: 0 }}
                      />
                    </g>
                    <g className="c3-chart-texts">
                      <g
                        className="c3-chart-text c3-target c3-target-Ripple"
                        style={{ opacity: 1, pointerEvents: "none" }}
                      >
                        <g className=" c3-texts c3-texts-Ripple" />
                      </g>
                      <g
                        className="c3-chart-text c3-target c3-target-Ethereum"
                        style={{ opacity: 1, pointerEvents: "none" }}
                      >
                        <g className=" c3-texts c3-texts-Ethereum" />
                      </g>
                      <g
                        className="c3-chart-text c3-target c3-target-Bitcoin"
                        style={{ opacity: 1, pointerEvents: "none" }}
                      >
                        <g className=" c3-texts c3-texts-Bitcoin" />
                      </g>
                    </g>
                  </g>
                  <g
                    clipPath="url(https://wrappixel.com/demos/react-admin-templates/xtreme-react-admin/main/dashboards/cryptocurrency#c3-1574899218865-clip-grid)"
                    className="c3-grid c3-grid-lines"
                  >
                    <g className="c3-xgrid-lines" />
                    <g className="c3-ygrid-lines" />
                  </g>
                  <g
                    className="c3-axis c3-axis-x"
                    clipPath="url(https://wrappixel.com/demos/react-admin-templates/xtreme-react-admin/main/dashboards/cryptocurrency#c3-1574899218865-clip-xaxis)"
                    transform="translate(0,276)"
                    style={{ visibility: "visible", opacity: 1 }}
                  >
                    <text
                      className="c3-axis-x-label"
                      transform
                      style={{ textAnchor: "end" }}
                      x="541.9750366210938"
                      dx="-0.5em"
                      dy="-0.5em"
                    />
                    <g
                      className="tick"
                      transform="translate(6, 0)"
                      style={{ opacity: 1 }}
                    >
                      <line x1={0} x2={0} y2={6} />
                      <text
                        x={0}
                        y={9}
                        transform
                        style={{
                          textAnchor: "middle",
                          display: "block"
                        }}
                      >
                        <tspan x={0} dy=".71em" dx={0}>
                          0
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(72, 0)"
                      style={{ opacity: 1 }}
                    >
                      <line x1={0} x2={0} y2={6} />
                      <text
                        x={0}
                        y={9}
                        transform
                        style={{
                          textAnchor: "middle",
                          display: "block"
                        }}
                      >
                        <tspan x={0} dy=".71em" dx={0}>
                          1
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(139, 0)"
                      style={{ opacity: 1 }}
                    >
                      <line x1={0} x2={0} y2={6} />
                      <text
                        x={0}
                        y={9}
                        transform
                        style={{
                          textAnchor: "middle",
                          display: "block"
                        }}
                      >
                        <tspan x={0} dy=".71em" dx={0}>
                          2
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(205, 0)"
                      style={{ opacity: 1 }}
                    >
                      <line x1={0} x2={0} y2={6} />
                      <text
                        x={0}
                        y={9}
                        transform
                        style={{
                          textAnchor: "middle",
                          display: "block"
                        }}
                      >
                        <tspan x={0} dy=".71em" dx={0}>
                          3
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(271, 0)"
                      style={{ opacity: 1 }}
                    >
                      <line x1={0} x2={0} y2={6} />
                      <text
                        x={0}
                        y={9}
                        transform
                        style={{
                          textAnchor: "middle",
                          display: "block"
                        }}
                      >
                        <tspan x={0} dy=".71em" dx={0}>
                          4
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(338, 0)"
                      style={{ opacity: 1 }}
                    >
                      <line x1={0} x2={0} y2={6} />
                      <text
                        x={0}
                        y={9}
                        transform
                        style={{
                          textAnchor: "middle",
                          display: "block"
                        }}
                      >
                        <tspan x={0} dy=".71em" dx={0}>
                          5
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(404, 0)"
                      style={{ opacity: 1 }}
                    >
                      <line x1={0} x2={0} y2={6} />
                      <text
                        x={0}
                        y={9}
                        transform
                        style={{
                          textAnchor: "middle",
                          display: "block"
                        }}
                      >
                        <tspan x={0} dy=".71em" dx={0}>
                          6
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(471, 0)"
                      style={{ opacity: 1 }}
                    >
                      <line x1={0} x2={0} y2={6} />
                      <text
                        x={0}
                        y={9}
                        transform
                        style={{
                          textAnchor: "middle",
                          display: "block"
                        }}
                      >
                        <tspan x={0} dy=".71em" dx={0}>
                          7
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(537, 0)"
                      style={{ opacity: 1 }}
                    >
                      <line x1={0} x2={0} y2={6} />
                      <text
                        x={0}
                        y={9}
                        transform
                        style={{
                          textAnchor: "middle",
                          display: "block"
                        }}
                      >
                        <tspan x={0} dy=".71em" dx={0}>
                          8
                        </tspan>
                      </text>
                    </g>
                    <path className="domain" d="M0,6V0H541.9750366210938V6" />
                  </g>
                  <g
                    className="c3-axis c3-axis-y"
                    clipPath="url(https://wrappixel.com/demos/react-admin-templates/xtreme-react-admin/main/dashboards/cryptocurrency#c3-1574899218865-clip-yaxis)"
                    transform="translate(0,0)"
                    style={{ visibility: "visible", opacity: 1 }}
                  >
                    <text
                      className="c3-axis-y-label"
                      transform="rotate(-90)"
                      style={{ textAnchor: "end" }}
                      x={0}
                      dx="-0.5em"
                      dy="1.2em"
                    />
                    <g
                      className="tick"
                      transform="translate(0,276)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={-6} />
                      <text x={-9} y={0} style={{ textAnchor: "end" }}>
                        <tspan x={-9} dy={3}>
                          0
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,254)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={-6} />
                      <text x={-9} y={0} style={{ textAnchor: "end" }}>
                        <tspan x={-9} dy={3}>
                          50
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,231)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={-6} />
                      <text x={-9} y={0} style={{ textAnchor: "end" }}>
                        <tspan x={-9} dy={3}>
                          100
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,208)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={-6} />
                      <text x={-9} y={0} style={{ textAnchor: "end" }}>
                        <tspan x={-9} dy={3}>
                          150
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,186)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={-6} />
                      <text x={-9} y={0} style={{ textAnchor: "end" }}>
                        <tspan x={-9} dy={3}>
                          200
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,163)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={-6} />
                      <text x={-9} y={0} style={{ textAnchor: "end" }}>
                        <tspan x={-9} dy={3}>
                          250
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,140)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={-6} />
                      <text x={-9} y={0} style={{ textAnchor: "end" }}>
                        <tspan x={-9} dy={3}>
                          300
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,117)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={-6} />
                      <text x={-9} y={0} style={{ textAnchor: "end" }}>
                        <tspan x={-9} dy={3}>
                          350
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,95)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={-6} />
                      <text x={-9} y={0} style={{ textAnchor: "end" }}>
                        <tspan x={-9} dy={3}>
                          400
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,72)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={-6} />
                      <text x={-9} y={0} style={{ textAnchor: "end" }}>
                        <tspan x={-9} dy={3}>
                          450
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,49)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={-6} />
                      <text x={-9} y={0} style={{ textAnchor: "end" }}>
                        <tspan x={-9} dy={3}>
                          500
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,27)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={-6} />
                      <text x={-9} y={0} style={{ textAnchor: "end" }}>
                        <tspan x={-9} dy={3}>
                          550
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,4)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={-6} />
                      <text x={-9} y={0} style={{ textAnchor: "end" }}>
                        <tspan x={-9} dy={3}>
                          600
                        </tspan>
                      </text>
                    </g>
                    <path className="domain" d="M0,1H0V276H0" />
                  </g>
                  <g
                    className="c3-axis c3-axis-y2"
                    transform="translate(541.9750366210938,0)"
                    style={{ visibility: "hidden", opacity: 1 }}
                  >
                    <text
                      className="c3-axis-y2-label"
                      transform="rotate(-90)"
                      style={{ textAnchor: "end" }}
                      x={0}
                      dx="-0.5em"
                      dy="-0.5em"
                    />
                    <g
                      className="tick"
                      transform="translate(0,276)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={6} />
                      <text x={9} y={0} style={{ textAnchor: "start" }}>
                        <tspan x={9} dy={3}>
                          0
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,249)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={6} />
                      <text x={9} y={0} style={{ textAnchor: "start" }}>
                        <tspan x={9} dy={3}>
                          0.1
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,221)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={6} />
                      <text x={9} y={0} style={{ textAnchor: "start" }}>
                        <tspan x={9} dy={3}>
                          0.2
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,194)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={6} />
                      <text x={9} y={0} style={{ textAnchor: "start" }}>
                        <tspan x={9} dy={3}>
                          0.3
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,166)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={6} />
                      <text x={9} y={0} style={{ textAnchor: "start" }}>
                        <tspan x={9} dy={3}>
                          0.4
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,139)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={6} />
                      <text x={9} y={0} style={{ textAnchor: "start" }}>
                        <tspan x={9} dy={3}>
                          0.5
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,111)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={6} />
                      <text x={9} y={0} style={{ textAnchor: "start" }}>
                        <tspan x={9} dy={3}>
                          0.6
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,84)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={6} />
                      <text x={9} y={0} style={{ textAnchor: "start" }}>
                        <tspan x={9} dy={3}>
                          0.7
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,56)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={6} />
                      <text x={9} y={0} style={{ textAnchor: "start" }}>
                        <tspan x={9} dy={3}>
                          0.8
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,29)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={6} />
                      <text x={9} y={0} style={{ textAnchor: "start" }}>
                        <tspan x={9} dy={3}>
                          0.9
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(0,1)"
                      style={{ opacity: 1 }}
                    >
                      <line x2={6} />
                      <text x={9} y={0} style={{ textAnchor: "start" }}>
                        <tspan x={9} dy={3}>
                          1
                        </tspan>
                      </text>
                    </g>
                    <path className="domain" d="M6,1H0V276H6" />
                  </g>
                </g>
                <g
                  transform="translate(30.5,350.5)"
                  style={{ visibility: "hidden" }}
                >
                  <g
                    clipPath="url(https://wrappixel.com/demos/react-admin-templates/xtreme-react-admin/main/dashboards/cryptocurrency#c3-1574899218865-clip-subchart)"
                    className="c3-chart"
                  >
                    <g className="c3-chart-bars" />
                    <g className="c3-chart-lines" />
                  </g>
                  <g
                    clipPath="url(https://wrappixel.com/demos/react-admin-templates/xtreme-react-admin/main/dashboards/cryptocurrency#c3-1574899218865-clip)"
                    className="c3-brush"
                    style={{
                      pointerEvents: "all",
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                    }}
                  >
                    <rect
                      className="background"
                      x={0}
                      width="541.9750366210938"
                      style={{
                        visibility: "hidden",
                        cursor: "crosshair"
                      }}
                    />
                    <rect
                      className="extent"
                      x={0}
                      width={0}
                      style={{ cursor: "move" }}
                    />
                    <g
                      className="resize e"
                      transform="translate(0,0)"
                      style={{ cursor: "ew-resize", display: "none" }}
                    >
                      <rect
                        x={-3}
                        width={6}
                        height={6}
                        style={{ visibility: "hidden" }}
                      />
                    </g>
                    <g
                      className="resize w"
                      transform="translate(0,0)"
                      style={{ cursor: "ew-resize", display: "none" }}
                    >
                      <rect
                        x={-3}
                        width={6}
                        height={6}
                        style={{ visibility: "hidden" }}
                      />
                    </g>
                  </g>
                  <g
                    className="c3-axis-x"
                    transform="translate(0,0)"
                    clipPath="url(https://wrappixel.com/demos/react-admin-templates/xtreme-react-admin/main/dashboards/cryptocurrency#c3-1574899218865-clip-xaxis)"
                    style={{ visibility: "hidden", opacity: 1 }}
                  >
                    <g
                      className="tick"
                      transform="translate(6, 0)"
                      style={{ opacity: 1 }}
                    >
                      <line x1={0} x2={0} y2={6} />
                      <text
                        x={0}
                        y={9}
                        transform
                        style={{
                          textAnchor: "middle",
                          display: "block"
                        }}
                      >
                        <tspan x={0} dy=".71em" dx={0}>
                          0
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(72, 0)"
                      style={{ opacity: 1 }}
                    >
                      <line x1={0} x2={0} y2={6} />
                      <text
                        x={0}
                        y={9}
                        transform
                        style={{
                          textAnchor: "middle",
                          display: "block"
                        }}
                      >
                        <tspan x={0} dy=".71em" dx={0}>
                          1
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(139, 0)"
                      style={{ opacity: 1 }}
                    >
                      <line x1={0} x2={0} y2={6} />
                      <text
                        x={0}
                        y={9}
                        transform
                        style={{
                          textAnchor: "middle",
                          display: "block"
                        }}
                      >
                        <tspan x={0} dy=".71em" dx={0}>
                          2
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(205, 0)"
                      style={{ opacity: 1 }}
                    >
                      <line x1={0} x2={0} y2={6} />
                      <text
                        x={0}
                        y={9}
                        transform
                        style={{
                          textAnchor: "middle",
                          display: "block"
                        }}
                      >
                        <tspan x={0} dy=".71em" dx={0}>
                          3
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(271, 0)"
                      style={{ opacity: 1 }}
                    >
                      <line x1={0} x2={0} y2={6} />
                      <text
                        x={0}
                        y={9}
                        transform
                        style={{
                          textAnchor: "middle",
                          display: "block"
                        }}
                      >
                        <tspan x={0} dy=".71em" dx={0}>
                          4
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(338, 0)"
                      style={{ opacity: 1 }}
                    >
                      <line x1={0} x2={0} y2={6} />
                      <text
                        x={0}
                        y={9}
                        transform
                        style={{
                          textAnchor: "middle",
                          display: "block"
                        }}
                      >
                        <tspan x={0} dy=".71em" dx={0}>
                          5
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(404, 0)"
                      style={{ opacity: 1 }}
                    >
                      <line x1={0} x2={0} y2={6} />
                      <text
                        x={0}
                        y={9}
                        transform
                        style={{
                          textAnchor: "middle",
                          display: "block"
                        }}
                      >
                        <tspan x={0} dy=".71em" dx={0}>
                          6
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(471, 0)"
                      style={{ opacity: 1 }}
                    >
                      <line x1={0} x2={0} y2={6} />
                      <text
                        x={0}
                        y={9}
                        transform
                        style={{
                          textAnchor: "middle",
                          display: "block"
                        }}
                      >
                        <tspan x={0} dy=".71em" dx={0}>
                          7
                        </tspan>
                      </text>
                    </g>
                    <g
                      className="tick"
                      transform="translate(537, 0)"
                      style={{ opacity: 1 }}
                    >
                      <line x1={0} x2={0} y2={6} />
                      <text
                        x={0}
                        y={9}
                        transform
                        style={{
                          textAnchor: "middle",
                          display: "block"
                        }}
                      >
                        <tspan x={0} dy=".71em" dx={0}>
                          8
                        </tspan>
                      </text>
                    </g>
                    <path className="domain" d="M0,6V0H541.9750366210938V6" />
                  </g>
                </g>
                <g transform="translate(0,330)">
                  <g
                    className="c3-legend-item c3-legend-item-Ripple"
                    style={{ visibility: "hidden", cursor: "pointer" }}
                  >
                    <text x={14} y={9} style={{ pointerEvents: "none" }}>
                      Ripple
                    </text>
                    <rect
                      className="c3-legend-item-event"
                      x={0}
                      y={-5}
                      width={0}
                      height={0}
                      style={{ fillOpacity: 0 }}
                    />
                    <line
                      className="c3-legend-item-tile"
                      x1={-2}
                      y1={4}
                      x2={8}
                      y2={4}
                      strokeWidth={10}
                      style={{
                        stroke: "rgb(255, 130, 28)",
                        pointerEvents: "none"
                      }}
                    />
                  </g>
                  <g
                    className="c3-legend-item c3-legend-item-Ethereum"
                    style={{ visibility: "hidden", cursor: "pointer" }}
                  >
                    <text x={14} y={9} style={{ pointerEvents: "none" }}>
                      Ethereum
                    </text>
                    <rect
                      className="c3-legend-item-event"
                      x={0}
                      y={-5}
                      width={0}
                      height={0}
                      style={{ fillOpacity: 0 }}
                    />
                    <line
                      className="c3-legend-item-tile"
                      x1={-2}
                      y1={4}
                      x2={8}
                      y2={4}
                      strokeWidth={10}
                      style={{
                        stroke: "rgb(64, 196, 255)",
                        pointerEvents: "none"
                      }}
                    />
                  </g>
                  <g
                    className="c3-legend-item c3-legend-item-Bitcoin"
                    style={{ visibility: "hidden", cursor: "pointer" }}
                  >
                    <text x={14} y={9} style={{ pointerEvents: "none" }}>
                      Bitcoin
                    </text>
                    <rect
                      className="c3-legend-item-event"
                      x={0}
                      y={-5}
                      width={0}
                      height={0}
                      style={{ fillOpacity: 0 }}
                    />
                    <line
                      className="c3-legend-item-tile"
                      x1={-2}
                      y1={4}
                      x2={8}
                      y2={4}
                      strokeWidth={10}
                      style={{
                        stroke: "rgb(18, 64, 194)",
                        pointerEvents: "none"
                      }}
                    />
                  </g>
                </g>
                <text className="c3-title" x="291.4875183105469" y={0} />
              </svg>
              <div
                className="c3-tooltip-container"
                style={{
                  position: "absolute",
                  pointerEvents: "none",
                  display: "none"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// SysAdminUsers.propTypes = {
//   exampleList: propTypes.shape({
//     example: propTypes.string,
//   })
// };
export default SysAdminOverview;
