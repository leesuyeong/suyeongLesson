import React, { Component } from 'react'; // 리액트 컴퍼넌트를 생성하기 위해서는 React 패키지를 import 해야한다.

class Card extends Component {
  // 컴퍼넌트의 뷰딴을 렌더링하는 기본 메서드 render
  // return 구문에 jsx(html) 을 작성해서 렌더링한다.
  render() {
    return (
      <div className="card"> {/* class 의 경우에는 자바스크립트 class 문법과 겹치므로 className으로 사용한다 */}
        {/* this.props 로 부모컴퍼넌트로부터 전달바은 프로퍼티들에 접근할 수 있다, */}
        <img src={this.props.image} />
        <p>{this.props.text}</p>
      </div>
    );
  }
}

// App.js 에서 import 해서 사용하기 위해서는, Card 컴퍼넌트를 export 해주어야한다.
export default Card;