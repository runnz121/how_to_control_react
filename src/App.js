import React, {Component} from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);

}

class App extends Component {
  state ={
    color:'#000000'
  }

  handleClick = () => {
    this.setState({
      color:getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
        <LifeCycleSample color ={this.state.color}/>
        </ErrorBoundary>
      </div>
    );
  }
}



export default App;

//자바스크립트와 리엑트 비교 
//https://velog.io/@gwak2837/React-Component%EC%99%80-Javascript-%EB%B9%84%EA%B5%90