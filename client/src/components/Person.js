import cx from "classnames";
import { decay, inertia } from "popmotion";
import React, { useState } from "react";
import posed from "react-pose";
import styles from "./Person.pcss";

const Person = props => {
  const { person, firePerson } = props;

  // TODO this is possibly so wrong
  const [likes, setLikes] = useState(0);

  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  const PersonContainer = posed.div({
    draggable: true,
    hoverable: true,
    pressable: true,
    init: { scale: 1 },
    before: { y: 200, opacity: 0 },
    press: { scale: 1.05 },
    hover: { scale: 1.05 },
    drag: {
      scale: 1.1,
      opacity: 1
    },
    load: {
      opacity: 1,
      y: 0,
      x: 0
    },
    liked: {
      opacity: 1,
      y: 0,
      x: 100,
      transition: inertia
    },
    dragEnd: {
      opacity: 1,
      transition: decay
    },
    onChange: {
      x: x => console.log(x)
    }
  });

  let liking, hating;
  const onValueChange = x => {
    liking = x > 0;
    hating = x < 0;
  };

  const delayedLike = () => {
    console.log(
      "liked",
      person.firstName,
      person.lastName,
      "likes now",
      likes + 1
    );
    setLikes(likes + 1);
  };
  const onDragEnd = () => {
    setTimeout(() => {
      hating && firePerson(person.id);
      liking && delayedLike();
    }, 500);
  };
  return (
    <PersonContainer
      className={classes}
      onValueChange={{ x: onValueChange }}
      pose={"load"}
      initialPose={likes ? "liked" : "before"}
      onDragEnd={onDragEnd}
    >
      <div>
        <strong>{person.lastName}</strong>, {person.firstName} - (
        {person.age.toFixed(1)} vuotta)
      </div>
      <div>
        <button onClick={() => firePerson(person.id)}>vapauta</button>
      </div>
    </PersonContainer>
  );
};

export default Person;
