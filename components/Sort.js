'use client';
import useCustomRouter from '@/hooks/useCustomRouter';
import React from 'react';

const Sort = () => {
  const { pushQuery, query } = useCustomRouter();
  return (
    <div className="sm:flex-row flex-col">
      Sort{` `}
      <select
        value={
          query.sort ||
          'student_id' ||
          'student_name' ||
          'classes' ||
          'class_abc' ||
          'session' ||
          'createdAt'
        }
        onChange={(e) => pushQuery({ sort: e.target.value })}
        className="bg-slate-100 p-3 sm:max-w-fit w-full"
      >
        <option value="student_id">Student ID</option>
        <option value="student_name">Student Name</option>
        <option value="classes">Class</option>
        <option value="class_abc">Class ABC</option>
        <option value="session">Session</option>
        <option value="createdAt">Created Date</option>
      </select>
    </div>
  );
};

export default Sort;
