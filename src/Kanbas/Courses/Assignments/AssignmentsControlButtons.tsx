import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function AssignmentsControlButtons() {
    return (
        <div className="float-end">
            <span className="wd-assignment-control-text">
                40% of Total
            </span>
            <BsPlus className="fs-3" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}