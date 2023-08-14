'use client';
import { addScoreExam } from '@/actions/resultAction';
import ButtonSubmit from '@/components/ButtonSubmit';
import { useMyContext } from '@/context/Provider';
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';

const ExamScore = () => {
  const formRef = useRef();
  const router = useRouter();
  const { editResult, setEditResult } = useMyContext();

  async function handleAction(data) {
    const maths = data.get('maths');
    const eng = data.get('eng');
    const biology = data.get('biology');
    const chemistry = data.get('chemistry');
    const physic = data.get('physic');
    const f_maths = data.get('f_maths');
    const civic = data.get('civic');
    const eco = data.get('eco');
    const account = data.get('account');
    const bk_keeping = data.get('bk_keeping');
    const fishries = data.get('fishries');
    const commerce = data.get('commerce');
    const govt = data.get('govt');
    const yoruba = data.get('yoruba');
    const eng_lit = data.get('eng_lit');
    const history = data.get('history');
    const geo = data.get('geo');
    const home_eco = data.get('home_eco');
    const agric = data.get('agric');
    const data_pro = data.get('data_pro');
    const no_in_class = data.get('no_in_class');
    const total_term_score = data.get('total_term_score');
    const position = data.get('position');
    const principal = data.get('principal');

    if (editResult) {
      await addScoreExam({
        maths,
        eng,
        biology,
        chemistry,
        physic,
        f_maths,
        civic,
        eco,
        account,
        bk_keeping,
        fishries,
        commerce,
        govt,
        yoruba,
        eng_lit,
        history,
        geo,
        home_eco,
        agric,
        data_pro,
        no_in_class,
        total_term_score,
        position,
        principal,
        id: editResult._id,
      });
    }

    // setEditResult();
    formRef.current.reset();
  }
  return (
    <div className="bg-slate-200 pt-32">
      <h1 className="sm:text-4xl text-2xl mb-5 text-center text-slate-800 font-bold">
        Senior Students Exam Score
      </h1>
      <form className="p-5" action={handleAction} ref={formRef}>
        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Student Id</label>
            <br />
            <input
              type="text"
              name="student_id"
              required
              defaultValue={editResult?.student_id}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Student Name</label>
            <br />
            <input
              type="text"
              name="student_name"
              required
              defaultValue={editResult?.student_name}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Session</label>
            <br />
            <input
              type="text"
              name="session"
              required
              defaultValue={editResult?.session}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Sex</label>
            <br />
            <input
              type="text"
              name="sex"
              required
              defaultValue={editResult?.sex}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Class</label>
            <br />
            <input
              type="text"
              name="classes"
              required
              defaultValue={editResult?.classes}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Term</label>
            <br />
            <input
              type="text"
              name="term"
              required
              defaultValue={editResult?.term}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Class ABC</label>
            <br />
            <input
              type="text"
              name="class_abc"
              required
              defaultValue={editResult?.class_abc}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Teacher Name</label>
            <br />
            <input
              type="text"
              name="teacher"
              required
              defaultValue={editResult?.teacher}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>
        {/*Subjects*/}
        <div className="border-b-2 border-slate-800 text-xl mb-5">Subjects</div>
        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Mathematics</label>
            <br />
            <input
              type="number"
              name="maths"
              required
              defaultValue={editResult?.exam?.maths}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">English Language</label>
            <br />
            <input
              type="number"
              name="eng"
              required
              defaultValue={editResult?.exam?.eng}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Biology</label>
            <br />
            <input
              type="number"
              name="biology"
              defaultValue={editResult?.exam?.biology}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Chemistry</label>
            <br />
            <input
              type="number"
              name="chemistry"
              defaultValue={editResult?.exam?.chemistry}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Physic</label>
            <br />
            <input
              type="number"
              name="physic"
              defaultValue={editResult?.exam?.physic}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Further Maths</label>
            <br />
            <input
              type="number"
              name="f_maths"
              defaultValue={editResult?.exam?.f_maths}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Civic Education</label>
            <br />
            <input
              type="number"
              name="civic"
              defaultValue={editResult?.exam?.civic}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Economics</label>
            <br />
            <input
              type="number"
              name="eco"
              defaultValue={editResult?.exam?.eco}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Account</label>
            <br />
            <input
              type="number"
              name="account"
              defaultValue={editResult?.exam?.account}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Book Keeping</label>
            <br />
            <input
              type="number"
              name="bk_keeping"
              defaultValue={editResult?.exam?.bk_keeping}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Fishries</label>
            <br />
            <input
              type="number"
              name="fishries"
              defaultValue={editResult?.exam?.fishries}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Commerce</label>
            <br />
            <input
              type="number"
              name="commerce"
              defaultValue={editResult?.exam?.commerce}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Government</label>
            <br />
            <input
              type="number"
              name="govt"
              defaultValue={editResult?.exam?.govt}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Yoruba Language</label>
            <br />
            <input
              type="number"
              name="yoruba"
              defaultValue={editResult?.exam?.yoruba}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">English Literature</label>
            <br />
            <input
              type="number"
              name="eng_lit"
              defaultValue={editResult?.exam?.eng_lit}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">History</label>
            <br />
            <input
              type="number"
              name="history"
              defaultValue={editResult?.exam?.history}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Geography</label>
            <br />
            <input
              type="number"
              name="geo"
              defaultValue={editResult?.exam?.geo}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>

          <div>
            <label className="text-xl">Home Economics</label>
            <br />
            <input
              type="number"
              name="home_eco"
              defaultValue={editResult?.exam?.home_eco}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Agricultural Science</label>
            <br />
            <input
              type="number"
              name="agric"
              defaultValue={editResult?.exam?.agric}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Data Processing</label>
            <br />
            <input
              type="number"
              name="data_pro"
              defaultValue={editResult?.exam?.data_pro}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>

        {/*Term Details*/}
        <div className="border-b-2 border-slate-800 text-xl mb-5">
          Term Details
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">No In Class</label>
            <br />
            <input
              type="number"
              name="no_in_class"
              defaultValue={editResult?.exam?.no_in_class}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Total Term Score</label>
            <br />
            <input
              type="number"
              name="total_term_score"
              defaultValue={editResult?.exam?.total_term_score}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Position</label>
            <br />
            <input
              type="text"
              name="position"
              defaultValue={editResult?.exam?.position}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Principal's Comments</label>
            <br />
            <input
              type="text"
              name="principal"
              defaultValue={editResult?.exam?.principal}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>

        {editResult && (
          <div className="flex flex-wrap">
            <ButtonSubmit value="Add Exam" />
            <button
              type="button"
              onClick={() => router.back()}
              //onClick={() => router.push('/')}
              className="bg-slate-800 text-white w-full sm:w-fit py-3 px-10 mt-2 text-xl 
               sm:text-left justify-center sm:mx-10 sm:mt-8"
            >
              Cancel
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ExamScore;
