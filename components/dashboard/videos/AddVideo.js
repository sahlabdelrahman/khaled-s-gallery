// import { useState, useContext, forwardRef } from "react";
// import useInput from "../../hooks/useInput";

// import FirebaseContext from "../../../context/firebase";
// import { timestamp } from "../../../server/firebase";

// import Dialog from "@material-ui/core/Dialog";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";

// import Snackbar from "@material-ui/core/Snackbar";
// import MuiAlert from "@material-ui/lab/Alert";

// import Slide from "@material-ui/core/Slide";

// const Transition = forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// function Alert(props) {
//   return <MuiAlert elevation={3} variant="filled" {...props} />;
// }

// export default function AddVideo() {
//   const { db } = useContext(FirebaseContext);

//   const {
//     value: title,
//     resetValue: resetTitle,
//     bind: bindTitle,
//   } = useInput("");

//   const {
//     value: description,
//     resetValue: resetDescription,
//     bind: bindDescription,
//   } = useInput("");

//   const {
//     value: videoId,
//     resetValue: resetVideoId,
//     bind: bindVideoId,
//   } = useInput("");

//   const { value: path, setValue: setPath } = useInput("");

//   const handleAddVideo = async (e) => {
//     e.preventDefault();

//     // Add url video and details to firestore
//     try {
//       await db
//         .collection("videos")
//         .add({
//           videoId: `${path}${videoId}`,
//           title: title,
//           description: description,
//           timestamp: timestamp,
//         })
//         .then(() => {
//           handleOpenSuccess();
//         });

//       handleClose();
//     } catch (error) {
//       alert("Error getting documents: ", error);
//     }
//   };

//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     resetTitle();
//     resetDescription();
//     resetVideoId();
//     setPath("");
//   };

//   const [success, setSuccess] = useState(false);

//   const handleOpenSuccess = () => {
//     setSuccess(true);
//   };

//   const handleCloseSuccess = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }

//     setSuccess(false);
//   };

//   return (
//     <div>
//       {/* <form onSubmit={handleAddVideo}>

//         <button type="submit">Add Video</button>
//       </form> */}
//       <div className="flex justify-end items-center container py-2">
//         <button
//           onClick={handleClickOpen}
//           className="flex justify-center capitalize px-3 py-1 cursor-pointer bg-pink-primary shadow-button text-2xl font-bold text-white"
//         >
//           +
//         </button>
//       </div>

//       <Dialog
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Transition}
//         keepMounted
//         aria-labelledby="form-dialog-title"
//       >
//         <DialogTitle id="form-dialog-title">Add</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Add a new video with description and title{" "}
//             <span className="text-red-500">*</span>Just put the video ID without
//             the link
//           </DialogContentText>
//           <form onSubmit={handleAddVideo}>
//             <div className="flex flex-col">
//               <label className="capitalize text-base font-normal mb-1">
//                 tile
//               </label>
//               <input
//                 className="border border-gray-input-border bg-gray-input-background py-2 px-2 mb-4"
//                 type="text"
//                 {...bindTitle}
//                 required
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="capitalize text-base font-normal mb-1">
//                 description
//               </label>
//               <input
//                 className="border border-gray-input-border bg-gray-input-background py-2 px-2 mb-4"
//                 type="text"
//                 {...bindDescription}
//                 required
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="capitalize text-base font-normal mb-1">
//                 Video id:
//               </label>
//               <input
//                 className="border border-gray-input-border bg-gray-input-background py-2 px-2 mb-4"
//                 type="text"
//                 {...bindVideoId}
//                 required
//               />
//             </div>
//             <div className="flex">
//               <div className="mr-4">
//                 <input
//                   type="radio"
//                   name="path"
//                   id="youtube"
//                   required
//                   checked={path == "https://www.youtube.com/embed/"}
//                   onChange={(e) => setPath("https://www.youtube.com/embed/")}
//                 />
//                 <label
//                   className="capitalize text-base font-normal ml-2"
//                   htmlFor="youtube"
//                 >
//                   youtube
//                 </label>
//               </div>
//               <div>
//                 <input
//                   type="radio"
//                   name="path"
//                   id="vimeo"
//                   required
//                   checked={path == "https://player.vimeo.com/video/"}
//                   onChange={(e) => setPath("https://player.vimeo.com/video/")}
//                 />
//                 <label
//                   className="capitalize text-base font-normal ml-2"
//                   htmlFor="vimeo"
//                 >
//                   vimeo
//                 </label>
//               </div>
//             </div>
//             <div className="flex items-center justify-end pt-6 ">
//               <button
//                 className=" capitalize mr-3 px-5 py-2 mb-4 cursor-pointer shadow-button "
//                 onClick={handleClose}
//               >
//                 cancel
//               </button>
//               <button
//                 type="submit"
//                 onClick={handleAddVideo}
//                 className=" capitalize  mb-4 px-5 py-2 cursor-pointer bg-pink-primary shadow-button text-white"
//               >
//                 Add
//               </button>
//             </div>
//           </form>
//         </DialogContent>
//       </Dialog>
//       <Snackbar
//         open={success}
//         autoHideDuration={3000}
//         onClose={handleCloseSuccess}
//       >
//         <Alert onClose={handleCloseSuccess} severity="success">
//           Video is added
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// }

// // https://www.youtube.com/embed/W4vh5qq6QQU
// // https://youtu.be/W4vh5qq6QQU
export default function AddVideo() {
  return <div>Hello Add video</div>;
}
