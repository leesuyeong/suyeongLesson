import React, { Component } from 'react';
import './App.css';

import Card from './components/Card';
import LikeButton from './components/LikeButton';
import NameInput from './components/NameInput';
import YoutubeList from './components/YoutubeLink';
import Box from './components/Box';
import MainLayout from './components/MainLayout';

const data = [
  { image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png", text: "설명1" },
  { image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png", text: "설명2" },
  { image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png", text: "설명3" }

];

class App extends Component {
  render() {
    return (
      <MainLayout>
        <div id="app">
          {/*
       map 은 배열의 요소들을 하나씩가져와서 새로운 배열을 만들어줍니다.
       여기서는 data에서 image, text 값들을 순서대로 가져와, Card 컴퍼넌트
       배열로 만들어 렌더링 해줍니다.
       */}
          {data.map((v, i) => {
            return <Card key={i} image={v.image} text={v.text} />
          })}
          <LikeButton />
          <NameInput />
          <YoutubeList
            thumbnail="https://i.ytimg.com/an_webp/ZWwC-dk83Eo/mqdefault_6s.webp?du=3000&sqp=COj87-EF&rs=AOn4CLBNnq5zvfOJnOD3OBq2KtRYuZp2_A"
            title="유투브제목"
            nickname="이수영"
            count={10}
          />
          <Box>
            {data.map((v, i) => {
              return <Card key={i} image={v.image} text={v.text} />
            })}
          </Box>


        </div>
      </MainLayout>
    );
  }
}

export default App;
