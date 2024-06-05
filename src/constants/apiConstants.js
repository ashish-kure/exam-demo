export const BASE_URL = "https://examination.onrender.com/";

// Methods
export const GET = "get";
export const POST = "post";
export const DELETE = "delete";
export const PUT = "put";

// Status codes
export const SUCCESS_CODE = 200;
export const SERVER_ERROR_CODE = 500;

// Endpoints
export const SIGN_UP_EP = "users/SignUp";
export const SIGN_IN_EP = "users/Login";
export const FORGOT_PASS_EP = "users/ForgotPassword";
export const NEW_PASS_EP = "users/ForgotPassword/Verify";
export const RESET_PASS_EP = "users/ResetPassword";

export const ALL_STUDENTS_EP = "dashboard/Teachers";
export const ALL_VERIFIED_STUDENTS_EP = "dashboard/Teachers/StudentForExam";
export const STUDENT_DETAIL_EP = "dashboard/Teachers/viewStudentDetail";
export const CREATE_EXAM_EP = "dashboard/Teachers/Exam";
export const VIEW_EXAM_EP = "dashboard/Teachers/viewExam";
export const VIEW_EXAM_DETAIL_EP = "dashboard/Teachers/examDetail";
export const EDIT_EXAM_EP = "dashboard/Teachers/editExam";
export const DELETE_EXAM_EP = "dashboard/Teachers/deleteExam";

export const ALL_EXAM_EP = "student/studentExam";
export const EXAM_PAPER_EP = "student/examPaper";
export const GIVE_EXAM_EP = "student/giveExam";
export const GET_PROFILE_EP = "student/getStudentDetail";
export const UPDATE_PROFILE_EP = "student/studentProfile";
