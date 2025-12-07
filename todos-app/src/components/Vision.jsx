import { useLocalStorage } from '../hooks/useLocalStorage';
import '../assets/sass/components/vision.scss';
import { useState } from 'react';
import dayjs from 'dayjs';
import Goal from './Goal';

export default function Vision() {
    const [goalName, setGoalName] = useState('');
    const [goals, setGoals] = useLocalStorage([], 'myGoals');

    function addGoal() {
        const newGoal = {
            id: crypto.randomUUID(),
            name: goalName,
            date: dayjs(new Date()),
            steps: []
        };
        setGoals([...goals, newGoal]);
        setGoalName('');
    };

    function updateGoal(goal, fields) {
        const newGoal = { ...goal, ...fields };
        const updatedGoals = goals.map((goal) => {
            if (goal.id == newGoal.id) {
                return newGoal;
            }
            else {
                return goal;
            }
        });
        setGoals(updatedGoals);
    };

    return (
        <div>
            <div className="new-goal">
                <input name="goalname" id="goalname" className="goal-name" placeholder="Add new goal" type="text" value={goalName} onChange={(e) => {
                    setGoalName(e.target.value);
                }} />
                <button className="add-list" onClick={addGoal}>Set Goal</button>
            </div>
            <section className="goal-container">
                {goals.map((goal) => <Goal goal={goal} key={goal.id} updateGoal={updateGoal} />)}
            </section>
        </div>
    );
};