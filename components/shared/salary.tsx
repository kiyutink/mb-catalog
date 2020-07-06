import React, { Fragment } from "react";

interface SalaryProps {
  salaryMin: number;
  salaryMax: number;
}

export const Salary: React.FC<SalaryProps> = ({ salaryMin, salaryMax }) => {
  let salary = "";

  if (salaryMin > 0 && salaryMax > 0 && salaryMax >= salaryMin) {
    salary = `${salaryMin / 1000} - ${salaryMax / 1000}K €`;
  }

  if (salaryMax > 0 && salaryMin === 0) {
    salary = `${salaryMax / 1000}K €`;
  }

  if (salaryMin > 0 && salaryMax === 0) {
    salary = `${salaryMin / 1000}K €`;
  }

  return <Fragment>{salary}</Fragment>;
};
