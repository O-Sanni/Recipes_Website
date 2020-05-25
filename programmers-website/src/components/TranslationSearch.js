import React from "react";
import axios from "axios";


class TranslationSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            translation: "",
        }
    }
    //getTranslationInfo will call axios.get to get a translation from the API and setState with the translation
    async getTranslationInfo(){
        const key=process.env.REACT_APP_TRANSLATION_API_KEY;
        try{
            let translated=await axios.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?lang=${this.props.language}&text=${this.props.text}&key=${key}`)
            this.setState({translation: translated.data});
    }
        catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.getTranslationInfo();
    }

    render(){
        return(<div id="main-div-trasl-text">
               <p id="p-trabslation-txt">{this.state.translation.text}</p>
        </div>)
    }
}

export default TranslationSearch;
