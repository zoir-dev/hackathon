// schemas.ts
import * as z from 'zod';
import { EMAIL_REGEX, PHONE_REGEX, PWD_REGEX, USER_REGEX } from '@/utils/regexs';

// constants.ts
export const IMG_MAX_LIMIT = 3;
export const MIN_MAX_MESSAGE = 'Length must be between 3 and 255 characters';
export const END_DATE_AFTER_START_DATE_MESSAGE = 'End date must be after the start date';
const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

// Helper function to check if a date is valid
function isValidDate(date: any): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}

const commonStringSchema = z.string().min(3).max(255, { message: MIN_MAX_MESSAGE });

export const usersSchema = z.object({
  createdAt: z.date(),
  userId: commonStringSchema,
  status: commonStringSchema,
  address: commonStringSchema,
  fullName: commonStringSchema,
  gender: z.enum(['male', 'female']),
  role: z.enum(['employee', 'manager']),
  imgUrl: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  username: commonStringSchema.regex(USER_REGEX),
  phoneNumber: commonStringSchema.regex(PHONE_REGEX),
  email: commonStringSchema.email().regex(EMAIL_REGEX),
  position: z.enum(['developer', 'tester', 'comtor', 'hr', 'brse']),
  birthday: z.date().refine(data => isValidDate(data), { message: 'Please provide a valid birthday' }),
});

export const profileSchema = z.object({
  address: commonStringSchema,
  fullName: commonStringSchema,
  role: z.enum(['user', 'manager']),
  gender: z.enum(['male', 'female']),
  imgUrl: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  username: commonStringSchema.regex(USER_REGEX),
  password: commonStringSchema.regex(PWD_REGEX),
  phoneNumber: commonStringSchema.regex(PHONE_REGEX),
  email: commonStringSchema.email().regex(EMAIL_REGEX),
  position: z.enum(['developer', 'tester', 'comtor', 'hr', 'brse']),
  birthday: z.date().refine(data => isValidDate(data), { message: 'Please provide a valid birthday' }),
});

const commonFilterchema = z.object({
  dateFrom: z.date(),
  phone: commonStringSchema.regex(PHONE_REGEX),
  search: commonStringSchema,
  employeeName: commonStringSchema,
  employee: commonStringSchema,
  department: commonStringSchema,
  dateTo: z.date().refine((data) => data > new Date(), { message: END_DATE_AFTER_START_DATE_MESSAGE }),
});

const commonTaskSchema = z.object({
  startDate: z.date(),
  actualStartDate: z.date(),
  effort: commonStringSchema,
  subTask: commonStringSchema,
  workType: commonStringSchema,
  assignor: commonStringSchema,
  assignee: commonStringSchema,
  taskName: commonStringSchema,
  description: z.string().min(3).max(500, { message: MIN_MAX_MESSAGE }),
  status: z.enum(['not started', 'pending', 'processing']),
  category: z.enum(['low', 'medium', 'high', 'urgent']),
  dueDate: z.date().refine((data) => data > new Date(), { message: END_DATE_AFTER_START_DATE_MESSAGE }),
  actualEndDate: z.date().refine((data) => data > new Date(), { message: END_DATE_AFTER_START_DATE_MESSAGE }),
});

const commonIssuechema = z.object({
  fixDate: z.date(),
  reviewDate: z.date(),
  fixer: commonStringSchema,
  taskId: commonStringSchema,
  reviewer: commonStringSchema,
  assignee: commonStringSchema,
  issueName: commonStringSchema,
  projectId: commonStringSchema,
  reason: z.enum(['reasonIssue1', 'reasonIssue2', 'reasonIssue3']),
  contentBug: z.string().min(3).max(500, { message: MIN_MAX_MESSAGE }),
  contentFix: z.string().min(3).max(500, { message: MIN_MAX_MESSAGE }),
});

const commonContractSchema = z.object({
  signDay: z.date(),
  salary: commonStringSchema,
  contractName: commonStringSchema,
  contractNumber: commonStringSchema,
  staffType: z.enum(['parttime', 'fulltime']),
  contractType: z.enum(['probationary', 'offical']),
  paymentMethod: z.enum(['bank transfer', 'receive directly']),
  note: z.string().min(3).max(500, { message: MIN_MAX_MESSAGE }),
  contractPeriod: z.enum(['6 months', '1 year', '2 years', 'open-ended contract']),
});

const commonAbsenceSchema = z.object({
  offDay: z.date(),
  createdAt: z.date(),
  inForm: commonStringSchema,
  approver: commonStringSchema,
  requester: commonStringSchema,
  status: z.enum(['accept', 'reject', 'not status yet']),
  sessionOff: z.enum(['morning', 'afternoon', 'full day']),
  note: z.string().min(3).max(500, { message: MIN_MAX_MESSAGE }),
  reason: z.string().min(3).max(500, { message: MIN_MAX_MESSAGE }),
  dayOffType: z.enum(['sick leave', 'unpaid leave', 'maternity leave', 'wedding leave', 'paid leave', 'paternity leave', 'composionate leave']),
});

export const loginSchema = z.object({
  role: z.string(),
  gender: z.string(),
  imgUrl: z.string(),
  address: z.string(),
  fullName: z.string(),
  username: z.string(),
  birthday: z.string(),
  position: z.string(),
  phoneNumber: z.string(),
  password: commonStringSchema.regex(PWD_REGEX),
  email: commonStringSchema.email().regex(EMAIL_REGEX),
});

export const passwordSchema = z.object({
  newPassword: commonStringSchema.regex(PWD_REGEX),
  repeatPassword: commonStringSchema.regex(PWD_REGEX),
  currentPassword: commonStringSchema.regex(PWD_REGEX),
});

export const tasksSchema = commonTaskSchema;
export const issuesSchema = commonIssuechema;
export const absenceSchema = commonAbsenceSchema;
export const filterSchema = commonFilterchema;
export const contractSchema = commonContractSchema;

export type UsersFormTypes = z.infer<typeof usersSchema>;
export type TasksFormTypes = z.infer<typeof tasksSchema>;
export type LoginFormTypes = z.infer<typeof loginSchema>;
export type IssuesFormTypes = z.infer<typeof issuesSchema>;
export type AbsencesFormTypes = z.infer<typeof absenceSchema>;
export type PasswordFormTypes = z.infer<typeof passwordSchema>;
export type FilterFormTypes = z.infer<typeof filterSchema>;
export type ContractsFormTypes = z.infer<typeof contractSchema>;
