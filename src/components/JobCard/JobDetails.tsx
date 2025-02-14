import { Job } from "../../types/job";

type JobDetailsProps = Pick<Job, 'postedAt' | 'contract' | 'location'>;

export default function JobDetails({ postedAt, contract, location }: JobDetailsProps) {
  return (
    <div className="flex items-center gap-3 text-[var(--dark-grayish-cyan)]">
        <p>{postedAt}</p>
        <span>.</span>
        <p>{contract}</p>
        <span>.</span>
        <p>{location}</p>
    </div>
  )
}
