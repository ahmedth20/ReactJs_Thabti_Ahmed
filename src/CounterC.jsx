import { Component } from "react";
<<<<<<< HEAD
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

=======
export default class CounterC extends 
Component{
constructor(props){
    console.log('CounterC constructor');
    super(props);
    this.state = { 
        count: 0 ,
        counter: 0,
        loading: true
    };
}
static getDerivedStateFromProps(props, state){
    console.log('CounterC getDerivedStateFromProps');
    if (props.counter !== state.count){
        return { count: props.counter };
    
    }
    return null;
}
componentDidMount(){
    console.log('CounterC componentDidMount');
    setTimeout(() => {
        this.setState({ loading : false});
    }, 3000);
}
render(){
    console.log('CounterC render');
    return(
        <>
        {this.state.loading ? (<div>Loading...</div>):(
        <div>
        <p>Count : {this.state.count}</p>
        <p>Counter : {this.state.counter}</p>
        </div>    
        )
}
</>
    );
}
>>>>>>> d658a0f (Atelier-State)
}