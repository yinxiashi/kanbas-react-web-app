import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.webp" alt="" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/1234/Home">
                            CS1234 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.webp" alt="" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5001/Home">
                            CS5001
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Intensive Foundations of Computer Science
                        </p>
                        <Link to="/Kanbas/Courses/5001/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.webp" alt="" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5002/Home">
                            CS5002
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Discrete Structures
                        </p>
                        <Link to="/Kanbas/Courses/5002/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.webp" alt="" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5004/Home">
                            CS5004
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Object-Oriented Design
                        </p>
                        <Link to="/Kanbas/Courses/5004/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.webp" alt="" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5008/Home">
                            CS5008
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Data Structures, Algorithms, and Their Applications within Computer Systems
                        </p>
                        <Link to="/Kanbas/Courses/5008/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.webp" alt="" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5800/Home">
                            CS5800
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Algorithms
                        </p>
                        <Link to="/Kanbas/Courses/5800/Home"> Go </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.webp" alt="" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/5400/Home">
                            CS5400
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Principles of Programming Language
                        </p>
                        <Link to="/Kanbas/Courses/5400/Home"> Go </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
