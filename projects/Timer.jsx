import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.date = moment();

    this.nTimer = setInterval(this.onTick, 1000);
  }

  onTick = () => {
    this.forceUpdate();
    console.log(moment('2018-07-04T17:00:00+09:00').valueOf());
  };

  render() {
    return (
      <div>
        <div>현재시간: {moment().format('YYYY-MM-DD A hh:mm:ss')} </div>
        <div>{moment('2018-07-04T17:00:00+09:00').fromNow()} 남았습니다.</div>
      </div>
    );
  }
}

export default Timer;
