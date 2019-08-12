import React from 'react';
import Editor from './Editor'
import './StyleApp.css';
import ReactMarkdown from 'react-markdown';


export default class Previewer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div id="preview">
                {this.props.input}
            </div>
        )
    }
}