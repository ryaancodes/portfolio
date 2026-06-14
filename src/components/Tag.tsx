interface TagProps {
  label: string;
  icon?: string;
}

/**
 * Small pill used for skill names and technology stacks.
 * `icon` is an optional Devicon class (e.g."devicon-react-original colored").
 */
export function Tag({ label, icon }: TagProps) {
  return (
    <span className="tag">
      {icon && <i className={icon} aria-hidden="true" />}
      {label}
    </span>
  );
}
