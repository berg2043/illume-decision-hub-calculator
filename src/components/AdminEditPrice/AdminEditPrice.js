import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './AdminEditPrice.css';
import AdminCalcQuestion from '../AdminCalcQuestion/AdminCalcQuestion';

export default function AdminEditPrice() {

  const question = useSelector((state)=>state.admin.adminQuestion);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type: `GET_ADMIN_QUESTION`, payload: 3});
  }, []);

  return(
    <div className="main-container">
      <h1 className="main-heading">Edit Price Setting Calculator</h1>
      <div>
        <span className="admin-price-q">Question</span>
        <span className="admin-price-tooltip">Tooltip</span>
      </div>
      <div>
        {question.map(q =>
          <div key={q.id}>
            <AdminCalcQuestion id={q.id} question={q.question} tooltip={q.help_text} calcID={3} />
          </div>
        )}
      </div>
    </div>
  );
}