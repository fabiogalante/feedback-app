//_rfce

import Card from './shared/Card'

function FeedbackItem({ item }) {
  //const [rating, setRating] = useState(7);
  //const [text, setText] = useState('This is an exemple of a feedback item');

  // const handleClick = () => {
  //     //setRating(10)
  //     setRating((prev) => {
  //         console.log(prev);
  //         return prev + 1
  //     })
  // }

  return (
    <Card reverse={false}>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'> {item.text} </div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
}

export default FeedbackItem;
