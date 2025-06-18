export default function CardWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full gap-2 bg-slate-100 text-text-primary px-2 pt-[6px] pb-[30px] rounded-2xl ${className}`}
      style={{
        boxShadow:
          "0 .5971439051427296px .5971439051427296px -.875px #10314d24, 0 1.8108796073283884px 1.8108796073283884px -1.75px #10314d21, 0 4.786990141113346px 4.786990141113346px -2.625px #10314d1c, 0 15px 15px -3.5px #10314d0f",
      }}
    >
      {children}
    </div>
  );
}
