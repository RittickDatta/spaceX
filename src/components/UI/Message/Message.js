import React from 'react'
import * as classes from './Message.module.css';

const Message = (props) => <p className={classes.Message}>{props.message}</p>

export default Message;