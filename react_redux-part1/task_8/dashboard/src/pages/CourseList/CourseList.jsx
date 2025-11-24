import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CourseListRow from './CourseListRow/CourseListRow';
import { selectCourse } from '../../features/courses/coursesSlice';
import './CourseList.css';

function CourseList() {
  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();

  const onChangeRow = (id, checked) => {
    dispatch(selectCourse(id));
  };

  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {courses.length === 0 ? (
          <CourseListRow
            textFirstCell="No course available yet"
            isHeader={false}
          />
        ) : (
          courses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isHeader={false}
              isChecked={course.isSelected}
              onChangeRow={(checked) => onChangeRow(course.id, checked)}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

export default CourseList;
