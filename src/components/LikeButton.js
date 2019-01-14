import React, { Component } from 'react';

class LikeButton extends Component {
  constructor(props) {
    super(props);

    // 컴퍼넌트이 상태를 관리해줌.
    // this.setState로 변경 가능!
    this.state = {
      like: false,
    }
  }

  render() {
    return (
      <button
        // 버튼 스타일 설정.
        style={{
          fontSize: 18,
          margin: 10,
        }}
        // 버튼에 클릭 이벤트 등록
        onClick={this.onLikeButtonClick.bind(this)}>
        {/* this.state 로 state값에 접근 가능 */}
        {String(this.state.like ? '좋아요' : '싫어요 :(')}
      </button>
    );
  }

  onLikeButtonClick() {
    // this.setState로 state값을 변경하면, render가 호출됨.
    this.setState({ like: !this.state.like });
  }
}

export default LikeButton;