import { ReactNode, useState } from "react";
import { Icon } from "../../Icon/base/Icon";
import { Button } from "../../button/text/Button";

export const Modal = ({
  button,
  children,
}: {
  button?: string;
  children?: ReactNode;
}) => {
  const [modalState, setModalState] = useState(false);

  function openModal() {
    if (!modalState) setModalState(true);
  }
  function closeModal() {
    if (modalState) setModalState(false);
  }

  return (
    <div>
      {/* <Button
        color="primary"
        onClick={openModal}
        text={button || "New"}
      ></Button> */}
      {modalState ? (
        <div
          className={`w-screen h-screen flex absolute top-0 left-0 bg-black bg-opacity-80 items-center justify-center`}
        >
          <div
            className={`flex flex-col bg-white rounded-lg shadow-md py-10 px-5
            w-full self-end sm:w-2/3 sm:self-center max-w-[600px]
          `}
          >
            <button className="relative -top-5 self-end" onClick={closeModal}>
              <Icon name="MdOutlineClose" props={{ size: 30 }} />
            </button>
            <div>{children}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
