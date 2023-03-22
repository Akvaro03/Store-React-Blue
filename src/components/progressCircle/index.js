import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Style from './progressCircle.module.css'
function ProgressCircle() {
    return (
        <div className={Style.bodyCircle}>
            <div className={Style.ContentCircle}>
                <CircularProgress />
            </div>
        </div>
    );
}

export default ProgressCircle;