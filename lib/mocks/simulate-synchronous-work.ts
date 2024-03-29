const simulateSynchronousWork = () => {
  return new Promise((resolve) => setTimeout(resolve, 5000));
};

export default simulateSynchronousWork;
