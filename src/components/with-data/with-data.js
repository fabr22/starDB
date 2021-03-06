import React, { Component} from 'react';
import Spinner from '../spinner';

const withData = (View) => {

    return class extends Component {
        
    state = {
        data : null
    };

    componentDidUpdate(prevProps) {
        if (prevProps.getData !== this.props.getData) {
            this.onUpdate();
        }
    }


    componentDidMount() {
        this.onUpdate();
    }

    onUpdate = () => {
        this.props.getData()
        .then((data) => {
            this.setState({
                data
            });
        });
    }


     render() {

        const { data } = this.state;

        if (!data) {
            return <Spinner />
        } 
        return <View {...this.props} data = {data} />
     };
    }

};

export { 
    withData } ;