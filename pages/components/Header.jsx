import ShimmerButton from "@/components/ui/shimmer-button";
import GitHubIcon from "@mui/icons-material/GitHub";
import SparklesText from "@/components/ui/sparkles-text";

export default function Header() {
  return (
    <div className="h-14 flex flex-wrap">
      <div className="w-1/2">
        <div className="flex justify-start items-center h-full mx-2">
          <SparklesText
            className={"text-lg"}
            text="<Harvey />"
          />
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex justify-end items-center h-full mx-2">
          <a target="blank" href="https://github.com/hartzy0204">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                <GitHubIcon />
              </span>
            </ShimmerButton>
          </a>
        </div>
      </div>
    </div>
  );
}
