import MainTime from './MainTime';
import LapTime from './LapTime';

export default function Time(props) {

    return (
        <div className="time">
            <MainTime
             time={props.time}
            />
            <LapTime
             lapTime={props.lapTime}
            />
        </div>
    );
}