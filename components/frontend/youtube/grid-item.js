// import { useState, useContext, forwardRef } from "react";

// import useInput from "../../hooks/useInput";
// import FirebaseContext from "../../../context/firebase";

// import Dialog from "@material-ui/core/Dialog";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";

// import Open from "../../../public/icons/menu.svg";
// import Edit from "../../../public/icons/edit.svg";
// import Delete from "../../../public/icons/delete.svg";

// import Snackbar from "@material-ui/core/Snackbar";
// import MuiAlert from "@material-ui/lab/Alert";

// import Slide from "@material-ui/core/Slide";

// const Transition = forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// export default function GridItem({
//   id,
//   title,
//   description,
//   videoId,
//   openCard,
//   items,
//   handleItems,
//   dashboard,
// }) {
//   const [open, setOpen] = useState(false);

//   const [isEdited, setIsEdited] = useState(false);

//   const handleClickIsEdited = () => {
//     setIsEdited(true);
//   };

//   const handleCloseIsEdited = (event, reason) => {
//     setIsEdited(false);
//   };

//   const handelOpen = (id) => {
//     const newItems = items?.map((item) => {
//       if (item.id === id) {
//         if (item["openCard"] == true) {
//           item["openCard"] = false;
//           return { ...item };
//         } else {
//           item["openCard"] = true;
//           return { ...item };
//         }
//       } else {
//         if (item["openCard"] == false) {
//           return { ...item };
//         }
//         item["openCard"] = false;
//         return { ...item };
//       }
//     });
//     handleItems([...newItems]);
//   };

//   const { db } = useContext(FirebaseContext);
//   const {
//     value: modTitle,
//     resetValue: resetModTitle,
//     bind: bindModTitle,
//     setValue: setModTitle,
//   } = useInput("");

//   const {
//     value: modDescription,
//     resetValue: resetModDescription,
//     bind: bindModDescription,
//     setValue: setModDescription,
//   } = useInput("");

//   const handleDeleteVideo = async () => {
//     await db.collection("videos").doc(id).delete();

//     handleOpenVideoIsDeleted();
//     handleCloseOpenDelete();
//   };

//   const handleEdit = () => {
//     setModTitle(title);
//     setModDescription(description);
//   };

//   const handleUpdate = async () => {
//     await db.collection("videos").doc(id).update({
//       title: modTitle,
//       description: modDescription,
//     });
//     handleClickIsEdited();
//     handleClose();
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//     handleEdit();
//   };

//   const handleClose = () => {
//     setOpen(false);
//     // resetModTitle();
//     // resetModDescription();
//   };

//   const [openDelete, setOpenDelete] = useState(false);

//   const handleOpenOpenDelete = () => {
//     setOpenDelete(true);
//   };

//   const handleCloseOpenDelete = () => {
//     setOpenDelete(false);
//   };

//   const [videoIsDeleted, setVideoIsDeleted] = useState(false);

//   const handleOpenVideoIsDeleted = () => {
//     setVideoIsDeleted(true);
//   };

//   const handleCloseVideoIsDeleted = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }

//     setVideoIsDeleted(false);
//   };

//   return (
//     <div
//       className={`video flex items-center relative ${
//         openCard ? "padding-bottom" : ""
//       } `}
//     >
//       <div
//         className={`w-3/5 min-h-72 h-72  absolute z-10 transition-all duration-500 ease-in-out left-1/2 transform -translate-x-1/2 ${
//           openCard ? "left-open" : ""
//         } `}
//       >
//         <div className="flex items-center h-full">
//           <div className="flex flex-col w-1/12">
//             <button
//               onClick={() => handelOpen(id)}
//               className="bg-pink-primary w-10 h-10 flex justify-center items-center mb-4"
//             >
//               <img src={Open} alt="open video" />
//             </button>
//             {dashboard && (
//               <>
//                 <button
//                   onClick={handleClickOpen}
//                   className="bg-pink-primary w-10 h-10 flex justify-center items-center mb-4"
//                 >
//                   <img src={Edit} alt="edit video" />
//                 </button>
//                 <button
//                   onClick={handleOpenOpenDelete}
//                   className="bg-pink-primary w-10 h-10 flex justify-center items-center"
//                 >
//                   <img src={Delete} alt="delete video" />
//                 </button>
//               </>
//             )}
//             {/* <button className="bg-pink-primary w-10 h-10 flex justify-center items-center">
//               <img src={Send} alt="send video" />
//             </button> */}
//           </div>
//           <div className="w-11/12 h-full">
//             <iframe
//               src={videoId || ""}
//               title={title}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="w-full h-full min-h-72"
//             />
//           </div>
//         </div>
//       </div>
//       <div
//         className={`w-2/5 h-64 bg-gray-video px-20 py-9  font-open-sans absolute  z-0 transition-all duration-500 ease-in-out right-1/2  transform translate-x-1/2 ${
//           openCard ? "right-open " : ""
//         } `}
//       >
//         <h4 className=" text-lg lg:text-2xl font-bold mb-4">{title}</h4>
//         <p className=" h-28 overflow-auto text-gray-dark-gray text-sm lg:text-base font-normal mb-5">
//           {description}
//         </p>
//         <a href="#" className="uppercase text-sm text-pink-primary font-normal">
//           read more
//         </a>
//       </div>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Transition}
//         keepMounted
//         aria-labelledby="form-dialog-title"
//       >
//         <DialogTitle id="form-dialog-title">Edit</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To modify the details, please enter the new title and description
//             here. We will update the details immediately
//           </DialogContentText>
//           <div className="flex flex-col">
//             <label className="capitalize text-base font-normal mb-1">
//               tile
//             </label>
//             <input
//               className="border border-gray-input-border bg-gray-input-background py-2 px-2 mb-4"
//               type="text"
//               {...bindModTitle}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="capitalize text-base font-normal mb-1">
//               description
//             </label>
//             <input
//               className="border border-gray-input-border bg-gray-input-background py-2 px-2 mb-4"
//               type="text"
//               {...bindModDescription}
//             />
//           </div>
//         </DialogContent>
//         <div className="flex items-center justify-end pr-6 pb-2">
//           <button
//             className=" capitalize mr-3 px-5 py-2 mb-4 cursor-pointer shadow-button "
//             onClick={handleClose}
//           >
//             cancel
//           </button>
//           <button
//             className=" capitalize  mb-4 px-5 py-2 cursor-pointer bg-pink-primary shadow-button text-white"
//             onClick={handleUpdate}
//           >
//             update
//           </button>
//         </div>
//       </Dialog>
//       <Dialog
//         open={openDelete}
//         TransitionComponent={Transition}
//         keepMounted
//         onClose={handleCloseOpenDelete}
//         aria-labelledby="alert-dialog-slide-title"
//         aria-describedby="alert-dialog-slide-description"
//       >
//         <DialogTitle id="alert-dialog-slide-title">Delete</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-slide-description">
//             Are you sure you want to delete the video?
//           </DialogContentText>
//         </DialogContent>
//         <div className="flex items-center justify-end pt-2 pr-6 pb-2">
//           <button
//             className=" capitalize mr-3 px-5 py-2 mb-4 cursor-pointer shadow-button "
//             onClick={handleCloseOpenDelete}
//           >
//             cancel
//           </button>
//           <button
//             className=" capitalize  mb-4 px-5 py-2 cursor-pointer bg-red-500 shadow-button text-white"
//             onClick={handleDeleteVideo}
//           >
//             delete
//           </button>
//         </div>
//       </Dialog>
//       <Snackbar
//         open={videoIsDeleted}
//         autoHideDuration={3000}
//         onClose={handleCloseVideoIsDeleted}
//       >
//         <Alert severity="warning" onClose={handleCloseVideoIsDeleted}>
//           Video is deleted!
//         </Alert>
//       </Snackbar>
//       <Snackbar
//         open={isEdited}
//         autoHideDuration={3000}
//         onClose={handleCloseIsEdited}
//       >
//         <Alert onClose={handleCloseIsEdited} severity="info">
//           Video is edited!
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// }

// // absolute ${openCard ? "relative" : ""}

export default function GridItem({ id }) {
  return <div>id: {id}</div>;
}
