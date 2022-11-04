import { Component } from "react";
import Header from "../components/Header";
import Content from "../components/Content";
// import fb_star from "../images/fb-star.png";

import PropTypes from "prop-types";

const vocabularies = [
  {
    word: "knotty",
    part_of_speech: "Adjective",
    definition:
      "(of a problem or difficulty) complicated and difficult to solve.",
    example: "It was a very knotty problem.",
  },
  {
    word: "cantrip",
    part_of_speech: "Noun",
    definition: "a magic spell; trick by sorcery.",
    example:
      "And that old witch, Eliza—I little guessed she’d play this cantrip on me: But what a jest—Jerusalem, what a jest!",
  },
  {
    word: "traverse",
    part_of_speech: "Verb",
    definition: "to pass or move over, along, or through.",
    example: "Stanley traversed the continent from west to east.",
  },
  {
    word: "peculiar",
    part_of_speech: "Adjective",
    definition: "different to what is normal or expected; strange.",
    example: "He gave her some very peculiar looks.",
  },
];

class Flashcard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      star_states: {},
      example_states: {},
    };
  }
  handleStarClick(event) {
    let clicked_id = event.currentTarget.parentNode.firstElementChild.id;
    // TODO: fix parent child! stupid
    // TODO: ask momo!
    // console.log(`${clicked_id} clicked!`);
    let star_states = this.state.star_states;
    star_states[clicked_id] = !star_states[clicked_id];
    this.setState({
      star_states: star_states,  // TODO: better way? of destructing...
    });
    this.rerender();
  }
  handleExampleClick(event) {
    let v = event.currentTarget.parentNode;
    // console.log(event.currentTarget);
    console.log(v.id);
    // console.log(v.key);
    // console.log(v.querySelector(
    //   "h2.word"
    // ));
    let u = <h5>hello</h5>;
    u;
    // v.append(
    //   {...u}
    // )
    // v = v;
    // event.currentTarget.parentNode.querySelector
    // let clicked_id = event.currentTarget.parentNode.firstElementChild.id;
    let example_states = this.state.example_states;
    example_states[v.id] = !example_states[v.id];
    this.setState({
      example_states: example_states,  // TODO: better way? of destructing...
    });
    this.rerender();
  }
  
  rerender() {
    console.log(JSON.stringify(this.state, undefined, 4));
  }

  render() {
    return (
      <div>
        <Header title={"My Flash Card"} />
        <Content
          vocabularies={vocabularies}
          handleStarClick={this.handleStarClick.bind(this)}  
          // { /* TODO: no better solution? */ }
          handleExampleClick={this.handleExampleClick.bind(this)}
        />
      </div>
    );
  }
}

export default Flashcard;

Flashcard.propTypes = {
  vocabularies: PropTypes.array,
  handleStarClick: PropTypes.func,
  handleExampleClick: PropTypes.func,
};
