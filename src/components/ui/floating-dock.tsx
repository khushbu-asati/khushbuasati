import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <div className="fixed bottom-16 lg:bottom-10 z-50 flex justify-center w-full">
      <FloatingDockDesktop items={items} className={desktopClassName} />
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
    const pathname = usePathname();
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto h-16 items-end gap-4 rounded-[100px] bg-gray-50 px-4 pb-3 flex dark:bg-neutral-900",
        className
      )}
      style={{
        background:
          "linear-gradient(180deg, rgba(14, 28, 41, 0.5) -53%, rgb(14, 28, 41) 100%)",
        boxShadow:
          "rgba(0, 0, 0, 0.28) 0px 0.706592px 0.706592px -0.583333px, rgba(0, 0, 0, 0.27) 0px 1.80656px 1.80656px -1.16667px, rgba(0, 0, 0, 0.26) 0px 3.62176px 3.62176px -1.75px, rgba(0, 0, 0, 0.24) 0px 6.8656px 6.8656px -2.33333px, rgba(0, 0, 0, 0.21) 0px 13.6468px 13.6468px -2.91667px, rgba(0, 0, 0, 0.12) 0px 30px 30px -3.5px, rgba(255, 255, 255, 0.15) 0px 0px 0px 2px inset",
        backdropFilter: "blur(8px)",
      }}
    >
      {items.map((item, index) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} href={`${index === 0 ? pathname === "/" ? "#" + items[0].href : "/" : item.href}`} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-300 border-2 hover:bg-gray-200"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-primary px-2 py-0.5 text-xs whitespace-pre text-white dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
          <span className="hidden hover:block">{title}</span>
        </motion.div>
      </motion.div>
    </a>
  );
}
