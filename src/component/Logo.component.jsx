import { toast, Toaster } from "sonner";

const LogoComponent = () => {
  return (
    <div
      className="m-auto grid w-fit cursor-pointer place-items-center rounded-full border-2 border-transparent transition hover:border-red-300 focus-visible:border-2 focus-visible:border-red-300 focus-visible:outline-none"
      onClick={() => toast.info("Welcome to FireSign")}
    >
      <Toaster richColors />
      <img
        className="rounded-full bg-red-100 p-3"
        src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif"
        alt="🔥"
        width="60"
        height="60"
      />
    </div>
  );
};
export default LogoComponent;
