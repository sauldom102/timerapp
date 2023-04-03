const displayGreeting = (name?: string) => {
  const now = new Date();
  const hour = now.getHours();

  let greeting = '';

  if (hour >= 5 && hour < 12) {
    greeting = 'Morning';
  } else if (hour >= 12 && hour < 18) {
    greeting = 'Howdy';
  } else {
    greeting = 'Good Evening';
  }

  if (name) {
    greeting += `, ${name}`;
  }

  greeting += '! 👋';

  return greeting;
};

export default displayGreeting;
