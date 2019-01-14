import React, { Component } from 'react';

/* 옵션 쉬프트 에프 자동 포맷팅 */
class NameInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
        }
        // bind를 쓰는이유:
         // this.onChangeNameInput 이라고만 쓸 경우에는
         // 기본적으로 window 객체랑 바인딩이 되어
         // this.setState 나 this.props, this.state 같이 Component에 있는 객체들에
         // 접근이 불가능하다. 따라서, bind로 NameInput 컴퍼넌트와 연결해줄 필요가 있다.
         this.onChangeNameInput = this.onChangeNameInput.bind(this);
    }
    render() {
        return (
            <div>
                <input type="text" 
                onChange={this.onChangeNameInput} />
                <span>{this.state.name}</span>
            </div>
        )
    }
    onChangeNameInput(e) {
        const value = e.target.value;
        this.setState({name:value});
    }
}
export default NameInput;