import React from "react"
import { Tracks, Handles, Slider } from "react-compound-slider"
import "./calculator.styles.scss"

const calcStyle = {
  position: "relative",
  width: "100%",
  height: 80
}

const progressBar = {
  position: "absolute",
  width: "100%",
  height: 3,
  marginTop: 22,
  borderRadius: 5,
  backgroundColor: "#bfbfbf"
}

const monthlyIngredientsSpending = [10, 100]
const fullTimeEmployees = [1, 10]
const defaultIngredientsValues = [10]
const defaultFullTimeValues = [1]

function Track({ source, target, getTrackProps }) {
  return (
    <div
      style={{
        position: "absolute",
        height: 3,
        zIndex: 1,
        marginTop: "22px",
        backgroundColor: "#071eb3",
        borderRadius: "5px",
        cursor: "pointer",
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`
      }}
      {...getTrackProps()}
    />
  );
}

export function Handle({ handle: { id, percent }, getHandleProps }) {
  return (
    <div>
      <div
        style={{
          left: `${percent}%`,
          position: "absolute",
          marginLeft: -10,
          marginTop: "17px",
          zIndex: 2,
          width: 15,
          height: 15,
          border: 0,
          textAlign: "center",
          cursor: "pointer",
          borderRadius: "50%",
          backgroundColor: "#071eb3",
          color: "#fff"
        }}
        {...getHandleProps(id)}
      ></div>
    </div>
  )
}

class SavingsCalc extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      values: defaultIngredientsValues,
      values2: defaultFullTimeValues,
      update: defaultIngredientsValues,
      update2: defaultIngredientsValues,
      foodCostSavings: defaultIngredientsValues * 0.3,
      anualSavings: defaultFullTimeValues * 1337 + 10.5
    };
  }

  onUpdate = values => {
    this.setState({ values });
    let x = Math.round(values * 0.3);
    let y = Math.round(this.state.values2 * 1337 + this.state.foodCostSavings);
    this.setState({
      foodCostSavings: x,
      anualSavings: y
    });
    console.log(this.state)
  }

  onUpdate2 = values2 => {
    this.setState({ values2 })
    let x = Math.round(values2 * 1337 + this.state.foodCostSavings)
    this.setState({
      anualSavings: x
    })
  }
  render() {
    /*const { state: { values, values1, updates1,values2,updates2 } } = this*/
    return (
      <span className="savingsCalc">
        <div className="savingsCalc__left">
          <div className="savingsCalc__container">
            <div className="calculator-description">
              Monthly <br />
              ingredient spending
            </div>
            <div className="calculator-number">
              <input
                className="calculator-input"
                readOnly
                value={this.state.values}
              />
            </div>
          </div>
          <div className="savingsCalc__slider">
            <Slider
              rootStyle={calcStyle}
              monthlyIngredientsSpending={monthlyIngredientsSpending}
              step={1}
              mode={2}
              onUpdate={this.onUpdate}
              values={this.state.values}
            >
              <div style={progressBar} />
              <Handles>
                {({ handles, getHandleProps }) => (
                  <div className="slider-handles">
                    {handles.map(handle => (
                      <Handle
                        key={handle.id}
                        handle={handle}
                        getHandleProps={getHandleProps}
                      />
                    ))}
                  </div>
                )}
              </Handles>
              <Tracks right={false}>
                {({ tracks, getTrackProps }) => (
                  <div className="slider-tracks">
                    {tracks.map(({ id, source, target }) => (
                      <Track
                        key={id}
                        source={source}
                        target={target}
                        getTrackProps={getTrackProps}
                      />
                    ))}
                  </div>
                )}
              </Tracks>
            </Slider>
          </div>
          <div className="savingsCalc__container">
            <div className="calculator-description">
              Full-time employees that <br />
              process invoices
            </div>
            <div className="calculator-employees">
              <input
                className="calculator-input2"
                readOnly
                value={this.state.values2}
              />
            </div>
          </div>
          <div className="savingsCalc__slider">
            <Slider
              rootStyle={calcStyle}
              domain={fullTimeEmployees}
              step={1}
              mode={2}
              values={this.state.values2}
              onUpdate={this.onUpdate2}
            >
              <div style={progressBar} />
              <Handles>
                {({ handles, getHandleProps }) => (
                  <div className="slider-handles">
                    {handles.map(handle => (
                      <Handle
                        key={handle.id}
                        handle={handle}
                        getHandleProps={getHandleProps}
                      />
                    ))}
                  </div>
                )}
              </Handles>
            </Slider>
          </div>
        </div>
        <span className="savingsCalc__container">
          <div className="savingsCalc__right__block">
            <span className="savingsCalc__resultNumber">
              <span className="calculator-dollar">$</span>
              <span className="calculator-result1">
                {this.state.foodCostSavings}
              </span>
            </span>
            <div className="calculator-description">
              Estimated food cost savings
            </div>
          </div>
          <span className="savingsCalc__right__block">
            <div className="savingsCalc__resultNumber">
              <span className="calculator-dollar">$</span>
              <span className="calculator-result2">
                {this.state.anualSavings}
              </span>
            </div>
            <div className="calculator-text">
              Your estimated annual savings
            </div>
          </span>
        </span>
      </span>
    );
  }
}

export default SavingsCalc
