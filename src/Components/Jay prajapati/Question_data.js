import Question from './Question.js'
// import pfp from './res/pfp.png'
import Comment from './Comment.js'

const que_block = {
    pfp: '/images/pfp.png',
    User_id: "User_1",
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aspernatur atque quaerat explicabo cumque similique enim recusandae, nemo qui, ad nesciunt animi? Id?',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, a? Optio rerum consequuntur hic corrupti deleniti molestias voluptas voluptates id esse impedit. Corrupti debitis suscipit aliquam, quod maiores ad similique earum nam tenetur, repudiandae perspiciatis.",
    code: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, praesentium!\norem ipsum dolor sit, amet consectetur adipisicing elit.\nQuo, modi. Iure facere consectetur iusto!\nLorem ipsum dolor sit amet consectetur adipisicing elit.",
    up_count: 245,
    date: "20-10-2022"
}

function questionHead() {
    return (
        <Question
            pfp={que_block.pfp}
            User_id={que_block.User_id}
            question={que_block.question}
            description={que_block.question}
            code={que_block.code}
            up_count={que_block.up_count}
            date={que_block.date}
        />
    )
}

const Comments = [
    {
        pfp: '/images/pfp.png',
        User_id: "User_2",
        comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, a? Optio rerum consequuntur hic corrupti deleniti molestias voluptas voluptates id esse impedit. Corrupti debitis suscipit aliquam, quod maiores ad similique earum nam tenetur, repudiandae perspiciatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste molestiae quaerat tenetur incidunt adipisci deleniti ducimus pariatur deserunt asperiores recusandae!",
        code: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, praesentium!\norem ipsum dolor sit, amet consectetur adipisicing elit.\nQuo, modi. Iure facere consectetur iusto!\nLorem ipsum dolor sit amet consectetur adipisicing elit.",
        up_count: 245,
        date: "20-10-2022"
    },
    {
        pfp: '/images/pfp.png',
        User_id: "User_2",
        comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, a? Optio rerum consequuntur hic corrupti deleniti molestias voluptas voluptates id esse impedit. Corrupti debitis suscipit aliquam, quod maiores ad similique earum nam tenetur, repudiandae perspiciatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste molestiae quaerat tenetur incidunt adipisci deleniti ducimus pariatur deserunt asperiores recusandae!",
        code: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, praesentium!\norem ipsum dolor sit, amet consectetur adipisicing elit.\nQuo, modi. Iure facere consectetur iusto!\nLorem ipsum dolor sit amet consectetur adipisicing elit.",
        up_count: 245,
        date: "20-10-2022"
    },
    {
        pfp: '/images/pfp.png',
        User_id: "User_2",
        comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, a? Optio rerum consequuntur hic corrupti deleniti molestias voluptas voluptates id esse impedit. Corrupti debitis suscipit aliquam, quod maiores ad similique earum nam tenetur, repudiandae perspiciatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste molestiae quaerat tenetur incidunt adipisci deleniti ducimus pariatur deserunt asperiores recusandae!",
        code: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, praesentium!\norem ipsum dolor sit, amet consectetur adipisicing elit.\nQuo, modi. Iure facere consectetur iusto!\nLorem ipsum dolor sit amet consectetur adipisicing elit.",
        up_count: 245,
        date: "20-10-2022"
    },
    {
        pfp: '/images/pfp.png',
        User_id: "User_2",
        comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, a? Optio rerum consequuntur hic corrupti deleniti molestias voluptas voluptates id esse impedit. Corrupti debitis suscipit aliquam, quod maiores ad similique earum nam tenetur, repudiandae perspiciatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste molestiae quaerat tenetur incidunt adipisci deleniti ducimus pariatur deserunt asperiores recusandae!",
        code: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, praesentium!\norem ipsum dolor sit, amet consectetur adipisicing elit.\nQuo, modi. Iure facere consectetur iusto!\nLorem ipsum dolor sit amet consectetur adipisicing elit.",
        up_count: 245,
        date: "20-10-2022"
    }
]

function commentsGenerator(){
    function commentGenerator(comment){
        return (
            <Comment
                pfp={comment.pfp}
                User_id={comment.User_id}
                comment={comment.comment}
                code={comment.code}
                up_count={comment.up_count}
                date={comment.date}
            />
        )
    }

    return(
        Comments.map(commentGenerator)
    )
}

export default function Question_data(){
        return(
        <>
        {
        questionHead()}
        {commentsGenerator()}
         
        </>
        )

}

