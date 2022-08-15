import React from "react";
import axios from "axios";

class Trivia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category:null,
      question: null,
      answer:null,
      revealed:false
    };
  }

  componentDidMount() {
    axios({
      url: "https://laravel-tara.herokuapp.com/api/abouts",
      method: "GET"
    }).then((res) => {
      console.log(res);
      this.setState({
        category: res.data.results[0].category,
        question: res.data.results[0].question,
        correct_answer: res.data.results[0].correct_answer
      });
    });
  }

  handleClick(e){
    e.preventDefault();
    
    this.setState({revealed: !this.state.revealed});
  } 

  render() {
    
    
    const { category } = this.state; 
    const { question } = this.state; 
    const { correct_answer } = this.state;
    
    const style = { visibility: this.state.revealed ? 'visible' : 'hidden' };

    return(
      <div id="question-wrapper">
        <div class="category">{category}</div>
        <h3 class="question">{question}</h3>
        <div class="answer" style={style}>{correct_answer}</div>
        <button value="answer" type="button" onClick={(e) => this.handleClick(e)}>Reveal Answer</button>
      </div>
    )
  } 
}
export default Trivia;