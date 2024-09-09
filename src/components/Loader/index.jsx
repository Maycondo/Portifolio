
import './style.css';

export default function Loader() {
    return (
        <div className="banter-loader">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="banter-loader__box"></div>
        ))}
      </div>
    )
}
