import React from 'react';
import './StyleApp.css';
import ReactMarkdown from 'react-markdown';

export default class Editor extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            input: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }

    render(){
        return (
            <div>
                <div id="editor">
                    <textarea rows="10" cols="30" value={this.state.input} onChange={this.handleChange}>

                    </textarea>
                </div>

                <Preview input={this.state.input} />
            </div>
            
        )
    }
}

class Preview extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="preview">
                {this.props.input}
            </div>
        )
    }
}
