import Question from './Question.js'
// import pfp from './res/pfp.png'
import Comment from './Comment.js'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import { ObjectId } from 'mongoose'

// const que_block = {
//     pfp: pfp,
//     User_id: "User_1",
//     question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aspernatur atque quaerat explicabo cumque similique enim recusandae, nemo qui, ad nesciunt animi? Id?',
//     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, a? Optio rerum consequuntur hic corrupti deleniti molestias voluptas voluptates id esse impedit. Corrupti debitis suscipit aliquam, quod maiores ad similique earum nam tenetur, repudiandae perspiciatis.",
//     code: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, praesentium!\norem ipsum dolor sit, amet consectetur adipisicing elit.\nQuo, modi. Iure facere consectetur iusto!\nLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     up_count: 245,
//     date: "20-10-2022"
// }
// const Comments = [
//     {
//         pfp: pfp,
//         User_id: "User_2",
//         comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, a? Optio rerum consequuntur hic corrupti deleniti molestias voluptas voluptates id esse impedit. Corrupti debitis suscipit aliquam, quod maiores ad similique earum nam tenetur, repudiandae perspiciatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste molestiae quaerat tenetur incidunt adipisci deleniti ducimus pariatur deserunt asperiores recusandae!",
//         code: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, praesentium!\norem ipsum dolor sit, amet consectetur adipisicing elit.\nQuo, modi. Iure facere consectetur iusto!\nLorem ipsum dolor sit amet consectetur adipisicing elit.",
//         up_count: 245,
//         date: "20-10-2022"
//     },
//     {
//         pfp: pfp,
//         User_id: "User_2",
//         comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, a? Optio rerum consequuntur hic corrupti deleniti molestias voluptas voluptates id esse impedit. Corrupti debitis suscipit aliquam, quod maiores ad similique earum nam tenetur, repudiandae perspiciatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste molestiae quaerat tenetur incidunt adipisci deleniti ducimus pariatur deserunt asperiores recusandae!",
//         code: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, praesentium!\norem ipsum dolor sit, amet consectetur adipisicing elit.\nQuo, modi. Iure facere consectetur iusto!\nLorem ipsum dolor sit amet consectetur adipisicing elit.",
//         up_count: 245,
//         date: "20-10-2022"
//     },
//     {
//         pfp: pfp,
//         User_id: "User_2",
//         comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, a? Optio rerum consequuntur hic corrupti deleniti molestias voluptas voluptates id esse impedit. Corrupti debitis suscipit aliquam, quod maiores ad similique earum nam tenetur, repudiandae perspiciatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste molestiae quaerat tenetur incidunt adipisci deleniti ducimus pariatur deserunt asperiores recusandae!",
//         code: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, praesentium!\norem ipsum dolor sit, amet consectetur adipisicing elit.\nQuo, modi. Iure facere consectetur iusto!\nLorem ipsum dolor sit amet consectetur adipisicing elit.",
//         up_count: 245,
//         date: "20-10-2022"
//     },
//     {
//         pfp: pfp,
//         User_id: "User_2",
//         comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, a? Optio rerum consequuntur hic corrupti deleniti molestias voluptas voluptates id esse impedit. Corrupti debitis suscipit aliquam, quod maiores ad similique earum nam tenetur, repudiandae perspiciatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste molestiae quaerat tenetur incidunt adipisci deleniti ducimus pariatur deserunt asperiores recusandae!",
//         code: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, praesentium!\norem ipsum dolor sit, amet consectetur adipisicing elit.\nQuo, modi. Iure facere consectetur iusto!\nLorem ipsum dolor sit amet consectetur adipisicing elit.",
//         up_count: 245,
//         date: "20-10-2022"
//     }
// ]
export default function Question_data() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userID = sessionStorage.getItem('userID')
    const q_id = searchParams.get('q_id');

    const [Q_data, setQData] = useState([]);
    const [Asker, setAsker] = useState([]);
    const [Q_upvote, setQUp] = useState(false);
    const [R_data, setRData] = useState([]);
    const [rMap, setrMap] = useState(new Map());
    const [upMap, setupMap] = useState(new Map());

    useEffect(() => {
        fetch(`/discussion/question?userID=${userID}&q_id=${q_id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setQData(data[0]);
                setAsker(data[1]);
                setQUp(data[2]);
                setRData(data[3]);

                const rArr = data[4];
                const m1 = new Map(rArr);
                const uArr = data[5];
                const m2 = new Map(uArr);

                setrMap(m1);
                setupMap(m2);

                // console.log(Asker);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [userID, q_id])


    function questionHead() {

        // console.log(Q_upvote); //This prints true..
        return (
            <Question
                _id = {Q_data._id}
                userID={userID}
                pfp={Asker.profileImg}
                asker_username={Asker.username}
                asker_id={Asker._id}
                question={Q_data.question}
                description={Q_data.description}
                code={Q_data.code}
                up_count={Q_data.upvotes}
                date={Q_data.AskDate}
                value={Q_upvote} //this does not effect the component as true.
            />
        )
    }

    function commentsGenerator() {
        function commentGenerator(comment) {
            // if (R_data.length > 0 && R_data[0].replier) {
            // console.log(R_data[0]); // This prints and field replier is also there.
            // console.log(R_data[0].replier); // This should work without errors now

            return (
                <Comment
                    _id = {comment._id}
                    userID={userID}
                    pfp={rMap.get(comment._id).profileImg}
                    commenter={rMap.get(comment._id).username}
                    commenter_id={rMap.get(comment._id)._id}
                    comment={comment.description}
                    code={comment.code}
                    up_count={comment.upvotes}
                    date={comment.replyDate}
                    value={upMap.get(comment._id)}
                />
            )

        }

        return (
            R_data.map(commentGenerator)
        )
    }

    return (
        <>
            {questionHead()}
            {commentsGenerator()}

        </>
    )

}










