import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const QuestionCheckboxes = () => {
  const dispatch = useCallback(useDispatch(), []);
  const questions = useSelector(state=>state.question);
  const userCheckboxes = useSelector(state=>state.userCheckboxes);

  useEffect(()=>{
    dispatch({type: 'GET_ALL_QUESTIONS'});
  }, [dispatch]);

  const [checked, setChecked] = useState({});

  useEffect(()=>{
    if(userCheckboxes[0] && userCheckboxes[0].user_id){
      const holder = {};
      userCheckboxes.forEach(el=>{
        holder[el.question_id] = true;
      });
      setChecked(holder);
    } else if (Array.isArray(questions)) {
      const state = questions.reduce((acum,arr)=>{
        acum[arr.id] = true;
        return acum;
      },{})
      setChecked(state);
    }
  },[questions,userCheckboxes]);

  function toggleChecked(id){
    let holder = {...checked};
    holder[id] = !checked[id];
    setChecked(holder);
  }

  function submit(e){
    e.preventDefault();
    let popup = window.confirm('Save your preferences?');
    if(popup){
      dispatch({type: 'SET_CHECKBOXES', payload: checked});
    }
  }

  return(
    <center style={{backgroundColor: 'white'}}>
      <h1>Please select costs that are relevant to you</h1>
      <form onSubmit={(e)=>submit(e)}>
        {Array.isArray(questions)? 
          questions.map(question=>{
            if(!question.sub_questions && !question.split && question.header !== 'Product/Service Price' && question.header !== 'Revenue' && question.header !== 'Number of Sales'){
              return(
                <div key={question.id}>
                  <div>
                    <input type='checkbox' checked={checked[question.id]} onChange={()=>toggleChecked(question.id)} />
                    <span className="questions-checkbox-text">{question.header}</span>
                  </div>
                  {questions.map(subQuestion=>{
                    if(subQuestion.sub_questions===question.id){
                      return(
                        <div key={subQuestion.id}>
                          <input type='checkbox' checked={checked[subQuestion.id]} onChange={()=>toggleChecked(subQuestion.id)} />
                          <span className="questions-checkbox-text">{subQuestion.header}</span>
                        </div>
                      );
                    } 
                    else {
                      return(null);
                    };
                  })}
                </div>
              )} 
              else {
                return(null);
              };
          })
          :
          null
        }
        <button className="normal-btn" type="submit">Save</button>
      </form>
    </center>
  );
};

export default QuestionCheckboxes;