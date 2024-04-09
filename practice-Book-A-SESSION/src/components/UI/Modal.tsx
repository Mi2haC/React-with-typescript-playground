import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// Modalに対しての操作はModalHandleを通して外部にさらけ出す
export type ModalHandle = {
  open: () => void;
};

type ModalProps = {
  children: React.ReactNode;
  // onCloseは<dialog>からトリガーされるデフォルトのcloseイベントを伝搬させる際に使用する（例としてESCを押下した時）
  onClose: () => void;
};

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
  { children, onClose },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  // 外部にさらけ出す命令的操作を設定する
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        if (dialog.current) {
          dialog.current.showModal(); // showModal()は<dialog>のビルトインメソッド
        }
      },
    };
  });

  // onCloseはユーザがESCキー押下などのビルトインメカニズムを使用して閉じた際の為に設定する
  return createPortal(
    <dialog ref={dialog} className="modal" onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
