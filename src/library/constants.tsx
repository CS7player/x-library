
export const Icon = {
  // User
  User: 'fa-solid fa-user',
  Users: 'fa-solid fa-users',
  UserPlus: 'fa-solid fa-user-plus',
  // Search
  Search: 'fa-solid fa-magnifying-glass',
  SearchPlus: 'fa-solid fa-magnifying-glass-plus',
  SearchMinus: 'fa-solid fa-magnifying-glass-minus',
  // Authentication
  Lock: 'fa-solid fa-lock',
  Unlock: 'fa-solid fa-lock-open',
  Key: 'fa-solid fa-key',
  Eye: 'fa-solid fa-eye',
  EyeSlash: 'fa-solid fa-eye-slash',
  // Edit
  Pen: 'fa-solid fa-pen',
  Pencil: 'fa-solid fa-pencil',
  Edit: 'fa-solid fa-pen-to-square',
  Eraser: 'fa-solid fa-eraser',
  // Email
  Mail: 'fa-solid fa-envelope',
  MailOpen: 'fa-solid fa-envelope-open',
  PaperPlane: 'fa-solid fa-paper-plane',
  // Files
  File: 'fa-solid fa-file',
  FileText: 'fa-solid fa-file-lines',
  Folder: 'fa-solid fa-folder',
  FolderOpen: 'fa-solid fa-folder-open',
  // Actions
  Plus: 'fa-solid fa-plus',
  Minus: 'fa-solid fa-minus',
  Check: 'fa-solid fa-check',
  XMark: 'fa-solid fa-xmark',
  Trash: 'fa-solid fa-trash',
  Download: 'fa-solid fa-download',
  Upload: 'fa-solid fa-upload',
  Refresh: 'fa-solid fa-rotate-right',
  // Navigation
  Home: 'fa-solid fa-house',
  Menu: 'fa-solid fa-bars',
  ArrowLeft: 'fa-solid fa-arrow-left',
  ArrowRight: 'fa-solid fa-arrow-right',
  ArrowUp: 'fa-solid fa-arrow-up',
  ArrowDown: 'fa-solid fa-arrow-down',
  // Communication
  Phone: 'fa-solid fa-phone',
  Mobile: 'fa-solid fa-mobile-screen',
  Message: 'fa-solid fa-message',
  Bell: 'fa-solid fa-bell',
  // Date & Time
  Calendar: 'fa-solid fa-calendar',
  Clock: 'fa-solid fa-clock',
  // Misc
  Heart: 'fa-solid fa-heart',
  Star: 'fa-solid fa-star',
  Bookmark: 'fa-solid fa-bookmark',
  Settings: 'fa-solid fa-gear',
  Info: 'fa-solid fa-circle-info',
  Warning: 'fa-solid fa-triangle-exclamation',
} as const;

export type IconType = (typeof Icon)[keyof typeof Icon];