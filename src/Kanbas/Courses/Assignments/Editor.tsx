export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="p-3">
            <div className="mb-3 row">
                <label htmlFor="wd-name"
                    className="col-12 col-form-label">
                    Assignment Name
                </label>
                <div className="col-12">
                    <input type="text" className="form-control"
                        id="wd-name" value="A1 - ENV + HTML" />
                </div>
            </div>

            <div className="mb-3 row">
                <div className="col-12">
                    <textarea className="form-control"
                        id="wd-description" rows={12}
                        defaultValue={`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

Your full name and section
Links to each of the lab assignments
Link to the Kanbas application
Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}></textarea>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="wd-points"
                    className="col-sm-2 col-form-label text-end">
                    Points
                </label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"
                        id="wd-points" defaultValue={100} />
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="wd-group"
                    className="col-sm-2 col-form-label text-end">
                    Assignment Group
                </label>
                <div className="col-sm-10">
                    <select id="wd-group" className="form-select">
                        <option selected>ASSIGNMENTS</option>
                    </select>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="wd-display-grade-as"
                    className="col-sm-2 col-form-label text-end">
                    Display Grade as
                </label>
                <div className="col-sm-10">
                    <select id="wd-display-grade-as" className="form-select">
                        <option selected>Percentage</option>
                    </select>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="wd-submission-type"
                    className="col-sm-2 col-form-label text-end">
                    Submission Type
                </label>
                <div className="col-sm-10">
                    <div className="wd-submission-type-group p-3">
                        <select id="wd-submission-type" className="form-select">
                            <option selected>Online</option>
                        </select>
                        <div className="wd-submission-type-text mt-3 mb-3">
                            Online Entry Options
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox"
                                id="wd-text-entry" />
                            <label className="form-check-label" htmlFor="wd-text-entry">
                                Text Entry
                            </label>
                        </div>

                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox"
                                id="wd-website-url" />
                            <label className="form-check-label" htmlFor="wd-website-url">
                                Website URL
                            </label>
                        </div>

                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox"
                                id="wd-media-recordings" />
                            <label className="form-check-label" htmlFor="wd-media-recordings">
                                Media Recordings
                            </label>
                        </div>

                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox"
                                id="wd-student-annotation" />
                            <label className="form-check-label" htmlFor="wd-student-annotation">
                                Student Annotation
                            </label>
                        </div>

                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox"
                                id="wd-file-upload" />
                            <label className="form-check-label" htmlFor="wd-file-upload">
                                File Uploads
                            </label>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label text-end">
                    Assign
                </label>
                <div className="col-sm-10">
                    <div className="wd-submission-assign-group p-3">
                        <label htmlFor="wd-assign-to" className="wd-submission-assign-group-label">Assign to</label>
                        <input id="wd-assign-to" type="text" className="form-control mb-3" defaultValue={"Everyone"} />
                        <label htmlFor="wd-due-date" className="wd-submission-assign-group-label">Due</label>
                        <input type="date"
                            className="form-control mb-3"
                            id="wd-due-date"
                            defaultValue="2024-05-13" />
                        <div className="wd-assign-to-available-group">
                            <div className="wd-assign-to-available-from pe-3">
                                <label htmlFor="wd-available-from" className="wd-submission-assign-group-label">Available from</label>
                                <input type="date"
                                    className="form-control"
                                    id="wd-available-from"
                                    defaultValue="2024-05-06" />
                            </div>
                            <div className="wd-assign-to-available-until">
                                <label htmlFor="wd-available-until" className="wd-submission-assign-group-label">Until</label>
                                <input type="date"
                                    className="form-control"
                                    id="wd-available-until"
                                    defaultValue="2024-05-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <button className="btn btn-lg btn-danger me-1 float-end">Save</button>
            <button className="btn btn-lg btn-secondary me-1 float-end">Cancel</button>
        </div >
    );
}
