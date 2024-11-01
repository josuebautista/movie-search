import './SortStyle.css'

interface SortButtonProps {
  sort: boolean;
  setSort: (sort: boolean) => void;
}

function SortButton ({ sort, setSort }: SortButtonProps) {

  return (
    <div className="checkbox-wrapper-3">
      <input
        type="checkbox"
        id="cbx-3"
        checked={sort}
        onChange={() => setSort(!sort)}
      />
      <label htmlFor="cbx-3" className="toggle">
        <span></span>
      </label>
    </div>
  )
}

export default SortButton


