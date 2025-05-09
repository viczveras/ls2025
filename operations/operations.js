export const sum = (array) => {
    try {
      return array.reduce((total, value) => total + value, 0);
    } catch (error) {
      return NaN;
    }
  };
  
  export const product = (array) => {
    try {
      return array.reduce((result, value) => result * value, 1);
    } catch (error) {
      return NaN;
    }
  };
  
  export const sumOdds = (array) => {
    try {
      return array.reduce(
        (acc, value) => (value % 2 !== 0 ? acc + value : acc),
        0
      );
    } catch (error) {
      return NaN;
    }
  };
  