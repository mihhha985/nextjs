import React, { ChangeEvent } from "react";

interface TrackProgresProps {
    left: number;
    right: number;
    onChange:(e:ChangeEvent) => void;
}

const TrackProgres:React.FC<TrackProgresProps> = ({left, right, onChange}) => {
    return(
        <div>
            <input 
                type="range"
                min={0}
                max={right}
                value={left}
                onChange={onChange} 
            />
            <span>{left} / {right}</span>
        </div>
    )
}

export default TrackProgres;