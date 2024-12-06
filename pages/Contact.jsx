import { BorderBeam } from "@/components/ui/border-beam";
import HyperText from "@/components/ui/hyper-text";
import ShinyButton from "@/components/ui/shiny-button";
import TextField from "@mui/material/TextField";

export default function Contact() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex h-[500px] w-[500px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <div
          className="bg-blue-200 rounded-lg h-[480px] w-[480px]"
        >
          <div className="mt-12">
            <div className="flex justify-center">
              <HyperText
                className="text-4xl font-bold text-black dark:text-white"
                text="Email"
              />
            </div>
            <div className="flex justify-center">
              <TextField
                required
                id="outlined-required"
                label="Required"
                size="small"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <HyperText
                className="text-4xl font-bold text-black dark:text-white"
                text="Message"
              />
            </div>
            <div className="flex justify-center">
              <div>
                <TextField
                  id="filled-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  variant="filled"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center mt-2">
              <ShinyButton>Send Message</ShinyButton>
            </div>
          </div>
        </div>
        <BorderBeam size={250} duration={12} delay={9} />
      </div>
    </div>
  );
}
