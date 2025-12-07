// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Step from './Step';
import { useState } from 'react';

export default function Goal({ goal, updateGoal }) {
    const [stepName, setStepName] = useState('');

    function addStep() {
        const newStep = {
            id: crypto.randomUUID(),
            summary: stepName,
        };
        updateGoal(goal, { steps: [...goal.steps, newStep] });
    };

    function updateDueDate(e) {
        updateGoal(goal, { date: e });
    };

    return (
        <div className="goal">
            <div className="goal-content">
                <div className="category">
                    <select name="category" id="category">
                        <option>Choose Category</option>
                        <option>Career</option>
                        <option>Education</option>
                        <option>Health</option>
                        <option>Finance</option>
                        <option>Family</option>
                        <option>Relationships</option>
                        <option>Personal</option>
                        <option>Spiritual</option>
                        <option>Fun</option>
                    </select>

                </div>
                <h3>{goal.name}
                    <FontAwesomeIcon icon={faEdit} />
                    <FontAwesomeIcon icon={faTrash} />
                </h3>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker value={dayjs(goal.date)} className={'goal-date'}
                        onChange={updateDueDate} />
                </LocalizationProvider>

                <section className="new-step">
                    <input className="step-name" placeholder="Steps to Take" type="text"
                        onChange={(e) => { setStepName(e.target.value); }} value={stepName} />
                    <button className="add-step"
                        onClick={addStep}
                    >Add Step</button>
                </section>

                {goal.steps.map((step) => <Step key={step.id} step={step} />)}
            </div>
        </div>
    );
};