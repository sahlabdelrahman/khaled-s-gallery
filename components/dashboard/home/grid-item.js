import { useState, useContext, forwardRef } from "react";

import useInput from "../../hooks/useInput";
import FirebaseContext from "../../../context/firebase";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Skeleton from "@material-ui/lab/Skeleton";

import Slide from "@material-ui/core/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function GridItem({ src, id, title, description }) {
  const { db } = useContext(FirebaseContext);

  const {
    value: modTitle,
    resetValue: resetModTitle,
    bind: bindModTitle,
    setValue: setModTitle,
  } = useInput("");

  const {
    value: modDescription,
    resetValue: resetModDescription,
    bind: bindModDescription,
    setValue: setModDescription,
  } = useInput("");

  const [isEdited, setIsEdited] = useState(false);

  const handleClickIsEdited = () => {
    setIsEdited(true);
  };

  const handleCloseIsEdited = (event, reason) => {
    setIsEdited(false);
  };

  const handleEdit = () => {
    setModTitle(title);
    setModDescription(description);
  };

  const handleUpdate = async () => {
    try {
      await db.collection("images").doc(id).update({
        title: modTitle,
        description: modDescription,
      });
      await handleClose();
      handleClickIsEdited();
    } catch (error) {
      alert("Error", error);
    }
  };

  const handleDeletePhoto = async () => {
    try {
      await db.collection("images").doc(id).delete();
      await handleCloseOpenDelete();
      handleOpenPhotoIsDeleted();
    } catch (error) {
      alert("Error", error);
    }
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    handleEdit();
  };

  const handleClose = () => {
    setOpen(false);
    // resetModTitle();
    // resetModDescription();
  };

  const [openDelete, setOpenDelete] = useState(false);

  const handleOpenOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseOpenDelete = () => {
    setOpenDelete(false);
  };

  const [photoIsDeleted, setPhotoIsDeleted] = useState(false);

  const handleOpenPhotoIsDeleted = () => {
    setPhotoIsDeleted(true);
  };

  const handleClosePhotoIsDeleted = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setPhotoIsDeleted(false);
  };

  return (
    <>
      {src ? (
        <div className="relative shadow-button ">
          <img src={src} className="w-full" />
          <div className="absolute flex flex-col left-0 top-0 justify-end px-6 pb-5 w-full h-full bg-gray-item-opacity transition duration-500 ease-in-out opacity-0 hover:opacity-100">
            <div className="flex">
              <button
                onClick={handleClickOpen}
                className="text-white bg-pink-primary py-1 px-4 mb-3 mr-3 rounded-xl w-20 text-xs	font-extrabold capitalize flex justify-center items-center"
              >
                edit
              </button>
              <button
                onClick={handleOpenOpenDelete}
                className="text-white bg-pink-primary py-1 px-4 mb-3 rounded-xl w-20 text-xs	font-extrabold capitalize flex justify-center items-center"
              >
                delete
              </button>
            </div>
            <h4 className="font-open-sans text-xl lg:text-2xl	font-bold	leading-9 text-white cursor-pointer">
              {title}
            </h4>
          </div>
        </div>
      ) : (
        <Skeleton sx={{ height: 300 }} animation="wave" variant="rectangular" />
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To modify the details, please enter the new title and description
            here. We will update the details immediately
          </DialogContentText>
          <div className="flex flex-col">
            <label className="capitalize text-base font-normal mb-1">
              tile
            </label>
            <input
              className="border border-gray-input-border bg-gray-input-background py-2 px-2 mb-4"
              type="text"
              {...bindModTitle}
            />
          </div>
          <div className="flex flex-col">
            <label className="capitalize text-base font-normal mb-1">
              description
            </label>
            <input
              className="border border-gray-input-border bg-gray-input-background py-2 px-2 mb-4"
              type="text"
              {...bindModDescription}
            />
          </div>
        </DialogContent>
        <div className="flex items-center justify-end pr-6 pb-2">
          <button
            className=" capitalize mr-3 px-5 py-2 mb-4 cursor-pointer shadow-button "
            onClick={handleClose}
          >
            cancel
          </button>
          <button
            className=" capitalize  mb-4 px-5 py-2 cursor-pointer bg-pink-primary shadow-button text-white"
            onClick={handleUpdate}
          >
            update
          </button>
        </div>
      </Dialog>
      <Dialog
        open={openDelete}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseOpenDelete}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Delete</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete the photo?
          </DialogContentText>
        </DialogContent>
        <div className="flex items-center justify-end pt-2 pr-6 pb-2">
          <button
            className=" capitalize mr-3 px-5 py-2 mb-4 cursor-pointer shadow-button "
            onClick={handleCloseOpenDelete}
          >
            cancel
          </button>
          <button
            className=" capitalize  mb-4 px-5 py-2 cursor-pointer bg-red-500 shadow-button text-white"
            onClick={handleDeletePhoto}
          >
            delete
          </button>
        </div>
      </Dialog>
      <Snackbar
        open={photoIsDeleted}
        autoHideDuration={3000}
        onClose={handleClosePhotoIsDeleted}
      >
        <Alert severity="warning" onClose={handleClosePhotoIsDeleted}>
          Photo is deleted!
        </Alert>
      </Snackbar>
      <Snackbar
        open={isEdited}
        autoHideDuration={3000}
        onClose={handleCloseIsEdited}
      >
        <Alert onClose={handleCloseIsEdited} severity="info">
          Details is edited!
        </Alert>
      </Snackbar>
    </>
  );
}
