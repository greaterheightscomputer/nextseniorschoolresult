'use server';

import connectDB from '@/database/mongodb';
import Result from '@/models/resultModel';
import { revalidatePath } from 'next/cache';

connectDB();

// export async function getAllResults() {
//   try {
//     const results = await Result.find();
//     // console.log(results); //its return _id as an object like this
//     // _id: new ObjectId("64b69eb803120060eee2d69c"), to convert _id to string
//     const newResult = results.map((result) => ({
//       ...result._doc,
//       _id: result._doc._id.toString(), //its return _id as a string  id: '64b69f5603120060eee2d6a1'
//     }));
//     // const resultOutput = { ...newResult };
//     // return { results: resultOutput }; //store newResult onto results and you most call it as results in frontend
//     return { results: newResult }; //store newResult onto results and you most call it as results in frontend
//   } catch (error) {
//     throw new Error(error.message || 'Failed to fetch results!');
//   }
// }

// //fetch all document with search function
// export async function getAllResults(searchParams) {
//   // console.log('actionSearch: ', searchParams); //its return this { searchStId: 'S000007', searchSession: '2022/2023' }
//   const searchStId = searchParams.searchStId || '';
//   const searchSession = searchParams.searchSession || '';
//   const searchClass = searchParams.searchClass || '';
//   const sort = searchParams.sort || 'student_id';
//   // console.log(searchStId, searchSession);

//   try {
//     const results = await Result.find({
//       $or: [
//         {
//           student_id: { $regex: searchStId },
//           session: { $regex: searchSession },
//           classes: { $regex: searchClass },
//         },
//       ],
//     }).sort(sort);

//     const newResult = results.map((result) => ({
//       ...result._doc,
//       _id: result._doc._id.toString(),
//     }));

//     return { results: newResult };
//   } catch (error) {
//     throw new Error(error.message || 'Failed to fetch results!');
//   }
// }

//implement pagination
export async function getAllResults(searchParams) {
  const searchStId = searchParams.searchStId || '';
  const searchSession = searchParams.searchSession || '';
  const searchClass = searchParams.searchClass || '';
  const sort = searchParams.sort || 'student_id';

  const limit = searchParams.limit * 1 || 6; //display 10 row at a time
  const page = searchParams.page * 1 || 1;
  const skip = searchParams.skip * 1 || limit * (page - 1);

  try {
    const results = await Result.find({
      $or: [
        {
          student_id: { $regex: searchStId },
          session: { $regex: searchSession },
          classes: { $regex: searchClass },
        },
      ],
    })
      .sort(sort)
      .limit(limit)
      .skip(skip);

    // if (results) throw new Error('Result Error!'); //error handling

    const count = await Result.find({
      $or: [
        {
          student_id: { $regex: searchStId },
          session: { $regex: searchSession },
          classes: { $regex: searchClass },
        },
      ],
    }).count();
    // console.log(count);

    const totalPage = Math.ceil(count / limit);
    // console.log(totalPage);

    const newResult = results.map((result) => ({
      ...result._doc,
      _id: result._doc._id.toString(),
    }));

    return { results: newResult, count, totalPage };
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch results!');
  }
}

export async function getOneResult(resultId) {
  try {
    const result = await Result.findById(resultId);

    return { ...result._doc, _id: result._doc._id.toString() };
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch result!');
  }
}

export async function getResultWithMultipleFields(
  student_id,
  session,
  classes,
  term,
  class_abc
) {
  try {
    const resultFields = await Result.findOne({
      student_id,
      session,
      classes,
      term,
      class_abc,
    });

    // console.log('resultFields: ', resultFields);
    // console.log('resultFields: ', resultFields._doc._id.toString());
    return { ...resultFields._doc, _id: resultFields._id.toString() };
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch result!');
  }
}

export async function getPromotionalResult(student_id, session, classes) {
  try {
    const resultPromotional = await Result.find({
      student_id,
      session,
      classes,
    });

    // console.log(resultPromotional);

    // console.log('resultPromotional: ', resultPromotional._doc._id.toString());
    return { resultPromotional };
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch result!');
  }
}

export async function createTestOneScore(data) {
  // console.log(data);
  try {
    const newResult = new Result(data);
    // console.log('newResult: ', newResult);
    await newResult.save();

    revalidatePath('/'); //to render data immediately we insert it onto db
    // console.log('newResult._doc123:', newResult._doc); //_id: new ObjectId("64b69a8a03120060eee2d697")
    return { ...newResult._doc, _id: newResult._id.toString() }; //convert _id to string
  } catch (error) {
    throw new Error(error.message || 'Failed to create result!');
  }
}

export async function updateTestOneScore({
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
  id,
}) {
  try {
    const updatedResult = await Result.findByIdAndUpdate(
      id,
      {
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
      },
      { new: true }
    );
    // console.log('updatedResult: ', updatedResult._doc);

    revalidatePath('/');

    return { ...updatedResult._doc, _id: updatedResult._id.toString() };
  } catch (error) {
    throw new Error(error.message || 'Failed to update result!');
  }
}

export async function deleteResult(resultId) {
  try {
    const deleteResult = await Result.findByIdAndDelete(resultId, {
      new: true,
    });

    revalidatePath('/');

    return { ...deleteResult._doc, _id: deleteResult._id.toString() };
  } catch (error) {
    throw new Error(error.message || 'Failed to delete result!');
  }
}

export async function addPosition({
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
  id,
}) {
  // console.log({
  //   maths,
  //   eng,
  //   biology,
  //   chemistry,
  //   physic,
  //   f_maths,
  //   civic,
  //   eco,
  //   account,
  //   bk_keeping,
  //   fishries,
  //   commerce,
  //   govt,
  //   yoruba,
  //   eng_lit,
  //   history,
  //   geo,
  //   home_eco,
  //   agric,
  //   data_pro,
  //   id,
  // });

  try {
    const addPosition = await Result.findByIdAndUpdate(
      id,
      {
        $set: {
          position: {
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
          },
        },
      },
      { new: true }
    );
    console.log('addPosition: ', addPosition);

    revalidatePath('/');

    return { ...addPosition._doc, _id: addPosition._id.toString() };
  } catch (error) {
    throw new Error(error.message || 'Failed to test score!');
  }
}

export async function addScoreExam({
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
  id,
}) {
  try {
    const addExamScore = await Result.findByIdAndUpdate(
      id,
      {
        $set: {
          exam: {
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
          },
        },
      },
      { new: true }
    );
    // console.log('addTestScore: ', addTestScore);

    revalidatePath('/');

    return { ...addExamScore._doc, _id: addExamScore._id.toString() };
  } catch (error) {
    throw new Error(error.message || 'Failed to exam score!');
  }
}
