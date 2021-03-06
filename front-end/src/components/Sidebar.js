import {makeStyles} from "@material-ui/core/styles";
import userLogo from "../images/userLogo.png";
import {changeTab} from "../redux/tab-action";
import {connect} from "react-redux";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";

import SidebarButton from "./SidebarButton";

const useStyles = makeStyles({
    sidebar: {
        display: "flex",
        flexDirection: "column",
        background: "#C4C4C4",
        width: "250px",
        height: "600px",
        padding: "20px",
    },
    buttonLeftPart: {
        cursor: "pointer",
        display: "flex",
        marginLeft: "10%",
        marginTop: "30px",
        background: "rgba(45, 45, 45, 0.24)",

        borderRadius: "20px",
        borderColor: "#000000",
        color: "#000000",
        width: "200px",
        height: "40px",
        alignItems: "center",
        justifyContent: "center",
    },
    userLogo: {
        alignItems: "center",
        marginLeft: "80px",
    },
    userName: {
        textAlign: "center",
    }

});

const Sidebar = ({changeTab, user}) => {
    const classes = useStyles();
    const [isOpen, setOpen] = React.useState(false);
    console.log(user);

//    useEffect(() => {
  //  }, [isOpen, setOpen, changeTab]);

    function handleButtons(covid19Status) {
        changeTab(covid19Status);
    }

    function handleLogout(value) {
        setOpen(value);
    }

    return (
        <div className={classes.sidebar}>
            <div className={classes.userLogo}>
                <img src={userLogo} alt={""}/>
            </div>
            <div className={classes.userName}>
                <span>{user.user.userName}</span>
            </div>

            <SidebarButton name={"Covid19 Status"} className={classes.buttonLeftPart } onClick={() => handleButtons("Covid19Status")}/>

            <SidebarButton className={classes.buttonLeftPart} name={"Test Schedule"} onClick={() => handleButtons("TestSchedule")}/>

            <SidebarButton className={classes.buttonLeftPart} name={"Edit Profile"} onClick={() => handleButtons("EditProfile")}/>
            <SidebarButton className={classes.buttonLeftPart} name={"Help"} onClick={() => handleButtons("Help")}/>
            <SidebarButton className={classes.buttonLeftPart} onClick={() =>
                setOpen(true)
            } name={"Log out"}/>


            <div>
                <Dialog
                    open={isOpen}
                    onClose={()=>handleLogout(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Do you want to log out?"}
                    </DialogTitle>
                    <DialogActions>
                        <Link to={"/"}><Button onClick={()=>changeTab("Courses")
                        }>Yes</Button></Link>
                        <Button onClick={()=>handleLogout(false)} autoFocus>
                            No
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>


        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    changeTab: tab => dispatch(changeTab(tab)),
});
const mapStateToProps = (state) => {
    return {user: state.user};
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

