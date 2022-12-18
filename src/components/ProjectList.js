import { Link } from "react-router-dom";
import Avatar from "./Avatar.js";
//style
import "./ProjectList.css";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div className="project-list">
      {projects.length === 0 && <p>No projects yet!</p>}
      {projects.length !== 0 &&
        projects.map((project) => (
          <Link
            className="project-link"
            to={`/projects/${project.id}`}
            key={project.id}
          >
            <div className="project-createdBy">
              <p className="project-author">
                Created by: <strong>{project.createdBy.displayName}</strong>
              </p>
              <Avatar src={project.createdBy.photoURL} />
            </div>
            <div>
              <h4>{project.name}</h4>
              <p>Due by {project.dueDate.toDate().toDateString()}</p>
              <p className="project-discription">
                {project.details.substring(0, 30)}...
              </p>
            </div>
            <div className="assigned-to">
              Assigned to:
              <ul>
                {project.assignedUsersList.map((user) => (
                  <li key={user.photoURL} className="assigned">
                    <Avatar src={user.photoURL} />
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default ProjectList;
