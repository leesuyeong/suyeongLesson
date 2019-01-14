import React, {Component} from 'react';
import MainLayout from '../components/MainLayout';

class AboutPage extends Component {
    render(){
        
        return(
            <MainLayout>
                안녕하세요, {this.props.match.params.name} 입니다.
            </MainLayout>
        );
    }
}
export default AboutPage;