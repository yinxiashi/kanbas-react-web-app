import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
export default function AssignmentsControls() {
    return (
        <div id="wd-assignments-controls" className="text-nowrap mt-4 mb-4">
            <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </button>
            <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button>
            <div className="input-group w-50 float-start wd-assignment-search">
                <span className="input-group-text"><FaSearch /></span>
                <input id="wd-search-assignment" type="text" className="form-control"
                    placeholder="Search..." />
            </div><div className="clearfix"></div>
        </div>
    );
}

