import Swal from "sweetalert2";

export const toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2200,
  timerProgressBar: true,
  background: "#2a1f17",
  color: "#fef3c7",
  iconColor: "#f59e0b",
  customClass: {
    popup: "shadow-glow",
  },
});

export const confirmFire = (opts: {
  title: string;
  text?: string;
  confirmText?: string;
  icon?: "success" | "warning" | "info" | "question";
}) =>
  Swal.fire({
    title: opts.title,
    text: opts.text,
    icon: opts.icon ?? "question",
    showCancelButton: true,
    confirmButtonText: opts.confirmText ?? "Yes",
    cancelButtonText: "Cancel",
    background: "#1f1611",
    color: "#fef3c7",
    confirmButtonColor: "#f59e0b",
    cancelButtonColor: "#52525b",
    customClass: { popup: "shadow-glow" },
  });

export { Swal };
