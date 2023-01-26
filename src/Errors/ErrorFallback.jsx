function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div
      role="alert"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      <h3>
        Application error has occurred, Please hit the browser refresh button to
        reload the app.
      </h3>
      <pre>{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        size="small"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#2196f3',
          color: '#fff',
          height: '25px',
          lineHeight: '25px',
          border: 'none',
        }}
      >
        Reload
      </button>
    </div>
  );
}

export default ErrorFallback;
