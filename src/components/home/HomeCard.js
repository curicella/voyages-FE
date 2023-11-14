import React from "react";

const HomeCard = (props) => {
    const editButtonFunction = () => {
        props.customFunction(props.content, 'Curic', 21)
    }

  return (
    <div className="content-cards">
      <div className="content-card">
        <p>{props.content}</p>

        <div className="content-card-buttons">
          <button>Delete</button>
          <button onClick={editButtonFunction}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;