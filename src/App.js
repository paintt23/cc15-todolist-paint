import './App.scss'
import { FaHome } from 'react-icons/fa';
function App() {
  return (
    <div className='todo'>
        <div className="todo__header">
   <header className='header'>

    {/* Logo */}
    <div className='header__logo'><FaHome/></div>

    {/* Text */}
    <div className='header__text'>
        <h1>Todoist</h1>
    </div>

    {/* Search */}
    <div className='header__search'>
      <input/>
    </div>
</header>
</div>

        <div className="todo__sidebar">SideBar</div>
        <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
