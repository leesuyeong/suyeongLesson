import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';

class MainLayout extends Component {
    render(){
        return(
            <section>
                <Header/>
                {this.props.children}
                <Footer/>
            </section>
        );
    }
}
export default MainLayout;