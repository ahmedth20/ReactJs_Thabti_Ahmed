import { Component } from "react";
export default class CounterC extends Component {

constructor(props) {
  super(props);
   this.state = { count: 0, counter: 0 };

}


static getDerivedStateFromProps(props, state) {
  console.log('getDerivedStateFromProps', props, state);
  // eslint-disable-next-line react/prop-types
  if(props.counter !== state.counter) {
    // eslint-disable-next-line react/prop-types
    return { counter: props.counter };
  }
}

componentDidMount() {console.log("CounterC: ComponentDiMount")
  setTimeout(() => {
  this.setState({ loading : false });
  }, 3000);
}


render() {
  console.log("CounterC:render");
  return (
    
    this.state.loading ? <div>
      <p>Count : {this.state.count}</p>
            <p>Count : {this.state.count}</p>

    </div> : <p>Loading...</p>
  );
}

}