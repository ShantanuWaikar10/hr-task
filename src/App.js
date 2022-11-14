import { useState, useEffect } from 'react';
import { db } from "./firebase-config";
import { collection, getDocs } from 'firebase/firestore';
import { ImCross } from 'react-icons/im'
import { VscThreeBars } from 'react-icons/vsc'
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers();
  }, [])
  const [isMenu, setIsMenu] = useState(false);

  return (
    <nav className='navbar'>

      {users.map((user) => {
        return (
          <div>
            <ul className={isMenu ? 'nav-links-menu' : 'nav-links'} onClick={() => setIsMenu(false)}>
              <li className={user.isLogoVisible ? 'list' : 'display-item'}>{user.logo}</li>
              <li className={user.isStorenameVisible ? 'list' : 'display-item'}>{user.storeName}</li>
              <li className={user.isMobilenoVisible ? 'list' : 'display-item'}>{user.mobile}</li>
            </ul>
            <button className='menu-icon' onClick={() => setIsMenu(!isMenu)}>
              {isMenu ? <ImCross /> : <VscThreeBars />}
            </button>
          </div>
        )
      })}

    </nav>
  );
}

export default App;
