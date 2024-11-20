import { useVideo } from "@/contexts/VideoContext";
import { Play } from "lucide-react";
import BlurFade from "../../ui/blur-fade";
import HeroVideoDialog from "../../ui/hero-video-dialog";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern";

export default function VideoHeroSection() {
  const { openVideo } = useVideo();

  const handleClick = () => {
    console.log("Thumbnail clicked"); // Thêm log này
    openVideo();
  };

  return (
    <section id="video-section" className="relative">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]",
        )}
      />
      <VelocityScroll
        text="Walnut In Action"
        default_velocity={2}
        className="font-display adaptive-text text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-6xl md:leading-[5rem]"
      />
      <div className="container mx-auto py-14">
        <BlurFade delay={0.5} inView className="max-w-2xl mx-auto">
          <div className="relative cursor-pointer" onClick={handleClick}>
            <img
              src="assets/about/thumnail_video.png"
              alt="Video Demo"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary/10 flex items-center justify-center rounded-full backdrop-blur-md size-28">
                <div className="flex items-center justify-center bg-gradient-to-b from-primary/30 to-primary shadow-md rounded-full size-20">
                  <Play className="size-8 text-white fill-white" />
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
      <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/MZA-Uspz85w?si=hAaG9BvfRn-Afu1d"
        thumbnailSrc="assets/about/thumbnail_video.png"
        thumbnailAlt="Walnut Demo Video"
      />
    </section>
  );
}