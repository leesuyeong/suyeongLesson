import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
class App extends Component {
  render() {
    return (
      <div id="app">
        <BrowserRouter>
        {/*
        기본적으로 react-router Route의 Path를 검사하여 
        현재 경로와 같은 모든 Route 컴퍼넌트를 렌더링 합니다.
        따라서, 어떤 경우에는 한번에 2~3개의 페이지가 동시에 렌더링 되는 상황도 생기는데
        Switch를 사용하면 조건에 맞는 Route를 만났을때 더이상 검사를 하지않고
        그 Route만을 렌더링 하기 때문에 위와같은 문제가 생기지 않습니다.
        */}
        <Switch>
          {/* Router으로 이동 가능한 페이지의 경로를 선언합니다.
          Router는 여러가지 props를 받는데 
          path는 경로,
          component는 해당 경로에서 렌더링 해줄 페이지 컴퍼넌트,
          exact는 경로가 정확히 같은지를 검사합니다.
          */}
          <Route exact path='/' component={HomePage}/>
          <Route path='/about/:name' component={AboutPage}/>
          {/*
          path를 입력할때 :<파라미터이름> 으로 원하는 값을 넘겨줄 수 있습니다.
          이렇게 넘겨받은 값은 해당 페이지 컴퍼넌트에서 this.props.match.params로 접근 가능합니다.
          */}
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
