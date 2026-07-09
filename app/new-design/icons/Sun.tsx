export default function Sun({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.5005 45.6176C23.7146 45.6176 17.3828 39.2859 17.3828 31.5C17.3828 23.7141 23.7146 17.3823 31.5005 17.3823C39.2863 17.3823 45.6181 23.7141 45.6181 31.5C45.6181 39.2859 39.2863 45.6176 31.5005 45.6176Z" stroke="currentColor" strokeWidth="3"/>
      <path d="M31.5 1.5V8.55882M61.5 31.5H54.4412M8.55882 31.5H1.5M31.5 54.4412V61.5M47.3824 15.6176L52.6765 10.3235M10.3235 52.6765L15.6176 47.3824M10.3235 10.3235L15.6176 15.6176M47.3824 47.3824L52.6765 52.6765" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}
