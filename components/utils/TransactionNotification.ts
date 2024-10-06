import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TransactionNotification = () => {
  const openNotification = (
    type: "success" | "info" | "warning" | "error",
    message: string
  ) => {
    toast[type](message, {
      position: "top-right", // Use position as a string
      autoClose: 3000, // Duration in milliseconds (3 seconds)
    });
  };

  const notifyTransactionSubmitted = () => {
    openNotification(
      "info",
      "Transaction submitted: Your transaction has been submitted successfully."
    );
  };

  const notifyTransactionProcessing = () => {
    openNotification(
      "info",
      "Transaction processing: Your transaction is currently being processed."
    );
  };

  const notifyTransactionSuccess = () => {
    openNotification(
      "success",
      "Transaction success: Your NFT has been successfully minted."
    );
  };

  const notifyTransactionFailed = () => {
    openNotification(
      "error",
      "Transaction failed: NFT not minted. Please try again."
    );
  };

  return {
    notifyTransactionSubmitted,
    notifyTransactionProcessing,
    notifyTransactionSuccess,
    notifyTransactionFailed,
  };
};

export default TransactionNotification;
