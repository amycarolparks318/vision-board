import dayjs from "dayjs";
import '../assets/sass/components/planner.scss';
import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Plan from "./Plan";

export default function Planner() {
  const [planTitle, setPlanTitle] = useState('');
  const [plans, setPlans] = useLocalStorage([], 'myPlans');

  function addPlan() {
    const newPlan = {
      id: crypto.randomUUID(),
      title: planTitle,
      dateTime: dayjs(new Date()),
    };
    setPlans([...plans, newPlan]);
  };

  function updatePlan(plan, fields) {
    const newPlan = { ...plan, ...fields };
    const updatedPlans = plans.map((plan) => {
      if (plan.id === newPlan.id) {
        return newPlan;
      }
      else {
        return plan;
      }
    });
    setPlans(updatedPlans);
  };

  const sortPlans = plans.sort((a, b) => {
    const planA = a.dateTime;
    const planB = b.dateTime;
    if (planA < planB) {
      return -1;
    }
    if (planA > planB) {
      return 1;
    }
    return 0;
  });

  return (
    <div>

      <div className="create-plan">
        <input className="task-name" placeholder="Enter Task Description" type="text"
          onChange={(e) => { setPlanTitle(e.target.value); }} value={planTitle} />
        <button className="add-task" onClick={addPlan}>Add Plan</button>
      </div>
      <div className="plan-container">
        {sortPlans.map((plan) => <Plan key={plan.id} plan={plan} updatePlan={updatePlan} />)}
      </div>
    </div>
  );
};