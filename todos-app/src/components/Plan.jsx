import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function Plan({ plan, updatePlan }) {

    function updatePlanDate(e) {
        updatePlan(plan, { dateTime: e });
    };

    return (
        <div className="plan">
            <h3 className="plan-title">{plan.title}</h3>
            <div className="plan-date">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        onChange={updatePlanDate}
                        value={dayjs(plan.dateTime)}
                        className={"date-time"} />
                </LocalizationProvider>
            </div>
        </div>
    );
};