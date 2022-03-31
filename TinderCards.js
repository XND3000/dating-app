import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Jacob Iles',
            url: "https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/46963801_10213152361670544_2841004206402306048_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NfFr5tmL4fcAX8bX6dD&_nc_ht=scontent-man2-1.xx&oh=00_AT8utPU46x5bt6KON-imnfSJaYaMuvFSZKHiJ02xJZy1fQ&oe=6268BE17",
        },
    

        {
            name: 'Josphat Gitau',
            url: "https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/117173280_2669138053407897_5497359870404421730_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rt5offE-27gAX8KkU6l&tn=gkkQ4yJCMZnESQJe&_nc_ht=scontent-lcy1-1.xx&oh=00_AT91S4iQhaJyFTlvpIFk6uWR5dVy5K8aVabB-LzO7s8ndQ&oe=626D1812 ",
        },
  ]);

  const swiped = (direction, nameToDelete) => {
      console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
      console.log(name + "left the screen");
  };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard
                className="swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                       style={{ backgroundImage: `url(${person.url})` }}
                       className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>

                </TinderCard>
            ))}
            </div>
        </div>
    );
}

export default TinderCards;
