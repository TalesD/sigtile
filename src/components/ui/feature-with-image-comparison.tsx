import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";

interface FeatureProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
  description?: string;
  badgeText?: string;
}

function Feature({
  beforeImage,
  afterImage,
  title = "Amazing Transformation!",
  description = "See the stunning difference our professional flooring installation makes.",
  badgeText = "Before & After"
}: FeatureProps) {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }
    
    const percentage = (x / rect.width) * 100;
    setInset(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="w-full py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
             {/* Badge Text 
          <div>
            <Badge>{badgeText}</Badge>
          </div>
          */}
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              {title}
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="pt-12 w-full">
            <div
              className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              <div
                className="bg-muted h-full w-1 absolute z-20 top-0 -ml-1 select-none"
                style={{
                  left: inset + "%",
                }}
              >
                <button
                  className="bg-muted rounded hover:scale-110 transition-all w-5 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-2 z-30 cursor-ew-resize flex justify-center items-center"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                >
                  <GripVertical className="h-4 w-4 select-none" />
                </button>
              </div>
              {/* After Image */}
              <img
                src={afterImage}
                alt="After renovation"
                className="absolute left-0 top-0 z-10 w-full h-full aspect-video rounded-2xl select-none border object-cover"
                style={{
                  clipPath: "inset(0 0 0 " + inset + "%)",
                }}
              />
              {/* Before Image */}
              <img
                src={beforeImage}
                alt="Before renovation"
                className="absolute left-0 top-0 w-full h-full aspect-video rounded-2xl select-none border object-cover"
              />
              {/* Labels */}
              <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm font-semibold z-30">
                Before
              </div>
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm font-semibold z-30">
                After
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };

