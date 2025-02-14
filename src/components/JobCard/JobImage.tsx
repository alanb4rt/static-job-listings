import { Job } from "../../types/job";
import { getImageURL } from "../../utils/getImageURL";

type JobImageProps = Pick<Job, 'logo' | 'company'>;

export default function JobImage({ logo, company }: JobImageProps) {
  const logoURL = getImageURL(logo.slice(9));

  return (
    <img
        className="size-16 md:size-24 -mt-16 md:m-0"
        src={logoURL}
        alt={`${company} logo`}
        loading="lazy"
      />
  )
}
