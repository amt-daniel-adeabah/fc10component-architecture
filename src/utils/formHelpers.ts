import { FormPage } from "../types/Types";

export const handleFormHomePagePhoto = (
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>
) => {
  return () => {
    formHomePage({
      registerPage: false,
      photoPage: false,
      interestPage: true,
      interestPick: false,
      interestSuccess: false
    });
  };
};

export const handleFormHomePageRegister = (
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>
) => {
  return () => {
    formHomePage({
      registerPage: false,
      photoPage: true,
      interestPage: false,
      interestPick: false,
      interestSuccess: false
    });
  };
};

export const handleFormHomePageInterest = (
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>
) => {
  return () => {
    formHomePage({
      registerPage: false,
      photoPage: false,
      interestPage: false,
      interestPick: true,
      interestSuccess: false
    });
  };
};

export const handleFormHomePageSuccess = (
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>
) => {
  return () => {
    formHomePage({
      registerPage: false,
      photoPage: false,
      interestPage: false,
      interestPick: false,
      interestSuccess: true
    });
  };
};

export const handleFormHomePageSuccessDone = (
  formHomePage: React.Dispatch<React.SetStateAction<FormPage>>
) => {
  return () => {
    formHomePage({
      registerPage: true,
      photoPage: false,
      interestPage: false,
      interestPick: false,
      interestSuccess: false
    });
  };
};
