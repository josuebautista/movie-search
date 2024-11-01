import { dotSpinner } from "ldrs"

dotSpinner.register()

function Loader () {
  return (
    <div className="loader">
      <l-dot-spinner
        size='40'
        speed='0.9'
        color='white'
      >
      </l-dot-spinner>
      Loading
    </div>
  )
}

export default Loader