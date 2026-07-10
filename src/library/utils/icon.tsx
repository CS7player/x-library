export const IconSize = {
  SM: 16,
  MD: 20,
  LG: 24,
  XL: 32,
} as const;

export type IconSize = (typeof IconSize)[keyof typeof IconSize];

interface IconProps {
  size?: IconSize | number;
  color?: string;
  className?: string;
}

/*----------------------------------------------------------
  Base Icon
----------------------------------------------------------*/

interface IconBaseProps extends IconProps {
  children: React.ReactNode;
  viewBox?: string;
}

function IconBase({ children, size = IconSize.MD, className, viewBox = '0 0 24 24' }: IconBaseProps) {
  return (
    <svg width={size} height={size} viewBox={viewBox} className={className} fill="none">
      {children}
    </svg>
  );
}

function MenuIcon({ color = '#000', ...props }: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M18 6H6m12 4H6m12 4H6m12 4H6" />
    </IconBase>
  );
}

function SearchIcon({ color = '#000', ...props }: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke={color} strokeWidth={2} strokeLinecap="round" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
    </IconBase>
  );
}

function UserIcon({ color = '#000', ...props }: IconProps) {
  return (
    <IconBase {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
      />
    </IconBase>
  );
}

function InfoIcon({ color = '#000', ...props }: IconProps) {
  return (
    <IconBase {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
      />
    </IconBase>
  );
}

function MailIcon({ color = '#000', ...props }: IconProps) {
  return (
    <IconBase {...props}>
      <path
        fill={color}
        d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"
      />
      <path fill={color} d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
    </IconBase>
  );
}

function EyeIcon({ color = '#000', ...props }: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke={color} strokeWidth={2} d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
      <path stroke={color} strokeWidth={2} d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </IconBase>
  );
}

function EyeSlashIcon({ color = '#000', ...props }: IconProps) {
  return (
    <IconBase {...props}>
      <path
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </IconBase>
  );
}

function EditIcon({ color = '#000', ...props }: IconProps) {
  return (
    <IconBase {...props}>
      <path
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
      />
    </IconBase>
  );
}

function TrashIcon({ color = '#000', ...props }: IconProps) {
  return (
    <IconBase {...props}>
      <path
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
      />
    </IconBase>
  );
}

function CalendarIcon({ color = '#000', ...props }: IconProps) {
  return (
    <IconBase {...props}>
      <path
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 2v3m8-3v3M3 9h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
      />
    </IconBase>
  );
}

function ClockIcon({ color = '#000', ...props }: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </IconBase>
  );
}

function ChevronUpIcon({ color = '#000', ...props }: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="m16 14-4-4-4 4" />
    </IconBase>
  );
}

function ChevronDownIcon({ color = '#000', ...props }: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="m8 10 4 4 4-4" />
    </IconBase>
  );
}

function ChevronLeftIcon({ color = '#000', ...props }: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="m14 8-4 4 4 4" />
    </IconBase>
  );
}

function ChevronRightIcon({ color = '#000', ...props }: IconProps) {
  return (
    <IconBase {...props}>
      <path stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="m10 16 4-4-4-4" />
    </IconBase>
  );
}

export const Icons = {
  Menu: MenuIcon,
  Search: SearchIcon,
  User: UserIcon,
  Info: InfoIcon,
  Mail: MailIcon,
  Eye: EyeIcon,
  EyeSlash: EyeSlashIcon,
  Edit: EditIcon,
  Trash: TrashIcon,
  Calendar: CalendarIcon,
  Clock: ClockIcon,
  ChevronUp: ChevronUpIcon,
  ChevronDown: ChevronDownIcon,
  ChevronLeft: ChevronLeftIcon,
  ChevronRight: ChevronRightIcon,
} as const;
