
export default function LapTimings(props) {

    const laps = props.laps.slice().reverse();

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.round((time % 1000) / 10);
        return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} . ${milliseconds.toString().padStart(2, '0')}`;
    };

    const format = (index) => {
        return `${index.toString().padStart(2, '0')}`;
    };

    return (
        <div className="lap-timings">
            {laps.map((lapTime) => (
                <div className="lap">
                    <p className="index">{`${format(lapTime[0])}`}</p>
                    <p className="lap-times">{`${formatTime(lapTime[1])}`}</p>
                    <p className="overall-time">{`${formatTime(lapTime[2])}`}</p>
                </div>
            ))}
        </div>
    );
}