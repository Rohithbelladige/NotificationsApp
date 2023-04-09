const Notification = props => {
  //  Write your code here.
  const {className,message,imageUrl} = props;
  const containerClassName = {`notification-container ${className}`}
  return {
      <div className = {containerClassName}>
        <img className = "image" src={imageUrl} />
        <p className="message">{message}</p>
      </div>
  }
}

const element = (
  //  Write your code here.   
  <div className = "bg-container">
      <h1 className = "heading">Notifications</h1>
      <div>
          <Notification className = "info-message" message = "Information Message" imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" />
          <Notification className = "suc-message" message = "Success Message" imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
          <Notification className = "war-message" message = "Warning Message" imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"/>
          <Notification className = "err-message" message = "Error Message" imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"/>
      </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
