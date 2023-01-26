const ErrorComponent = ({ error }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    }}
  >
    {error.message}
  </div>
);

export default ErrorComponent;
