import React, {Component} from 'react';
import MainLayout from '../components/MainLayout';
import LikeButton from '../components/LikeButton';
import NameInput from '../components/NameInput';
import YoutubeList from '../components/YoutubeLink';
import Box from '../components/Box';
import Card from '../components/Card';

const data = [
    { image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png", text: "설명1" },
    { image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png", text: "설명2" },
    { image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png", text: "설명3" }
  
  ];

class HomePage extends Component{
    render(){
        return(
            <MainLayout>
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
          </MainLayout>  
        );
    }
}
export default HomePage;