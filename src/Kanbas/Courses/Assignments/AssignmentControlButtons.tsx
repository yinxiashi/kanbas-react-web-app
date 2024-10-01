import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
export default function AssignmentControlButtons() {
    return (
        <div>
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
