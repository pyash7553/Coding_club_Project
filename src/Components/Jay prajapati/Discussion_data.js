import Discussion_block from "./Discussion_block.js";
// import pfp from './res/pfp.png';
import { useEffect, useState, React } from "react";



// function ForumGenerator() {

//     let ques;
//     let m;

//     fetch('/discussion')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             ques = data[0];

//             const mArray = data[1];
//             m = new Map(mArray);

//             console.log(ques);
//             console.log(m);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });

//     function MakeDiscussion(disc) {
      
//         console.log(disc);
//         return (<Discussion_block
//             pfp={m.get(disc._id).profileImg}
//             User_id={m.get(disc._id).username}
//             question={disc.question}
//             tags={disc.tags}
//             date={disc.askDate}
//             _id={disc.asker}
//         />
//         )
//     }

//     return (
//         ques.map(MakeDiscussion)
//     )
// }



// import React, { useState, useEffect } from 'react';

function ForumGenerator() {
  const [ques, setQues] = useState([]);
  const [m, setM] = useState(new Map());

  useEffect(() => {
    fetch('/discussion')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setQues(data[0]);

        const mArray = data[1];
        const map = new Map(mArray);
        setM(map);

        console.log(ques);
        console.log(map);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); // Empty dependency array to fetch data once on component mount

  function MakeDiscussion(disc) {
    console.log(disc);
    return (
      <Discussion_block
        pfp={m.get(disc._id).profileImg}
        asker_username={m.get(disc._id).username}
        asker_id={m.get(disc._id)._id}
        question={disc.question}
        tags={disc.tags}
        date={disc.askDate}
        _id={disc.asker}
        q_id={disc._id}
      />
    );
  }

  return (
    <>
      {ques.map(MakeDiscussion)}
    </>
  );
}


export default ForumGenerator
        // const discussionArr = [
        //     {
        //         pfp: pfp,
        //         User_id: "User 1",
        //         question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime nihil autem dolore sit ut tempore cumque quas excepturi? Dolorum, explicabo?",
        //         tags: ["Java", "OOP"],
        //         date: "22-09-2023"
        //     },
        //     {
        //         pfp: pfp,
        //         User_id: "User 2",
        //         question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime nihil autem dolore sit ut tempore cumque quas excepturi? Dolorum, explicabo?",
        //         tags: ["Java"],
        //         date: "22-09-2023"
        //     },
        //     {
        //         pfp: pfp,
        //         User_id: "User 3",
        //         question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime nihil autem dolore sit ut tempore cumque quas excepturi? Dolorum, explicabo?",
        //         tags: ["C++", "OOP"],
        //         date: "22-09-2023"
        //     },
        //     {
        //         pfp: pfp,
        //         User_id: "User 4",
        //         question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime nihil autem dolore sit ut tempore cumque quas excepturi? Dolorum, explicabo?",
        //         tags: ["DSA", "Linked List"],
        //         date: "22-09-2023"
        //     }
        // ]