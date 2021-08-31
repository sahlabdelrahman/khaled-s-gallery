import { forwardRef, useContext } from "react";
import Opens from "../../../context/opens";

import Header from "../header/header";

import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContactList() {
  const { openContact, setOpenContact } = useContext(Opens);

  const handleClose = () => {
    setOpenContact(false);
  };

  return (
    <Dialog
      fullScreen
      open={openContact}
      onClose={handleClose}
      TransitionComponent={Transition}
      transitionDuration={500}
    >
      <Header />
      <main style={{ marginTop: "128px" }} className="relative">
        <div className="z-10 absolute left-0 top-0 w-full  bg-gray-contact-opacity py-12">
          <div className="container  md:grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-contact-heading font-open-sans mb-6">
                Let's talk business
              </h3>
              <p className=" text-lg text-black-item-paragraph font-normal">
                Now that you know a lot about me, let me know if you are
                interested to work with me.
              </p>
            </div>
            <div>
              <form>
                <div className="flex flex-col">
                  <label className="capitalize text-base font-normal mb-1">
                    name
                  </label>
                  <input
                    className="border border-gray-input-border bg-gray-input-background py-2 px-2 mb-8"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="capitalize text-base font-normal mb-1 ">
                    email
                  </label>
                  <input
                    className="border border-gray-input-border bg-gray-input-background py-2 px-2 mb-8"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="capitalize text-base font-normal mb-1">
                    message
                  </label>
                  <textarea className="h-24 border border-gray-input-border bg-gray-input-background py-2 px-2 mb-8"></textarea>
                </div>
                <div>
                  <button className="uppercase w-full flex justify-center items-center py-5 text-white bg-pink-primary font-bold text-lg">
                    let's get started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Dialog>
  );
}
