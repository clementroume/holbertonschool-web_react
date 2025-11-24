import React from 'react';
import { screen } from '@testing-library/react';
import CourseList from './CourseList';
import { renderWithProviders } from '../../utils/test-utils';

describe('CourseList Component', () => {
  test('renders courses from store', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
    ];
    renderWithProviders(<CourseList />, {
      preloadedState: { courses: { courses } },
    });

    expect(screen.getByText('ES6')).toBeInTheDocument();
    expect(screen.getByText('Webpack')).toBeInTheDocument();
  });
});
