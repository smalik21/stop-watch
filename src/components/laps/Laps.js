import LapLabels from './LapLabels.js';
import LapTimings from './LapTimings.js';

export default function Laps(props) {

    return (
        <div className="laps">
            <LapLabels />
            <div className='line'></div>
            <LapTimings
                laps={props.laps}
            />
        </div>
    );
}