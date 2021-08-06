import React from 'react'

import style from '../css/JobHunt/styles.module.css'

const JobHunt = () => {
  return (
    <div className="container">
      <div className={style.subContainer}>
        <div className={style.task_container}>
          <header>Today's Tasks</header>
          <ul>
            <li>Stay green on GitHub</li>
            <li>Hackerrank problems</li>
            <li>Update Resume</li>
          </ul>
          <span
            style={{ float: 'right', fontSize: '1rem', fontWeight: 'bold' }}
          >
            +
          </span>
        </div>
        <ul className={style.actions_container}>
          <li>Add Job</li>
          <li>View Log</li>
          <li>Interview Prep</li>
        </ul>
      </div>
      <h4>You have applied to 10 jobs in the past month</h4>
      <div className={style.recent_activities}>
        <h3 style={{ textDecoration: 'underline' }}>Recent Activity</h3>
        <div className={style.activities_container}>
          <div className={style.activities}></div>
          <div className={style.activities}></div>
        </div>
      </div>
    </div>
  )
}

export default JobHunt
