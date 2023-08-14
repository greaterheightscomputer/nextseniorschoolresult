'use client';
import {
  createTestOneScore,
  getPromotionalResult,
  updateTestOneScore,
} from '@/actions/resultAction';
import React, { useRef } from 'react';
import ButtonSubmit from './ButtonSubmit';
import { useMyContext } from '@/context/Provider';
import Link from 'next/link';
import PromotionalResult from './PromotionalResult';

const ResultFormList = () => {
  const formRef = useRef();
  const { editResult, setEditResult } = useMyContext(); //coming from Provider component
  // console.log('editResult: ', editResult);
  async function handleAction(data) {
    // 'use server'; //print on the vscode terminat becos its use server
    // await getPromotionalResult('STU0000000002', '2021/2022', 'SS2', 'SS2A');

    const student_id = data.get('student_id');
    const student_name = data.get('student_name');
    const session = data.get('session');
    const sex = data.get('sex');
    const classes = data.get('classes');
    const term = data.get('term');
    const class_abc = data.get('class_abc');
    const teacher = data.get('teacher');
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

    if (editResult) {
      // console.log('editResult: ', editResult);
      // console.log({
      //   student_id,
      //   student_name,
      //   session,
      //   classes,
      //   term,
      //   class_abc,
      //   teacher,
      //   maths,
      //   eng,
      //   biology,
      //   chemistry,
      //   id: editResult._id,
      // });
      let promotion = await getPromotionalResult(student_id, session, classes);
      console.log(promotion);
      await updateTestOneScore({
        student_id,
        student_name,
        session,
        sex,
        classes,
        term,
        class_abc,
        teacher,
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
        // no_in_class,
        // total_term_score,
        // position,
        // principal,
        id: editResult._id,
      });
    } else {
      await createTestOneScore({
        student_id,
        student_name,
        session,
        sex,
        classes,
        term,
        class_abc,
        teacher,
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
        // no_in_class,
        // total_term_score,
        // position,
        // principal,
      });
    }

    setEditResult(); //clear the fields when updated existing record
    formRef.current.reset(); //clear the fields when insert new record
  }
  return (
    <div className="bg-slate-200 pt-32 pb-10 mb-5">
      <h1 className="sm:text-4xl text-2xl mb-5 text-center text-slate-800 font-bold">
        Senior Students Test Score
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
              defaultValue={editResult?.maths}
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
              defaultValue={editResult?.eng}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Biology</label>
            <br />
            <input
              type="number"
              name="biology"
              defaultValue={editResult?.biology}
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
              defaultValue={editResult?.chemistry}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Physic</label>
            <br />
            <input
              type="number"
              name="physic"
              defaultValue={editResult?.physic}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Further Maths</label>
            <br />
            <input
              type="number"
              name="f_maths"
              defaultValue={editResult?.f_maths}
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
              defaultValue={editResult?.civic}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Economics</label>
            <br />
            <input
              type="number"
              name="eco"
              defaultValue={editResult?.eco}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Account</label>
            <br />
            <input
              type="number"
              name="account"
              defaultValue={editResult?.account}
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
              defaultValue={editResult?.bk_keeping}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Fishries</label>
            <br />
            <input
              type="number"
              name="fishries"
              defaultValue={editResult?.fishries}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Commerce</label>
            <br />
            <input
              type="number"
              name="commerce"
              defaultValue={editResult?.commerce}
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
              defaultValue={editResult?.govt}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Yoruba Language</label>
            <br />
            <input
              type="number"
              name="yoruba"
              defaultValue={editResult?.yoruba}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">English Literature</label>
            <br />
            <input
              type="number"
              name="eng_lit"
              defaultValue={editResult?.eng_lit}
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
              defaultValue={editResult?.history}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Geography</label>
            <br />
            <input
              type="number"
              name="geo"
              defaultValue={editResult?.geo}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>

          <div>
            <label className="text-xl">Home Economics</label>
            <br />
            <input
              type="number"
              name="home_eco"
              defaultValue={editResult?.home_eco}
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
              defaultValue={editResult?.agric}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Data Processing</label>
            <br />
            <input
              type="number"
              name="data_pro"
              defaultValue={editResult?.data_pro}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>

        {editResult ? (
          <div className="flex flex-wrap">
            <ButtonSubmit value="Update Test" />

            <Link
              href={`/listResults/examScore/${editResult._id}`}
              className="bg-slate-800 text-white w-full sm:w-fit py-3 px-10 mt-2 text-xl 
              sm:text-left text-center justify-center sm:mx-10 sm:mt-8"
            >
              Add Exam Score
            </Link>

            <Link
              href={`/listResults/${editResult._id}`}
              className="bg-slate-800 text-white w-full sm:w-fit py-3 px-10 mt-2 text-xl 
              sm:text-left text-center justify-center sm:mx-10 sm:mt-8"
            >
              Add Position
            </Link>

            <button
              type="button"
              onClick={() => setEditResult()}
              className="bg-slate-800 text-white w-full sm:w-fit py-3 px-10 mt-2 text-xl 
            sm:text-left text-center justify-center sm:mx-10 sm:mt-8"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <ButtonSubmit value="Create" />
          </div>
        )}
      </form>
    </div>
  );
};

export default ResultFormList;
