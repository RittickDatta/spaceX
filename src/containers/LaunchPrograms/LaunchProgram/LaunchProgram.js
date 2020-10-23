import React from 'react';
import * as classes from './LaunchProgram.module.css';

const launchProgram = (props) => (
  <div className={classes.ProgramCard}>
    <div className={classes.ProgramContent}>
      <div className={classes.ProrgamImage}>
          <img src={props.prog.links.mission_patch_small} alt="" width="100%"/>
      </div>
      <div className={classes.ProgramDetails}>
        <p className={classes.ProgramTitle}>
            {props.prog.mission_name +' #'+props.prog.flight_number}
        </p>
        <p className={classes.ProgramSubDetailKey}>
            Mission Ids:
        </p>
        <ul className={classes.ProgramSubDetailValue}>
          {props.prog.mission_id.length > 0 ? props.prog.mission_id.map((m_id) => (
            <li key={m_id}>{m_id}</li>
          )) : 'No Ids Available'}
        </ul>
          <p className={classes.ProgramSubDetailKey}>Launch Year: <span className={classes.ProgramSubDetailValue}>{props.prog.launch_year}</span></p>
          <p className={classes.ProgramSubDetailKey}>Successful launch: <span className={classes.ProgramSubDetailValue}>{props.prog.launch_success ? 'True' : 'False'}</span></p>
          <p className={classes.ProgramSubDetailKey}>Successful Landing: <span className={classes.ProgramSubDetailValue}>{props.prog.rocket.first_stage.cores[0].land_success ? 'True' : 'False'}</span></p>

      </div>
    </div>
  </div>
);

export default launchProgram;
