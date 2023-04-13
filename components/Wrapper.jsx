export default function Wrapper({ children, className }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1280px] px-5 md:px-10 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}
