/* Actions by Ana lucia Diaz Leppe */
import {
  getRandomColors,
  playSounds,
} from './utils';

export function turnGameOnOff(prevState) {
  if (prevState.status === 'on') {
    return {
      sequence: [],
      status: 'off',
      round: null,
      currentColor: null,
      currentUserIndex: null,
    };
  }

  return {
    sequence: getRandomColors(),
    status: 'on',
    round: 1,
    currentUserIndex: 0,
  };
}

export function playSequence(arr, index) {
  for (let i = 0; i < index; i += 1) {
    setTimeout(() => {
      playSounds(arr[i]);
      this.setState({
        currentColor: arr[i],
      });
    }, (i + 1) * 500);
  }

  setTimeout(() => {
    this.setState({
      currentColor: null,
    });
  }, (index + 1) * 500);
}

export function checkUserOption(color, state) {
  const { sequence, round, currentUserIndex } = state;
  if (color === sequence[currentUserIndex] && (currentUserIndex + 1) === round) {
    return {
      round: round + 1,
      currentUserIndex: 0,
    };
  }

  if (color === sequence[currentUserIndex] && (currentUserIndex + 1) < round) {
    return {
      currentUserIndex: currentUserIndex + 1,

    };
  }

  return {
    currentUserIndex: 0,
  };
}
export function checkLooserOption(color, state) {
  const { sequence, round, currentUserIndex } = state;
  if (color !== sequence[currentUserIndex] && (currentUserIndex + 1) !== round) {
    return {
      round: round - 1,
      currentUserIndex: 0,
    };
  }

  return {
    currentUserIndex: 0,
  };
}
