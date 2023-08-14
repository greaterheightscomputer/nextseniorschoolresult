'use client';
import { getResultWithMultipleFields } from '@/actions/resultAction';
import ButtonSubmit from '@/components/ButtonSubmit';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

const TermlyResultPage = () => {
  const { data: session } = useSession();
  // console.log('termlyResult: ', { session });

  async function handleResultFields(formData) {
    const studenttId = formData.get('student_id');
    const session = formData.get('session');
    const classes = formData.get('class');
    const term = formData.get('term');
    const classABC = formData.get('class_abc');

    const studentID = await getResultWithMultipleFields(
      studenttId,
      session,
      classes,
      term,
      classABC
    );

    if (studentID) {
      redirect(`/result/resultTerm/${studentID._id}`);
    }
  }

  return (
    <form
      action={handleResultFields}
      className="py-32 sm:px-15 px-5  bg-slate-100 "
    >
      <div className="flex flex-wrap gap-x-8 gap-y-4 w-full">
        <input
          type="text"
          name="student_id"
          placeholder="Enter Student ID"
          className="px-3 py-2"
        />
        <input
          type="text"
          name="session"
          placeholder="Enter Session"
          className="px-3 py-2"
        />
        <input
          type="text"
          name="class"
          placeholder="Enter Class"
          className="px-3 py-2"
        />
        <input
          type="text"
          name="term"
          placeholder="Enter Term"
          className="px-3 py-2"
        />
        <input
          type="text"
          name="class_abc"
          placeholder="Enter Class ABC"
          className="px-3 py-2"
        />
      </div>
      <ButtonSubmit value="submit"></ButtonSubmit>
    </form>
  );
};

export default TermlyResultPage;
