import {Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import * as React from "react";
import {changeCourse, changeTab} from "../redux/tab-action";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import {saveUser} from "../redux/user.action";
import {all_courses} from "../components/all_courses";



const useStyles = makeStyles({
    course: {
        width: "200px",
        height: "250px",
        marginLeft: "30px",
        marginTop: "50px",
        background: "#FFFFFF",
        '&:hover': {
            background: "rgba(45, 45, 45, 0.5)"
        },
        border: "2px solid #C4C4C4",
        boxSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), -7px -7px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px",
    },
});
const CourseList =({changeCourse, changeTab, user, state}) =>{
    const [courses, setCourses] = React.useState(user.enrolledCourses);
    async function handle() {
        axios.get("http://localhost:8080/api/" + user.user.type + "/get/" + user.user.bilkentId).then((response) => {
            console.log(response.data);
            setCourses(response.data.enrolledCourses);
        });
    }

    React.useEffect(() => {
        handle();
    }, []);
    React.useEffect(()=>{
        setCourses(user.enrolledCourses);
console.log("here");
    },[state])


    //const myCourses = ["CS-319", "CS-315", "CS-224", "CS-202"];


const classes = useStyles();
    function handler(name) {
        changeCourse(name);
        changeTab("Attendance");
    }
    return(
        <Grid container>
            {
                courses === undefined ? <span/> : courses.map(courseName =>  (
                    <Grid xs={6}>
                        <Link to={"/main"}>
                            <button onClick={() => handler(courseName)} className={classes.course}>
                                <div>
                                    <p>{courseName}</p>
                                </div>
                                <div>
                                    <p>Fall 2021-22</p>
                                </div>
                                <div>
                                    <p>Instructor: {all_courses.find(itm => courseName == itm.courseID ).instructor}</p>
                                </div>
                            </button>
                        </Link>
                    </Grid>
               ))
            }
        </Grid>
    )
};
const mapDispatchToProps = dispatch => ({
    changeCourse: course => dispatch(changeCourse(course)),
    changeTab: tab => dispatch(changeTab(tab)),
});

const mapStateToProps = (state) => {
    return {user: state.user,
    state:state};
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
