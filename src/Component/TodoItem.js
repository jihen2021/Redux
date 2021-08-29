import { useDispatch } from "react-redux";
import { complete, dlete, edit } from "../Actions/Actions";
import CheckIcon from "@material-ui/icons/Check";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <div>
      <li className="list-group-item border">
        <div className="d-flex justify-content-between sofia">
          {todo.title}
          <div>
            <DeleteForeverIcon
              onClick={() => dispatch(dlete(todo.id))}
              style={{ color: "#ff3f34", size: "8px" }}
            />
            <EditIcon
              onClick={() =>
              {
               todo.title= prompt("Donner le nouveau titre",todo.title);
                todo.title.trim()?
                dispatch(edit(todo.id)):
                prompt("Donner le nouveau titre",todo.title);

              }	}
            />

            <CheckIcon
              onClick={() => dispatch(complete(todo.id))}
              className={todo.completed ? "green" : "red"}
            />
          </div>
        </div>
      </li>
    </div>
  );
}

export default TodoItem;
