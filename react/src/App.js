import React, {useState} from 'react';
import './App.css';

function App(){
  let users = {
    1: {name: 'a', phones: ['1', '2']},
    2: {name: 'bb', phones: ['11', '22', '33']},
    3: {name: 'cc', phones: []},
    5: {name: 'ddd', phones: ['111', '222', '333', '444']},
  };
  const [userId, setUserId] = useState(2);
  let [phone, setPhone] = useState('33');
  let changed = (e) => {
    let id = e.target.value;
    setUserId(id);
    const phones = users[id].phones;
    setPhone(phones.length?phones[0]:null)
  }
  return (
    <div>
      <select value={userId} onChange={changed}>
        {Object.entries(users).map(([k, v])=>{
          return <option value={k} key={k}>{v.name}</option>
        })}
      </select>{
        phone &&
        <select value={phone} onChange={(e)=>setPhone(e.target.value)}>
          {users[userId].phones.map((p)=>{
            return <option value={p} key={p}>{p}</option>
          })}
        </select>
      }
      <br/>
      You selected user #{userId} with {phone?'phone '+phone:'no phone'}
    </div>
  );
}

export default App;
