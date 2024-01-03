import { useEffect, useState } from 'react';
import "./index.css";
import Header from './Header';
import AddTask from './AddTask';
import { v4 as uuidv4 } from "uuid";
function App(props) {
  /*const [schedule, setSchedule] = useState(
   
 )*/
  const [schedule, setSchedule] = useState(() => {
    const savedSchedule =
      localStorage.getItem('schedule');
    return savedSchedule ? JSON.parse(savedSchedule) :
      [
        {
          id: 1,
          name: "Calculus Final exam",
          endtime: "13 January",

        },
        {
          id: 2,
          name: "Physics Final exam",
          endtime: "17 January ",

        },
        {
          id: 3,
          name: "Chemistry Final exam",
          endtime: "18 January",

        },
        {
          id: 4,
          name: "Digital Electronics Final exam",
          endtime: "18 January",

        },
        {
          id: 5,
          name: "Programming Languages Final exam",
          endtime: "20 January",

        },
        {
          id: 6,
          name: "Operating Systems Final exam",
          endtime: "18 January",

        },
        {
          id: 7,
          name: "Internet Of Things Final exam",
          endtime: "16 January",

        },
        {
          id: 8,
          name: "Microprocessors Final exam",
          endtime: "16 January",

        },
        {
          id: 9,
          name: "Databases Final exam",
          endtime: "14 January",

        },
        {
          id: 10,
          name: "Differential equations Final exam",
          endtime: "14 January",

        },


      ]
  })


  useEffect(() => {
    localStorage.setItem('schedule', JSON.stringify(schedule))

  }, [schedule])

  function updateFutbol(id, newName, newendtime) {
    const updatedFutboller = schedule.map((sch) => {
      if (id === sch.id) {
        return { ...sch, name: newName, endtime: newendtime }
      }
      return sch;


    })
    setSchedule(updatedFutboller);
  }
  function deleteExam(id) {
    const remainingExams = schedule.filter((exam) => exam.id !== id);
    setSchedule(remainingExams);

  }
  function NewTask(id, name, endtime) {
    const newTask = {
      id: uuidv4(),
      name: name,
      endtime: endtime,
    }
    setSchedule([...schedule, newTask])

  }
  return (
    <>
      <div className='flex flex-wrap justify-center'>
        {schedule.map((sch) => {
          return (
            <Header
              key={sch.id}
              id={sch.id}
              name={sch.name}
              endtime={sch.endtime}
              updateFutbol={updateFutbol}
              deleteExam={deleteExam}

            />
          )
        })}
      </div>
      <AddTask newTask={NewTask} />
    </>

  );
}

export default App;
