import React from 'react';

import './YoutubeList.css';
/*
함수형 컴퍼넌트는 클래스대신 함수로 컴퍼넌트를 생성합니다.
props 는 인자로 바로 전달받아 사용할 수 있으며
render 메서드가 따로 필요없이 바로 return 구문으로 뷰를 랜더링 합니다.
*/
const YoutubeList = (props) => {
    return (
        <div className="youtube-list">
            <img className="youtube-list-image" src={props.thumbnail} />
            <div className="youtube-list-detail">
                <h3 className="youtube-list-title">{props.title}</h3>
                <span className="youtube-list-nickname">{props.nickname}</span>
                <span className="youtube-list-count">조회수 {props.count} 회</span>
            </div>
        </div>
    );
}
export default YoutubeList;