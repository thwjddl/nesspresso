import { Link } from 'react-router-dom';
function Main2() {
  return (
    <ul>
      <li className="btn_1" ><Link to="/list01">버츄오</Link></li>
      <li className="btn_2"><Link to="/list02">오리지널</Link></li>
      <li className="btn_3" ><Link to="/list03">에스프레소(40ml)</Link></li>
      <li className="btn_4" ><Link to="/list04">더블 에스프레소(80ml)</Link></li>
      <li className="btn_5" ><Link to="/list05">그랑 룽고(150ml)</Link></li>
      <li className="btn_6"><Link to="/list06">시그니처(230ml)</Link></li>
    </ul>
  )
}

export default Main2