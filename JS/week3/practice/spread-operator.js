const sendCongratulationsMessage = (name) => {
    console.log(`Congratulations ${name}, you passed the test.  Well done!`);
  }
  
  const sendConsolidationMessage = (name) => {
    console.log(`Sorry ${name}, unfortunately you did not pass your test. Let's see what we can do to get you back on track`);
  }
  
  const sendResultMessage = (grade, ...rest) => {
    if (grade < 6) {
      sendConsolidationMessage(...rest);
    } else {
      sendCongratulationsMessage(...rest);
    }
  }
  
  sendResultMessage(5, ['John', 'Obada'].join(' and '));
  sendResultMessage(9, 'Deedee');

  //--------------------------------------------

  const num1 = [1, 2, 3, 4, 5];
  const num2 = [6, 7, 8, 9, 10];
  console.log(num2)

  const mergeN12 = [...num1, ...num2];
  console.log(mergeN12)
  console.log(mergeN12[0].length);
  console.log(typeof mergeN12);
  console.log(typeof num2);
