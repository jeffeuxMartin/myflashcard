import Card from './Card'
import PropTypes from 'prop-types';

export default function Content({ 
  vocabularies,
  handleStarClick,
  handleExampleClick,
 }) {
  return (
    <div className="content">
      {vocabularies.map((v, i) => (
        <div className="card" key={i} id={i}>  {  // 這個 key 很重要！！  // TODO: ID dirty!
        }
          <Card
            word={v.word}
            part_of_speech={v.part_of_speech}
            definition={v.definition}
            handleStarClick={handleStarClick}
            handleExampleClick={handleExampleClick}
            id={i}
          >
            <h5 className="exa_sent">
              {v.example}
            </h5>
            {/* bad TODO: fixme children! */}
            
          </Card>
        </div>
      ))}
    </div>
  );
}

Content.propTypes = {
    vocabularies: PropTypes.array.isRequired,
    // word: PropTypes.string.isRequired,
    // part_of_speech: PropTypes.string.isRequired,
    // definition: PropTypes.string.isRequired,
    handleStarClick: PropTypes.func,
    handleExampleClick: PropTypes.func,
};
