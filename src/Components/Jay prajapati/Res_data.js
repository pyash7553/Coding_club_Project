import Card from './Res_Card.js'
// import "/images/java.png" from './image/java.png'

const resArr = [
    {
        resimg: "/images/java.png",
        topic: "Java",
        n_count: 10,
        vd_count: 8,
        b_count: 5,
        qp_count: 6,
        sub_link: "rescontent?subject=java"
    },
    {
        resimg: "/images/java.png",
        topic: "Java",
        n_count: 10,
        vd_count: 8,
        b_count: 5,
        qp_count: 6,
        sub_link: "#"
    },
    {
        resimg: "/images/java.png",
        topic: "Java",
        n_count: 10,
        vd_count: 8,
        b_count: 5,
        qp_count: 6,
        sub_link: "#"
    },
    {
        resimg: "/images/java.png",
        topic: "Java",
        n_count: 10,
        vd_count: 8,
        b_count: 5,
        qp_count: 6,
        sub_link: "#"
    },
    {
        resimg: "/images/java.png",
        topic: "Java",
        n_count: 10,
        vd_count: 8,
        b_count: 5,
        qp_count: 6,
        sub_link: "#"
    },
    {
        resimg: "/images/java.png",
        topic: "Java",
        n_count: 10,
        vd_count: 8,
        b_count: 5,
        qp_count: 6,
        sub_link: "#"
    }
]

function resouorceGenerator(){
    function subjectGenerator(props){
        return (
            <Card
                resimg = {props.resimg}
                topic = {props.topic}
                n_count = {props.n_count}
                vd_count = {props.vd_count}
                b_count = {props.b_count}
                qp_count = {props.qp_count}
                sub_link = {props.sub_link}
            />
        )
    }

    return (
        resArr.map(subjectGenerator)
    )
}

export default resouorceGenerator