import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// https://jsonplaceholder.typicode.com/comments

function App() {
  
  // 1. 데이터를 관리할 state
  const [data, setData] = useState([]);

  const dateId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author : it.email,
        content : it.body,
        emotion : Math.floor(Math.random() * 5) + 1,
        create_date : new Date().getTime(),
        id : dateId.current++
      }
    })

    setData(initData);
    console.log(res);
  }


  useEffect(()=>{
    getData();
  },[])

  const onCreate = (author, content, emotion) => {
    
    const create_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      create_date,
      id: dateId.current
    }
    dateId.current += 1;

    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    console.log(newDiaryList);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newcontent) => {
    setData(
      data.map((it) => 
        it.id === targetId ? {...it, content: newcontent} : it
      )
    );
  };

  const getDiaryAnalysis = useMemo(() => {
    console.log("일기 분석 시작!");

    const goodCount = data.filter((it) => it.emotion > 3).length;
    const badCount = data.filter((it) => it.emotion <= 3).length;
    const goodRatio = (goodCount / data.length) * 100;
    return {goodCount, badCount, goodRatio};
  }, [data.length]); 

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <DiaryList onRemove={onRemove} onEdit={onEdit} diaryList={data}/>
    </div>
  );
}

export default App;
