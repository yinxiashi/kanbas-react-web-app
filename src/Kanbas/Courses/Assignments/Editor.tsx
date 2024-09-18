export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><b>Assignment Name</b></label><br /><br />
            <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" rows={9} cols={45} defaultValue="
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.">
            </textarea>
            <br /><br />
            <table>
                <tbody>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" defaultValue={100} /><br /><br />
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-group">Assignment Group</label>
                        </td>
                        <td>
                            <select id="wd-group">
                                <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
                            </select><br /><br />
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-display-grade-as">Display Grade as</label>
                        </td>
                        <td>
                            <select id="wd-display-grade-as">
                                <option value="Percentage" selected>Percentage</option>
                            </select><br /><br />
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-submission-type">Submission Type</label>
                        </td>
                        <td>
                            <select id="wd-submission-type">
                                <option value="Online" selected>Online</option>
                            </select><br /><br />
                            Online Entry Options<br />
                            <input type="checkbox" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label><br />
                            <input type="checkbox" id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label><br />
                            <input type="checkbox" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                            <input type="checkbox" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                            <input type="checkbox" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Uploads</label><br /><br />
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            Assign
                        </td>
                        <td>
                            <label htmlFor="wd-assign-to">Assign to</label><br />
                            <input id="wd-assign-to" type="text" defaultValue="Everyone" /><br /><br />

                            <label htmlFor="wd-due-date">Due</label><br />
                            <input type="date"
                                id="wd-due-date"
                                defaultValue="2024-05-13" /><br /><br />

                            <table>
                                <tbody>
                                    <tr>
                                        <td><label htmlFor="wd-available-from">Available from</label></td>
                                        <td><label htmlFor="wd-available-until">Until</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="date"
                                            id="wd-available-from"
                                            defaultValue="2024-05-06" /></td>
                                        <td><input type="date"
                                            id="wd-available-until"
                                            defaultValue="2024-05-20" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <button>Cancel</button> <button>Save</button>
        </div >
    );
}
