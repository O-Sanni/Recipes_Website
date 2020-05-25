import React from "react";
import TranslationSearch from "./TranslationSearch";



const initialState=""; //constant value to use within the code

class TranslationComponent extends React.Component{
  constructor(props){
      super(props);
      this.state={
          textTranslate: initialState,
          textInput: false,
          langToTranslate: "en" //initial translation language to translate to is English
      }
      this.handleTextTranslate=this.handleTextTranslate.bind(this);
      this.handleLanguage = this.handleLanguage.bind(this);
      this.submitButton=this.submitButton.bind(this);
  }  

  //will setState for textTranslate
  handleTextTranslate(event){
      event.preventDefault();//prevent the default restart of the page when you enter text to translate
      this.setState({textTranslate: event.target.value}) //setState for the textTranslate
  }

  //will setState for languageToTranslate 
  handleLanguage(event){
      event.preventDefault(); //prevent default behavior after you choose language
      this.setState({langToTranslate: event.target.value})
  }

  //will setState textInput to true in order to make a translation
  submitButton(event){
    event.preventDefault();
    this.setState({textInput: true});
  }

   render(){
        return (
                <div id="main-div-transl-page">
                  <div id="translate-box">
                    <form id="form-transl-page" onSubmit={this.submitButton}>
                      <textarea id="textarea-transl" type="text" value={this.state.textTranslate} onChange={this.handleTextTranslate} placeholder="please enter text"/>
                      <label id="select-lable"> 
                        {/* <label> will hold the list of the availiable languages for translation */}
                        Please choose language:
                        <select id="select-transl" value={this.state.value} onChange={this.handleLanguage}>
                          <option className="options-lang-class" value="en">English</option>
                          <option className="options-lang-class" value="ar">Arabic</option>
                          <option className="options-lang-class" value="be">Belarusian</option>
                          <option className="options-lang-class" value="bn">Bengali</option>
                          <option className="options-lang-class" value="zh">Chinese</option> 
                          <option className="options-lang-class" value="nl">Dutch</option>
                          <option className="options-lang-class" value="fr">French</option>
                          <option className="options-lang-class" value="ka">Georgian</option>
                          <option className="options-lang-class" value="de">German</option>
                          <option className="options-lang-class" value="el">Greek</option>
                          <option className="options-lang-class" value="ht">Haitian (Creole)</option> 
                          <option className="options-lang-class" value="he">Hebrew</option> 
                          <option className="options-lang-class" value="hi">Hindi</option>
                          <option className="options-lang-class" value="hu">Hungarian</option>
                          <option className="options-lang-class" value="it">Italian</option>
                          <option className="options-lang-class" value="ja">Japanese</option>  
                          <option className="options-lang-class" value="kk">Kazakh</option> 
                          <option className="options-lang-class" value="ko">Korean</option>
                          <option className="options-lang-class" value="la">Latin</option>
                          <option className="options-lang-class" value="mn">Mongolian</option>
                          <option className="options-lang-class" value="no">Norwegian</option>
                          <option className="options-lang-class" value="fa">Persian</option>
                          <option className="options-lang-class" value="pl">Polish</option>
                          <option className="options-lang-class" value="pt">Portuguese</option>
                          <option className="options-lang-class" value="ru">Russian</option>
                          <option className="options-lang-class" value="es">Spanish</option>
                          <option className="options-lang-class" value="tg">Tajik</option>
                          <option className="options-lang-class" value="tr">Turkish</option>
                          <option className="options-lang-class" value="uz">Uzbek</option>
                          <option className="options-lang-class" value="uk">Ukrainian</option>
                          <option className="options-lang-class" value="vi">Vietnamese</option>
                        </select>
                      </label>
                      <div id="buttons-translate">
                        <input id="input-submit-transl" type="submit" value="Submit" />
                        {/* clear button will setState to initial values */}
                        <button id="clear-button-transl" type="button" onClick={()=>{this.setState({textTranslate: initialState, textInput: false})}}>Clear</button>
                      </div>
                    </form>
                  <div id="translation-output-div">
                    {/* use ternary operator, if the textInput is true , if the user entered text and press submitt call <Translation /> 
                    and send  language and text to Translations*/}
                    {this.state.textInput ? (<TranslationSearch text={this.state.textTranslate} language={this.state.langToTranslate} />) : ""}
                  </div>
                  <div id="div-pow-by"><a id="powered-by-a" href="http://translate.yandex.com">Powered by Yandex.Translate</a></div>
                  </div>
                </div>)
   }  
}

export default TranslationComponent;