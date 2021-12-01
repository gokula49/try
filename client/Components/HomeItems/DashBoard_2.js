import React from "react";
import styles from "./dash.module.css";
function Dashboard_2() {
  return (
    <div className={styles.dashbody}>
      <div className={styles.head}>
        <h1>Dashboard</h1>
      </div>
      <div className={styles.below}>
        <div className={styles.below_head}>
          <h4>
            Total Receivables{" "}
            <div className={styles.tooltip}>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                className="icon icon-xs text-muted cursor-pointer"
              >
                <path d="M317.1 147.5c-15.1-13.8-35.5-20.8-60.5-20.8-23.7 0-43.1 6.5-57.7 19.4-14.6 12.9-23.5 31.5-26.4 55.5l-.6 4.9 40.4 4.8.7-4.6c2.5-15.8 7.7-27.5 15.4-34.7 7.7-7.2 17.1-10.7 28.7-10.7 12 0 21.9 3.9 30.1 11.9 8.2 8 12.2 16.9 12.2 27.3 0 5.6-1.3 10.7-4 15.4-2.8 4.9-9.3 11.9-19.3 20.7-10.7 9.4-17.9 16.5-22.1 21.5-5.8 7-10 14-12.6 20.8-3.5 9.1-5.3 19.9-5.3 32.3 0 2.1.1 5.1.2 9l.1 4.7h38.4l.1-4.8c.3-14.3 1.4-21.4 2.3-24.7 1.3-4.7 3.2-8.8 5.9-12.5 2.8-3.8 9-10 18.5-18.4 15.1-13.4 25.1-24.6 30.4-34.2 5.4-9.7 8.1-20.4 8.1-31.9 0-19.9-7.7-37-23-50.9zM256.3 385.3c12.1 0 22-9.8 22-22 0-12.1-9.8-22-22-22-12.1 0-22 9.8-22 22s9.8 22 22 22z"></path>
                <path d="M437.4 74.6C388.9 26.1 324.5-.5 256-.5S123.1 26.2 74.6 74.6C26.1 123.1-.5 187.5-.5 256s26.7 132.9 75.1 181.4c48.5 48.5 112.9 75.1 181.4 75.1s132.9-26.7 181.4-75.1c48.5-48.5 75.1-112.9 75.1-181.4s-26.6-132.9-75.1-181.4zm-22.6 340.2c-42.4 42.4-98.8 65.8-158.8 65.8s-116.4-23.4-158.8-65.8C54.8 372.4 31.5 316 31.5 256S54.8 139.6 97.2 97.2C139.6 54.8 196 31.5 256 31.5s116.4 23.4 158.8 65.8c42.4 42.4 65.8 98.8 65.8 158.8s-23.4 116.3-65.8 158.7z"></path>
              </svg>
              <span className={styles.span_hover}>
                current and overdue amount that you're yet to receive from
                customers
              </span>
            </div>
          </h4>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={styles.plus}
            >
              <path d="M256 15C122.9 15 15 122.9 15 256s107.9 241 241 241 241-107.9 241-241S389.1 15 256 15zm122 263H278v100c0 12.2-9.8 22-22 22s-22-9.8-22-22V278H134c-12.2 0-22-9.8-22-22s9.8-22 22-22h100V134c0-12.2 9.8-22 22-22s22 9.8 22 22v100h100c12.2 0 22 9.8 22 22s-9.8 22-22 22z"></path>
              <path
                fill="#FFF"
                d="M378 234H278V134c0-12.2-9.8-22-22-22s-22 9.8-22 22v100H134c-12.2 0-22 9.8-22 22s9.8 22 22 22h100v100c0 12.2 9.8 22 22 22s22-9.8 22-22V278h100c12.2 0 22-9.8 22-22s-9.8-22-22-22z"
              ></path>
            </svg>{" "}
            New
          </span>
        </div>

        <div className={styles.below_head1}>
          <div className={styles.below_head1_box1}>
            <small>Total Receivables ₹0.00</small>
            <svg
              width="100%"
              height="20"
              viewBox="0 0 977 20"
              preserveAspectRatio="xMinYMin meet"
            >
              <g className="bar-container" transform="translate(0,4)">
                <rect
                  className="ph-rect"
                  width="977"
                  height="12"
                  fill="#F4F4F4"
                ></rect>
                <g className="rects-container" transform="translate(0, 0)">
                  <rect
                    height="12"
                    width="0"
                    className="cursor-pointer"
                    x="0"
                    fill="rgb(117, 204, 204);"
                  ></rect>
                  <rect
                    height="12"
                    width="0"
                    className="cursor-pointer"
                    x="0"
                    fill="rgb(255, 182, 51);"
                  ></rect>
                  <rect
                    height="12"
                    width="0"
                    className="cursor-pointer"
                    x="0"
                    fill="rgb(244, 153, 37);"
                  ></rect>
                  <rect
                    height="12"
                    width="0"
                    className="cursor-pointer"
                    x="0"
                    fill="rgb(224, 106, 23);"
                  ></rect>
                  <rect
                    height="12"
                    width="0"
                    className="cursor-pointer"
                    x="0"
                    fill="rgb(197, 64, 10);"
                  ></rect>
                </g>
              </g>
            </svg>
          </div>
          <div className={styles.below_head1_box2}>
            <div className={styles.current}>
              {/* <small></small> */}
              <h4 style={{marginTop:"10px"}}>₹0.00</h4>
            </div>
            <div className={styles.due}>
              <div className={styles.overdue}>
                {/* <small className={styles.overdue1}></small> */}
                <h4 style={{marginTop:"10px"}}>₹0.00</h4>
                {/* <span>1-15Days</span> */}
              </div>
              <div className={styles.overdue1}>
                <h4>₹0.00</h4>
                {/* <small>16-30Days</small> */}
              </div>
              <div className={styles.overdue2}>
                <h4>₹0.00</h4>
                {/* <small>30-45Days</small> */}
              </div>
              <div className={styles.overdue3}>
                <h4>₹0.00</h4>
                {/* <small>Above 45Days</small> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sales_box}>
        <h4>
          Sales and Expenses{" "}
          <div className={styles.tooltip}>
            <svg
              className={styles.hint}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              className="icon icon-xs text-muted cursor-pointer"
            >
              <path d="M317.1 147.5c-15.1-13.8-35.5-20.8-60.5-20.8-23.7 0-43.1 6.5-57.7 19.4-14.6 12.9-23.5 31.5-26.4 55.5l-.6 4.9 40.4 4.8.7-4.6c2.5-15.8 7.7-27.5 15.4-34.7 7.7-7.2 17.1-10.7 28.7-10.7 12 0 21.9 3.9 30.1 11.9 8.2 8 12.2 16.9 12.2 27.3 0 5.6-1.3 10.7-4 15.4-2.8 4.9-9.3 11.9-19.3 20.7-10.7 9.4-17.9 16.5-22.1 21.5-5.8 7-10 14-12.6 20.8-3.5 9.1-5.3 19.9-5.3 32.3 0 2.1.1 5.1.2 9l.1 4.7h38.4l.1-4.8c.3-14.3 1.4-21.4 2.3-24.7 1.3-4.7 3.2-8.8 5.9-12.5 2.8-3.8 9-10 18.5-18.4 15.1-13.4 25.1-24.6 30.4-34.2 5.4-9.7 8.1-20.4 8.1-31.9 0-19.9-7.7-37-23-50.9zM256.3 385.3c12.1 0 22-9.8 22-22 0-12.1-9.8-22-22-22-12.1 0-22 9.8-22 22s9.8 22 22 22z"></path>
              <path d="M437.4 74.6C388.9 26.1 324.5-.5 256-.5S123.1 26.2 74.6 74.6C26.1 123.1-.5 187.5-.5 256s26.7 132.9 75.1 181.4c48.5 48.5 112.9 75.1 181.4 75.1s132.9-26.7 181.4-75.1c48.5-48.5 75.1-112.9 75.1-181.4s-26.6-132.9-75.1-181.4zm-22.6 340.2c-42.4 42.4-98.8 65.8-158.8 65.8s-116.4-23.4-158.8-65.8C54.8 372.4 31.5 316 31.5 256S54.8 139.6 97.2 97.2C139.6 54.8 196 31.5 256 31.5s116.4 23.4 158.8 65.8c42.4 42.4 65.8 98.8 65.8 158.8s-23.4 116.3-65.8 158.7z"></path>
            </svg>
            <span className={styles.span_hover}>
              Display total sales,receipts and expenses of that current year.
            </span>
          </div>
        </h4>
        <div className={styles.dropdown}>
          <a className={styles.dropdown_a}>
            <h4>
              This Fiscal Year{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="8px"
                height="8px"
                className="align-middle "
              >
                <path d="M481.6 74.4H30.4c-9.6 0-15.3 10.6-10 18.6l223.3 339.2c4.7 7.2 15.2 7.2 20 .1 39.5-58.8 184.2-274.2 227.8-339.2 5.4-7.9-.3-18.7-9.9-18.7z"></path>
              </svg>
            </h4>
          </a>
          <div className={styles.dropdown_content}>
            <a href="#">This Fiscal Year</a>
            <a href="#">Previous Fiscal Year</a>
            <a href="#">Last 12 Months</a>
          </div>
        </div>
      </div>
      <div className={styles.sales_box1}>
        <svg
          width="70%"
          height="250"
          viewBox="0 0 725 250"
          preserveAspectRatio="xMidYMid meet"
        >
          <g className="bar-container" transform="translate(40,20)">
            <g
              className="y-axis"
              fill="none"
              fontSize="10"
              fontFamily="sans-serif"
              textAnchor="end"
            >
              <path
                className="domain"
                stroke="#e4e4e4"
                opacity="1"
                d="M0.5,190.5V0.5"
              ></path>
              <g
                className="tick"
                opacity="0.3"
                transform="translate(0,190.5)"
                textAnchor="end"
              >
                <line stroke="#e4e4e4" opacity="0.2" x2="665"></line>
                <text fill="currentColor" x="-10" dy="0.32em">
                  0
                </text>
              </g>
              <g
                className="tick"
                opacity="0.2"
                transform="translate(0,152.5)"
                textAnchor="end"
              >
                <line stroke="currentColor" x2="665"></line>
                <text fill="currentColor" x="-10" dy="0.32em">
                  1 K
                </text>
              </g>
              <g
                className="tick"
                opacity="0.2"
                transform="translate(0,114.5)"
                textAnchor="end"
              >
                <line stroke="currentColor" x2="665"></line>
                <text fill="currentColor" x="-10" dy="0.32em">
                  2 K
                </text>
              </g>
              <g
                className="tick"
                opacity="0.2"
                transform="translate(0,76.5)"
                textAnchor="end"
              >
                <line stroke="currentColor" x2="665"></line>
                <text fill="currentColor" x="-10" dy="0.32em">
                  3 K
                </text>
              </g>
              <g
                className="tick"
                opacity="0.2"
                transform="translate(0,38.49999999999999)"
                textAnchor="end"
              >
                <line stroke="currentColor" x2="665"></line>
                <text fill="currentColor" x="-10" dy="0.32em">
                  4 K
                </text>
              </g>
              <g
                className="tick"
                opacity="0.2"
                transform="translate(0,0.5)"
                textAnchor="end"
              >
                <line stroke="currentColor" x2="665"></line>
                <text fill="currentColor" x="-10" dy="0.32em">
                  5 K
                </text>
              </g>
              <text
                className="axislbl"
                transform="rotate(-90)"
                textAnchor="middle"
                y="-20"
                x="-95"
              ></text>
            </g>
            <g
              className="x-axis"
              transform="translate(0,190)"
              fill="none"
              fontSize="10"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              <path
                className="domain"
                stroke="#e4e4e4"
                opacity="1"
                d="M0.5,1V0.5H665.5V1"
              ></path>
              <g className="tick" opacity="0.5" transform="translate(41.5,0)">
                <line stroke="currentColor" y2="1"></line>
                <text fill="currentColor" y="11" dy="0.71em">
                  <tspan>Apr</tspan>
                  <tspan x="0" dy="11">
                    2021
                  </tspan>
                </text>
              </g>
              <g className="tick" opacity="0.5" transform="translate(94.5,0)">
                <line stroke="currentColor" y2="1"></line>
                <text fill="currentColor" y="11" dy="0.71em">
                  <tspan>May</tspan>
                  <tspan x="0" dy="11">
                    2021
                  </tspan>
                </text>
              </g>
              <g className="tick" opacity="0.5" transform="translate(147.5,0)">
                <line stroke="currentColor" y2="1"></line>
                <text fill="currentColor" y="11" dy="0.71em">
                  <tspan>Jun</tspan>
                  <tspan x="0" dy="11">
                    2021
                  </tspan>
                </text>
              </g>
              <g className="tick" opacity="0.5" transform="translate(200.5,0)">
                <line stroke="currentColor" y2="1"></line>
                <text fill="currentColor" y="11" dy="0.71em">
                  <tspan>Jul</tspan>
                  <tspan x="0" dy="11">
                    2021
                  </tspan>
                </text>
              </g>
              <g className="tick" opacity="0.5" transform="translate(253.5,0)">
                <line stroke="currentColor" y2="1"></line>
                <text fill="currentColor" y="11" dy="0.71em">
                  <tspan>Aug</tspan>
                  <tspan x="0" dy="11">
                    2021
                  </tspan>
                </text>
              </g>
              <g className="tick" opacity="0.5" transform="translate(306.5,0)">
                <line stroke="currentColor" y2="1"></line>
                <text fill="currentColor" y="11" dy="0.71em">
                  <tspan>Sep</tspan>
                  <tspan x="0" dy="11">
                    2021
                  </tspan>
                </text>
              </g>
              <g className="tick" opacity="0.5" transform="translate(359.5,0)">
                <line stroke="currentColor" y2="1"></line>
                <text fill="currentColor" y="11" dy="0.71em">
                  <tspan>Oct</tspan>
                  <tspan x="0" dy="11">
                    2021
                  </tspan>
                </text>
              </g>
              <g className="tick" opacity="0.5" transform="translate(412.5,0)">
                <line stroke="currentColor" y2="1"></line>
                <text fill="currentColor" y="11" dy="0.71em">
                  <tspan>Nov</tspan>
                  <tspan x="0" dy="11">
                    2021
                  </tspan>
                </text>
              </g>
              <g className="tick" opacity="0.5" transform="translate(465.5,0)">
                <line stroke="currentColor" y2="1"></line>
                <text fill="currentColor" y="11" dy="0.71em">
                  <tspan>Dec</tspan>
                  <tspan x="0" dy="11">
                    2021
                  </tspan>
                </text>
              </g>
              <g className="tick" opacity="0.5" transform="translate(518.5,0)">
                <line stroke="currentColor" y2="1"></line>
                <text fill="currentColor" y="11" dy="0.71em">
                  <tspan>Jan</tspan>
                  <tspan x="0" dy="11">
                    2022
                  </tspan>
                </text>
              </g>
              <g className="tick" opacity="0.5" transform="translate(571.5,0)">
                <line stroke="currentColor" y2="1"></line>
                <text fill="currentColor" y="11" dy="0.71em">
                  <tspan>Feb</tspan>
                  <tspan x="0" dy="11">
                    2022
                  </tspan>
                </text>
              </g>
              <g className="tick" opacity="0.5" transform="translate(624.5,0)">
                <line stroke="currentColor" y2="1"></line>
                <text fill="currentColor" y="11" dy="0.71em">
                  <tspan>Mar</tspan>
                  <tspan x="0" dy="11">
                    2022
                  </tspan>
                </text>
              </g>
            </g>
            <g className="empty-msg" transform="translate(332.5,95)">
              <text
                textAnchor="middle"
                fill=" grey; fill-opacity: 1; fontSize: 14px;"
              ></text>
            </g>
            <g className="bar-groups" transform="translate(28,0)">
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill="#eee"
                x="0"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" #eee"
                x="9"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill="#eee"
                x="18"
                width="8"
              ></rect>
            </g>
            <g className="bar-groups" transform="translate(81,0)">
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill="#eee"
                x="0"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill="#eee"
                x="9"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(237, 196, 86);"
                x="18"
                width="8"
              ></rect>
            </g>
            <g className="bar-groups" transform="translate(134,0)">
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(123, 190, 234);"
                x="0"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(169, 212, 125);"
                x="9"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(237, 196, 86);"
                x="18"
                width="8"
              ></rect>
            </g>
            <g className="bar-groups" transform="translate(187,0)">
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(123, 190, 234);"
                x="0"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(169, 212, 125);"
                x="9"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(237, 196, 86);"
                x="18"
                width="8"
              ></rect>
            </g>
            <g className="bar-groups" transform="translate(240,0)">
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(123, 190, 234);"
                x="0"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill="  rgb(169, 212, 125);"
                x="9"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(237, 196, 86);"
                x="18"
                width="8"
              ></rect>
            </g>
            <g className="bar-groups" transform="translate(293,0)">
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill="  rgb(123, 190, 234);"
                x="0"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill="  rgb(169, 212, 125);"
                x="9"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(237, 196, 86);"
                x="18"
                width="8"
              ></rect>
            </g>
            <g className="bar-groups" transform="translate(346,0)">
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(123, 190, 234);"
                x="0"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(169, 212, 125);"
                x="9"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(237, 196, 86);"
                x="18"
                width="8"
              ></rect>
            </g>
            <g className="bar-groups" transform="translate(399,0)">
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(123, 190, 234);"
                x="0"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(169, 212, 125);"
                x="9"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill="  rgb(237, 196, 86);"
                x="18"
                width="8"
              ></rect>
            </g>
            <g className="bar-groups" transform="translate(452,0)">
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(123, 190, 234);"
                x="0"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill="  rgb(169, 212, 125);"
                x="9"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill="  rgb(237, 196, 86);"
                x="18"
                width="8"
              ></rect>
            </g>
            <g className="bar-groups" transform="translate(505,0)">
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill="  rgb(123, 190, 234);"
                x="0"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(169, 212, 125);"
                x="9"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(237, 196, 86);"
                x="18"
                width="8"
              ></rect>
            </g>
            <g className="bar-groups" transform="translate(558,0)">
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill=" rgb(123, 190, 234);"
                x="0"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill="rgb(169, 212, 125);"
                x="9"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill="rgb(237, 196, 86);"
                x="18"
                width="8"
              ></rect>
            </g>
            <g className="bar-groups" transform="translate(611,0)">
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill="rgb(123, 190, 234);"
                x="0"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill="  rgb(169, 212, 125);"
                x="9"
                width="8"
              ></rect>
              <rect
                data-value=""
                className="fade-hover cursor-pointer"
                height="0"
                y="190"
                fill="  rgb(237, 196, 86);"
                x="18"
                width="8"
              ></rect>
            </g>
          </g>
        </svg>
        <div>
          <small className={styles.small1}>Total Sales</small>{" "}
          <span>₹0.00</span>
          <small className={styles.small2}>Total Receipts</small>{" "}
          <span>₹0.00</span>{" "}
          <small className={styles.small3}>Total Expenses</small>
          <span>₹0.00</span>
        </div>
      </div>{" "}
      <small className={styles.muted}>
        * Sales value displayed is inclusive of tax and inclusive of credits.
      </small>
      <div className={styles.tablebox}>
        <div className={styles.tablebox1}>
          <div className={styles.tablebox1_header}>
            Projects&nbsp;
            <div className={styles.tooltip}>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                className="icon icon-xs text-muted cursor-pointer"
              >
                <path d="M317.1 147.5c-15.1-13.8-35.5-20.8-60.5-20.8-23.7 0-43.1 6.5-57.7 19.4-14.6 12.9-23.5 31.5-26.4 55.5l-.6 4.9 40.4 4.8.7-4.6c2.5-15.8 7.7-27.5 15.4-34.7 7.7-7.2 17.1-10.7 28.7-10.7 12 0 21.9 3.9 30.1 11.9 8.2 8 12.2 16.9 12.2 27.3 0 5.6-1.3 10.7-4 15.4-2.8 4.9-9.3 11.9-19.3 20.7-10.7 9.4-17.9 16.5-22.1 21.5-5.8 7-10 14-12.6 20.8-3.5 9.1-5.3 19.9-5.3 32.3 0 2.1.1 5.1.2 9l.1 4.7h38.4l.1-4.8c.3-14.3 1.4-21.4 2.3-24.7 1.3-4.7 3.2-8.8 5.9-12.5 2.8-3.8 9-10 18.5-18.4 15.1-13.4 25.1-24.6 30.4-34.2 5.4-9.7 8.1-20.4 8.1-31.9 0-19.9-7.7-37-23-50.9zM256.3 385.3c12.1 0 22-9.8 22-22 0-12.1-9.8-22-22-22-12.1 0-22 9.8-22 22s9.8 22 22 22z"></path>
                <path d="M437.4 74.6C388.9 26.1 324.5-.5 256-.5S123.1 26.2 74.6 74.6C26.1 123.1-.5 187.5-.5 256s26.7 132.9 75.1 181.4c48.5 48.5 112.9 75.1 181.4 75.1s132.9-26.7 181.4-75.1c48.5-48.5 75.1-112.9 75.1-181.4s-26.6-132.9-75.1-181.4zm-22.6 340.2c-42.4 42.4-98.8 65.8-158.8 65.8s-116.4-23.4-158.8-65.8C54.8 372.4 31.5 316 31.5 256S54.8 139.6 97.2 97.2C139.6 54.8 196 31.5 256 31.5s116.4 23.4 158.8 65.8c42.4 42.4 65.8 98.8 65.8 158.8s-23.4 116.3-65.8 158.7z"></path>
              </svg>
              <span className={styles.span_hover}>
                Projects that are on your watchlist are displayed here.
              </span>
            </div>
            <div className={styles.div_1}>
              <span>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                  className="icon icon-xxlg align-text-bottom"
                >
                  <path d="M256.3.4C115 .4.5 114.9.5 256.2S115 512 256.3 512s255.8-114.5 255.8-255.8S397.6.4 256.3.4zm158.3 414.1c-20.6 20.6-44.5 36.7-71.1 48-27.6 11.7-56.8 17.6-87.1 17.6-30.3 0-59.5-5.9-87.1-17.6-26.7-11.3-50.6-27.4-71.1-48-20.6-20.6-36.7-44.5-48-71.1-11.7-27.6-17.6-56.9-17.6-87.1 0-30.3 5.9-59.5 17.6-87.1 11.3-26.7 27.4-50.6 48-71.1 20.6-20.6 44.5-36.7 71.1-48 27.6-11.7 56.8-17.6 87.1-17.6 30.3 0 59.5 5.9 87.1 17.6 26.7 11.3 50.6 27.4 71.1 48 20.6 20.6 36.7 44.5 48 71.1 11.7 27.6 17.6 56.9 17.6 87.1s-5.9 59.5-17.6 87.1c-11.4 26.6-27.4 50.5-48 71.1z"></path>
                  <path d="M383 274.5H271V111c0-8.8-7.2-16-16-16s-16 7.2-16 16v179.5c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></path>
                </svg>
                &nbsp;00:00
              </span>
              <br />
              <p>UNBILLED HOURS</p>
            </div>
            <div className={styles.div_2}>
              <span>
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-xxlg align-text-bottom"
                >
                  <path d="M309.2 265c-10.5-9.2-26.4-17.3-48-24.3-14.2-4.5-24-9.3-29.4-14.2-5.4-5-8.2-11.5-8.2-19.4 0-8.5 2.6-15.3 7.8-20.3s13-7.6 23.4-7.6c10 0 17.8 3.4 23.5 10.1 3.3 3.9 5.7 8.5 7.2 14 2.2 7.9 9.3 13.5 17.6 13.5 12.3 0 21-12 17.3-23.8-2.4-7.7-6.2-14.4-11.3-20.3-9.8-11.1-19.8-17.8-37.1-20.2V128c0-8.8-6.9-16-15.7-16s-16.3 7.2-16.3 16v24.2c-17.6 1.8-27.6 7.7-37.9 17.5s-15.4 22.3-15.4 37.6c0 16.1 5.4 28.8 16.1 38.1s26.8 17.3 48.3 23.9c13.3 4.2 22.7 8.9 28.3 14.1 5.6 5.1 8.5 11.7 8.5 19.5 0 8.6-3.1 15.4-9.3 20.3-6.2 5-15 7.5-26.2 7.5-10.6 0-19.4-2.8-26.4-8.4-4.4-3.5-7.3-8.3-9.1-14.6-2.1-8-9.2-13.5-17.3-13.6-12.2-.1-21.1 11.8-17.6 23.6 2.8 9 7.4 16.5 14 22.2 11.7 10.1 24.9 16.1 43 17.8V384c0 8.8 8.2 16 17 16s16-7.2 16-16v-26.3c18.5-1.7 26.4-7.4 37-16.8 10.7-9.4 16-22.1 16-38 0-16.1-5.2-28.7-15.8-37.9z"></path>
                  <path d="M256 32c30.3 0 59.6 5.9 87.2 17.6 26.7 11.3 50.6 27.4 71.2 48s36.7 44.5 48 71.2c11.7 27.6 17.6 56.9 17.6 87.2s-5.9 59.6-17.6 87.2c-11.3 26.7-27.4 50.6-48 71.2s-44.5 36.7-71.2 48C315.6 474.1 286.3 480 256 480s-59.6-5.9-87.2-17.6c-26.7-11.3-50.6-27.4-71.2-48s-36.7-44.5-48-71.2C37.9 315.6 32 286.3 32 256s5.9-59.6 17.6-87.2c11.3-26.7 27.4-50.6 48-71.2s44.5-36.7 71.2-48C196.4 37.9 225.7 32 256 32m0-32C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0z"></path>
                </svg>
                &nbsp;₹0.00
              </span>
              <br />
              <p>UNBILLED EXPENSES</p>
            </div>
          </div>
          <div className={styles.centre}>Add Project(s) to this washlist</div>
        </div>
        <div className={styles.tablebox2}>
          <div className={styles.tablebox2_header}>
            <div>
              Your Top Expenses&nbsp;
              <div className={styles.tooltip}>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                  className="icon icon-xs text-muted cursor-pointer"
                >
                  <path d="M317.1 147.5c-15.1-13.8-35.5-20.8-60.5-20.8-23.7 0-43.1 6.5-57.7 19.4-14.6 12.9-23.5 31.5-26.4 55.5l-.6 4.9 40.4 4.8.7-4.6c2.5-15.8 7.7-27.5 15.4-34.7 7.7-7.2 17.1-10.7 28.7-10.7 12 0 21.9 3.9 30.1 11.9 8.2 8 12.2 16.9 12.2 27.3 0 5.6-1.3 10.7-4 15.4-2.8 4.9-9.3 11.9-19.3 20.7-10.7 9.4-17.9 16.5-22.1 21.5-5.8 7-10 14-12.6 20.8-3.5 9.1-5.3 19.9-5.3 32.3 0 2.1.1 5.1.2 9l.1 4.7h38.4l.1-4.8c.3-14.3 1.4-21.4 2.3-24.7 1.3-4.7 3.2-8.8 5.9-12.5 2.8-3.8 9-10 18.5-18.4 15.1-13.4 25.1-24.6 30.4-34.2 5.4-9.7 8.1-20.4 8.1-31.9 0-19.9-7.7-37-23-50.9zM256.3 385.3c12.1 0 22-9.8 22-22 0-12.1-9.8-22-22-22-12.1 0-22 9.8-22 22s9.8 22 22 22z"></path>
                  <path d="M437.4 74.6C388.9 26.1 324.5-.5 256-.5S123.1 26.2 74.6 74.6C26.1 123.1-.5 187.5-.5 256s26.7 132.9 75.1 181.4c48.5 48.5 112.9 75.1 181.4 75.1s132.9-26.7 181.4-75.1c48.5-48.5 75.1-112.9 75.1-181.4s-26.6-132.9-75.1-181.4zm-22.6 340.2c-42.4 42.4-98.8 65.8-158.8 65.8s-116.4-23.4-158.8-65.8C54.8 372.4 31.5 316 31.5 256S54.8 139.6 97.2 97.2C139.6 54.8 196 31.5 256 31.5s116.4 23.4 158.8 65.8c42.4 42.4 65.8 98.8 65.8 158.8s-23.4 116.3-65.8 158.7z"></path>
                </svg>
                <span className={styles.span_hover}>
                  Top expenses across various categories for a choosen period.
                </span>
              </div>
            </div>
            <div className={styles.dropdown}>
              <a className={styles.dropdown_a}>
                <h4 className={styles.exp}>
                  This Fiscal Year{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="8px"
                    height="8px"
                    className="align-middle "
                  >
                    <path d="M481.6 74.4H30.4c-9.6 0-15.3 10.6-10 18.6l223.3 339.2c4.7 7.2 15.2 7.2 20 .1 39.5-58.8 184.2-274.2 227.8-339.2 5.4-7.9-.3-18.7-9.9-18.7z"></path>
                  </svg>
                </h4>
              </a>
              <div className={styles.dropdown_content}>
                <a href="#">This Fiscal Year</a>
                <a href="#">This Quarter</a>
                <a href="#">This Month</a>
                <a href="#">Previous Fiscal Year</a>
                <a href="#">Previous Quarter</a>
                <a href="#">Previous Month</a>
                <a href="#">Last 6 Months</a>
                <a href="#">Last 12 Months</a>
              </div>
            </div>
          </div>
          <div className={styles.fiscal}>
            No Expenses recorded for this fiscal year.
          </div>
        </div>
      </div>{" "}
      <div className={styles.div_1_down}>Show All Projects</div>
      <div className={styles.lastbox}>
        <div className={styles.lastbox_head}>
          <span>Sales, Receipts, and Dues</span>
        </div>
        <div className={styles.inside_lastbox}>
          <div className={styles.inside_content}>
            <table className={`${styles.table} ${styles.zi_table}`}>
              {" "}
              <thead>
                <tr>
                  <th colSpan="2" className={styles.text_right}>
                    SALES
                  </th>{" "}
                  <th className={styles.text_right}>RECEIPTS</th>{" "}
                  <th className={styles.text_right}>DUE</th>
                </tr>
              </thead>{" "}
              <tbody>
                {" "}
                <tr>
                  <td>Today</td>{" "}
                  <td className={styles.text_right}>
                    <a href="#">₹0.00</a>
                  </td>{" "}
                  <td className={styles.text_right}>
                    <a href="#">₹0.00</a>
                  </td>{" "}
                  <td className={styles.text_right}>
                    <a href="#">₹0.00</a>
                  </td>
                </tr>
                <tr>
                  <td>This Week</td>{" "}
                  <td className={styles.text_right}>
                    <a href="#">₹0.00</a>
                  </td>{" "}
                  <td className={styles.text_right}>
                    <a
                      href="#"
                      data-ember-action=""
                      data-ember-action-599="599"
                    >
                      ₹0.00
                    </a>
                  </td>{" "}
                  <td className={styles.text_right}>
                    <a
                      href="#"
                      data-ember-action=""
                      data-ember-action-600="600"
                    >
                      ₹0.00
                    </a>
                  </td>
                </tr>
                <tr id="ember602" className="ember-view">
                  <td>This Month</td>{" "}
                  <td className={styles.text_right}>
                    <a
                      href="#"
                      data-ember-action=""
                      data-ember-action-603="603"
                    >
                      ₹0.00
                    </a>
                  </td>{" "}
                  <td className={styles.text_right}>
                    <a
                      href="#"
                      data-ember-action=""
                      data-ember-action-604="604"
                    >
                      ₹0.00
                    </a>
                  </td>{" "}
                  <td className={styles.text_right}>
                    <a
                      href="#"
                      data-ember-action=""
                      data-ember-action-605="605"
                    >
                      ₹0.00
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>This Quarter</td>{" "}
                  <td className={styles.text_right}>
                    <a href="#">₹0.00</a>
                  </td>{" "}
                  <td className={styles.text_right}>
                    <a href="#">₹0.00</a>
                  </td>{" "}
                  <td className={styles.text_right}>
                    <a href="#">₹0.00</a>
                  </td>
                </tr>
                <tr>
                  <td>This Year</td>{" "}
                  <td className={styles.text_right}>
                    <a href="#">₹0.00</a>
                  </td>{" "}
                  <td className={styles.text_right}>
                    <a href="#">₹0.00</a>
                  </td>{" "}
                  <td className={styles.text_right}>
                    <a href="#">₹0.00</a>
                  </td>
                </tr>{" "}
              </tbody>{" "}
            </table>
          </div>
        </div>
      </div>
      <div className={styles.dashfooter}>
        <div className={styles.left_footer}>
          <h3>Take your invoicing with you, wherever you go</h3>
          <p>
            From sharing invoices to tracking reports, keep up with your
            invoicing needs even when on the move, with Zoho Invoice's mobile
            apps.
          </p>
          <img
            src="https://d12h6dzwzn4m10.cloudfront.net/zbooks/assets/images/invoice_mobile_footer-62af1b73052eb12ac9ab3e3ce768cb37.png"
            alt=""
          />
          <img
            className={styles.qrcode}
            src="https://d12h6dzwzn4m10.cloudfront.net/zbooks/assets/images/invoice_mobile_qr-88f34d61b9f5b097b3ddaa9efb32226b.png"
            alt=""
          />
          <span>
            Learn More&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Layer_1"
              x="0"
              y="0"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              className="icon icon-xs pt-1"
            >
              <path d="M485.8 230.6L326.7 71.5c-6.9-6.9-16.1-10.7-25.8-10.7s-18.9 3.8-25.8 10.7c-6.9 6.9-10.7 16.1-10.7 25.8s3.8 18.9 10.7 25.8l96.8 96.8H46c-20.1 0-36.5 16.4-36.5 36.5s16.4 36.5 36.5 36.5h325.8L275 389.6c-6.9 6.9-10.7 16.1-10.7 25.8s3.8 18.9 10.7 25.8c6.9 6.9 16.1 10.7 25.8 10.7 9.8 0 19-3.8 25.8-10.7l159.1-159c6.9-6.9 10.7-16.1 10.7-25.8s-3.7-19-10.6-25.8z"></path>
            </svg>
          </span>
        </div>
        <div className={styles.right_footer}>
          <div className={styles.inside_r_f}>
            <h6>OTHER ZOHO APPS</h6>
            <h5>HELP AND SUPPORT</h5>
            <h6>OTHER LINKS</h6>
            <br />
            <div>
              <ul>
                <li>Accounting Software</li>
                <li>Expense Reporting</li>
                <li>Subscription Billing</li>
                <li>Inventory Management</li>
                <li>CRM & Other Apps</li>
              </ul>
              <ul>
                <li>contact Support</li>
                <li>Knowledge Base</li>
                <li>Help Documentation</li>
                <li>Webinar</li>
              </ul>
              <ul>
                <li>Mobile Apps</li>
                <li>Add-ons</li>
                <li>Release Notes</li>
              </ul>
            </div>
            <span>
              &copy; 2021, Zoho Corporation Pvt. Ltd. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
      <div className={styles.fixed}>
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="icon"
        >
          <path d="M480.1 125.6H31.8C14.3 125.6.1 139.8.1 157.3v320.6c0 17.5 14.2 31.7 31.7 31.7h448.6c17.5 0 31.7-14.2 31.7-31.7V157.3c0-17.5-14.2-31.7-31.7-31.7h-.3zm-16 352h-416c-8.8 0-16-7.2-16-16v-288c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16z"></path>
          <path d="M256.1 339.2c-7.4 0-14.5-2.2-20.5-6.3L67.2 220.7c-5.1-3.3-8.1-8.9-8.1-15.1v-.3c0-10 8.2-18.2 18.2-18.2 3.5 0 7 1.1 10 3l153.9 102.5c4.4 3 9.6 4.6 15 4.6s10.5-1.6 15-4.5L425 190.1c3-2 6.5-3.1 10-3.1 10.1 0 18.2 8.2 18.2 18.2v.3c0 6.1-3.1 11.9-8.2 15.2L276.7 333c-6.1 4-13.2 6.2-20.6 6.2z"></path>
        </svg>
        <span>&nbsp;Contact Support</span>
      </div>
    </div>
  );
}

export default Dashboard_2;
