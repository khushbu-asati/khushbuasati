export default function SectionTitle({
  name,
  title,
  description,
  Icon,
}: {
  name: string;
  title: string;
  description: string;
  Icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full text-text-primary">
      <div
        className="flex items-center gap-2 w-fit border-[1px] border-solid border-border rounded-[60px] bg-background py-2 px-5"
        style={{
          boxShadow: "0px 0px 0px 2px rgba(241, 242, 251, 0.9)",
        }}
      >
        {Icon}
        <h2 className="text-sm">{name}</h2>
      </div>
      <h1 className="text-[28px] md:text-[36px] lg:text-[44px] max-w-[630px] text-center font-medium">{title}</h1>
      <span className="text-[16px] text-center">{description}</span>
    </div>
  );
}
