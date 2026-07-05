// import { useSnackbar, type VariantType } from "notistack";

// export function useAppSnackbar() {
//   const { enqueueSnackbar } = useSnackbar();

//   const show = (message: string, variant: VariantType = "default") => {
//     enqueueSnackbar(message, { variant });
//   };

//   return {
//     success: (msg: string) => show(msg, "success"),
//     error: (msg: string) => show(msg, "error"),
//     info: (msg: string) => show(msg, "info"),
//     warning: (msg: string) => show(msg, "warning"),
//     default: (msg: string) => show(msg),
//   };
// }

// // not using and can be used later in the future for snackbar alert, replacing SnackBar UI.