import { ReactNode, useCallback, useEffect, useState } from "react";
import { Container, ContainerType } from "../../primitives/container/Container";
import { ITextButton, TextButton } from "../../buttons/text/TextButton";
import IconButton from "../../buttons/icon/IconButton";

// * Define Types
export interface IModalLayout {
  buttonProps: ITextButton;
  children: ReactNode;
}

// * Define Styles
const STYLE_MODAL =
  "flex flex-col bg-white max-w-[600px] w-full rounded-t-lg shadow-md p-5 self-end sm:rounded-lg sm:w-2/3 sm:self-center";

// * Component
export const ModalLayout = ({ buttonProps, children }: IModalLayout) => {
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (modalState) {
        document.addEventListener("click", isModalOutsideClick, true);
      } else {
        document.removeEventListener("click", isModalOutsideClick, true);
      }
    }, 500);
  }, [modalState]);

  function openModal() {
    setModalState(true);
  }

  function closeModal() {
    setModalState(false);
  }

  // use callback to let react know this is always same function
  const isModalOutsideClick = useCallback((e: MouseEvent) => {
    const { left, right, top, bottom } = document
      .getElementById("MY_MODAL")
      .getBoundingClientRect();

    const isOutside =
      e.clientX < left ||
      e.clientX > right ||
      e.clientY < top ||
      e.clientY > bottom;

    if (isOutside) closeModal();
  }, []);

  return (
    <div>
      <TextButton {...buttonProps} onClick={openModal} />
      {modalState ? (
        <Container type={ContainerType.overlay}>
          <div id={`MY_MODAL`} className={`${STYLE_MODAL}`}>
            <div className="self-end">
              <IconButton icon="GrFormClose" onClick={closeModal} />
            </div>
            {children}
          </div>
        </Container>
      ) : (
        <></>
      )}
    </div>
  );
};
