import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import { RiFileEditLine } from "react-icons/ri";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentsControls />
            <ul id="wd-assignment-list" className="list-group rounded-0">
                <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentsControlButtons />
                    </div>
                    <ul className="wd-assignment list-group rounded-0">
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <div className="wd-assignment-details">
                                <BsGripVertical className="me-2 fs-3" />
                                <a href="#/Kanbas/Courses/1234/Assignments/123">
                                    <RiFileEditLine className="text-success me-4 fs-3" />
                                </a>
                                <div className="wd-assignment-content">
                                    <div className="wd-assignment-content-title">A1 - ENV + HTML</div>
                                    <div>
                                        <span className="text-danger">
                                            Multiple Modules
                                        </span> | <b>Not available until</b> May 6 at 12:00am |<br /><b>Due</b> May 13 at 11:59pm | 100 pts</div>
                                </div>
                                <AssignmentControlButtons />
                            </div>
                        </li>
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <div className="wd-assignment-details">
                                <BsGripVertical className="me-2 fs-3" /><a href="#/Kanbas/Courses/1234/Assignments/123">
                                    <RiFileEditLine className="text-success me-4 fs-3" />
                                </a>
                                <div className="wd-assignment-content">
                                    <div className="wd-assignment-content-title">A2 - CSS + BOOTSTRAP</div>
                                    <div><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am |<br /><b>Due</b> May 20 at 11:59pm | 100 pts</div>
                                </div>
                                <AssignmentControlButtons />
                            </div>
                        </li>
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <div className="wd-assignment-details">
                                <BsGripVertical className="me-2 fs-3" />
                                <a href="#/Kanbas/Courses/1234/Assignments/123">
                                    <RiFileEditLine className="text-success me-4 fs-3" />
                                </a>
                                <div className="wd-assignment-content">
                                    <div className="wd-assignment-content-title">A3 - JAVASCRIPT + REACT</div>
                                    <div><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am |<br /><b>Due</b> May 27 at 11:59pm | 100 pts</div>
                                </div>
                                <AssignmentControlButtons />
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
