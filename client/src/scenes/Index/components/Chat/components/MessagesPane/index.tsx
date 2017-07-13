/**
 * @file index.tsx
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

import React from 'react';

import Message, { MessageProps } from './components/Message';
import Loader from 'components/Loader';
const style = require('./style');

export { MessageProps } from './components/Message';

export type MessagesPaneProps = {
  messages: MessageProps[],
  loading: boolean,
};

type MessagesPaneState = {
};

export default class MessagesPane extends React.Component<MessagesPaneProps, MessagesPaneState> {
  /**
   * @summary The initial state.
   */
  state: MessagesPaneState = {
  };

  render() {
    return (
      <div className={style.messagesPane}>
        <div className={style.messagesPane__title}>
          <h1>Messages</h1>
        </div>
        <div className={style.messagesPane__msgsList}>
          {
            this.props.loading ? <Loader /> :
            this.props.messages.map(msg =>
              <Message key={msg.id} {...msg} />)
          }
        </div>
      </div>
    );
  }
}
