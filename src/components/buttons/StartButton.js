export default function StartButton(props) {
    
    function handleClick(event) {
      props.onClick();
      event.preventDefault();
    }
  
    return (
      <div className="start-button">
        <input onClick={handleClick} type="button" value={props.value} />
      </div>
    );
  }