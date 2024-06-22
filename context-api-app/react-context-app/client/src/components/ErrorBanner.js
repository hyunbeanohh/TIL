const ErrorBanner = ({message}) => {
  return (
    <div
        style={{ backgroundColor: 'red', color: 'white', padding: '0.5rem' }}
    >{message}</div>
  )
}
export default ErrorBanner