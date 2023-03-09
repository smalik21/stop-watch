export default function LapButton(props) {
    
    function handleClick(event) {
      props.onClick();
      event.preventDefault();
    }
  
    return (
      <div className="lap-button">
        <input onClick={handleClick} type="button" value={props.value} />
      </div>
    );
  }