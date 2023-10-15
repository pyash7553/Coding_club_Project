import Discussion_block from "./Discussion_block.js";
// import pfp from '/images/pfp.png'


const discussionArr = [
    {
        pfp : '/images/pfp.png',
        User_id : "User 1",
        question :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime nihil autem dolore sit ut tempore cumque quas excepturi? Dolorum, explicabo?",
        tags : ["Java","OOP"],
        date : "22-09-2023",
        id : "question?id=5000"
    },
    {
        pfp : '/images/pfp.png',
        User_id : "User 2",
        question :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime nihil autem dolore sit ut tempore cumque quas excepturi? Dolorum, explicabo?",
        tags : ["Java"],
        date : "22-09-2023",
        id : "?id=5000"
    },
    {
        pfp : '/images/pfp.png',
        User_id : "User 3",
        question :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime nihil autem dolore sit ut tempore cumque quas excepturi? Dolorum, explicabo?",
        tags : ["C++","OOP"],
        date : "22-09-2023",
        id : "?id=5000"
    },
    {
        pfp : '/images/pfp.png',
        User_id : "User 4",
        question :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime nihil autem dolore sit ut tempore cumque quas excepturi? Dolorum, explicabo?",
        tags : ["DSA","Linked List"],
        date : "22-09-2023",
        id : "?id=5000"
    }
]

function forumGenerator(){
    function makeDiscussion(disc){
        return (<Discussion_block
            pfp = {disc.pfp}
            User_id = {disc.User_id}
            question = {disc.question}
            tags = {disc.tags}
            date = {disc.date}
            id = {disc.id}
        />)
    }

    return (
        discussionArr.map(makeDiscussion)
    )
}

export default forumGenerator