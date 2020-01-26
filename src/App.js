import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './component/1.Profile/Profile';
import Stats from './component/2.StatSection/Stats';
import FriendList from './component/3.FriendsList/FriendList';
import TransactionHistory from './component/4.Transactions/TransactionHistory';
import friends from './component/3.FriendsList/friends';
import stats from './component/2.StatSection/statsData';
import transactions from './component/4.Transactions/transactions';
import user from './component/1.Profile/user';

const App = (
  <>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

ReactDOM.render(App, document.getElementById('root'));
