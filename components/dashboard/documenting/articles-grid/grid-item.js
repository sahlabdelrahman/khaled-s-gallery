import { forwardRef, useState } from "react";
import useInput from "../../../hooks/useInput";

import Link from "next/link";

import { db } from "../../../../server/firebase";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import Slide from "@material-ui/core/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function GridItem({ title, description, imageUrl, id }) {
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

  const handleDeleteArticle = async () => {
    try {
      await db.collection("articles").doc(id).delete();
      await handleCloseDelete();
      handleOpenIsDeleted();
    } catch (error) {
      alert("Error", error);
    }
  };

  const handleEdit = () => {
    setModTitle(title);
    setModDescription(description);
  };

  const handleUpdate = async () => {
    try {
      await db.collection("articles").doc(id).update({
        title: modTitle,
        description: modDescription,
      });

      await handleCloseEdit();
      handleOpenIsEdited();
    } catch (error) {
      alert("Error", error);
    }
  };

  const [openEdit, setOpenEdit] = useState(false);

  const handleOpenEdit = () => {
    setOpenEdit(true);
    handleEdit();
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const [openDelte, setOpenDelete] = useState(false);

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const [openIsEdited, setOpenIsEdited] = useState(false);

  const handleOpenIsEdited = () => {
    setOpenIsEdited(true);
  };

  const handleCloseIsEdited = () => {
    setOpenIsEdited(false);
  };

  const [openIsDeleted, setOpenIsDeleted] = useState(false);

  const handleOpenIsDeleted = () => {
    setOpenIsDeleted(true);
  };

  const handleCloseIsDeleted = () => {
    setOpenIsDeleted(false);
  };

  return (
    <>
      <div className={`font-open-sans`}>
        <header className="relative">
          <img className="w-full h-114" src={imageUrl} />
          <div className="absolute flex flex-col left-0 top-0 justify-end px-6 pb-5 w-full h-full bg-gray-item-opacity transition duration-500 ease-in-out opacity-0 hover:opacity-100">
            <div className="flex">
              <button
                onClick={handleOpenEdit}
                className="text-white bg-pink-primary py-1 px-4  mr-3 rounded-xl w-20 text-xs	font-extrabold capitalize flex justify-center items-center"
              >
                edit
              </button>
              <button
                onClick={handleOpenDelete}
                className="text-white bg-pink-primary py-1 px-4  rounded-xl w-20 text-xs	font-extrabold capitalize flex justify-center items-center"
              >
                delete
              </button>
            </div>
          </div>
        </header>
        <section className=" bg-gray-details-bg px-7 pt-6 pb-7">
          <Link
            href={`/dashboard/documenting/[id]`}
            as={`/dashboard/documenting/${id}`}
          >
            <a className="text-black-item-text font-bold text-2xl mb-4 inline-block">
              {title}
            </a>
          </Link>

          <p className="text-black-item-paragraph font-normal	leading-7	 text-lg flex items-start h-20 overflow-auto">
            {description}
          </p>
        </section>
      </div>
      <Dialog
        open={openEdit}
        onClose={handleCloseEdit}
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
            onClick={handleCloseEdit}
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
        open={openDelte}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Delete</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete the article?
          </DialogContentText>
        </DialogContent>
        <div className="flex items-center justify-end pt-2 pr-6 pb-2">
          <button
            className=" capitalize mr-3 px-5 py-2 mb-4 cursor-pointer shadow-button "
            onClick={handleCloseDelete}
          >
            cancel
          </button>
          <button
            className=" capitalize  mb-4 px-5 py-2 cursor-pointer bg-red-500 shadow-button text-white"
            onClick={handleDeleteArticle}
          >
            delete
          </button>
        </div>
      </Dialog>
      <Snackbar
        open={openIsDeleted}
        autoHideDuration={3000}
        onClose={handleCloseIsDeleted}
      >
        <Alert severity="warning" onClose={handleCloseIsDeleted}>
          Article is deleted!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openIsEdited}
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
